// Shared demo persona + ids. All people/companies are fictional.
export const USER_ID = "8f2c1a4e-5b6d-4c7e-9f10-2a3b4c5d6e7f";
export const WORKSPACE_ID = "3a7e9c21-4b8d-4f6a-9e2c-7d1b5a3c9e40";
export const GMAIL_ACCOUNT_ID = "c41d2e8f-6a9b-4c3d-8e7f-1a2b3c4d5e6f";
export const GMAIL_ACCOUNT_2_ID = "d52e3f90-7bac-4d4e-9f80-2b3c4d5e6f70";
export const USER = { name: "Jordan Avery", email: "jordan@northwind.studio", company: "Northwind Studio" };
export const LABEL_IDS = {
  needs_response: "11111111-aaaa-4bbb-8ccc-000000000001",
  awaiting_reply: "11111111-aaaa-4bbb-8ccc-000000000002",
  fyi: "11111111-aaaa-4bbb-8ccc-000000000003",
  scheduled: "11111111-aaaa-4bbb-8ccc-000000000004",
};
export const iso = (minsAgo) => new Date(Date.now() - minsAgo * 60000).toISOString();
