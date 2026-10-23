/* =========================================================================
 * 家族宗谱 · 配置层（与 family-members.js 配合）
 * -------------------------------------------------------------------------
 * 本文件只放「配置」：姓氏、三位主理人、申请表单链接。
 * 「人物数据」在 family-members.js（由 tools/convert-gedcom.js 从 GEDCOM 生成）。
 *
 * 改真实家族时：只改 GEDCOM → 跑 node tools/convert-gedcom.js → 自动更新 family-members.js，
 * 界面代码完全不用动。
 * ========================================================================= */
const FAMILY_CONFIG = {
  surname: "蔡",                                   // 姓氏（标题/印章用）
  selfId: "I500001",                               // 「我」在族谱中的 ID（五服图默认以此人为中心）
  managers: [                                      // 三位主理人（共同维护、审核申请）
    { n: "主理人·琦冬 蔡", r: "创建人", k: "👑" },
    { n: "主理人·（待补充）", r: "二房代表", k: "🧑‍💼" },
    { n: "主理人·（待补充）", r: "晚辈代表", k: "🧑‍🎓" }
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
