# PROJECT GOVERNANCE AND RULE / 繝励Ο繧ｸ繧ｧ繧ｯ繝磯°逕ｨ繧ｬ繝舌リ繝ｳ繧ｹ

## 0. How To Use / 菴ｿ縺・婿
- Project: `shuho-srchive`
- Owner: `Project Owner`
- Effective Date: `2026-04-06`
- This document is the project-specific governance baseline.
- 螳溯｣・・險ｭ險医・譁・嶌譖ｴ譁ｰ縺ｯ蜷後§繧ｿ繧ｹ繧ｯ縺ｧ螳御ｺ・☆繧九・
## 0-1. Basic Information / 蝓ｺ譛ｬ諠・ｱ
- Site domain: shodo school website (Shinagawa, Tokyo).
- 蟇ｾ雎｡繧ｵ繧､繝医・譚ｱ莠ｬ驛ｽ蜩∝ｷ晏玄縺ｮ譖ｸ驕灘｡ｾ繧ｵ繧､繝医・- Documentation roots:
  - `docs/`
  - `project-docs/`

## 1. Purpose / 逶ｮ逧・- Standardize workflow, governance rules, and documentation quality.
- 繝ｯ繝ｼ繧ｯ繝輔Ο繝ｼ縲・°逕ｨ繝ｫ繝ｼ繝ｫ縲∵枚譖ｸ蜩∬ｳｪ繧呈ｨ呎ｺ門喧縺吶ｋ縲・- Keep the project restartable with current status, issue, WIP, and test records.
- 繧ｹ繝・・繧ｿ繧ｹ繝ｻ隱ｲ鬘後・WIP繝ｻ繝・せ繝郁ｨ倬鹸繧呈怙譁ｰ縺ｫ菫昴■縲∝・髢句庄閭ｽ諤ｧ繧堤ｶｭ謖√☆繧九・
## 2. Core Principles / 蝓ｺ譛ｬ蜴溷援
- Keep one clear source of truth per topic.
- 隲也せ縺斐→縺ｫ蜊倅ｸ縺ｮ豁｣譛ｬ繧堤ｶｭ謖√☆繧九・- Separate facts, decisions, and assumptions.
- 莠句ｮ溘∵ｱｺ螳壻ｺ矩・∽ｻｮ螳壹ｒ蛻・屬縺吶ｋ縲・- Record rationale when making directional changes.
- 譁ｹ驥晏､画峩譎ゅ・蛻､譁ｭ逅・罰繧定ｨ倬鹸縺吶ｋ縲・
## 3. Encoding And Language Quality / 譁・ｭ励さ繝ｼ繝峨→險隱槫刀雉ｪ
- All markdown documents use UTF-8.
- 縺吶∋縺ｦ縺ｮ markdown 譁・嶌縺ｯ UTF-8 繧剃ｽｿ逕ｨ縺吶ｋ縲・- `project-docs/*` must remain bilingual in English and Japanese.
- `project-docs/*` 縺ｯ闍ｱ隱槭→譌･譛ｬ隱槭・譌･闍ｱ菴ｵ險倥ｒ邯ｭ謖√☆繧九・- `docs/*` can be maintained in Japanese-only when appropriate.
- `docs/*` 縺ｯ蠢・ｦ√↓蠢懊§縺ｦ譌･譛ｬ隱槭・縺ｿ縺ｧ驕狗畑蜿ｯ閭ｽ縺ｨ縺吶ｋ縲・- Verify no mojibake after Japanese updates.
- 譌･譛ｬ隱樊峩譁ｰ蠕後・譁・ｭ怜喧縺代′縺ｪ縺・％縺ｨ繧堤｢ｺ隱阪☆繧九・
## 4. Standard Document Set / 讓呎ｺ悶ラ繧ｭ繝･繝｡繝ｳ繝・- `project-docs/10_PROJECT/PROJECT_STATUS.md`
- `project-docs/90_WIP/WIP.md`
- `project-docs/10_PROJECT/ISSUE_LIST.md`
- `project-docs/30_TECH/TECH_SPEC.md`
- `project-docs/20_DESIGN/DESIGN_GUIDELINE.md`
- `project-docs/60_TEST/TEST_PLAN.md`
- `project-docs/00_GOVERNANCE/DOCUMENT_CATALOG.md`
- `project-docs/00_GOVERNANCE/CHECKLIST.md`
- `project-docs/00_GOVERNANCE/PROJECT_GOVERNANCE_GUIDELINE_FORMAL.md`

