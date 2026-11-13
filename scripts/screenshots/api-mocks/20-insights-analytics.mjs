const day = (n) => { const d = new Date(Date.now() - n * 86400000); return d.toISOString().split("T")[0]; };
function series(days, scale = 1) {
  const out = [];
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(Date.now() - i * 86400000);
    const wk = d.getDay() === 0 || d.getDay() === 6;
    const growth = 1 + (days - i) / days * 0.35;
    const base = i < 7 ? (560 + (7 - i) * 22 + (i % 3) * 28) * growth * scale : (wk ? 470 : 600) * growth * scale + ((i * 37) % 60);
    const ok = Math.round(base * 0.94), bad = Math.round(base * 0.06);
    out.push({ date: d.toISOString().split("T")[0], successful: ok, failed: bad });
  }
  return out;
}
const rules = [
  ["r-01", "Needs Response triage", 4128, 97, 4310],
  ["r-02", "Block cold outreach", 3364, 99, 3364],
  ["r-03", "Archive newsletters", 2871, 96, 5742],
  ["r-04", "AI project drafts", 1942, 92, 1942],
  ["r-05", "3-day follow-up nudge", 1530, 95, 1688],
  ["r-06", "Receipts to Finance", 1104, 98, 2208],
];
function analytics(u) {
  const off = +(u.searchParams.get("offset") || 0);
  const range = u.searchParams.get("dateRange") || "30d";
  const days = range === "7d" ? 7 : range === "90d" ? 90 : 30;
  const scale = off ? 0.8 : 1;
  const ts = series(days, scale);
  const ok = ts.reduce((s, p) => s + p.successful, 0), bad = ts.reduce((s, p) => s + p.failed, 0);
  const total = ok + bad;
  const rate = off ? 0.89 : 0.94;
  const matched = Math.round(total * rate);
  const f = days / 30 * scale;
  return {
    dateRange: "Last 30 Days",
    overview: { totalRules: 14, activeRules: 12, totalExecutions: total, successRate: Math.round(rate * 100), emailsProcessed: Math.round(6248 * f), totalActions: Math.round(21870 * f) },
    executionBreakdown: { successful: matched, failed: total - matched },
    topRules: rules.map(([id, name, e, sr, a]) => ({ id, name, executions: Math.round(e * f), successRate: sr, actions: Math.round(a * f) })),
    rulesWithExecutions: 12,
    timeSeries: ts, timeSeriesTruncated: false,
    actionDistribution: [
      { type: "apply_label", count: Math.round(7420 * f) },
      { type: "archive", count: Math.round(5180 * f) },
      { type: "assign_tracking_label", count: Math.round(3260 * f) },
      { type: "draft_reply", count: Math.round(1942 * f) },
      { type: "start_nudge", count: Math.round(1210 * f) },
      { type: "unsubscribe", count: Math.round(486 * f) },
      { type: "mark_read", count: Math.round(2372 * f) },
    ],
    actionDistributionTruncated: false,
  };
}
export default {
  "/api/analytics": analytics,
  "/api/analytics/ai-usage": (u) => {
    const days = { "7d": 7, "90d": 90 }[u.searchParams.get("dateRange")] || 30;
    const f = days / 30;
    return {
      providerDistribution: [{ provider: "anthropic", count: Math.round(3110 * f), percentage: 64 }, { provider: "openai", count: Math.round(1750 * f), percentage: 36 }],
      byokDistribution: { byok: 0, platform: Math.round(4860 * f), byokPercentage: 0 },
      tokenTrends: series(days).map((p) => ({ date: p.date, promptTokens: p.successful * 420, completionTokens: p.successful * 200, totalTokens: p.successful * 620 })),
      costBreakdown: [
        { operation: "email_classification", cost: 6.42 * f, count: Math.round(3320 * f), percentage: 46 },
        { operation: "draft_generation", cost: 5.18 * f, count: Math.round(980 * f), percentage: 37 },
        { operation: "cold_email_detection", cost: 2.37 * f, count: Math.round(560 * f), percentage: 17 },
      ],
      totalCost: +(13.97 * f).toFixed(2),
      totalOperations: Math.round(4860 * f),
      totalTokens: Math.round(3_840_000 * f),
    };
  },
};
