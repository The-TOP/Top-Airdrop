import React from "react";

const dummyReferrals = Array(5).fill({
  friend: "Cxao99.9a1c5",
  date: "10-03-25",
  reward: "+1",
  status: "Unclaimed",
});

const ReferralsTable = () => {
  return (
    <div className=" text-white p-4 rounded-xl shadow-md">
      <div className="p-2 md:px-4 bg-white/2 rounded-t-2xl my-1">
        <h3 className="text-white font-stretch-condensed text-xl font-semibold tracking-wider mb-3">
          Referrals
        </h3>
        <p className="text-sm text-zinc-400 mb-4">
          Help grow the community and get rewarded!
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-[600px] w-full text-sm text-left">
          <thead className="text-zinc-400 border-b border-zinc-700 py-2 bg-white/5 rounded-b-2xl my-2">
            <tr className="">
              <th className="py-2 px-4">#</th>
              <th>My Friends</th>
              <th>Date</th>
              <th>Rewards</th>
              <th>Claim Status</th>
              {/* <th>Action</th> */}
            </tr>
          </thead>
          <tbody>
            {dummyReferrals.map((row, i) => (
              <tr
                key={i}
                className="border-b border-zinc-800 hover:bg-zinc-800/50 transition"
              >
                <td className="py-2 md:py-3 px-4 my-1">{i + 1}</td>
                <td>{row.friend}</td>
                <td>{row.date}</td>
                <td className="text-green-400">{row.reward}</td>
                <td className="text-yellow-400">{row.status}</td>
                {/* <td>
                  <button className="bg-green-600 text-white px-3 py-1 rounded-md text-xs hover:bg-green-500">
                    View
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReferralsTable;
