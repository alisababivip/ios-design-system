# Cài đặt

## Yêu cầu

- Node.js **≥ 20**
- pnpm **≥ 9**

## Cài đặt packages

::: code-group

```bash [pnpm]
pnpm add @nlpgroup/tokens @nlpgroup/core
```

```bash [npm]
npm install @nlpgroup/tokens @nlpgroup/core
```

```bash [yarn]
yarn add @nlpgroup/tokens @nlpgroup/core
```

:::

## Import CSS

### Toàn bộ bundle

```html
<link rel="stylesheet" href="node_modules/@nlpgroup/core/dist/ios-ui.css" />
```

### Chỉ Tokens

```css
@import '@nlpgroup/tokens';
```

### Chỉ Controls

```css
@import '@nlpgroup/tokens';
@import '@nlpgroup/core/dist/controls/index.css';
```

## Vue 3

```bash
pnpm add @nlpgroup/vue
```

```ts
// main.ts
import { createApp } from 'vue'
import '@nlpgroup/tokens'
import '@nlpgroup/core/dist/ios-ui.css'
import NlpUI from '@nlpgroup/vue'
import App from './App.vue'

createApp(App).use(NlpUI).mount('#app')
```

## React / Next.js

```bash
pnpm add @nlpgroup/react
```

```tsx
// app/layout.tsx (Next.js App Router)
import '@nlpgroup/core/dist/ios-ui.css'
```
