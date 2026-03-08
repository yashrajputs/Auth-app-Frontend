import useAuth from "@/auth/store";
import { Button } from "./ui/button";
import { NavLink, useNavigate } from "react-router";
import { use } from "react";

function Navbar() {

  const checkLogin =useAuth((state)=>state.checkLogin);
  const user = useAuth((state)=> state.user);
  const logout = useAuth((state)=> state.logout);
  const navigate = useNavigate();
  return (
    <nav className="py-5 md:py-0 flex md:flex-row flex-col gap-4 md:gap-0 md:h-14 justify-around items-center">
      
      <div className="font-semibold flex items-center gap-2">
       
        <NavLink to="/">
         <span className="inline-flex items-center justify-center h-6 w-6 rounded-md bg-gradient-to-r from-primary to-primary/40 text-white">
          A
        </span>
        </NavLink>

        <NavLink to="/">
        <span className="text-base tracking-tight">Auth App</span>
        </NavLink>
        
      </div>
      

      <div className="flex gap-4 items-center">
       {
        checkLogin() ? (
          <>
           <NavLink to={"/dashboard/profile"}>{user?.name}</NavLink>
          <Button onClick={() => {
            logout();
            navigate('/')
          }} size={"sm"} className="cursor-pointer" variant="outline">
            Logout
          </Button>
          </>
         ) : (
         <>
         <NavLink to="/">Home</NavLink>

        <NavLink to="/login">
          <Button size="sm" className="cursor-pointer" variant="outline">
            Login
          </Button>
        </NavLink>

        <NavLink to="/signup">
          <Button size="sm" className="cursor-pointer" variant="outline">
            Signup
          </Button>
        </NavLink>
        </>
         )
       }
      </div>

    </nav>
  );
}

export default Navbar;