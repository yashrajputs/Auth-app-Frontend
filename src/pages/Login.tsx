import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Github, Chrome, CheckCircleIcon } from "lucide-react"
import React, { useState, type FormEvent } from "react"
import type LoginData from "@/models/LoginData"
import toast from "react-hot-toast"
import AuthService from "@/services/AuthService";
import { useNavigate } from "react-router";
import { Alert, AlertTitle } from "@/components/ui/alert"
import { Spinner } from "@/components/ui/spinner"
import useAuth from "@/auth/store"
import OAuth2Buttons from "@/components/OAuth2Buttons"

const authService = new AuthService();

function Login() {
  const [loginData, setLoginData]=useState<LoginData>({
    email:"",
    password:"",
    refressToken: "",
    expiresIn: 0,
  });


 const [loading, setLoadign] = useState<boolean>(false);
 const [error, setError] =useState<any>(null);
const navigate = useNavigate();
 const login = useAuth(state=>state.login);

 const handleInputChange=(event:React.ChangeEvent<HTMLInputElement>)=>{

  setLoginData({
    ...loginData,
    [event.target.name]:event.target.value,
  });
 };

 const handleFromSubmit = async (event: FormEvent)=>{
  event.preventDefault();


   if(loginData.email.trim() === ""){
      toast.error("Input required !");
      return;
    }
    if(loginData.password.trim() === ""){
      toast.error("Input required !");
      return;
    }
  //console.log(event.target);
  //console.log(loginData);
      try{
      setLoadign(true);
      //const result = await authService.loginUser(loginData);

      //login function : useAuth
     await login(loginData);

     
      toast.success("Login successful!");
      //console.log(" Login successful:", result);
      
      setLoginData({
        email:"",
        password:"",
        refressToken: "",
        expiresIn: 0,
      });
      navigate("/dashboard");
    } catch(error: any){
      console.error("Login failed:");
      
      toast.error("Login failed!");
      if(error?.status==400){
        setError(error);
      }else{
        setError(error);
      }
    } finally {
      setLoadign(false);
    }
 };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-black dark:via-slate-950 dark:to-slate-900 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-xl">
          <CardContent className="space-y-6">
            {/* Header */}
            <div className="text-center">
              <h2 className="text-2xl font-bold">Welcome Back</h2>
              <p className="text-slate-600 dark:text-gray-400">Sign in to your account</p>
            </div>

{/* Social Login Buttons */}
           <OAuth2Buttons />

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700" />
              <span className="text-xs text-slate-500">OR CONTINUE WITH</span>
              <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700" />
            </div>
            {/* error section */}
            {
              error && (
                            <div className="mt-4">
              <Alert variant={"destructive"}>
                <CheckCircleIcon/>
                <AlertTitle>{error?.response ?error?.response?.data?.message: error?.message}</AlertTitle>
              </Alert>
            </div>
              )
            }


            {/* Form */}
            <form onSubmit={handleFromSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input type="email" placeholder="Enter your email" 
                name="email"
                value={loginData.email}
                onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Password</label>
                <Input type="password" placeholder="Enter your password" 
                name="password"
                value={loginData.password}
                onChange={handleInputChange}/>
              </div>

              <Button disabled={loading} 
              className="w-full cursor-pointer rounded-xl text-lg">
                {loading? (<>
                <Spinner/> 
                Please wait...
                </>) : (
                  "Login"
                  )}
              </Button>
            </form>

            {/* Footer */}
            <p className="text-center text-sm text-slate-600 dark:text-gray-400">
              Don't have an account? 
              <span className="font-semibold cursor-pointer ml-1 hover:text-indigo-500">
                Sign up
              </span>
            </p>

          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

export default Login
