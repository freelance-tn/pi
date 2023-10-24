import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
    return (
        <div className="maw-w-sm p-10 flex space-y-10  flex-col md:flex-row items-center justify-around bg-[#252525]">
            <div className="flex flex-col md:flex-row text-gray-300 text-xl font-medium gap-6">
                <ul>
                    <Link href="https://minepi.com/white-paper/"><li>Pi Whitepapaer </li></Link>
                    <Link href="https://minepi.com/support/"> <li>Support & FAQ</li></Link>
                    <Link href="https://socialchain.app/tos"> <li>Terms of Service</li></Link>
                </ul>
                <ul>
                    <Link href="https://socialchain.app/privacy"> <li>Privacy Policy </li></Link>
                    <Link href="https://socialchain.app/developer_terms"> <li>Developer Terms of Use</li></Link>
                    <Link href="https://minepi.com/pi-trademark-guidelines/"> <li>Pi Trademark</li></Link>
                </ul>

            </div>
            <Image height={250} width={250} alt="Logo" src="/Pi-Network.png" />

        </div>
    )
}