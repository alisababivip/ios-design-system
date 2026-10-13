Dưới đây là bản thiết kế kiến trúc toàn diện để bạn đóng gói và phát hành bộ thư viện mã nguồn mở **All-in-One iOS-style Atomic Design System & UI Kits** lên cả **GitHub** và **npm**, hỗ trợ đa nền tảng (Web/SSR, Vue, React, Web Components, tích hợp sẵn token icon PHP/Laravel).

---

## 1. Tên gọi & Nhận diện thương hiệu (Brand Identity)

- **Tên gói (npm scope):** `@nlpgroup/ios-ui`
- **Repository GitHub:** `[https://github.com/alisababivip/ios-design-system](https://github.com/alisababivip/ios-design-system)`
- **Định vị:** *The Pure iOS Human Interface Design System for Web & Modern Frameworks — Lightweight, Zero-drift, Token-driven.*

---

## 2. Kiến trúc Monorepo (pnpm Workspaces & Turborepo)

Cấu trúc chia tách rõ ràng giữa Core Tokens, Framework Adapters, Documentation, và Demo Showcase:

```text
nlpgroup-ios-ui/
├── packages/
│   ├── tokens/              # 🌈 Colors, 🆎 Typography, Spacing, Shadows (CSS Variables + JSON)
│   ├── icons/               #   Tokens +  Animations + SVG assets + SF Symbols Map
│   ├── core/                # 🥝 Web Components chuẩn (Lit / HTML custom elements)
│   ├── react/               # 🌷 React / Next.js wrapper components
│   ├── vue/                 # 🌷 Vue 3 wrapper components
│   └── blade/               # 🐘 Laravel Blade Components & Directives bridge
├── apps/
│   ├── docs/                # 📚 Documentation site (VitePress hoặc Astro Starlight)
│   └── showcase/            # 📱 iOS Simulator preview web app (Vite + Tailwind/Vanilla)
├── pnpm-workspace.yaml
├── turbo.json
└── package.json

```

---

## 3. Bản đồ linh kiện theo nguyên lý Atomic Design

### Atoms (Hạt nhân)

- **🌈 Colors:** Bảng màu hệ thống Apple (System Blue, Green, Indigo, Dynamic Gray 1-6) tự động chuyển đổi Light/Dark mode.
- **🆎 Typography:** Bộ font `-apple-system`, `SF Pro Display`, `SF Pro Text` scale theo chuẩn iOS Dynamic Type (`Large Title`, `Title 1-3`, `Headline`, `Body`, `Callout`, `Footnote`, `Caption 1-2`).
- **🦋 Icon set:** Hệ thống 38 semantic tokens đã tạo (`solar`, `bolt`, `ai`,...) kèm 6 animation keyframes.
- **😍 Emojis:** Bộ fallback Apple Color Emoji chuẩn và hệ thống ký tự biểu cảm.
- **💊 Controls:**
- `CupertinoSwitch` (nút bật tắt trượt vật lý chuẩn)
- `CupertinoSegmentedControl` (thanh trượt kính mờ nhiều nấc)
- `CupertinoSlider` & `CupertinoStepper` (+ / -)


- **🧑‍🎤 Avatars-Profile:** Avatar hình tròn, squircle (bo góc Apple superellipse), badge trạng thái online/verified.

### Molecules (Phân tử)

- **🌎 Inputs-Text fields:**
- Inset Grouped Text Field với nút xóa nhanh `(x)`
- Pin Code / OTP input 6 số
- Secure Password Field toggle mắt


- **🪻 Tooltips & Toasters:**
- Dynamic Island Banner (notch thông báo co giãn kiểu iOS 16+)
- iOS Toast HUD (biểu tượng check/error mờ giữa màn hình)
- Context Menu Popup (hiệu ứng mờ nền xung quanh và phóng to thẻ)


- **📆 Calendar-Date-Time:**
- Cuộn bánh xe 3D Cupertino Wheel Picker (`Date`, `Time`)
- Calendar Grid dạng thẻ bo tròn chuẩn ứng dụng Calendar iOS.


- **🙈 Cover-thumbnail:** Media card tỉ lệ vàng 16:9, squircle ratio bo góc $R=22.37\%$, hiệu ứng gradient kính.

### Organisms (Sinh vật & Khối chức năng)

- **🍄 Menubar-Navbar:**
- iOS Large Title Navigation Bar (tiêu đề to, tự thu nhỏ khi cuộn lên đỉnh)
- Cupertino Tabbar (thanh điều hướng đáy có kính mờ `backdrop-filter: blur(20px)`)
- Action Sheet trượt từ đáy màn hình (`Sheet Modal`)


- **🦄 Sections:**
- Inset Grouped Section (khối danh sách thụt lề bo góc 16px)
- Settings Panel layout
- Card Hero Widget



### Templates & Pages (UI Kits)

- **🌷 UI Kits:** Mẫu giao diện hoàn chỉnh:
- Trang Cài đặt (Settings Page)
- Trang Hồ sơ người dùng (User Profile & KYC)
- Bảng điều khiển năng lượng & trạm sạc EV (Energy & Station Management)
- Trang Tuyển dụng & Thẻ nhân viên (HR & Careers Board)



