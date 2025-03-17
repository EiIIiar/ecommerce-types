export declare const role: Record<string, string>;
export type TKeyRole = keyof typeof role;
export type TValueRoles = (typeof role)[keyof typeof role];
export interface IUser {
    id: string;
    user: string;
    password: string;
    role: TValueRoles;
    token: string;
    expireAt: Date;
    createdAt: Date;
    updatedAt: Date;
}
export interface IUserCreate extends Omit<IUser, "id" | "token" | "createdAt" | "updatedAt" | "expireAt"> {
}
export interface IUserUpdate extends Partial<Omit<IUser, "id" | "createdAt" | "updatedAt" | "userName">> {
}
//# sourceMappingURL=index.d.ts.map