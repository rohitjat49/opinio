export default function RecentTransactions() {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center">
        <div className="bg-[#111] p-4 rounded-xl shadow-inner shadow-gray-800 w-80">
          {/* Header */}
          <div className="flex items-center gap-2 text-white mb-3">
            <span className="text-xl">📜</span>
            <p className="text-gray-300">Recent Transactions</p>
          </div>
  
          {/* Transaction List */}
          <div className="space-y-2">
            <div className="flex justify-between text-white">
              <p>Money added to your wallet</p>
              <p className="text-green-400">₹100</p>
            </div>
            <div className="flex justify-between text-white">
              <p>Money withdrawn from your wallet</p>
              <p className="text-red-500">₹360</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  