## 5. Operating Rules / 驕狗畑繝ｫ繝ｼ繝ｫ
1. Confirm design direction and scope before major edits.
1. 螟ｧ縺阪↑螟画峩蜑阪↓繝・じ繧､繝ｳ譁ｹ驥昴→蠖ｱ髻ｿ遽・峇繧堤｢ｺ隱阪☆繧九・2. Validate changes and record results.
2. 螟画峩繧呈､懆ｨｼ縺励∫ｵ先棡繧定ｨ倬鹸縺吶ｋ縲・3. For each implementation/document change, update `PROJECT_STATUS.md` and at least one related document.
3. 螟画峩縺斐→縺ｫ `PROJECT_STATUS.md` 縺ｨ髢｢騾｣譁・嶌繧呈怙菴・莉ｶ譖ｴ譁ｰ縺吶ｋ縲・4. On issue status changes, update `ISSUE_LIST.md`.
4. 隱ｲ鬘檎憾諷九′螟峨ｏ縺｣縺溘ｉ `ISSUE_LIST.md` 繧呈峩譁ｰ縺吶ｋ縲・5. On test scope/result changes, update `TEST_PLAN.md`.
5. 繝・せ繝育ｯ・峇繧・ｵ先棡縺悟､峨ｏ縺｣縺溘ｉ `TEST_PLAN.md` 繧呈峩譁ｰ縺吶ｋ縲・6. Update `DOCUMENT_CATALOG.md` in the same task when files are added/deleted/moved/renamed.
6. 霑ｽ蜉繝ｻ蜑企勁繝ｻ遘ｻ蜍輔・繝ｪ繝阪・繝譎ゅ・蜷御ｸ繧ｿ繧ｹ繧ｯ縺ｧ `DOCUMENT_CATALOG.md` 繧呈峩譁ｰ縺吶ｋ縲・7. Check `CHECKLIST.md` before closing the task.
7. 繧ｿ繧ｹ繧ｯ螳御ｺ・燕縺ｫ `CHECKLIST.md` 繧堤｢ｺ隱阪☆繧九・
## 6. Change Control / 螟画峩邨ｱ蛻ｶ
- High-risk changes require prior approval: public navigation, personal-data handling policy, legal copy.
- 鬮倥Μ繧ｹ繧ｯ螟画峩・亥・髢句ｰ守ｷ壹∝倶ｺｺ諠・ｱ譁ｹ驥昴∵ｳ募漁譁・ｨ・峨・莠句燕謇ｿ隱阪ｒ隕√☆繧九・- Define rollback steps before high-impact content or structure changes.
- 蠖ｱ髻ｿ縺ｮ螟ｧ縺阪＞螟画峩蜑阪↓繝ｭ繝ｼ繝ｫ繝舌ャ繧ｯ謇矩・ｒ螳夂ｾｩ縺吶ｋ縲・
## 7. Roles (RACI Lite) / 蠖ｹ蜑ｲ
- Responsible: implementer updates documents and implementation outputs.
- Responsible: 螳溯｣・球蠖薙′譁・嶌縺ｨ謌先棡迚ｩ繧呈峩譁ｰ縺吶ｋ縲・- Accountable: project owner approves directional decisions.
- Accountable: Project Owner 縺梧婿驥晏愛譁ｭ繧呈価隱阪☆繧九・- Consulted: domain/design reviewers validate content quality.
- Consulted: 繝峨Γ繧､繝ｳ/繝・じ繧､繝ｳ繝ｬ繝薙Η繝ｼ諡・ｽ薙′蜩∬ｳｪ繧堤｢ｺ隱阪☆繧九・- Informed: stakeholders receive updates on status and issues.
- Informed: 髢｢菫り・↓騾ｲ謐励→隱ｲ鬘後・譖ｴ譁ｰ繧貞・譛峨☆繧九・
## 8. Update Log / 譖ｴ譁ｰ螻･豁ｴ
- 2026-04-06: Re-baselined governance document to remove unrelated legacy project references.
- 2026-04-06: 譌ｧ譯井ｻｶ逕ｱ譚･縺ｮ蜿ら・繧帝勁蜴ｻ縺励∫樟譯井ｻｶ蜷代￠繧ｬ繝舌リ繝ｳ繧ｹ蝓ｺ貅悶∈蜀肴紛逅・＠縺溘・
