import { USER_ID, iso } from "../persona.mjs";
const G = [
  // brand, domain, [[local, total, thisMonth, minsAgo]]
  ["The Pixel Brief", "pixelbrief.co", [["daily-digest", 412, 31, 42], ["deals", 96, 8, 300]]],
  ["Growthloop", "growthloop.io", [["newsletter", 188, 12, 95], ["webinars", 74, 6, 1500], ["product-updates", 41, 3, 4300]]],
  ["Framewise Weekly", "framewise.design", [["weekly", 156, 5, 2900]]],
  ["Shoplane", "shoplane.com", [["offers", 248, 27, 18], ["orders", 39, 2, 6000]]],
  ["Founders Ledger", "foundersledger.com", [["morning-memo", 301, 29, 130]]],
  ["Cloudnest", "cloudnest.dev", [["marketing", 87, 9, 820], ["events", 22, 2, 9000]]],
  ["Tasteful Type", "tastefultype.com", [["hello", 64, 4, 3400]]],
  ["Metric Mondays", "metricmondays.co", [["digest", 52, 4, 5800]]],
  ["Lumio Learning", "lumio.academy", [["courses", 118, 10, 640]]],
  ["Parcel & Post", "parcelpost.shop", [["promos", 143, 18, 220]]],
];
const groups = G.map(([brand, domain, ss]) => {
  const senders = ss.map(([l, c, m, a]) => ({ email: `${l}@${domain}`, count: c, emailsThisMonth: m, lastSeen: iso(a), hasUnsubscribe: true, sampleEmailId: null }));
  return { brand, domain, senders, totalCount: senders.reduce((s, x) => s + x.count, 0), totalThisMonth: senders.reduce((s, x) => s + x.emailsThisMonth, 0), unsubscribeMethod: "one_click", sampleEmailId: null, allHaveUnsubscribe: true };
}).sort((a, b) => b.totalCount - a.totalCount);
const H = [
  ["digest@devdispatch.net", "pending", 12, "link"], ["promo@brightdeals.store", "completed", 35, "header"], ["news@quillandcanvas.com", "completed", 180, "header"],
  ["updates@saasradar.io", "completed", 1440, "link"], ["hello@trendwire.media", "completed", 2900, "header"],
  ["offers@urbanthreads.shop", "completed", 4300, "header"],
  ["team@leadspark.ai", "completed", 7200, "header"], ["events@summitseries.co", "completed", 8600, "link"],
  ["noreply@couponcrate.com", "failed", 10100, "link"], ["weekly@designdrops.co", "completed", 12000, "header"],
  ["news@greenleafgoods.com", "completed", 15800, "header"], ["promo@flashfare.travel", "completed", 20100, "header"],
];
const history = H.map(([e, st, a, m], i) => ({ id: `uh-${i + 1}`, senderEmail: e, senderDomain: e.split("@")[1], status: st, unsubscribedAt: iso(a), method: m, ...(st === "failed" ? { errorMessage: "Unsubscribe link expired" } : {}) }));
const ig = (t, v, r, a, i) => ({ id: `ig-${i}`, user_id: USER_ID, ignore_type: t, value: v, reason: r, created_at: iso(a), updated_at: iso(a) });
export default {
  "/api/unsubscribe/senders": { groups, totalSenders: groups.reduce((s, g) => s + g.senders.length, 0), totalUnsubscribableEmails: 2146, lastAnalyzed: iso(14) },
  "/api/unsubscribe/history": { history },
  "/api/unsubscribe/ignored": {
    senders: [ig("sender", "receipts@ledgerlyhq.com", "Billing receipts", 20000, 1), ig("sender", "digest@harborline.design", "Partner newsletter I read", 30000, 2)],
    domains: [ig("domain", "lumenhealth.io", "Client", 40000, 3)],
    totalCount: 3,
  },
};
