# React Router Data Router Test

React + TypeScript + Vite アプリケーションで、React Router v7 のデータルーター機能と Conform フォームバリデーションを実装したサンプルプロジェクトです。

## 技術スタック

- **フレームワーク**: React 19 + TypeScript 5.9
- **ビルドツール**: Vite (Rolldown Vite)
- **ルーティング**: React Router 7.9 (Memory Router)
- **フォーム管理**: Conform 1.11 + Zod 4.1
- **UI コンポーネント**:
  - Radix UI
  - shadcn/ui カスタムコンポーネント
  - Tailwind CSS 4.1
- **通知**: Sonner
- **コード品質**:
  - Biome (Linting)
  - Prettier (Formatting)
  - TypeScript (型チェック)
- **その他**: React Compiler 有効

## プロジェクト構造

```
src/
├── main.tsx                 # アプリケーションエントリーポイント
├── routes.tsx               # ルーター設定
├── routes/
│   ├── _layout.tsx          # 共通レイアウトコンポーネント
│   ├── _index/
│   │   └── route.tsx        # ホームページ (loader 付き)
│   └── form/
│       └── route.tsx        # フォームページ (action 付き)
├── components/
│   └── ui/                  # UIコンポーネント
│       ├── button.tsx
│       ├── input.tsx
│       ├── label.tsx
│       └── sonner.tsx
└── lib/
    └── utils.ts             # ユーティリティ関数
```

## 機能

### ルーティング

- **Memory Router** を使用したクライアントサイドルーティング
- ネストされたレイアウト構造
- データローダー・アクション対応

### ページ

#### ホームページ (`/`)

- React + Vite のデモページ
- **Loader** 機能: サーバーデータの事前取得をシミュレート
- カウンターコンポーネント
- フォームページへのナビゲーション

#### フォームページ (`/form`)

- **Conform** によるフォーム管理
- **Zod** スキーマによるバリデーション
- **Action** 機能: フォーム送信処理
- **Sonner** による通知表示
- エラーハンドリングとリセット機能

### UI/UX

- Tailwind CSS 4 による最新のスタイリング
- Radix UI ベースのアクセシブルなコンポーネント
- アニメーション対応
- レスポンシブデザイン

## セットアップ

### 必要条件

- Node.js 18+
- pnpm (推奨)

### インストール

```bash
# 依存関係のインストール
pnpm install
```

## 開発

```bash
# 開発サーバーの起動
pnpm dev

# 型チェック
pnpm typecheck

# Linting
pnpm lint

# フォーマットチェック
pnpm format

# フォーマット修正
pnpm format:fix

# すべてのバリデーション
pnpm validate
```

## ビルド

```bash
# プロダクションビルド
pnpm build

# ビルドプレビュー
pnpm preview
```

## 主要な依存関係

### ランタイム

- `react`, `react-dom`: 19.1.1
- `react-router`: 7.9.3
- `@conform-to/react`, `@conform-to/zod`: 1.11.0
- `zod`: 4.1.11
- `sonner`: 2.0.7
- `@radix-ui/*`: UIプリミティブ
- `tailwind-merge`, `clsx`: クラス名ユーティリティ
- `class-variance-authority`: バリアント管理

### 開発

- `vite` (Rolldown Vite): 高速ビルドツール
- `@tailwindcss/vite`: Tailwind CSS 4 Vite 統合
- `@biomejs/biome`: 高速 Linting
- `prettier`: コードフォーマッター
- `babel-plugin-react-compiler`: React Compiler
- `vite-tsconfig-paths`: パスエイリアス対応

## 設定ファイル

- `vite.config.ts`: Vite 設定
- `tailwind.config.js`: Tailwind CSS 設定
- `biome.json`: Biome Linting 設定
- `.prettierrc`: Prettier フォーマット設定
- `tsconfig.json`: TypeScript 設定

## 特徴

1. **React Router v7 データルーター**
   - Loader によるデータ事前取得
   - Action によるフォーム処理
   - 型安全なルーティング

2. **Conform + Zod**
   - 宣言的なフォームバリデーション
   - 型安全なスキーマ定義
   - エラーハンドリングの自動化

3. **最新技術スタック**
   - React 19 の最新機能
   - Tailwind CSS 4 の新機能
   - React Compiler によるパフォーマンス最適化

4. **開発体験**
   - HMR (Hot Module Replacement)
   - 高速ビルド (Rolldown Vite)
   - 統合された開発ツール

## ライセンス

MIT
