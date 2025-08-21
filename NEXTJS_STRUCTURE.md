## Next.js 路由系統對比

### Pages Router (舊系統)
```
pages/
├── index.js           → /
├── about.js           → /about
├── blog/
│   ├── index.js       → /blog
│   └── [slug].js      → /blog/[slug]
└── _app.js            → 全局應用組件
└── _document.js       → 自定義 HTML 文檔
```

### App Router (新系統)
```
src/app/
├── page.tsx           → /
├── layout.tsx         → 取代 _app.js
├── about/
│   └── page.tsx       → /about
└── blog/
    ├── page.tsx       → /blog
    ├── layout.tsx     → 嵌套布局
    └── [slug]/
        └── page.tsx   → /blog/[slug]
```

## App Router 的優勢

### 1. **Server Components 支持**
- 默認在服務器端渲染
- 更好的性能和 SEO
- 減少客戶端 JavaScript 包大小

### 2. **更靈活的布局系統**
```typescript
// 嵌套布局示例
src/app/
├── layout.tsx          ← 根布局
└── dashboard/
    ├── layout.tsx      ← Dashboard 布局
    ├── page.tsx        ← /dashboard
    └── analytics/
        └── page.tsx    ← /dashboard/analytics (繼承兩個布局)
```

### 3. **更好的數據獲取**
```typescript
// Server Component 中直接獲取數據
export default async function PostPage({ params }) {
  const post = await fetch(`/api/posts/${params.id}`)
  return <div>{post.title}</div>
}
```

### 4. **流式渲染支持**
```typescript
// loading.tsx 提供即時加載狀態
// Suspense 邊界自動處理
```

### 5. **更好的錯誤處理**
```typescript
// error.tsx 自動捕獲錯誤
// 可以在任何路由層級定義
```

## 實際應用場景

### 電商網站結構
```
src/app/
├── layout.tsx          → 全站布局
├── page.tsx           → 首頁
├── products/
│   ├── layout.tsx     → 產品頁面布局
│   ├── page.tsx       → 產品列表
│   ├── [id]/
│   │   └── page.tsx   → 產品詳情
│   └── category/
│       └── [slug]/
│           └── page.tsx → 分類頁面
├── cart/
│   └── page.tsx       → 購物車
└── checkout/
    ├── layout.tsx     → 結帳流程布局
    ├── page.tsx       → 結帳首頁
    ├── shipping/
    │   └── page.tsx   → 配送信息
    └── payment/
        └── page.tsx   → 付款頁面
```

### 部落格結構
```
src/app/
├── layout.tsx
├── page.tsx           → 首頁
├── blog/
│   ├── layout.tsx     → 部落格布局
│   ├── page.tsx       → 文章列表
│   ├── [slug]/
│   │   └── page.tsx   → 文章內容
│   └── category/
│       └── [category]/
│           └── page.tsx → 分類文章
└── about/
    └── page.tsx       → 關於頁面
```