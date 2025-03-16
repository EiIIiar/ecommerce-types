export = EcomTypes;
declare namespace EcomTypes {
    const role: Readonly<{
        admin: "admin";
        user: "user";
    }>;
    type TKeyRole = keyof typeof role;
    type TValueRoles = (typeof role)[keyof typeof role];
    interface IUser {
        id: string;
        userName: string;
        password: string;
        role: string;
        createdAt: Date;
        updatedAt: Date;
    }
    interface IUserCreate extends Omit<IUser, "id" | "createdAt" | "updatedAt"> {
    }
    interface IUserUpdate extends Partial<Omit<IUser, "id" | "createdAt" | "updatedAt" | "userName">> {
    }
}
//# sourceMappingURL=index.d.ts.map