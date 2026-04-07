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

async function submitEnquiry(payload) {
  try {
    const supabaseModule = await import('./supabase-client.js');
    const client = supabaseModule.initSupabase?.();
    if (!client) {
      return { ok: true, mode: 'local-fallback' };
    }
    const result = await supabaseModule.createEnquiry(client, payload);
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

    if (!enquiryForm.checkValidity()) {
      if (formError) {
        formError.textContent = '未入力または入力形式に誤りがあります。必須項目をご確認ください。';
      }
      enquiryForm.reportValidity();
      return;
    }

    const privacyChecked = enquiryForm.querySelector('#privacy_agreed')?.checked;
    if (!privacyChecked) {
      if (formError) {
        formError.textContent = 'プライバシーポリシーへの同意が必要です。';
      }
      return;
    }

    const submitButton = enquiryForm.querySelector('button[type="submit"]');
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = '送信中...';
    }

    const payload = {
      name: enquiryForm.querySelector('#name')?.value?.trim() || '',
      email: enquiryForm.querySelector('#email')?.value?.trim() || '',
      phone: enquiryForm.querySelector('#phone')?.value?.trim() || null,
      enquiry_type: enquiryForm.querySelector('#enquiry_type')?.value || '',
      message: enquiryForm.querySelector('#message')?.value?.trim() || '',
      privacy_agreed: true,
      source_page: '/contact.html',
      status: 'new',
    };

    const submitResult = await submitEnquiry(payload);
    if (!submitResult.ok) {
      if (formError) {
        formError.textContent = '送信に失敗しました。時間をおいて再度お試しください。';
      }
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = '送信する';
      }
      return;
    }

    enquiryForm.hidden = true;
    if (formSuccess) {
      formSuccess.hidden = false;
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
