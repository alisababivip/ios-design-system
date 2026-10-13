# 🥝 @alisababivip/ios-ui — Roadmap mở rộng

> **All-in-One iOS-style Atomic Design System & UI Kits**  
> *Lightweight · Zero-drift · Token-driven · Open Source*  
> **GitHub:** `alisababivip/ios-design-system` · **Docs:** `alisababivip.github.io/ios-design-system`

---

## Tầm nhìn thư viện

```
@alisababivip/ios-ui
├── Mã nguồn mở (MIT License)
├── Publish đồng thời → GitHub Packages + npmjs.org
├── Hỗ trợ: HTML · Vue 3 · React · Next.js · Laravel Blade
├── Zero JavaScript dependency cho CSS-only core
└── Phục vụ hệ sinh thái NLP Group + cộng đồng open source
```

---

## Cấu trúc monorepo mục tiêu

```
nlpgroup-ios-ui/
│
├── packages/
│   ├── tokens/          # 🌈 Colors, 🆎 Typography, Spacing, Shadows
│   ├── icons/           # 🦋 Icon set — 38+ semantic SVG tokens
│   ├── core/            # 🥝 Web Components CSS (framework-agnostic)
│   │   └── src/
│   │       ├── atoms/           # Controls, Inputs, Avatar, Badge, Button
│   │       ├── molecules/       # Tooltips, Toasters, Calendar, Cover
│   │       ├── organisms/       # Navbar, Tabbar, Sections, Settings
│   │       └── templates/       # UI Kits hoàn chỉnh
│   ├── react/           # React / Next.js wrappers (.tsx)
│   ├── vue/             # Vue 3 wrappers (.vue SFC)
│   └── blade/           # Laravel Blade bridge
│
├── apps/
│   ├── docs/            # 📚 VitePress Documentation Portal
│   └── showcase/        # 📱 iOS Simulator preview (Vite)
│
├── .github/
│   └── workflows/
│       ├── ci.yml           # Lint + Build + Test
│       ├── release.yml      # Publish GitHub Packages + npmjs
│       ├── deploy-docs.yml  # GitHub Pages (VitePress)
│       └── pr-preview.yml   # Bundle size + Changeset check
│
├── pnpm-workspace.yaml
├── turbo.json
└── package.json
```

---

## 🗺️ Lộ trình 4 giai đoạn

---

### ✅ Giai đoạn 1 — Nền tảng *(Tuần 1–2 · HOÀN THÀNH)*

**Monorepo + CI/CD + Atoms Controls & Inputs**

| Hạng mục | Trạng thái |
|---|---|
| pnpm monorepo + Turborepo | ✅ Done |
| Design Tokens CSS (Light/Dark) | ✅ Done |
| GitHub Actions: CI, Release, Deploy, PR Preview | ✅ Done |
| GitHub Pages — VitePress live | ✅ Done |
| `CupertinoSwitch` | ✅ Done |
| `CupertinoSegmentedControl` | ✅ Done |
| `CupertinoSlider` | ✅ Done |
| `CupertinoStepper` | ✅ Done |
| `TextField` (Standard + Grouped + PIN + Secure) | ✅ Done |

---

### 🔵 Giai đoạn 2 — Atoms hoàn chỉnh *(Tuần 3–4)*

**Icons · Avatar · Badge · Button · Emojis · Release v0.1.0**

#### 🦋 Icon Set (`packages/icons/`)

```
38 semantic SVG tokens:
solar · bolt · ev · leaf · ai · chart · settings · user
bell · search · home · plus · minus · check · close · arrow
heart · star · share · lock · unlock · eye · eye-off · edit
trash · download · upload · link · mail · phone · map · wifi
battery · sun · moon · cloud · refresh · menu
```

Mỗi icon có **6 animation keyframes**: pulse · spin · bounce · fade · shake · ping

```css
/* Ví dụ token */
.ios-icon-solar   { --icon: url("../svg/solar.svg"); }
.ios-icon-bolt    { --icon: url("../svg/bolt.svg"); }
.ios-icon--pulse  { animation: ios-icon-pulse 1.2s ease infinite; }
```

