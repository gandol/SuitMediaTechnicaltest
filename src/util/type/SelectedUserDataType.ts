export type SelectedUserDataType = {
    fullName: string;
    email: string;
    website: string;
    avatar: string;
};

export type UserDataType = {
    name: string;
    selected: SelectedUserDataType | null;
};
