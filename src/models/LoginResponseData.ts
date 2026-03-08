import type User from "./User";

 export default interface LoginResponsetData{
    accessToken:string;
    user: User;
}