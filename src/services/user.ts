import { UserEndPoints } from "@/constants/end_points";
import { HttpClient } from "./httpclient";

export const CLientServices = {
    async getAllProducts() {
        return await HttpClient.getAllProducts(UserEndPoints.GET_PRODUCTS);
    },
    async getProductById(id: string) {
        return await HttpClient.getProductById(UserEndPoints.GET_PRODUCT_BY_ID(id));
    },
    async login(data: any) {
        return await HttpClient.login(UserEndPoints.LOGIN, data);
    },
    async signup(data: any) {
        return await HttpClient.signup(UserEndPoints.SIGNUP, data);
    },
    async getAllCategories() {
        return await HttpClient.getAllCategories(UserEndPoints.GET_ALL_CATEGORIES);
    },
    async getProductByCategory(name: string) {
        return await HttpClient.getProductByCategory(UserEndPoints.GET_PRODUCT_BY_CATEGORY(name));
    },
};
