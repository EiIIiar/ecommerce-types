export declare const role: {
    readonly admin: "admin";
    readonly user: "user";
};
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
//# sourceMappingURL=user.d.ts.map