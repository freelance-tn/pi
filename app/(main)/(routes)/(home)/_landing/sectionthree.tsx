import Link from "next/link";
import Image from "next/image";

const SectionThree = () => {
    return ( 
        <section className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="flex p-4 flex-col-reverse md:flex-row-reverse items-center justify-center ">
          <div className="space-y-2 max-w-xl">
            <h1 className="text-5xl text-yellow-500 font-semibold">
              Download the mobile app to start mining today! Join now.
            </h1>
            <p>
              Keep your money! Mining Pi is free. All you need is an invitation
              from an existing trusted member on the network. If you have an
              invitation you can download the mobile app below.
            </p>
            <Link href="https://play.google.com/store/apps/details?id=com.blockchainvault&pli=1">
              <Image
                src="/google_play.png"
                height={100}
                width={300}
                alt="phone"
              />
            </Link>
            <Link href="https://apps.apple.com/us/app/pi-network/id1445472541">
              <Image
                src="/apple_store.png"
                height={100}
                width={300}
                alt="phone"
              />
            </Link>
          </div>
          <div>
            <Image src="/699x1024.webp" height={600} width={400} alt="phone" />
          </div>
        </div>
      </section>
     );
}
 
export default SectionThree;