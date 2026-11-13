export default {
  "/api/ai/health": { success: true, available: true, providers: { openai: "available", anthropic: "available" }, message: "All AI providers available" },
  "/api/settings/safety": { success: true, data: {} },
};
