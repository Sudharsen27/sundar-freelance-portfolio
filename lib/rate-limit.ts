import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const url = process.env.UPSTASH_REDIS_REST_URL;
const token = process.env.UPSTASH_REDIS_REST_TOKEN;

export const rateLimitEnabled = Boolean(url && token);

export const chatRateLimit = rateLimitEnabled
  ? new Ratelimit({
      redis: new Redis({
        url: url!,
        token: token!,
      }),

      limiter: Ratelimit.slidingWindow(5, "1 m"),

      analytics: true,

      prefix: "sundar-digital:chat",
    })
  : null;