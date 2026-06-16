# MailPrism Docs — Comprehensive Coverage Plan

> Internal planning artifact (not published — Docusaurus only serves `docs/`).
> Source of truth = the MailPrism app code at `/Users/peterkrzyzek/Development/MailPrism`.
> Every page below must be **verified against code before writing** (zero AI-slop).

## Ground rules (apply to every page)

1. **Verify in code first.** Each implementer reads the listed source files before writing.
2. **No fabricated specifics.** Never hardcode prices or quota numbers — link to the live
   pricing page / in-app Billing. Tier *names* are OK (Free, Starter, Pro, Business,
   Enterprise, Lifetime).
3. **Only document what ships.** Flag/skip anything `coming_soon`, feature-flagged off,
   admin-only, or TODO. Admin routes (`/admin/*`) are NOT user-facing — exclude.
4. **Resolve these known conflicts by reading code:**
   - Processing timing: configurable **realtime / hourly / daily** (`/settings/scheduling`)
     + Gmail push. Don't claim "no polling."
   - "Open/pixel tracking": likely does NOT exist — response tracking is **reply-state**
     based (needs_action / awaiting_reply / pending / resolved / snoozed). Do NOT document
     open/click pixel tracking unless code in `types/response-tracking.ts` proves it.
   - Integrations (Slack/Notion/Zapier/Webhooks/ClickUp/Calendar): verify each
     status in `app/(wa)/(settings)/settings/integrations/*`; document shipped ones, mark
     "coming soon" only if the app itself shows that.
   - **Undo** (rule logs) and **rule testing** ARE real — document them.
5. **Match the existing docs** voice + components (`.mp-pill`, admonitions, tables, the
   DocCard grid). Neurodivergent-friendly: short chunks, tables, callouts, scannable.

## Sidebar / IA (target)

### 1. Getting Started  `/getting-started`
- `index` Welcome (home) — exists
- `quick-start` — exists; update timing claim
- `connecting-gmail` — exists; expand (scopes, multiple accounts, reauth)
- `first-rule` — exists; light update
- `dashboard` — exists; expand into a product tour (inbox, replies, rules, Cmd+K, settings)
- `onboarding` — NEW: the 3-step setup + tracking-profile noise defaults
  - src: `app/(wa)/onboarding/page.tsx`, `app/(wa)/onboarding/tracking-profile/*`

### 2. Your Inbox  `/inbox`
- `overview` — list, threading, account filter, search, sort, pagination, process mode
  - src: `types/inbox.ts`, `app/(wa)/(dashboard)/mail/inbox/*`, `components/mail/list/*`
- `reading-email` — detail view, quoted text, attachments, image blocking, AI analysis panel
  - src: `components/mail/EmailDetail.tsx`, `components/mail/detail/*`
- `email-actions` — reply/all/forward, archive, star, label, delete, read/unread, unsubscribe, snooze, open-in-gmail
  - src: `types/quick-actions.ts`, `types/unsubscribe.ts`, `components/mail/ConfigurableToolbar.tsx`
- `bulk-actions` — multi-select + bulk ops
  - src: `app/(wa)/(dashboard)/mail/inbox/use-inbox-bulk-actions.ts`, `types/inbox.ts`
- `composing` — compose panel, templates, AI suggestions, signatures, slash commands, drafts, account selector
  - src: `components/mail/compose/*`
- `labels` — apply/remove, label picker, user vs system labels
  - src: `components/mail/LabelPickerModal.tsx`, `lib/utils/label-utils.ts`
- `search-and-filters` — query syntax, filters
  - src: `components/mail/list/MailListPanel.tsx`
- `keyboard-shortcuts` — shortcuts + Command Palette (Cmd/Ctrl+K)
  - src: `lib/hooks/use-keyboard-shortcuts.ts`, `lib/commands/command-definitions.ts`, `lib/hooks/use-command-palette.ts`
- `toolbar` — configurable toolbar
  - src: `types/toolbar-config.ts`, `components/mail/ConfigurableToolbar.tsx`
- `quick-actions` — configurable quick actions + custom actions
  - src: `types/quick-actions.ts`, `app/(wa)/(settings)/settings/quick-actions/page.tsx`

