import React, { useState } from "react";

import AirdropTable from "../component/activity/AirdropTable";
import ActivityTabs from "../component/activity/ActivityTabs";
import ReferralSocialTable from "../component/activity/ReferralSocialTable";
import WithdrawalTable from "../component/activity/WithdrawalTable";
import profile from "../img/Pprofile.png";


const Referrals = [
  {
    account: "Cxae99...8ac5",
    task: "Referral",
    date: "10-03-25",
    reward: "+1",
    status: "Unclaimed",
    claimed: false,
    profile: profile,
  },
  {
    account: "Cxae99...8ac5",
    task: "Referral",
    date: "10-03-25",
    reward: "+1",
    status: "Unclaimed",
    claimed: false,
    profile: profile,
  },
  {
    account: "Cxae99...8ac5",
    task: "Referral",
    date: "10-03-25",
    reward: "+1",
    status: "Unclaimed",
    claimed: false,
    profile: profile,
  },
  {
    account: "Cxae99...8ac5",
    task: "Referral",
    date: "10-03-25",
    reward: "+1",
    status: "Unclaimed",
    claimed: false,
    profile: profile,
  },
  {
    account: "Cxae99...8ac5",
    task: "Referral",
    date: "10-03-25",
    reward: "+1",
    status: "Unclaimed",
    claimed: false,
    profile: profile,
  },
  {
    account: "Cxae99...8ac5",
    task: "Referral",
    date: "10-03-25",
    reward: "+1",
    status: "Claimed",
    claimed: true,
    profile: profile,
  },
  {
    account: "Cxae99...8ac5",
    task: "Referral",
    date: "10-03-25",
    reward: "+1",
    status: "Claimed",
    claimed: true,
    profile: profile,
  },
];

const Withdrawal = [
  {
    account: "Cxae99...8ac5",
    task: "withdrawal",
    date: "10-03-25",
    amount: "5,000",
    fee: "0.00004286",
    status: "Success",
    profile: profile,
  },
  {
    account: "Cxae99...8ac5",
    task: "withdrawal",
    date: "10-03-25",
    amount: "5,000",
    fee: "0.00004286",
    status: "Success",
    profile: profile,
  },
  {
    account: "Cxae99...8ac5",
    task: "withdrawal",
    date: "10-03-25",
    amount: "5,000",
    fee: "0.00004286",
    status: "Success",
    profile: profile,
  },
  {
    account: "Cxae99...8ac5",
    task: "withdrawal",
    date: "10-03-25",
    amount: "5,000",
    fee: "0.00004286",
    status: "Success",
    profile: profile,
  },
  {
    account: "Cxae99...8ac5",
    task: "withdrawal",
    date: "10-03-25",
    amount: "5,000",
    fee: "0.00004286",
    status: "Success",profile:profile
  },
];

const Airdrop = [
  {
    account: "Cxao99..9a1c5",
    task: "Welcome Airdrop",
    date: "10-02-25",
    reward: "+5 000 000",
    status: "Claimed",profile:profile
  },
  {
    account: "Cxao99..9a1c5",
    task: "Account Verification",
    date: "10-03-25",
    reward: "+5 000 000",
    status: "Claimed",profile:profile
  },
];

/* Social: [],
  Withdrawal: [], */

const Activity = () => {
  const [activeTab, setActiveTab] = useState("Airdrop");

  return (
    <div className="w-full p-3 md:p-6 pb-10 space-y-6">
      <div>
        <h2 className="text-white text-xl font-semibold mb-1">Activity</h2>
        <p className="text-sm text-zinc-400">
          View all your airdrop actions in one place
        </p>
      </div>

      <ActivityTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "Airdrop" && <AirdropTable Data={Airdrop} />}
      {activeTab === "Referrals" && <ReferralSocialTable Data={Referrals} />}
      {activeTab === "Social" && <ReferralSocialTable Data={Referrals} />}
      {activeTab === "Withdrawal" && <WithdrawalTable Data={Withdrawal} />}
    </div>
  );
};

export default Activity;