#### 😍 Emojis (`packages/core/src/atoms/emoji.css`)

```
Apple Color Emoji fallback system:
· Bộ 120 emoji được map sẵn theo category
· Hệ thống class .ios-emoji--{name}
· Hỗ trợ size: xs (16px) · sm (20px) · md (24px) · lg (32px) · xl (48px)
· Variant: grayscale · sepia · high-contrast
```

#### 🧑‍🎤 Avatars & Profile (`packages/core/src/atoms/avatar.css`)

```
Shapes:
· Circle        — border-radius: 9999px
· Squircle      — superellipse R=22.37% (CSS clip-path)
· Rounded Rect  — border-radius: var(--ios-radius-lg)

Sizes: xs (24px) · sm (32px) · md (40px) · lg (56px) · xl (80px) · 2xl (120px)

Badge overlays:
· Online (green dot)
· Verified (blue checkmark)
· Away (yellow)
· Busy (red)
· Custom count badge

Variants:
· .ios-avatar--image     — ảnh thật
· .ios-avatar--initials  — chữ cái tên (monogram)
· .ios-avatar--icon      — SF Symbol icon
· .ios-avatar--group     — stack nhiều avatar chồng nhau
```

#### 💊 Controls bổ sung (`packages/core/src/atoms/`)

```
· Button
  - Primary  (filled, system blue)
  - Secondary (outline)
  - Ghost    (transparent)
  - Destructive (red)
  - Sizes: sm · md · lg
  - States: default · hover · active · disabled · loading

· Badge / Tag
  - Label badge (text)
  - Count badge (số)
  - Dot badge (chấm)
  - Colors: blue · green · red · orange · gray

· Checkbox & Radio
  - .ios-checkbox  (checkmark animation)
  - .ios-radio     (circle fill animation)

· Progress Bar
  - .ios-progress  (animated fill)
  - .ios-progress--circular (spinner)
```

#### 🚀 Release v0.1.0

```bash
git tag v0.1.0
git push origin v0.1.0
# → GitHub Actions tự publish lên:
#   GitHub Packages: npm.pkg.github.com
#   npmjs.org:       registry.npmjs.org
```

---

### 🟣 Giai đoạn 3 — Molecules & Organisms *(Tuần 5–8)*

---

#### 🪻 Tooltips & Toasters (`packages/core/src/molecules/`)

**Dynamic Island Banner** *(iOS 16+)*
```css
/* Notch thông báo co giãn từ Dynamic Island */
.ios-dynamic-island { ... }         /* trạng thái compact */
.ios-dynamic-island--expanded { ... } /* mở rộng khi có noti */
/* Animation: scale từ notch → banner */
```

**Toast HUD**
```html
<div class="ios-toast ios-toast--success">
  <span class="ios-toast__icon">✓</span>
  <span class="ios-toast__text">Đã lưu</span>
</div>
<!-- Variants: success · error · warning · info · loading -->
```

**Context Menu Popup**
```html
<div class="ios-context-menu">
  <div class="ios-context-menu__preview">...</div>
  <ul class="ios-context-menu__actions">
    <li class="ios-context-menu__item">Sao chép</li>
    <li class="ios-context-menu__item ios-context-menu__item--destructive">Xoá</li>
  </ul>
</div>
<!-- Hiệu ứng: blur nền xung quanh + phóng to thẻ -->
```

**Alert Dialog**
```html
<div class="ios-alert">
  <h3 class="ios-alert__title">Xác nhận xoá?</h3>
  <p class="ios-alert__message">Hành động này không thể hoàn tác.</p>
  <div class="ios-alert__actions">
    <button class="ios-alert__btn">Huỷ</button>
    <button class="ios-alert__btn ios-alert__btn--destructive">Xoá</button>
  </div>
</div>
```

---

#### 📆 Calendar & Date-Time (`packages/core/src/molecules/`)

