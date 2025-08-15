import React from "react";

const WithdrawalCard = ({ data }) => {
  if (!data) {
    return (
      <div className="bg-zinc-900 p-6 rounded-xl text-center text-zinc-400">
        No data available.
      </div>
    );
  }
  console.log(data);

  const { account, task, lastWithdrawal, totalWithdrawals } = data;

  const lastWithdrawalTime = lastWithdrawal.toNumber();

  return (
    <div className="max-w-6xl mx-auto mt-6 bg-black/30 p-6 rounded-xl shadow-md border border-zinc-800 text-white">
      <h2 className="text-lg font-semibold text-zinc-200 mb-4">
        Withdrawal Summary
      </h2>

      <div className="mb-3">
        <div className="text-sm text-zinc-400">Account</div>
        <div className="text-sm font-medium truncate">{account.toString()}</div>
      </div>

      <div className="mb-3">
        <div className="text-sm text-zinc-400">Task</div>
        <div className="text-sm font-medium capitalize">{task}</div>
      </div>

      <div className="mb-3">
        <div className="text-sm text-zinc-400">Last Withdrawal</div>
        <div className="text-sm font-medium">
          {new Date(lastWithdrawalTime * 1000).toISOString()}
        </div>
      </div>

       <div>
        <div className="text-sm text-zinc-400">Total Withdrawals</div>
        <div className="text-sm font-bold text-green-400">
          {(Number(totalWithdrawals) / 1e9).toLocaleString()} tokens
        </div>
      </div> 
    </div>
  );
};

export default WithdrawalCard;
