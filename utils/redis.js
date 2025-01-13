const { error } = require("console");
const { createClient } = require("redis");

// ------ Use these if you are using a local redis server ------

// const Redis = require("ioredis");
// const redis = new Redis({
//   host: process.env.REDIS_HOST || "localhost",
//   port: process.env.REDIS_PORT || 6379,
//   retryStrategy(times) {
//     const delay = Math.min(times * 50, 2000);
//     return delay;
//   },
//   // 添加錯誤處理
//   maxRetriesPerRequest: 3,
// });
// redis.on("connect", () => {
//   console.log("Redis connecting successfully!");
// });
// redis.on("error", (err) => {
//   console.error("❌ Redis 錯誤:", err);
// });

// module.exports = redis;

// ------ Use these if you are using a local redis server ------

// Create Redis Client
const redis = createClient({
  username: process.env.REDIS_ENDPOINT_USERNAME,
  password: process.env.REDIS_ENDPOINT_PASSWORD,
  socket: {
    host: process.env.REDIS_ENDPOINT_URI,
    port: process.env.REDIS_ENDPOINT_PORT,
  },
});

// Connecting to Redis
async function redisConnect() {
  await redis.connect();

  // Set up and test the connection
  await redis.set("foo", "Redis connection successful!");
  const result = await redis.get("foo");
  console.log(result); // >>> bar
}

// Error handling
redis.on("error", (err) => {
  if (error.code === "ECONNREFUSED") {
    for (let i = 0; i < 3; i++) {
      console.log("Reconnecting to Redis...");
      redisConnect().catch(console.error);
    }
  } else {
    console.log("Redis reconnection failed, please try restart the server!", err);
  }
});

redisConnect().catch(console.error);

module.exports = redis;
