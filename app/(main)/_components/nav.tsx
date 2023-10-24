import Link from "next/link";

import { routes } from "@/app/(main)/_components/_const/routes"
export const Navv = () => {
  return (
    <div className="flex flex-row w-full gap-6">
      {routes.map((route) => (
        <div key={route.href}>
          <Link href={route.href} className="text-white">{route.label}</Link>
        </div>
      ))}
    </div>
  );
};
