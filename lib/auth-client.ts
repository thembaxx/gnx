import { siteConfig } from "@/config/site";
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: siteConfig.baseUrl,
});
