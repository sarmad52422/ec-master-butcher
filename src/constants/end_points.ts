export const UserEndPoints = {
    GET_PRODUCTS: "/products",
    GET_PRODUCT_BY_ID:(id:string) => `/products/${id}`,
    LOGIN:"/auth/login",
    SIGNUP:"auth/signup",
    GET_ALL_CATEGORIES:"/category/",
    GET_PRODUCT_BY_CATEGORY:(name:string) => `/category/${name}`,
};