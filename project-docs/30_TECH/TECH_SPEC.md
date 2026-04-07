# TECH SPEC / 謚陦謎ｻ墓ｧ俶ｭ｣譛ｬ

## 1. Purpose / 逶ｮ逧・- Define the technical baseline for the shodo school website launch project.
- 譖ｸ驕灘｡ｾ繧ｵ繧､繝育ｫ九■荳翫￡繝励Ο繧ｸ繧ｧ繧ｯ繝医・謚陦灘渕貅悶ｒ螳夂ｾｩ縺吶ｋ縲・
## 2. Current Phase / 迴ｾ蝨ｨ繝輔ぉ繝ｼ繧ｺ
- Current scope is planning and requirements definition.
- 迴ｾ蝨ｨ縺ｮ蟇ｾ雎｡縺ｯ莨∫判繝ｻ隕∽ｻｶ螳夂ｾｩ縺ｧ縺ゅｋ縲・- Implementation details are provisional and must be finalized before development starts.
- 螳溯｣・ｩｳ邏ｰ縺ｯ證ｫ螳壹〒縺ゅｊ縲・幕逋ｺ逹謇句燕縺ｫ遒ｺ螳壹☆繧九・
## 3. Delivery Scope / 謌先棡迚ｩ遽・峇
- Public website planning/specification documents under `docs/`.
- `docs/` 驟堺ｸ九・蜈ｬ髢九し繧､繝井ｼ∫判繝ｻ莉墓ｧ俶枚譖ｸ縲・- Governance and project control documents under `project-docs/`.
- `project-docs/` 驟堺ｸ九・繧ｬ繝舌リ繝ｳ繧ｹ繝ｻ繝励Ο繧ｸ繧ｧ繧ｯ繝育ｮ｡逅・枚譖ｸ縲・
## 4. Technical Baseline (Provisional) / 謚陦捺婿驥晢ｼ域圻螳夲ｼ・- Frontend: static HTML/CSS/JavaScript.
- 繝輔Ο繝ｳ繝医お繝ｳ繝峨・髱咏噪 HTML/CSS/JavaScript 繧貞渕譛ｬ縺ｨ縺吶ｋ縲・- Responsive support: mobile-first, then tablet/desktop optimization.
- 蟇ｾ蠢懈婿驥昴・ mobile-first 繧貞渕譛ｬ縺ｨ縺励√ち繝悶Ξ繝・ヨ/PC繧呈怙驕ｩ蛹悶☆繧九・- Analytics: event tracking for CTA and form conversion metrics.
- 險域ｸｬ縺ｯCTA縺ｨ繝輔か繝ｼ繝CV繧剃ｸｭ蠢・↓繧､繝吶Φ繝郁ｨ域ｸｬ繧定｡後≧縲・- Form handling and backend integration are TBD in implementation planning.
- 繝輔か繝ｼ繝騾∽ｿ｡蜃ｦ逅・→繝舌ャ繧ｯ繧ｨ繝ｳ繝蛾｣謳ｺ縺ｯ螳溯｣・ｨｭ險医〒遒ｺ螳壹☆繧九・
## 5. Information Architecture Baseline / 諠・ｱ險ｭ險亥渕貅・- Primary references:
- 荳ｻ隕∝盾辣ｧ:
  - `docs/01-proposal.html`
  - `docs/04-sitemap.html`
  - `docs/05-wireframe.html`
  - `docs/07-specification.html`
- Any structural change must be synchronized across the above files.
- 讒矩螟画峩譎ゅ・荳願ｨ倥ヵ繧｡繧､繝ｫ髢薙〒蜷梧凾謨ｴ蜷医☆繧九・
## 6. Non-functional Baseline / 髱樊ｩ溯・蝓ｺ貅・- UTF-8 encoding is mandatory for all project documents.
- 蜈ｨ譁・嶌縺ｧ UTF-8 繧貞ｿ・医→縺吶ｋ縲・- Updated Japanese content must be checked for mojibake.
- 譌･譛ｬ隱樊峩譁ｰ譎ゅ・譁・ｭ怜喧縺醍｢ｺ隱阪ｒ蠢・医→縺吶ｋ縲・- Documentation changes require same-task updates in status and issue tracking documents.
- 譁・嶌螟画峩譎ゅ・蜷御ｸ繧ｿ繧ｹ繧ｯ縺ｧ繧ｹ繝・・繧ｿ繧ｹ譁・嶌縺ｨ隱ｲ鬘悟床蟶ｳ繧呈峩譁ｰ縺吶ｋ縲・
## 7. Security & Privacy Baseline / 繧ｻ繧ｭ繝･繝ｪ繝・ぅ繝ｻ繝励Λ繧､繝舌す繝ｼ蝓ｺ貅・- Define personal data handling policy before enabling enquiry forms in production.
- 蝠上＞蜷医ｏ縺帙・菴馴ｨ鍋筏霎ｼ繝輔か繝ｼ繝繧呈悽逡ｪ驕狗畑縺吶ｋ蜑阪↓蛟倶ｺｺ諠・ｱ蜿匁桶譁ｹ驥昴ｒ遒ｺ螳壹☆繧九・- Use encrypted transport (HTTPS) for all public pages and form submissions.
- 蜈ｬ髢九・繝ｼ繧ｸ縺ｨ繝輔か繝ｼ繝騾∽ｿ｡縺ｯ HTTPS 繧貞燕謠舌→縺吶ｋ縲・
## 8. Open Decisions / 譛ｪ遒ｺ螳壻ｺ矩・- Final hosting and deployment pipeline.
- 譛邨ゅ・繧ｹ繝・ぅ繝ｳ繧ｰ縺ｨ繝・・繝ｭ繧､謇矩・・- Form backend architecture and notification channel.
- 繝輔か繝ｼ繝縺ｮ繝舌ャ繧ｯ繧ｨ繝ｳ繝画ｧ区・縺ｨ騾夂衍繝√Ε繝阪Ν縲・- Operational CMS necessity and scope.
- CMS驕狗畑隕∝凄縺ｨ遽・峇縲・
