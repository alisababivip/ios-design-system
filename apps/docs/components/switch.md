# CupertinoSwitch

Nút bật/tắt trượt vật lý chuẩn iOS — tương đương `UISwitch` trong UIKit.

## Sử dụng cơ bản

```html
<label class="ios-switch">
  <input type="checkbox" />
  <span class="ios-switch__track"></span>
</label>
```

## Trạng thái checked

```html
<label class="ios-switch">
  <input type="checkbox" checked />
  <span class="ios-switch__track"></span>
</label>
```

## Disabled

```html
<label class="ios-switch">
  <input type="checkbox" disabled />
  <span class="ios-switch__track"></span>
</label>
```

## Variants màu sắc

```html
<!-- Xanh lá (mặc định) -->
<label class="ios-switch">
  <input type="checkbox" checked />
  <span class="ios-switch__track"></span>
</label>

<!-- Xanh dương -->
<label class="ios-switch ios-switch--blue">
  <input type="checkbox" checked />
  <span class="ios-switch__track"></span>
</label>

<!-- Cam -->
<label class="ios-switch ios-switch--orange">
  <input type="checkbox" checked />
  <span class="ios-switch__track"></span>
</label>
```

## Size nhỏ

```html
<label class="ios-switch ios-switch--sm">
  <input type="checkbox" checked />
  <span class="ios-switch__track"></span>
</label>
```

## CSS Classes

| Class | Mô tả |
|---|---|
| `.ios-switch` | Wrapper label bắt buộc |
| `.ios-switch__track` | Track + thumb (tạo bằng `::after`) |
| `.ios-switch--blue` | Variant màu xanh dương |
| `.ios-switch--orange` | Variant màu cam |
| `.ios-switch--sm` | Kích thước nhỏ (38×23px) |

## Kích thước

| Variant | Track | Thumb |
|---|---|---|
| Default | 51×31px | 27×27px |
| Small (`--sm`) | 38×23px | 19×19px |
