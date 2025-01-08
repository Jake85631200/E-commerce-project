# PowMart-電商網站應用程式

## 一個 Node.js 後端技術的學習專案 😀

歡迎來到我的 **PowMart** 的專案！  
這是一個現代化、功能豐富的線上購物平台，旨在提供流暢的購物體驗。

## 核心功能

- **商品瀏覽和購物車管理**：用戶可以瀏覽商品並將其加入購物車，後端處理商品數量的更新或添加。
- **結帳流程**：使用 Stripe 進行結帳，包括創建 checkout session 和處理訂單紀錄。
- **用戶驗證**：用戶登入和密碼重設功能，並實現登入嘗試限制。
- **API 權限管理**：通過 middleware 實現 API 訪問控制，僅授權用戶可使用特定功能。

詳細業務邏輯請參閱：[docs/business-logic.md](./docs/business-login.md)

## 技術棧

- **前端**：HTML, CSS, Javascript
- **後端**：Node.js, Express
- **資料庫**：MongoDB (使用 MongoDB Atlas), Mongoose, Redis
- **部署**：Heroku

## 項目背景

此專案是為了學習並演示完整的 Web 全端開發而構建。  
模擬真實的電商網站，包含從商品管理到用戶購物的完整功能流程。
