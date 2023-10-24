import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Link href="/">
        <Image height={150} width={150} alt="Logo" src="/Pi-Network.png" />
      </Link>
    </div>
  );
};