**Cupertino Wheel Picker 3D**
```html
<div class="ios-wheel-picker">
  <div class="ios-wheel-picker__col" data-type="day">...</div>
  <div class="ios-wheel-picker__col" data-type="month">...</div>
  <div class="ios-wheel-picker__col" data-type="year">...</div>
</div>
<!-- Cuộn bánh xe 3D, perspective transform, friction scroll -->
```

**Calendar Grid**
```html
<div class="ios-calendar">
  <div class="ios-calendar__header">
    <button class="ios-calendar__nav">‹</button>
    <span class="ios-calendar__title">Tháng 10, 2026</span>
    <button class="ios-calendar__nav">›</button>
  </div>
  <div class="ios-calendar__grid">
    <!-- 7 cột × 6 hàng, ngày được chọn dạng pill xanh -->
  </div>
</div>
```

---

#### 🙈 Cover & Thumbnail (`packages/core/src/molecules/`)

**Media Card**
```html
<div class="ios-media-card">
  <div class="ios-media-card__thumb">
    <!-- 16:9 ratio, gradient overlay từ bottom -->
  </div>
  <div class="ios-media-card__body">
    <h3 class="ios-media-card__title">NLP Energy Project</h3>
    <p class="ios-media-card__subtitle">Điện mặt trời · 500kWp</p>
  </div>
</div>
<!-- Squircle variant: clip-path superellipse R=22.37% -->
```

---

#### 🍄 Menubar & Navbar (`packages/core/src/organisms/`)

**iOS Large Title Navigation Bar**
```html
<nav class="ios-navbar">
  <div class="ios-navbar__bar">
    <button class="ios-navbar__back">‹ Quay lại</button>
    <span class="ios-navbar__title-small">NLP Energy</span>
    <button class="ios-navbar__action">···</button>
  </div>
  <div class="ios-navbar__large-title">NLP Energy</div>
</nav>
<!-- Large title tự thu nhỏ khi scroll lên đỉnh (IntersectionObserver) -->
```

**Cupertino Tab Bar**
```html
<nav class="ios-tabbar">
  <a class="ios-tabbar__item ios-tabbar__item--active" href="#">
    <span class="ios-tabbar__icon">⚡</span>
    <span class="ios-tabbar__label">Energy</span>
  </a>
  <!-- backdrop-filter: blur(20px) saturate(180%) -->
</nav>
```

**Action Sheet**
```html
<div class="ios-action-sheet">
  <div class="ios-action-sheet__list">
    <button class="ios-action-sheet__item">Chia sẻ</button>
    <button class="ios-action-sheet__item">Chỉnh sửa</button>
    <button class="ios-action-sheet__item ios-action-sheet__item--destructive">Xoá</button>
  </div>
  <button class="ios-action-sheet__cancel">Huỷ</button>
</div>
<!-- Slide up từ đáy, backdrop blur -->
```

---

#### 🦄 Sections (`packages/core/src/organisms/`)

**Inset Grouped Section**
```html
<section class="ios-inset-section">
  <h2 class="ios-inset-section__title">Cài đặt chung</h2>
  <div class="ios-group">
    <div class="ios-group__row">
      <span class="ios-group__row-label">Ngôn ngữ</span>
      <span class="ios-group__row-value">Tiếng Việt</span>
      <span class="ios-group__row-arrow">›</span>
    </div>
    <div class="ios-group__row">
      <span class="ios-group__row-label">Thông báo</span>
      <label class="ios-switch">...</label>
    </div>
  </div>
</section>
```

**Settings Panel Layout**
```html
<div class="ios-settings">
  <div class="ios-settings__profile">
    <!-- Avatar lớn + tên + email -->
  </div>
  <div class="ios-settings__sections">
    <!-- Nhiều ios-inset-section -->
  </div>
</div>
```

**Card Hero Widget**
```html
<div class="ios-hero-widget">
  <div class="ios-hero-widget__value">247 kWh</div>
  <div class="ios-hero-widget__label">Sản lượng hôm nay</div>
  <div class="ios-hero-widget__trend">↑ 12% so với hôm qua</div>
</div>
```

