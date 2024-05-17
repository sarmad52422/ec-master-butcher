import axios from "axios";
import Cookies from "js-cookie"; // Import Cookies library

export class HttpClient {
  // static baseUrl: string = "http://localhost:3000";
  static baseUrl: string = "https://e-com-backend-1zsb.onrender.com";

  static async getAllProducts(url: string) {
    try {
      const response = await axios.get(this.baseUrl + url, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response?.status === 200) {
        console.log(response.data);
        return { data: response.data };
      } else {
        return { error: response?.data?.error };
      }
    } catch (e) {
      return { error: e };
    }
  }

  static async getProductById(url: string) {
    try {
      const response = await axios.get(this.baseUrl + url, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response?.status === 200) {
        console.log(response.data);
        return { data: response.data };
      } else {
        return { error: response?.data?.error };
      }
    } catch (e) {
      return { error: e };
    }
  }

  static async login(url: string, data: any) {
    try {
      const response = await axios.post(this.baseUrl + url, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response?.status === 201) {
        console.log(response.data);
        return { data: response.data };
      } else {
        return { error: response?.data?.error };
      }
    } catch (e) {
      return { error: e };
    }
  }

  static async signup(url: string, data: any) {
    try {
      const response = await axios.post(this.baseUrl + url, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 201) {
        return { data: response.data };
      } else {
        return { error: response.data.error };
      }
    } catch (error) {
      return { error: "Failed to sign up. Please try again." };
    }
  }

  static async Logout(url: string) {
    try {
      const token = Cookies.get("jwt");
      if (!token) {
        throw new Error("JWT token not found in cookies");
      }

      const response = await axios.post(
        this.baseUrl + url,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const newToken = response.data.newToken;
      if (newToken) {
        Cookies.set("jwt", newToken);
      }

      if (response?.status === 200) {
        return { data: response.data };
      } else {
        return { error: response?.data?.error };
      }
    } catch (error) {
      return { error: "Failed to logout. Please try again." };
    }
  }

  static async getAllCategories(url: string) {
    try {
      const response = await axios.get(this.baseUrl + url, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response?.status === 200) {
        console.log(response.data);
        return { data: response.data };
      } else {
        return { error: response?.data?.error };
      }
    } catch (e) {
      return { error: e };
    }
  }
  static async getProductByCategory(url: string) {
    try {
      const response = await axios.get(this.baseUrl + url, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response?.status === 200) {
        console.log(response.data);
        return { data: response.data };
      } else {
        return { error: response?.data?.error };
      }
    } catch (e) {
      return { error: e };
    }
  }
}
