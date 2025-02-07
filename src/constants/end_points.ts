export const UserEndPoints = {
    GET_PRODUCTS: "/products",
    GET_PRODUCT_BY_ID:(id:string) => `/products/${id}`,
    LOG_IN:"/auth/login",
    SIGN_UP:"/auth/signup",
    GET_ALL_CATEGORIES:"/categories",
    LOG_OUT:"/auth/logout",
    GET_PRODUCT_BY_CATEGORY:(name:string) => `/category/${name}`,
};