---

## 4. Đặc tả kỹ thuật: CSS Tokens (`packages/tokens/tokens.css`)

Áp dụng thông số bán kính đường cong siêu elip (Superellipse) và màu sắc tương thích hoàn toàn chuẩn Apple HIG:

```css
:root {
  /* 🆎 Typography Scale */
  --ios-font: -apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", sans-serif;
  --ios-text-large-title: 700 34px/41px var(--ios-font);
  --ios-text-title1: 700 28px/34px var(--ios-font);
  --ios-text-title2: 700 22px/28px var(--ios-font);
  --ios-text-headline: 600 17px/22px var(--ios-font);
  --ios-text-body: 400 17px/22px var(--ios-font);
  --ios-text-caption1: 400 12px/16px var(--ios-font);

  /* 🌈 System Colors (Light Mode) */
  --ios-system-blue: #007AFF;
  --ios-system-green: #34C759;
  --ios-system-orange: #FF9500;
  --ios-system-red: #FF3B30;
  --ios-system-yellow: #FFCC00;
  --ios-system-purple: #AF52DE;
  --ios-system-gray: #8E8E93;

  /* Nền và Phân cấp bề mặt */
  --ios-bg-grouped: #F2F2F7;
  --ios-bg-card: rgba(255, 255, 255, 0.85);
  --ios-separator: rgba(60, 60, 67, 0.12);
  --ios-blur-material: blur(25px) saturate(180%);

  /* Bán kính bo chuẩn Superellipse */
  --ios-radius-xs: 6px;
  --ios-radius-sm: 10px;
  --ios-radius-md: 14px;
  --ios-radius-lg: 20px;
  --ios-radius-full: 9999px;
}

@media (prefers-color-scheme: dark) {
  :root {
    --ios-bg-grouped: #000000;
    --ios-bg-card: rgba(28, 28, 30, 0.82);
    --ios-separator: rgba(84, 84, 88, 0.36);
  }
}

```

---

## 5. Cấu trúc Component cốt lõi (Web Component & Vue/React)

Để chạy được trên mọi framework (Laravel Blade, Vue, React, Plain HTML), lõi components xây dựng bằng **Custom Elements** hoặc CSS Classes siêu nhẹ:

### Ví dụ: `CupertinoSegmentedControl`

```html
<!-- Dạng HTML/Blade trực tiếp -->
<div class="ios-segmented-control" role="tablist">
<input type="radio" name="seg" id="s1" checked>
<label for="s1">Ngày</label>
<input type="radio" name="seg" id="s2">
<label for="s2">Tháng</label>
<input type="radio" name="seg" id="s3">
<label for="s3">Năm</label>
<div class="ios-segmented-thumb">
</div>
</div>

```

```css
.ios-segmented-control {
  background: rgba(118, 118, 128, 0.12);
  border-radius: 9px;
  padding: 2px;
  display: inline-flex;
  position: relative;
  user-select: none;
}
.ios-segmented-control input { display: none; }
.ios-segmented-control label {
  padding: 6px 16px;
  font-size: 13px;
  font-weight: 500;
  border-radius: 7px;
  cursor: pointer;
  z-index: 1;
  transition: color 0.2s ease;
}
.ios-segmented-control input:checked + label {
  background: var(--ios-bg-card);
  box-shadow: 0 3px 8px rgba(0,0,0,0.12), 0 3px 1px rgba(0,0,0,0.04);
}

```

---

## 6. Quy trình triển khai & Xuất bản (Release Pipeline)

```
        GitHub Push (Tag v1.0.0)
                   │
                   ▼
       [GitHub Actions Workflow]
                   │
         ┌─────────┴─────────┐
         ▼                   ▼
    pnpm test          pnpm build
    (Linter & Unit)    (Rollup / tsup / Vite)
         │                   │
         ▼                   ▼
   [Publish npmjs]    [Deploy Docs Site]
   • @nlpgroup/tokens  • docs.nlpgroup.vn
   • @nlpgroup/icons   • GitHub Pages / Vercel
   • @nlpgroup/ui

```

### GitHub Actions: `.github/workflows/release.yml`

```yaml
name: Release & Publish Packages

on:
  push:
    tags:
      - 'v*'

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v3
        with:
          version: 9
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          registry-url: 'https://registry.npmjs.org'

      - run: pnpm install --frozen-lockfile
      - run: pnpm build
      - run: pnpm -r publish --access public
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}

```

---

## 7. Tài liệu & Trang chủ tương tác (Documentation Portal)

Xây dựng trang documentation bằng **Astro Starlight** hoặc **VitePress**:

1. **Interactive Playground:** Cung cấp khung mô phỏng khung viền iPhone (Simulator Frame) cho phép nhấp thử trực tiếp các component, thay đổi Dynamic Theme (Light/Dark mode) và kiểm tra hiệu ứng chuyển động icon.
2. **Copy Snippet đa nền tảng:** Mỗi component có 4 tab code: **HTML/Blade**, **Vue 3**, **React**, và **CSS Only**.
3. **Token Matrix Explorer:** Danh sách trực quan 38 semantic tokens cùng bộ mã màu và class tương ứng.