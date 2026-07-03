# アンドマーケティング コーポレートサイト

現状デザインをそのまま静的HTMLとして再構築したリポジトリです。

## 構成

```
.
├── index.html                       … トップページ
├── topics/                          … お知らせ
│   ├── index.html                       一覧
│   ├── and-training-release/index.html  記事
│   ├── lp-free-campaign/index.html      記事
│   ├── and-beta-trial/index.html        記事
│   └── hello-world/index.html           記事
├── privacy-policy/index.html        … プライバシーポリシー
├── assets/
│   ├── css/                             サイトのCSS
│   ├── js/                              JavaScript
│   └── img/                             テーマ画像（ロゴ・FV画像など）
├── uploads/                         … WordPressからの画像（ロゴ系）
├── robots.txt                       … 検索/AIクローラー設定
├── sitemap.xml                      … サイトマップ
└── README.md                        … このファイル
```

## ローカルでの確認方法（公開前のテスト）

リポジトリのフォルダで、ターミナルから：

```bash
# Python 3 が入っている環境なら
python3 -m http.server 8000
```

ブラウザで `http://localhost:8000` を開くと、サイトが見られます。

## 記事の追加・更新方法

### 新しいお知らせを追加するとき

1. `topics/` の中で、既存記事のフォルダ（例: `hello-world/`）をコピーして名前を変更
2. 中の `index.html` を編集して内容を入れ替える
3. トップページ `index.html` の `<ul class="news_list">` 内に新しい項目を追加
4. お知らせ一覧 `topics/index.html` の冒頭にも新しい項目を追加
5. `sitemap.xml` にも追加

### GitHubブラウザで編集する場合

1. GitHubのリポジトリを開く
2. 編集したいファイルを開く
3. 右上の「鉛筆アイコン」をクリック
4. 編集して「Commit changes」ボタンを押す
5. Cloudflare Pagesと連携していれば、数十秒で自動公開

## デプロイ（公開）

Cloudflare Pages で GitHub リポジトリを連携：
- Framework preset: **None** (静的サイト)
- Build command: 空のままでOK
- Build output directory: `/` （ルート）

## 注意事項

- **HubSpotフォーム**: トップページ下部の問い合わせフォームは HubSpot の埋め込みコード（portalId: 45386793, formId: 64ae11ea-d807-4eba-8891-af7b58bfb00f）。差し替える場合は `index.html` 内の hbspt.forms.create を編集
- **GTM**: Google Tag Manager（GTM-584N4JSK）が全ページに入っています
- **画像パス**: すべて `/assets/` または `/uploads/` から始まる絶対パス。ローカル確認時もサーバ起動して見てください（ファイルを直接ブラウザで開くと一部画像が表示されません）

<!-- deploy trigger: 2026-07-03 -->
