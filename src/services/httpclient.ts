import axios from "axios";

export class HttpClient {
    static baseUrl: string = "http://localhost:3000";
  
    static async getAllProducts(url: string) {
        try {
          const response = await axios.get(this.baseUrl+url, {
            headers: {
              "Content-Type": "application/json",
            },
          });
    
          if (response?.status === 200) {
            return { data: response.data };
          } else {
            return { error: response?.data?.error };
          }
        } catch (e) {
          return { error: e };
        }
      }
}