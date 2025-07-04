import React from "react";

const tabs = ["Airdrop", "Referrals", "Social", "Withdrawal"];

const ActivityTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex flex-wrap gap-2 border-b border-zinc-700 pb-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`text-sm px-4 py-2 rounded-b-lg transition-all ${
            activeTab === tab
              ? "text-green-400 border-t-1 border-green-400"
              : "text-zinc-400 hover:text-white"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default ActivityTabs;
