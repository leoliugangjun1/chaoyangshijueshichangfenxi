# IPD 视觉市场分析看板 V2.0

本地 React + TypeScript + Vite 工具。导入 `ipd-visual-market-analysis-v1` JSON 报告与原始图片目录，按固定八模块展示竞品视觉市场分析、用户验证与机会计划。

## 运行

```powershell
pnpm install
pnpm run dev
```

选择 JSON 报告并选择包含原图的目录后，点击“进入市场分析看板”。看板仅根据 `image_assets[].file_name` 的唯一文件名建立图片索引，再根据每项的 `evidence_image_ids` 读取图片；`source_path` 不参与匹配。看板不会分析图片内容或改写报告结论。

## 验证

```powershell
pnpm run build
```
