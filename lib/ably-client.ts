import Ably from "ably";

// API key capabilities:
const scopes = {
  chat: ["publish", "subscribe", "presence"],
  status: ["subscribe"],
};

const client = new Ably.Realtime({
  key: process.env.ABLY_API_KEY,
  autoConnect: typeof window !== "undefined",
  // restHost: process.env.BETTER_AUTH_URL,
  // realtimeHost: process.env.BETTER_AUTH_URL,
});
const tokenRequestData = await client.auth.createTokenRequest({
  clientId: "nxt_emerald", //process.env.AUTH_ABLY_CLIENT_ID
});
