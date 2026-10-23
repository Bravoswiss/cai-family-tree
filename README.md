# 蔡氏宗谱

蔡氏家族族谱在线版。**树状 / 吊线 / 五服** 三视图，支持人物钻取、中文亲属称谓推导、按世代与按居住地搜索。

在线访问：https://bravoswiss.github.io/cai-family-tree/

## 说明

- 纯静态站点，无后端、无依赖，数据以 JS 文件随页面加载。
- `index.html` — 站点入口（与 `family-tree-prototype.html` 内容一致）。
- `family-members.js` — 人物数据（由 GEDCOM 转换生成）。
- `family-data.js` — 站点配置（家族名称、主理人、申请入口等）。
- 页面已设置 `noindex`，不会被搜索引擎收录；数据仅精确到城市，不含门牌与联系方式。

## 本地预览

```bash
python3 -m http.server 8080
# 打开 http://127.0.0.1:8080/index.html
```

## 更新内容

修改申请经三位主理人审核后合并，重新生成 `family-members.js` 并推送即自动上线。
