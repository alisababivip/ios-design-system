# Design Tokens

Tất cả tokens được định nghĩa dưới dạng **CSS Custom Properties** trong `@alisababivip/tokens`.

## Typography Scale

| Token | Giá trị | Dùng cho |
|---|---|---|
| `--ios-text-large-title` | `700 34px/41px` | Tiêu đề lớn trang chủ |
| `--ios-text-title1` | `700 28px/34px` | Tiêu đề section |
| `--ios-text-title2` | `700 22px/28px` | Tiêu đề card |
| `--ios-text-headline` | `600 17px/22px` | Tiêu đề list item |
| `--ios-text-body` | `400 17px/22px` | Nội dung chính |
| `--ios-text-callout` | `400 16px/21px` | Chú thích |
| `--ios-text-footnote` | `400 13px/18px` | Chú thích nhỏ |
| `--ios-text-caption1` | `400 12px/16px` | Label nhỏ |

## System Colors

### Light Mode

| Token | Màu | Mã hex |
|---|---|---|
| `--ios-system-blue` | 🔵 | `#007AFF` |
| `--ios-system-green` | 🟢 | `#34C759` |
| `--ios-system-orange` | 🟠 | `#FF9500` |
| `--ios-system-red` | 🔴 | `#FF3B30` |
| `--ios-system-purple` | 🟣 | `#AF52DE` |
| `--ios-system-yellow` | 🟡 | `#FFCC00` |
| `--ios-system-indigo` | 🫐 | `#5856D6` |

### Dark Mode

Tất cả màu tự động chuyển sang phiên bản Dark qua `@media (prefers-color-scheme: dark)`.

## Border Radius — Superellipse

| Token | Giá trị | Dùng cho |
|---|---|---|
| `--ios-radius-xs` | `6px` | Badge nhỏ |
| `--ios-radius-sm` | `10px` | Button, input |
| `--ios-radius-md` | `14px` | Card, panel |
| `--ios-radius-lg` | `20px` | Modal, sheet |
| `--ios-radius-xl` | `28px` | Widget lớn |
| `--ios-radius-full` | `9999px` | Pill, avatar |

## Spacing

| Token | Giá trị |
|---|---|
| `--ios-space-1` | `4px` |
| `--ios-space-2` | `8px` |
| `--ios-space-3` | `12px` |
| `--ios-space-4` | `16px` |
| `--ios-space-5` | `20px` |
| `--ios-space-6` | `24px` |
| `--ios-space-8` | `32px` |

## Shadows

```css
--ios-shadow-sm: 0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04);
--ios-shadow-md: 0 3px 8px  rgba(0,0,0,0.12), 0 3px 1px rgba(0,0,0,0.04);
--ios-shadow-lg: 0 8px 24px rgba(0,0,0,0.14), 0 4px 8px rgba(0,0,0,0.08);
```
