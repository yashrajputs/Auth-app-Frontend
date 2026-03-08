import type RegisterData from "@/models/RegisterData"
import apiClient from "@/Config/ApiClient"
import type LoginData from "@/models/LoginData";
import type LoginResponsetData from "@/models/LoginResponseData";


class AuthService {

  // Register user
 async registerUser(signupData: RegisterData) {
    const response = await apiClient.post(`/auth/register`, signupData);
    return response.data;
  };

  //login
  async loginUser(loginData: LoginData) {
    const response = await apiClient.post<LoginResponsetData>(`/auth/login`, loginData);
    return response.data;
  };

  async logoutUser() {
    try {
      await apiClient.post(`/auth/logout`); // optional depending on backend
    } catch (error) {
      console.warn("Logout API failed, clearing local session.");
    }

    // Remove stored token
    localStorage.removeItem("token");
  }


//get current login user

// refresh token
async refreshToken() {
    const response = await apiClient.post<LoginResponsetData>(`/auth/refresh`);
    return response.data;
}

}

export default AuthService;