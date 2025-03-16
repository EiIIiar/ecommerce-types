// role
export const role: Record<string, string> = {
  admin: "admin",
  user: "user",
} as const;

export type TKeyRole = keyof typeof role;

export type TValueRoles = (typeof role)[keyof typeof role];

// user
export interface IUser {
  id: string;
  userName: string;
  password: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}

// Interface for create (id, createdAt, and updatedAt are omitted)
export interface IUserCreate extends Omit<IUser, "id" | "createdAt" | "updatedAt"> {}

// Interface for update (userName is omitted, other fields are optional)
export interface IUserUpdate
  extends Partial<Omit<IUser, "id" | "createdAt" | "updatedAt" | "userName">> {}