### 3. Rules & Automation  `/rules`
- `overview` — exists; expand (execution model, processing frequency, priority, stop-processing, core rules)
- `conditions` — exists; MAJOR expand: all fields grouped (basic, content, status, timing, frequency, relationship, AI, response-tracking, labels) + operators + AND/OR/NOT/groups
  - src: `types/rules.ts`, `types/rules-ui-constants.ts`, `lib/constants/condition-fields.ts`
- `actions` — exists; MAJOR expand: all actions + options (delay, cancelIfReplied, priority, recurrence) + forward options/presets
  - src: `types/rules.ts`, `lib/constants/action-types.ts`
- `building-with-ai` — NEW: natural-language rule drafter
  - src: `components/rules/ai-rule-drafter.tsx`, `app/api/rules/generate-from-nl/route.ts`
- `testing` — NEW: test vs recent emails, test single email, "why didn't this match"
  - src: `components/rules/test-rule-card.tsx`, `app/api/rules/test*`
- `library` — exists; expand: categories, install/restore
  - src: `types/rules-templates.ts`, `app/(wa)/(dashboard)/rules/library/page.tsx`
- `multi-account` — NEW: applies-to scoping
  - src: `types/rules.ts` (applies_to, gmail_account_ids)
- `scheduling-recurrence` — NEW: date-range/time-based schedules + recurring actions
  - src: `types/time-based-rules.ts`
- `import-export` — NEW
  - src: `app/api/rules/export/route.ts`, `app/api/rules/import/route.ts`
- `suggestions` — NEW: AI rule suggestions from patterns
  - src: `app/(wa)/(dashboard)/suggestions/page.tsx`
- `best-practices` — exists

### 4. AI Features  `/ai`
- `overview` — exists; expand
- `classification` — NEW: category/urgency/sentiment/spam/automated/cold-outreach + confidence
  - src: `lib/ai/email-analyzer.ts`, `types/ai-classifications.ts`
- `custom-categories` — NEW: classifications manager, suggestions, metrics
  - src: `app/(wa)/(settings)/settings/ai-classifications/*`, `types/ai-classifications.ts`
- `smart-rules` — exists
- `preferences-tuning` — NEW: sensitivity, keywords, whitelist/blacklist, overrides, temperature, custom instructions
  - src: `types/ai-preferences.ts`
- `writing-profiles` — NEW: tone/formality/length for AI replies
  - src: `app/(wa)/(settings)/settings/profiles/page.tsx`
- `insights` — NEW
  - src: `components/mp/organisms/AIInsightsWidget.tsx`
- `summaries` — NEW: email summaries
  - src: `app/api/emails/[emailId]/summary/route.ts`
- `pattern-learning` — NEW: behavior learning, corrections
  - src: `app/(wa)/(settings)/settings/privacy/*`, `/api/pattern-learning/*`
- `privacy-and-consent` — exists (privacy-and-byok); split/expand
- `byok` — expand: providers (OpenAI/Anthropic + status of others), setup
  - src: `lib/services/byok-ai-service.ts`, `app/(wa)/(settings)/settings/integrations/{openai,anthropic}`
- `usage-and-cost` — NEW: operations/tokens/cost, BYOK %, providers
  - src: analytics ai-usage; `lib/utils/ai-usage-log.ts`

### 5. Response Tracking & Follow-ups  `/tracking`
- `overview` — exists (inbox/response-tracking); expand: 5 states, replies view
  - src: `types/response-tracking.ts`, `app/(wa)/(dashboard)/mail/replies/*`
- `modes` — NEW: Basic vs Advanced
- `profiles` — NEW: create, audit, retroactive
  - src: `app/(wa)/(settings)/settings/tracking-profile/*`
- `labels-and-sync` — NEW
  - src: `types/tracking-labels.ts`, `app/(wa)/(settings)/settings/tracking/*`
- `exemptions` — NEW
  - src: `types/tracking-exemptions.ts`
- `nudges-and-reminders` — exists; expand: Nudge Them / Remind Me flows, config, @Nudge label
  - src: `types/nudge-flows.ts`, `components/mail/NudgeButton.tsx`, `app/(wa)/(settings)/settings/nudges/*`
