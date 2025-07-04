import React from "react";
import { FaLeaf } from "react-icons/fa";

const ReferralSocialTable = ({Data}) => {
  return (
    <div className="overflow-x-auto bg-zinc-900 rounded-xl shadow-md mt-2">
      <table className="w-full text-sm text-left min-w-[700px]">
        <thead className="text-zinc-400 border-b border-zinc-700">
          <tr>
            <th className="py-3 px-4">#</th>
            <th>Account</th>
            <th>Task</th>
            <th>Date</th>
            <th>Rewards</th>
            <th>Claim Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Data.length === 0 ? (
            <tr>
              <td colSpan={7} className="text-center py-6 text-zinc-500">
                No records available.
              </td>
            </tr>
          ) : (
            Data.map((row, index) => (
              <tr
                key={index}
                className="border-b border-zinc-800 hover:bg-zinc-800/50 transition text-xs"
              >
                <td className="py-3 px-4 text-white">{index + 1}</td>
                <td className="text-white">{row.account}</td>
                <td className="text-white">{row.task}</td>
                <td className="text-white">{row.date}</td>
                <td className="text-green-400 flex items-center gap-1 my-3">
                  <FaLeaf /> {row.reward}
                </td>
                <td
                  className={
                    row.status === "Claimed"
                      ? "text-emerald-400"
                      : "text-orange-400"
                  }
                >
                  {row.status}
                </td>
                <td>
                  {row.claimed ? (
                    <button
                      disabled
                      className="bg-zinc-800 border border-zinc-600 text-zinc-500 px-3 py-1 rounded-md text-xs cursor-not-allowed"
                    >
                      Claimed
                    </button>
                  ) : (
                    <button className="bg-transparent border border-emerald-400 text-emerald-400 px-3 py-1 rounded-md text-xs hover:bg-emerald-500 hover:text-white transition">
                      Claim
                    </button>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ReferralSocialTable;
