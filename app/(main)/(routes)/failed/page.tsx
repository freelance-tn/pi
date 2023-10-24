import Link from "next/link";
import Image from "next/image";

const Failed = () => {
  return (
    <div className="p-4 min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-md text-center flex flex-col items-center md:w-1/2 ">
        <Image src="/err.png" alt="error" width={200} height={200} />

        <h1 className="text-2xl font-bold mb-4 text-red-500">
          Access Denied: Pi Network Wallet
        </h1>

        <p className="mb-4">
          We&apos;re sorry, but we couldn&apos;t grant access to your Pi Network Wallet.
        </p>

        <h2 className="text-xl font-semibold mb-4">Potential Reasons:</h2>

        <ul className="list-disc list-inside mb-4 text-left">
          <li>
            <strong>Incorrect Passphrase:</strong> Ensure that you&apos;ve entered
            all 24 words of your passphrase correctly and in the right sequence.
          </li>
          <li>
            <strong>KYC Verification Pending:</strong> You won&apos;t have access to
            the mainnet if you haven&apos;t completed the Know Your Customer (KYC)
            verification process. This verification ensures the safety and
            security of all our members.
          </li>
        </ul>

        <p className="mb-4">
          If you believe KYC might be the issue, please complete your
          verification. Should you continue to face challenges, our support team
          is here to help. Thank you for your patience and understanding.
        </p>

        <div className="my-4">
          <Link href="/">
            <button className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600">
              Back to Home
            </button>
          </Link>
        </div>

        <p className="mt-6 italic">
          Warm regards, <br />
          Pi Network Support Team
        </p>
      </div>
    </div>
  );
};

export default Failed;
