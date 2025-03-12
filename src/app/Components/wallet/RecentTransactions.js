import Image from "next/image";

export default function RecentTransactions() {
  return (
    <div className=" items-center justify-center my-8">
      <div className="bg-[#333] p-4 rounded-xl shadow-inner shadow-black ">
        <div className="flex items-center gap-2 text-white my-5">
          <Image
            src="/Image/card-coin.png"
            alt="Recent Transactions"
            width={24}
            height={24}
            className="w-6 h-6"
          />
          <p className="text-[#9D9D9D] text-sm font-medium">
            Recent Transactions
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between font-normal text-sm text-white">
            <p>Money added to your wallet</p>
            <p className="text-[#7FD04F]">₹100</p>
          </div>
          <div className="flex justify-between text-white">
            <p>Money withdrawn from your wallet</p>
            <p className="text-[#FF4949]">₹360</p>
          </div>
        </div>
      </div>
    </div>
  );
}
