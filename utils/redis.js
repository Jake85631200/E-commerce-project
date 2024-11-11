const Redis = require("ioredis");

const redis = new Redis({
  host: process.env.REDIS_HOST || "localhost",
  port: process.env.REDIS_PORT || 6379,

  // retry when redis connection failed
  retryStrategy(times) {
    const delay = Math.min(times * 50, 2000);
    return delay;
  },

  maxRetriesPerRequest: 3,
});

redis.on("connect", () => {
  console.log("Redis connecting successfully!");
});

redis.on("error", (err) => {
  console.error("❌Redis error:", err);
});

// // 測試
// const testRedisConnection = async () => {
//   try {
//     const result = await redis.ping();
//     console.log('Redis 測試結果:', result);
//   } catch (error) {
//     console.error('Redis 測試失敗:', error);
//   }
// };

// testRedisConnection();

module.exports = redis;
