import React from "react";
import { FaLeaf } from "react-icons/fa";
import token from "../../img/miniLogo.png";
const AirdropTable = ({ Data }) => {
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
        <tbody className="bg-white/2">
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
                className="border-b text-white text-xs border-zinc-800 hover:bg-zinc-800/50 transition bg-black "
              >
                <td className="py-3 px-4 ">{index + 1}</td>
                <td className=" flex items-center my-3 gap-1">
                  <img src={row.profile} alt="profile" className="w-5" />
                  {row.account}
                </td>
                <td>{row.task}</td>
                <td>{row.date}</td>
                <td className="text-white flex items-center just my-3 gap-1">
                  <img src={token} alt="rewards" className="w-5 " />
                  {row.reward}
                </td>
                <td className="text-green-500">{row.status}</td>
                <td>
                  <button
                    disabled
                    className="bg-zinc-800 border border-zinc-600 text-zinc-500 px-3 py-1 rounded-md text-xs cursor-not-allowed"
                  >
                    Claimed
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AirdropTable;
