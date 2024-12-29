const { createClient } = require("redis");

// 創建 Redis 客戶端
const redis = createClient({
  username: process.env.REDIS_ENDPOINT_USERNAME,
  password: process.env.REDIS_ENDPOINT_PASSWORD,
  socket: {
    host: process.env.REDIS_ENDPOINT_URI,
    port: process.env.REDIS_ENDPOINT_PORT,
  },
});

// 錯誤處理
redis.on("error", (err) => console.log("Redis Client Error", err));

// 連接到 Redis
async function main() {
  await redis.connect();

  // 設置並獲取資料
  await redis.set("foo", "Redis connection successful!");
  const result = await redis.get("foo");
  console.log(result); // >>> bar
}

main().catch(console.error);

// 匯出 redis 客戶端
module.exports = redis;