---

### 🟡 Giai đoạn 4 — Templates & UI Kits *(Tuần 9–14)*

---

#### 🌷 UI Kit 1 — Energy Dashboard

```
Màn hình:
├── Dashboard tổng quan (Hero widget sản lượng + biểu đồ)
├── Chi tiết hệ thống Solar + BESS + EMS
├── Lịch sử sản lượng (Calendar + Chart)
├── Cài đặt hệ thống (Settings Panel)
└── Báo cáo (Table + Export)

Components dùng:
Hero Widget · Progress Bar · Calendar · Chart Card
Inset Section · Segmented Control · Switch · Navbar
```

#### 🌷 UI Kit 2 — EV Charging Station

```
Màn hình:
├── Bản đồ trạm sạc (Map + Marker)
├── Chi tiết trạm (Status cards AC/DC)
├── Lịch sử sạc (Timeline list)
├── Thanh toán (PIN Input + Payment)
└── Quản lý CSMS (Dashboard admin)

Components dùng:
Map Card · Status Badge · Timeline · Pin Input
Action Sheet · Toast HUD · Tabbar · Search Bar
```

#### 🌷 UI Kit 3 — User Profile & KYC

```
Màn hình:
├── Hồ sơ người dùng (Avatar + Info)
├── Xác minh KYC (Stepper wizard)
├── Lịch sử giao dịch (List + Filter)
├── Cài đặt tài khoản (Settings Panel)
└── Bảo mật (Secure Field + Biometric)

Components dùng:
Avatar · Badge · Grouped TextField · Stepper
Segmented Control · Alert Dialog · Switch
```

#### 🌷 UI Kit 4 — ESG & Carbon Board

```
Màn hình:
├── Dashboard ESG (Score card + Trend)
├── Quản lý tín chỉ carbon (Table + Chart)
├── Tiến độ Net Zero (Progress + Timeline)
├── Báo cáo bền vững (PDF export)
└── Bản đồ dự án rừng (Map + Card)

Components dùng:
Hero Widget · Progress Bar · Media Card
Calendar · Chart Card · Inset Section
```

#### 🌷 UI Kit 5 — NLP Group Website

```
Trang:
├── Trang chủ (Hero + Ecosystem grid)
├── Về NLP Group (Team + Timeline)
├── Hệ sinh thái (5 lĩnh vực cards)
├── Dự án (Gallery + Filter)
├── Tin tức (Blog list + Tag)
├── Tuyển dụng (Job board + Card)
└── Liên hệ (Form + Map)

Stack: Nuxt 3 (SSR) · Vue 3 · @alisababivip/vue · SEO
```

---

## 📦 Chiến lược publish đa registry

### Dual publish: GitHub Packages + npmjs.org

```yaml
# .github/workflows/release.yml (mục tiêu)
jobs:
  publish-github:
    # Publish @alisababivip/* → npm.pkg.github.com
    # NODE_AUTH_TOKEN: secrets.GITHUB_TOKEN

  publish-npm:
    # Publish @alisababivip/* → registry.npmjs.org
    # NODE_AUTH_TOKEN: secrets.NPM_TOKEN
```

### .npmrc cho người dùng cuối

```ini
# Dùng GitHub Packages
@nlpgroup:registry=https://npm.pkg.github.com

# Hoặc dùng npmjs.org (sau khi publish public)
# @nlpgroup:registry=https://registry.npmjs.org
```

### Cài đặt

```bash
# Cài toàn bộ
pnpm add @alisababivip/tokens @alisababivip/core

# Chỉ tokens
pnpm add @alisababivip/tokens

# Vue 3
pnpm add @alisababivip/vue

# React / Next.js
pnpm add @alisababivip/react

# Laravel Blade
composer require nlpgroup/blade-ui   # (tương lai)
```

---

## 📚 Documentation Portal (VitePress)

### Cấu trúc docs mục tiêu

