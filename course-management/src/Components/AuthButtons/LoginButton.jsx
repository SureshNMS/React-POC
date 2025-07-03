import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const LoginButton = () => {
  const location = useLocation();
  // Inline reusable NavItem component
  function AuthButton({ to, children, defaultBg = false }) {
    const currentPath = location.pathname;
    const isAnyAuthLinkActive = 
      currentPath === '/auth/signup' || currentPath === '/auth/login';
    return(
      <NavLink
        to={to}
        className={({ isActive }) =>{
          let base = 'px-3 py-1 text-black rounded';
          let active = "bg-[#FF9500] font-semibold text-white";
          let hover = "hover:bg-[#E0E0E0]";

          if(defaultBg) {
            if(!isAnyAuthLinkActive) {
              return `${base} ${active}`;
            }
            return `${base} ${isActive ? active : hover}`;
          }

          return `${base} ${isActive ? active : hover}`;
        }}
      >
        {children}
      </NavLink>
    )
  };

  return (
    <nav className="flex items-center space-x-4 ml-auto text-sm">
      <AuthButton to="auth/signup">Sign Up</AuthButton>
      <AuthButton to="auth/login" defaultBg>Login</AuthButton>
    </nav>
  );
}

export default LoginButton;
