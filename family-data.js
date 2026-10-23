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
  managers: [                                      // 三位主理人（共同维护、审核申请）
    { n: "主理人·琦冬 蔡", r: "创建人", k: "👑" },
    { n: "主理人·（待补充）", r: "二房代表", k: "🧑‍💼" },
    { n: "主理人·（待补充）", r: "晚辈代表", k: "🧑‍🎓" }
  ],
  formUrl: "https://forms.example.com/your-family" // 申请修改表单（换成你的腾讯问卷/腾讯文档链接）
};

const DATA = {
  surname: FAMILY_CONFIG.surname,
  managers: FAMILY_CONFIG.managers,
  formUrl: FAMILY_CONFIG.formUrl,
  members: FAMILY_MEMBERS
};
