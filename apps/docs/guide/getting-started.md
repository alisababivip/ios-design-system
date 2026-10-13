# Cài đặt

## Yêu cầu

- Node.js **≥ 20**
- pnpm **≥ 9**

## Cài đặt packages

::: code-group

```bash [pnpm]
pnpm add @alisababivip/tokens @alisababivip/core
```

```bash [npm]
npm install @alisababivip/tokens @alisababivip/core
```

```bash [yarn]
yarn add @alisababivip/tokens @alisababivip/core
```

:::

## Import CSS

### Toàn bộ bundle

```html
<link rel="stylesheet" href="node_modules/@alisababivip/core/dist/ios-ui.css" />
```

### Chỉ Tokens

```css
@import '@alisababivip/tokens';
```

### Chỉ Controls

```css
@import '@alisababivip/tokens';
@import '@alisababivip/core/dist/controls/index.css';
```

## Vue 3

```bash
pnpm add @alisababivip/vue
```

```ts
// main.ts
import { createApp } from 'vue'
import '@alisababivip/tokens'
import '@alisababivip/core/dist/ios-ui.css'
import NlpUI from '@alisababivip/vue'
import App from './App.vue'

createApp(App).use(NlpUI).mount('#app')
```

## React / Next.js

```bash
pnpm add @alisababivip/react
```

```tsx
// app/layout.tsx (Next.js App Router)
import '@alisababivip/core/dist/ios-ui.css'
```
