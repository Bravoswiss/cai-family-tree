/* =========================================================================
 * 家族宗谱 · 配置层（与 family-members.js 配合）
 * -------------------------------------------------------------------------
 * 本文件只放「配置」：姓氏、维护人、申请表单（Formspree）端点。
 * 「人物数据」在 family-members.js（由 tools/convert-gedcom.js 从 GEDCOM 生成）。
 *
 * 改真实家族时：只改 GEDCOM → 跑 node tools/convert-gedcom.js → 自动更新 family-members.js，
 * 界面代码完全不用动。
 * ========================================================================= */
const FAMILY_CONFIG = {
  surname: "蔡",                                   // 姓氏（标题/印章用）
  selfId: "I500001",                               // 「我」在族谱中的 ID（五服图默认以此人为中心）
  /* 维护人：只填实际负责改谱的人（目前一人审核、一人发布）。
     以后若要加第二位审核人，在这里照格式加一行即可，弹窗会自动多出一张卡片。 */
  managers: [
    { n: "维护人·琦冬 蔡", r: "建谱人 · 审核与发布", k: "👑" }
  ],
  /* 申请修改：站内表单直投 Formspree（免费版 50 条/月，无需国内手机号）。
     拿到端点后把下面换成 https://formspree.io/f/xxxxxxxx 即可；
     留空时站点自动降级为「生成申请文本并复制」，家人贴到家庭群也能用。 */
  formEndpoint: "",
  /* 备用：若另有外部问卷/表单，填这里，弹窗会多一个「去外部表单填写」按钮 */
  formUrl: ""
};

const DATA = {
  surname: FAMILY_CONFIG.surname,
  selfId: FAMILY_CONFIG.selfId,
  managers: FAMILY_CONFIG.managers,
  formEndpoint: FAMILY_CONFIG.formEndpoint,
  formUrl: FAMILY_CONFIG.formUrl,
  members: FAMILY_MEMBERS
};
