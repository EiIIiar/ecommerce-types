export const role = {
  admin: "admin",
  user: "user",
} as const;

export type TKeyRole = keyof typeof role;

export type TValueRoles = (typeof role)[keyof typeof role];
