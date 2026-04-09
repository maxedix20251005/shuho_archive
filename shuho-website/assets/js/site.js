const menuButton = document.querySelector('.menu-button');
const globalNav = document.querySelector('#global-nav');

if (menuButton && globalNav) {
  menuButton.addEventListener('click', () => {
    const isOpen = globalNav.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
}

const enquiryForm = document.querySelector('#enquiry-form');
const formError = document.querySelector('#form-error');
const formSuccess = document.querySelector('#form-success');

const ENQUIRY_RATE_KEY = 'shuho_enquiry_rate_v1';
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_COUNT = 3;
const MIN_SUBMIT_SECONDS = 3;
const SUBMIT_TIMEOUT_MS = 15000;
const SUBMIT_WATCHDOG_MS = 20000;
const formLoadedAt = Date.now();

function getRateState() {
  try {
    const raw = localStorage.getItem(ENQUIRY_RATE_KEY);
    if (!raw) {
      return [];
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return [];
    }
    return parsed.filter((ts) => Number.isFinite(ts));
  } catch (error) {
    return [];
  }
}

function saveRateState(entries) {
  try {
    localStorage.setItem(ENQUIRY_RATE_KEY, JSON.stringify(entries));
  } catch (error) {
    // Ignore storage errors.
  }
}

function checkRateLimit() {
  const now = Date.now();
  const recent = getRateState().filter((ts) => now - ts <= RATE_LIMIT_WINDOW_MS);
  saveRateState(recent);
  return recent.length >= RATE_LIMIT_MAX_COUNT;
}

function markSubmitted() {
  const now = Date.now();
  const recent = getRateState().filter((ts) => now - ts <= RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  saveRateState(recent);
}

function showSuccessState() {
  if (enquiryForm) {
    enquiryForm.hidden = true;
  }
  if (formSuccess) {
    formSuccess.hidden = false;
  }
}

function withTimeout(promise, timeoutMs) {
  return Promise.race([
    promise,
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({ ok: false, error: `Submit timeout (${timeoutMs}ms)` });
      }, timeoutMs);
    }),
  ]);
}

async function submitEnquiry(payload) {
  try {
    const supabaseModule = await import('./supabase-client.js');
    const initFn = typeof supabaseModule.initSupabase === 'function' ? supabaseModule.initSupabase : null;
    const client = initFn ? await initFn() : null;
    if (!client) {
      return { ok: true, mode: 'local-fallback' };
    }

    const submitFn = typeof supabaseModule.createEnquiry === 'function' ? supabaseModule.createEnquiry : null;
    if (!submitFn) {
      return { ok: false, error: 'Enquiry API is not available.' };
    }

    const result = await withTimeout(submitFn(client, payload), SUBMIT_TIMEOUT_MS);
    if (!result.ok) {
      return { ok: false, error: result.error || 'Unknown API error' };
    }
    return { ok: true, mode: 'supabase' };
  } catch (error) {
    console.warn('Enquiry submit fallback mode:', error);
    return { ok: true, mode: 'local-fallback' };
  }
}

if (enquiryForm) {
  enquiryForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (formError) {
      formError.textContent = '';
    }

    const submitButton = enquiryForm.querySelector('button[type="submit"]');
    let submitWatchdogId = null;

    try {
      const honeypotNode = enquiryForm.querySelector('#website');
      const honeypotValue = honeypotNode && honeypotNode.value ? honeypotNode.value.trim() : '';
      if (honeypotValue) {
        showSuccessState();
        return;
      }

      const elapsedSeconds = (Date.now() - formLoadedAt) / 1000;
      if (elapsedSeconds < MIN_SUBMIT_SECONDS) {
        if (formError) {
          formError.textContent = '短時間での送信はできません。数秒後に再度お試しください。';
        }
        return;
      }

      if (checkRateLimit()) {
        if (formError) {
          formError.textContent = '短時間での送信回数が上限に達しました。時間をおいて再度お試しください。';
        }
        return;
      }

      if (!enquiryForm.checkValidity()) {
        if (formError) {
          formError.textContent = '未入力または入力形式に誤りがあります。必須項目をご確認ください。';
        }
        enquiryForm.reportValidity();
        return;
      }

      const privacyNode = enquiryForm.querySelector('#privacy_agreed');
      const privacyChecked = !!(privacyNode && privacyNode.checked);
      if (!privacyChecked) {
        if (formError) {
          formError.textContent = 'プライバシーポリシーへの同意が必要です。';
        }
        return;
      }

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = '送信中...';
        submitWatchdogId = setTimeout(() => {
          if (!enquiryForm.hidden) {
            submitButton.disabled = false;
            submitButton.textContent = '送信する';
            if (formError && !formError.textContent) {
              formError.textContent = '送信がタイムアウトしました。時間をおいて再度お試しください。';
            }
          }
        }, SUBMIT_WATCHDOG_MS);
      }

      const nameNode = enquiryForm.querySelector('#name');
      const emailNode = enquiryForm.querySelector('#email');
      const phoneNode = enquiryForm.querySelector('#phone');
      const typeNode = enquiryForm.querySelector('#enquiry_type');
      const messageNode = enquiryForm.querySelector('#message');

      const payload = {
        name: nameNode && nameNode.value ? nameNode.value.trim() : '',
        email: emailNode && emailNode.value ? emailNode.value.trim() : '',
        phone: phoneNode && phoneNode.value ? phoneNode.value.trim() : null,
        enquiry_type: typeNode && typeNode.value ? typeNode.value : '',
        message: messageNode && messageNode.value ? messageNode.value.trim() : '',
        privacy_agreed: true,
        source_page: '/contact.html',
        status: 'new',
      };

      const submitResult = await submitEnquiry(payload);
      if (!submitResult.ok) {
        if (formError) {
          formError.textContent = '送信に失敗しました。時間をおいて再度お試しください。';
        }
        return;
      }

      markSubmitted();
      showSuccessState();
    } catch (error) {
      if (formError) {
        formError.textContent = '送信処理でエラーが発生しました。時間をおいて再度お試しください。';
      }
      console.error('Enquiry submit handler error:', error);
    } finally {
      if (submitWatchdogId) {
        clearTimeout(submitWatchdogId);
      }
      if (submitButton && !enquiryForm.hidden) {
        submitButton.disabled = false;
        submitButton.textContent = '送信する';
      }
    }
  });
}

const filterButtons = document.querySelectorAll('.chip-btn');
const portfolioItems = document.querySelectorAll('.portfolio-card');
const portfolioCount = document.querySelector('#portfolio-count');

if (filterButtons.length > 0 && portfolioItems.length > 0) {
  const updatePortfolio = (filter) => {
    let visible = 0;
    portfolioItems.forEach((item) => {
      const category = item.dataset.category;
      const show = filter === 'all' || category === filter;
      item.hidden = !show;
      if (show) {
        visible += 1;
      }
    });

    if (portfolioCount) {
      portfolioCount.textContent = `表示件数: ${visible}件`;
    }
  };

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      filterButtons.forEach((btn) => btn.classList.remove('is-active'));
      button.classList.add('is-active');
      updatePortfolio(button.dataset.filter || 'all');
    });
  });

  updatePortfolio('all');
}
