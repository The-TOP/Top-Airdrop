import React from "react";
import { FaLeaf } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa6";

const WithdrawalTable = ({ Data }) => {
  return (
    <div className="overflow-x-auto bg-zinc-900 rounded-xl shadow-md mt-2">
      <table className="w-full text-sm text-left min-w-[700px]">
        <thead className="text-zinc-400 border-b border-zinc-700">
          <tr>
            <th className="py-3 px-4">#</th>
            <th>Account</th>
            <th>Task</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Fee ($0.006 SOL)</th>
            <th>Status</th>
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
                <td className="py-3 px-4 text-white ">{index + 1}</td>
                <td className="text-white">{row.account}</td>
                <td className="text-white">{row.task}</td>
                <td className="text-white">{row.date}</td>
                <td className="text-green-400 flex items-center gap-1 my-3">
                  <FaLeaf /> {row.amount}
                </td>
                <td className="">
                  
                  <span className=" text-white flex items-center gap-1 ms-2">
                    <FaDollarSign /> {row.fee}
                  </span>
                </td>
                <td
                  className={
                    row.status === "Success"
                      ? "text-emerald-400"
                      : "text-orange-400"
                  }
                >
                  {row.status}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default WithdrawalTable;