- `auto-responders` — NEW: vacation + after-hours
  - src: `types/auto-responder.ts`, `app/(wa)/(settings)/settings/auto-responder/*`

### 6. Contacts  `/contacts`
- `overview` — list, search, detail, import, create, reanalyze
  - src: `app/(wa)/(dashboard)/contacts/*`, `types/contacts.ts`
- `categories-and-relationships` — allowlist/denylist, cold/warm/established, VIP
  - src: `types/contacts.ts`

### 7. Analytics & Logs  `/analytics`
- `analytics` — exists; expand: time ranges, metrics, breakdown, top rules, action distribution, AI usage, CSV
- `per-rule-analytics` — NEW: time series, hourly heatmap, test-why, execute
  - src: `app/(wa)/(dashboard)/rules/[id]/analytics/page.tsx`
- `rule-logs-and-undo` — NEW: filters, expandable, AI feedback, **undo (grace period)**
  - src: `app/(wa)/(dashboard)/dashboard/rule-logs/*`, `app/api/history/[id]/undo/route.ts`

### 8. Productivity  `/productivity`  (templates + signatures)
- `templates` — canned responses, AI templates, variables
  - src: `types/email-templates.ts`, `app/(wa)/(settings)/settings/templates/*`
- `signatures` — NEW
  - src: settings/templates signatures section

### 9. Integrations  `/integrations`  (VERIFY each status)
- `overview` — what connects, statuses
- `calendar` — Google Calendar (if shipped)
- `slack`, `notion`, `zapier`, `webhooks`, `clickup` — ONE page or split; ONLY shipped ones
  - src: `app/(wa)/(settings)/settings/integrations/*`, `/api/clickup/*`

### 10. Account & Settings  `/account`
- `account-security` — exists; expand: profile, password, 2FA/TOTP, passkeys, sessions, recovery codes
  - src: `app/(wa)/(settings)/settings/{account,security}/*`
- `gmail-connection` — exists; expand: accounts, labels, sync, permissions, per-account
- `workspaces-and-teams` — NEW: members, roles, invitations, switching, deletion
  - src: `app/(wa)/(settings)/settings/workspace/*`
- `billing` — exists; expand: tiers, monthly/annual, Stripe portal, payment, invoices, usage, add-ons, lifetime codes (NO prices)
- `notifications` — NEW: digest, categories, per-category, delivery time
  - src: `app/(wa)/(settings)/settings/notifications/page.tsx`
- `privacy-and-data` — NEW: pattern learning, reading behavior, image blocking, activity log, export, deletion, GDPR
  - src: `app/(wa)/(settings)/settings/privacy/*`
- `appearance` — NEW: theme, density, font size, reduce motion, high contrast, system labels
  - src: `app/(wa)/(settings)/settings/appearance/page.tsx`
- `preferences` — exists; refocus on dashboard prefs + date-time + scheduling/quiet-hours + safety + forwarding
  - src: settings/{dashboard-prefs,date-time,scheduling,safety,forwarding}

### 11. Help  `/help`
- `faq` — exists; rewrite/expand against real features
- `troubleshooting` — exists; expand: Gmail reauth, rate limits, AI health, rules not firing
- `privacy-security` — exists; expand
- `glossary` — NEW: terms (rule, condition, action, thread state, nudge, BYOK, tracking label, etc.)
- `keyboard-shortcuts` — reference (or cross-link to inbox page)

## Build waves (each = parallel implementers, then review → verify → ship)

- Wave 0: sidebar + nav/footer config + section index descriptions (me)
- Wave 1: Getting Started + Your Inbox
- Wave 2: Rules & Automation
- Wave 3: AI Features
- Wave 4: Response Tracking + Contacts
- Wave 5: Analytics & Logs + Productivity + Integrations
- Wave 6: Account & Settings + Help
- Review wave: adversarial accuracy pass (verify claims vs code, hunt slop)
- Verify: `npx docusaurus build` (zero broken links), spot screenshots
- Ship: PR on `docs/comprehensive-coverage`

Total ≈ 60–70 pages.
