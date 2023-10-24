"use client";

import { SidebarItem } from "./sidebar-item";
import { routes } from "@/app/(main)/_components/_const/routes"
import { Social } from "./social";


export const SidebarRoutes = () => {
 
    return (
        <div className="flex flex-col w-full">
            {routes.map((route) =>( 
                <SidebarItem
                key={route.href}               
                label={route.label}
                href={route.href}
                />
            ))}       
            <Social />
        </div>
    )
};