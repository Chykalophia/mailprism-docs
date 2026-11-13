// "tracking" group client API mocks (dashboard, replies, notifications, rule logs).
import { threadsFor, replyCounts, emailDetail, emailHistory, ruleLogs, RULES, aiInsights, bellNotifications } from "../scripts/tracking-data.mjs";
const page = (data) => ({ data, nextCursor: null, hasMore: false, totalUnread: bellNotifications.filter((n) => !n.isRead).length });
export default {
  "/api/notifications": (u) => {
    const cat = u.searchParams.get("category");
    if (cat === "ai_insight") return page(aiInsights);
    if (cat) return page(bellNotifications.filter((n) => n.category === cat));
    return page(bellNotifications);
  },
  "/api/notifications/unread-count": { count: 4, unreadCount: 4 },
  "/api/dashboard/stats": { stats: { processing: { totalProcessed: 4182, matched: 3307, matchRate: 79, actionsExecuted: 6120, timeSavedMinutes: 3060 } } },
  "/api/response-tracking/counts": { counts: replyCounts },
  "/api/response-tracking/list": (u) => {
    const t = threadsFor(u.searchParams.get("state"));
    return { threads: t, totalPages: 1, total: t.length };
  },
  "/api/response-tracking/holds": { holds: [], totalCount: 0, page: 1, limit: 50, totalPages: 1 },
  "/api/response-tracking/staleness-check": { success: true, removed: 0, updated: 0 },
  "/api/gmail/email/*": (u) => emailDetail(u.pathname.split("/").pop()),
  "/api/history/email/*": (u) => emailHistory(decodeURIComponent(u.pathname.split("/").pop())),
  "/api/nudge/status": { activeNudge: null },
  "/api/rule-logs": { logs: ruleLogs, pagination: { total: 1284, totalPages: 65 } },
  "/api/history/stats": { stats: { all: 1284, matched: 1016, actionsExecuted: 2147, undone: 3 } },
};
