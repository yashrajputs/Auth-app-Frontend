import type LoginData from "@/models/LoginData";
import type LoginResponsetData from "@/models/LoginResponseData";
import type User from "@/models/User";
import AuthService from "@/services/AuthService";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";


const LOCAL_key = "app_state";



//gobal Authstate

interface AuthState {
    accessToken: string | null;
    user: User | null;
    authStatus: boolean;
    authLoading: boolean;
    login: (loginData: LoginData) => Promise<void>;
    logout: (silent?: boolean) => Promise<void>;
    checkLogin: () => boolean;
    changeLocalLoginData: (accessToken: string, user: User, authStatus: boolean) => void;
}

const authService = new AuthService();

const useAuth = create<AuthState>()(
    persist((set, get) => ({
        accessToken: null,
        user: null,
        authStatus: false,
        authLoading: false,
        
        login: async (loginData) => {
            console.log("started login...");
            set({ authLoading: true });

            try {
                const response = await authService.loginUser(loginData);
                const data = response as LoginResponsetData;
                set({
                    accessToken: data.accessToken,
                    user: data.user,
                    authStatus: true,
                    authLoading: false
                });
            } catch (error) {
                set({ authLoading: false });
                throw error;
            }
        },
        
        logout: async (silent = false) => {
            set({ authLoading: true });
            
            try {
                if (!silent) {
                    await authService.logoutUser();
                }
            } catch (error) {
                console.error("Logout error:", error);
            } finally {
                set({
                    accessToken: null,
                    user: null,
                    authStatus: false,
                    authLoading: false
                });
            }
        },
        
checkLogin: () => {
            const { accessToken, authStatus } = get();
            return !!(accessToken && authStatus);
        },
        
        changeLocalLoginData: (accessToken, user, authStatus) => {
            set({ accessToken, user, authStatus });
        },
    }), {
        name: LOCAL_key,
        storage: createJSONStorage(() => localStorage),
        partialize: (state) => ({
            accessToken: state.accessToken,
            user: state.user,
            authStatus: state.authStatus,
        }),
    })
);

export default useAuth;