```
apps/docs/
├── index.md                    # Trang chủ (layout: home)
├── guide/
│   ├── index.md                # Giới thiệu
│   ├── getting-started.md      # Cài đặt
│   ├── tokens.md               # Design Tokens
│   ├── theming.md              # Tuỳ biến theme
│   └── contributing.md        # Đóng góp
├── components/
│   ├── atoms/
│   │   ├── switch.md
│   │   ├── segmented-control.md
│   │   ├── slider.md
│   │   ├── stepper.md
│   │   ├── button.md
│   │   ├── badge.md
│   │   ├── avatar.md
│   │   ├── checkbox.md
│   │   └── progress.md
│   ├── inputs/
│   │   ├── text-field.md
│   │   ├── pin-input.md
│   │   ├── secure-field.md
│   │   └── search-bar.md
│   ├── molecules/
│   │   ├── toast.md
│   │   ├── dynamic-island.md
│   │   ├── context-menu.md
│   │   ├── alert-dialog.md
│   │   ├── calendar.md
│   │   ├── wheel-picker.md
│   │   └── media-card.md
│   └── organisms/
│       ├── navbar.md
│       ├── tabbar.md
│       ├── action-sheet.md
│       ├── inset-section.md
│       └── settings-panel.md
├── ui-kits/
│   ├── energy-dashboard.md
│   ├── ev-station.md
│   ├── user-profile.md
│   ├── esg-board.md
│   └── nlpgroup-website.md
└── tokens/
    ├── colors.md
    ├── typography.md
    ├── spacing.md
    ├── radius.md
    └── shadows.md
```

### Interactive Playground (mỗi component page)

```md
## Live Preview

<ComponentPreview>
  <label class="ios-switch">
    <input type="checkbox" checked />
    <span class="ios-switch__track"></span>
  </label>
</ComponentPreview>

## Code

::: code-group
\`\`\`html [HTML]
...
\`\`\`
\`\`\`vue [Vue 3]
...
\`\`\`
\`\`\`tsx [React]
...
\`\`\`
\`\`\`blade [Laravel]
...
\`\`\`
:::
```

---

## 🛠️ Hạ tầng kỹ thuật mở rộng

### Testing

```
packages/core/
└── __tests__/
    ├── visual/        # Playwright visual regression
    ├── css/           # Stylelint + custom rules
    └── a11y/          # axe-core accessibility
```

### Build pipeline

```
Source CSS
    ↓
PostCSS (autoprefixer + cssnano)
    ↓
Rollup / tsup (ESM + CJS)
    ↓
dist/
├── ios-ui.css          (full bundle, minified)
├── ios-ui.min.css      (production)
├── tokens.css          (tokens only)
├── controls/           (individual files)
│   ├── switch.css
│   ├── segmented-control.css
│   └── ...
└── index.esm.js        (JS entry cho tree-shaking)
```

### Changeset & Versioning

```bash
# Tạo changeset khi thêm feature
pnpm changeset

# Bump version tất cả packages
pnpm version-packages

# Release
git tag v0.2.0
git push origin v0.2.0
```

---

## 📊 Bản đồ components hoàn chỉnh

### Atoms (Hạt nhân)

| Component | Class | Giai đoạn | Status |
|---|---|---|---|
| 🌈 Colors tokens | CSS variables | G1 | ✅ Done |
| 🆎 Typography tokens | CSS variables | G1 | ✅ Done |
| CupertinoSwitch | `.ios-switch` | G1 | ✅ Done |
| SegmentedControl | `.ios-segmented-control` | G1 | ✅ Done |
| Slider | `.ios-slider` | G1 | ✅ Done |
| Stepper | `.ios-stepper` | G1 | ✅ Done |
| TextField | `.ios-text-field` | G1 | ✅ Done |
| GroupedTextField | `.ios-group` | G1 | ✅ Done |
| PIN / OTP Input | `.ios-pin-input` | G1 | ✅ Done |
| Secure Field | `.ios-secure-field` | G1 | ✅ Done |
| 🦋 Icon Set (38 SVG) | `.ios-icon-{name}` | G2 | ⬜ |
| 😍 Emoji System | `.ios-emoji--{name}` | G2 | ⬜ |
| 🧑‍🎤 Avatar | `.ios-avatar` | G2 | ⬜ |
| Badge / Tag | `.ios-badge` | G2 | ⬜ |
| Button | `.ios-button` | G2 | ⬜ |
| Checkbox | `.ios-checkbox` | G2 | ⬜ |
| Radio | `.ios-radio` | G2 | ⬜ |
| Progress Bar | `.ios-progress` | G2 | ⬜ |

