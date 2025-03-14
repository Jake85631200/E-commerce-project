# PowMart-電商平台網站

**See Here**：https://jack-e-commerce-75ebcc27b086.herokuapp.com

歡迎來到我的 **PowMart** 電商平台！  
這是一個現代化、功能豐富的線上購物平台，旨在提供流暢的購物體驗。

## 項目背景

此專案是為了學習並演示完整的 Web 全端開發而構建。  
模擬真實的電商網站，包含從商品管理到用戶購物的完整功能流程。

## 核心功能

- **商品瀏覽和購物車管理**：用戶可以瀏覽商品並將其加入購物車，後端處理商品數量的更新或添加。

  ![](./docs/flow-charts/powmart-購物車結帳.drawio-商品瀏覽和加入購物車.jpg)

- **結帳流程**：使用 Stripe 進行結帳，包括創建 checkout session 和處理訂單紀錄。

  ![](./docs/flow-charts/powmart-購物車結帳.drawio-購物車商品結帳.jpg)

- **用戶驗證**：用戶登入和密碼重設功能，並實現登入嘗試限制。

  ![](./docs/flow-charts/powmart-購物車結帳.drawio-登入及限制登入嘗試.jpg)

  ![](./docs/flow-charts/powmart-購物車結帳.drawio-忘記密碼.jpg)

- **API 權限管理**：通過 middleware 實現 API 訪問控制，僅授權用戶可使用特定功能。

  ![](./docs/flow-charts/powmart-購物車結帳.drawio-API%20使用權限限制.jpg)

詳細業務邏輯請參閱：[business-logic](./docs/business-logic.md)

## 安裝與設定

- **使用本專案的建議版本**

  - Node.js：20.x 或以上您可以在專案根目錄添加 .nvmrc 文件來指定 Node.js 版本：

    ```bash
    v20.18.0
    ```

  - express：4.21.0
  - mongodb：6.9.0
  - mongoose：8.7.0
  - ioredis：5.4.1
  - redis：4.7.0
  - jsonwebtoken：9.0.2
  - stripe：17.3.1

- **複製專案**

  - **請先複製此專案到本地**

    ```bash
    git clone https://github.com/Jake85631200/E-commerce-project
    ```

  - **安裝**

    ```bash
    npm install
    ```

- **環境變數**

  - **請在您的根目錄新增 .env 文件，並設置環境變數：**

    ```bash
    PORT=3000
    NODE_ENV=production

    # MongoDB 配置
    DATABASE=mongodb+srv://<USERNAME>:<PASSWORD>@e-commerce-project.mongodb.net/
    DATABASE_PASSWORD=your_password_here

    # Redis 配置
    REDIS_ENDPOINT_USERNAME=default
    REDIS_ENDPOINT_URI=redis://<REDIS_HOST>:<REDIS_PORT>
    REDIS_ENDPOINT_PASSWORD=<YOUR_REDIS_PASSWORD>

    # JWT 配置
    JWT_SECRET=<YOUR_JWT_SECRET_KEY>
    JWT_EXPIRES_IN=7d
    JWT_COOKIE_SECRET=<YOUR_JWT_COOKIE_SECRET>
    JWT_COOKIE_EXPIRES_IN=30
    .
    .
    .
    ```

    更多環境變數設置請參考[ env-config-template ](./env-config-template)

- **CLI 指令**

  - **在測試環境啟動伺服器**

    ```bash
    npm start
    ```

  - **在生產環境啟動伺服器**

    ```bash
    npm run start:prod
    ```

## 技術棧

- **後端**：使用 Node.js 搭配 Express 框架，構建高效、可擴展的伺服器端應用
- **前端**：手刻 HTML、CSS 和 JavaScript，實現自訂網頁佈局
- **資料庫**：
  1. 整合 MongoDB 並運用 Mongoose 進行資料設計及操作，提供高效的資料存取和管理
  2. 使用 Redis 儲存短期資料，如驗證碼等，即時處理並提升系統效能
- **第三方支付**：第三方支付：透過 Stripe API 實現安全、流暢的支付流程，並建立訂單管理系統。
- **部署**：使用 Heroku 自動連接至 Github 更新部署