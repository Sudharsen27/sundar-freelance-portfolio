import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const url = process.env.UPSTASH_REDIS_REST_URL;
const token = process.env.UPSTASH_REDIS_REST_TOKEN;

export const rateLimitEnabled = Boolean(url && token);

const redis = rateLimitEnabled
  ? new Redis({
      url: url!,
      token: token!,
    })
  : null;

// AI chatbot
// Maximum: 5 requests per minute per visitor
export const chatRateLimit =
  rateLimitEnabled && redis
    ? new Ratelimit({
        redis,
        limiter: Ratelimit.slidingWindow(5, "1 m"),
        analytics: true,
        prefix: "sundar-digital:chat",
      })
    : null;

// Contact / project enquiry
// Maximum: 3 submissions per 10 minutes per visitor
export const contactRateLimit =
  rateLimitEnabled && redis
    ? new Ratelimit({
        redis,
        limiter: Ratelimit.slidingWindow(3, "10 m"),
        analytics: true,
        prefix: "sundar-digital:contact",
      })
    : null;

// Visit notification
// Maximum: 10 requests per 10 minutes per visitor
export const visitRateLimit =
  rateLimitEnabled && redis
    ? new Ratelimit({
        redis,
        limiter: Ratelimit.slidingWindow(10, "10 m"),
        analytics: true,
        prefix: "sundar-digital:visit",
      })
    : null;