### Molecules (Phân tử)

| Component | Class | Giai đoạn | Status |
|---|---|---|---|
| 🪻 Dynamic Island Banner | `.ios-dynamic-island` | G3 | ⬜ |
| Toast HUD | `.ios-toast` | G3 | ⬜ |
| Context Menu Popup | `.ios-context-menu` | G3 | ⬜ |
| Alert Dialog | `.ios-alert` | G3 | ⬜ |
| 📆 Wheel Picker 3D | `.ios-wheel-picker` | G3 | ⬜ |
| Calendar Grid | `.ios-calendar` | G3 | ⬜ |
| 🙈 Media Card | `.ios-media-card` | G3 | ⬜ |
| Squircle Thumbnail | `.ios-squircle` | G3 | ⬜ |
| Search Bar | `.ios-search-bar` | G3 | ⬜ |

### Organisms (Sinh vật)

| Component | Class | Giai đoạn | Status |
|---|---|---|---|
| 🍄 Large Title Navbar | `.ios-navbar` | G3 | ⬜ |
| Cupertino Tab Bar | `.ios-tabbar` | G3 | ⬜ |
| Action Sheet | `.ios-action-sheet` | G3 | ⬜ |
| 🦄 Inset Grouped Section | `.ios-inset-section` | G3 | ⬜ |
| Settings Panel | `.ios-settings` | G3 | ⬜ |
| Card Hero Widget | `.ios-hero-widget` | G3 | ⬜ |

### Templates & UI Kits

| Kit | Framework | Giai đoạn | Status |
|---|---|---|---|
| 🌷 Energy Dashboard | Vue 3 + @alisababivip/vue | G4 | ⬜ |
| 🌷 EV Station Manager | Vue 3 + @alisababivip/vue | G4 | ⬜ |
| 🌷 User Profile & KYC | Vue 3 + @alisababivip/vue | G4 | ⬜ |
| 🌷 ESG & Carbon Board | Vue 3 + @alisababivip/vue | G4 | ⬜ |
| 🌷 NLP Group Website | Nuxt 3 (SSR) | G4 | ⬜ |

---

## ⚡ Bước tiếp theo ngay bây giờ

```bash
# 1. Publish v0.1.0 lên GitHub Packages
git tag v0.1.0
git push origin v0.1.0

# 2. Bắt đầu viết Atoms giai đoạn 2
mkdir -p packages/core/src/atoms
touch packages/core/src/atoms/avatar.css
touch packages/core/src/atoms/badge.css
touch packages/core/src/atoms/button.css
touch packages/core/src/atoms/checkbox.css
touch packages/core/src/atoms/progress.css

# 3. Tạo SVG icons
mkdir -p packages/icons/src/svg
# ... 38 icon files

# 4. Cập nhật docs
# apps/docs/components/atoms/avatar.md
# apps/docs/components/atoms/button.md
```

---

## 🔗 Links

| Resource | URL |
|---|---|
| GitHub Repository | `https://github.com/alisababivip/ios-design-system` |
| Documentation | `https://alisababivip.github.io/ios-design-system/` |
| GitHub Packages | `https://github.com/alisababivip?tab=packages` |
| npmjs (tương lai) | `https://www.npmjs.com/org/nlpgroup` |

---

*NLP Group · Kiến tạo hệ sinh thái đổi mới bền vững*  
*Năng lượng xanh · Xe điện · Công nghệ · AI · ESG*
