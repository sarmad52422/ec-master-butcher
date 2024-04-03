import { UserEndPoints } from "@/constants/end_points";
import { HttpClient } from "./httpclient";

export const CLientServices = {
    async getAllProducts() {
       return await HttpClient.getAllProducts(UserEndPoints.GET_PRODUCTS); 
},
    async getProductById(id:string) {
        return await HttpClient.getProductById(UserEndPoints.GET_PRODUCT_BY_ID(id));
    }

}