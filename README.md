# ios-design-system

**@alisababivip/ios-ui** — Pure iOS Human Interface Design System for Web & Modern Frameworks  
*Lightweight · Zero-drift · Token-driven · NLP Group*

---

## Giới thiệu

Bộ thư viện thiết kế mã nguồn mở theo chuẩn **Apple HIG (Human Interface Guidelines)**, xây dựng cho hệ sinh thái **NLP Group** (Năng lượng xanh · Xe điện · Công nghệ · AI · ESG).

Hỗ trợ đa nền tảng: **Vanilla HTML · Vue 3 · React · Next.js · Laravel Blade · Web Components**

---

## Cấu trúc Monorepo

```text
nlpgroup-ios-ui/
├── packages/
│   ├── tokens/     # CSS Variables + JSON Design Tokens
│   ├── icons/      # SVG Icons + SF Symbols + Animations
│   ├── core/       # Web Components (framework-agnostic CSS)
│   ├── react/      # React wrapper components
│   ├── vue/        # Vue 3 wrapper components
│   └── blade/      # Laravel Blade bridge
├── apps/
│   ├── docs/       # VitePress documentation
│   └── showcase/   # iOS Simulator preview (Vite)
├── pnpm-workspace.yaml
├── turbo.json
└── package.json
```

---

## Nhóm Components

### Controls & Inputs (Atoms + Molecules)

| Component | Class | Mô tả |
|---|---|---|
| CupertinoSwitch | `.ios-switch` | Nút bật/tắt trượt chuẩn iOS |
| SegmentedControl | `.ios-segmented-control` | Thanh kính mờ nhiều nấc |
| Slider | `.ios-slider` | Thanh kéo ngang |
| Stepper | `.ios-stepper` | Nút +/− |
| TextField | `.ios-text-field` | Ô nhập text chuẩn |
| GroupedTextField | `.ios-group` | Nhóm input dạng Inset Grouped |
| PinInput | `.ios-pin-input` | Nhập OTP / PIN 6 số |
| SecureField | `.ios-secure-field` | Trường mật khẩu toggle |

---

## Cài đặt

```bash
pnpm add @alisababivip/tokens @alisababivip/core
```

## Sử dụng nhanh

```html
<!-- Import tokens + controls bundle -->
<link rel="stylesheet" href="node_modules/@alisababivip/core/dist/ios-ui.css" />

<!-- CupertinoSwitch -->
<label class="ios-switch">
  <input type="checkbox" checked />
  <span class="ios-switch__track"></span>
</label>

<!-- SegmentedControl -->
<div class="ios-segmented-control" role="tablist">
  <input type="radio" name="tab" id="t1" checked />
  <label for="t1">Ngày</label>
  <input type="radio" name="tab" id="t2" />
  <label for="t2">Tháng</label>
  <input type="radio" name="tab" id="t3" />
  <label for="t3">Năm</label>
</div>
```

---

## Yêu cầu

- Node.js ≥ 20
- pnpm ≥ 9

## Phát triển

```bash
pnpm install
pnpm build
pnpm dev
```

---

**NLP Group** · Kiến tạo hệ sinh thái đổi mới bền vững  
Năng lượng xanh · Xe điện · Công nghệ · Trí tuệ nhân tạo · Phát triển bền vững
