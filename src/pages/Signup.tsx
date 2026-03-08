import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Github, Chrome, Upload, CheckCheckIcon } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import type RegisterData from "@/models/RegisterData";
import AuthService from "@/services/AuthService";
import { useNavigate } from "react-router";
import { Spinner } from "@/components/ui/spinner";
import { Alert, AlertTitle } from "@/components/ui/alert";
import OAuth2Buttons from "@/components/OAuth2Buttons";

// Create instance of AuthService
const authService = new AuthService();

function Signup() {
  const [data, setData] = useState<RegisterData>({
    name:"",
    email:"",
    password:"",
    image:""
  });
 const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] =useState<any>(null);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if(data.name.trim() === ""){
      toast.error("Name is required !");
      return;
    }
    if(data.email.trim() === ""){
      toast.error("Email is required !");
      return;
    }
    if(data.password.trim() === ""){
      toast.error("Password is required !");
      return;
    }
    if(data.image.trim() === ""){
      toast.error("Image is required !");
      return;
    }
    
    // Form submit for registrations
    try{
      setLoading(true);
      const result = await authService.registerUser(data);
      console.log("Registration successful:", result);
      toast.success("Registration successful!");
      setData({
        name:"",
        email:"",
        password:"",
        image:""
      });
      navigate("/login");
    } catch(error: any){
      console.error("Registration failed:", error);
      toast.error(error?.response?.data?.message || "Registration failed!");
    } finally {
      setLoading(false);
    }
  };
  
  //text input, email, passwoard, number, textarea
  //handling form change
  
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Handle file input separately
    if (event.target.type === "file") {
      const file = event.target.files?.[0];
      if (file) {
        setData((value) => ({
          ...value,
          image: file.name,
        }));
      }
    } else {
      setData((value) => ({
        ...value,
        [event.target.name]: event.target.value,
      }));
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
              <h2 className="text-2xl font-bold">Create Account</h2>
              <p className="text-slate-600 dark:text-gray-400">Join us today</p>
            </div>

{/* Social Login Buttons */}
           <OAuth2Buttons/>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700" />
              <span className="text-xs text-slate-500">OR CONTINUE WITH</span>
              <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700" />
            </div>


             {
              error && (
                            <div className="mt-4">
              <Alert variant={"destructive"}>
                <CheckCheckIcon/>
                <AlertTitle>{error?.response ?error?.response?.data?.message: error?.message}</AlertTitle>
              </Alert>
            </div>
              )
            }

            {/* Form */}
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Name</label>
                <Input placeholder="Enter your name" name="name" value={data.name} onChange={handleInputChange}/>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input id="name" type="email" placeholder="Enter your email" name="email" value={data.email} onChange={handleInputChange}/>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Password</label>
                <Input type="password" placeholder="Enter your password" name="password" value={data.password} onChange={handleInputChange}/>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Upload className="h-4 w-4" /> Profile Image
                </label>
                <Input type="file" name="image" onChange={handleInputChange} />
              </div>

              <Button disabled={loading} className="w-full cursor-pointer rounded-xl text-lg">
                {loading? (<>
                <Spinner/> 
                Please wait...
                </>) : (
                  "Sign up"
                  )}
              </Button>
            </form>

            {/* Footer */}
            <p className="text-center text-sm text-slate-600 dark:text-gray-400">
              Already have an account? 
              <span className="font-semibold cursor-pointer ml-1 hover:text-indigo-500">
                Sign in
              </span>
            </p>

          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

export default Signup
