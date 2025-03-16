export declare const role: Record<string, string>;
export type TKeyRole = keyof typeof role;
export type TValueRoles = (typeof role)[keyof typeof role];
export interface IUser {
    id: string;
    userName: string;
    password: string;
    role: string;
    createdAt: Date;
    updatedAt: Date;
}
export interface IUserCreate extends Omit<IUser, "id" | "createdAt" | "updatedAt"> {
}
export interface IUserUpdate extends Partial<Omit<IUser, "id" | "createdAt" | "updatedAt" | "userName">> {
}
//# sourceMappingURL=index.d.ts.map