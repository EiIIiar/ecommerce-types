export declare const role: Record<string, string>;
export type TKeyRole = keyof typeof role;
export type TValueRoles = (typeof role)[keyof typeof role];
export interface IUser {
    id: string;
    user: string;
    password: string;
    role: TValueRoles;
    token: string;
    expiresIn: string;
    createdAt: Date;
    updatedAt: Date;
}
export interface IUserCreate extends Omit<IUser, "id" | "token" | "createdAt" | "updatedAt" | "expiresIn"> {
}
export interface IUserUpdate extends Partial<Omit<IUser, "id" | "createdAt" | "updatedAt" | "user">> {
}
//# sourceMappingURL=index.d.ts.map