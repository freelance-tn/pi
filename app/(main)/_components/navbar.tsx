import { MobileSidebar } from "./mobile-sidebar";
import { Navv } from "./nav";
import { Logo } from "./logo";
import { Social } from "./social";

export const Navbar = () => {
  return (
    <div className="p-2 border-b h-full flex items-center justify-around bg-[#361c54] ">
      <Logo />
      <div className="hidden md:flex md:items-center md:gap-4">
        <Navv />
        <Social />    
      </div>
      <div className="flex space-x-1">
       
        <MobileSidebar />       
      </div>
    </div>
  );
};
