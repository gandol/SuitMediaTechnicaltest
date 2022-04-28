export type UserDataType = {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    avatar: string;
    latitude: number;
    longitude: number;
};

export type UserReponseType = {
    page: number;
    total: number;
    total_pages: number;
    data: UserDataType[];
};
