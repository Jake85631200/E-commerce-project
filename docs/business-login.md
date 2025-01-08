- **商品瀏覽和加入購物車**
  - 在首頁瀏覽商品，點擊進入 product 頁面。
  - 點選「加入購物車」：
    - 從 product 頁 URL 獲取`product.id`和當前登入的`user.id`。
    - Back-end 查詢資料庫中的 product 和`user.cart`。
    - 若購物車中已存在該 product，則增加 `product.quantity`；否則將 product 加入 cart。
- **商品結帳**
  1. 選擇指定 product 和 quantity 後，點擊「結帳」。
  2. Front-end 將選定`product.id`和數量傳遞給 back-end 請求`checkout session`。
  3. 使用 Stripe 創建`checkout session`，成功後跳轉至 Stripe checkout page。
  4. Stripe 通過驗證`stripe-signature`和`webhook secret`完成結帳流程。
  5. 結帳成功後，back-end 根據`session`資料創建 order 紀錄。
- **用戶登入及限制登入嘗試**
  1. User 在登入頁輸入 email 和 password，點擊「登入」。
  2. Front-end 傳送 email 和 password 至後端進行 login handler 驗證。
  3. 若 user 不存在，返回「無效的 email 或 password」提示。
  4. 若 user 存在，檢查登入嘗試次數和鎖定狀態：
     1. 若`attempts`次數達到上限且未鎖定，重置嘗試次數。
     2. 若 password 錯誤，增加`attempts`次數並返回錯誤提示。
  5. 若 email 和 password 正確，重置`attempts`次數，生成 JWT`token`，並存入`res.cookie`，完成登入。
- **忘記密碼**
  1. **2FA 驗證碼**
     1. User 點擊「忘記密碼」，提交 email。
     2. Back-end 驗證 email，若 user 存在則生成 6 位驗證碼，存入 Redis，並寄送至 user 的 email。
  2. **驗證 2FA 驗證碼**
     1. User 提交驗證碼，back-end 檢查 Redis 中的驗證碼是否匹配。
     2. 若驗證碼正確，刪除 Redis 紀錄並返回 `status: “success”`。
  3. **重設密碼**
     1. User 輸入新密碼，back-end 檢查新密碼是否符合要求。
     2. 更新 user 密碼並生成新的 JWT`token`，存入 `res.cookie` 完成登入。
- **API 使用權限限制**
  1. **protect() middleware**
     1. 檢查請求中是否包含有效的`token`，解碼並提取 user 資訊。
     2. 驗證 user 是否存在及密碼是否變更，設置 `req.user` 和 `res.locals.user`，然後進入下一個處理程序。
  2. **restrictedTo() middleware**
     - 限制特定角色的 API 使用權限，若 user 角色不在允許範圍內，拒絕訪問。
