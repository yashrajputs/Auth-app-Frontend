import { Chrome, Github } from "lucide-react";
import { Button } from "./ui/button";
import { NavLink } from "react-router";


function OAuth2Buttons() {
    return (
         <div className="space-y-3">
              <NavLink to={`${import.meta.env.VITE_BASE_URL || "http://localhost:8082"}/oauth2/authorization/github`} className={"block"}>
                <Button
                type="button"
                variant="outline"
                className="w-full flex cursor-pointer items-center justify-center gap-2 rounded-xl"
              >
                <Github className="h-4 w-4" /> Continue with GitHub
              </Button>
              </NavLink>

              <NavLink to={`${import.meta.env.VITE_BASE_URL || "http://localhost:8082"}/oauth2/authorization/google`}>
                <Button
                type="button"
                variant="outline"
                className="w-full flex cursor-pointer items-center justify-center gap-2 rounded-xl"
              >
                <Chrome className="h-4 w-4" /> Continue with Google
              </Button>

              </NavLink>
            </div>

    );
}

export default OAuth2Buttons;