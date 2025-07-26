import React, { useContext, useEffect, useState } from "react";

import AirdropTable from "../component/activity/AirdropTable";
import ActivityTabs from "../component/activity/ActivityTabs";
import ReferralSocialTable from "../component/activity/ReferralSocialTable";
import WithdrawalTable from "../component/activity/WithdrawalTable";
import profile from "../img/Pprofile.png";
import myWalletContext from "../context/WalletContext1";

const Referrals = [
  /* {
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
  }, */
];

const Withdrawal = [
  /*  {
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
    status: "Success",
    profile: profile,
  }, */
];

/* const Social = [ {
    account: "Cxae99...8ac5",
    task: "Referral",
    date: "10-03-25",
    reward: "+1",
    status: "Unclaimed",
    claimed: false,
    profile: profile,
  },] */

const Activity = () => {
  const [activeTab, setActiveTab] = useState("Airdrop");

  const { handleFetchUserAccount, handleUserTasks } =
    useContext(myWalletContext);
  const [accountData, setAccountData] = useState([]);
  const [taskStatus, setTaskStatus] = useState([]);
  const address = accountData.user?.toString();

  const Airdrop = [
    {
      account: address
        ? address.slice(0, 5) + "...." + address.slice(-4)
        : "xxxxx....xxxx",

      task: "Welcome Airdrop",

      date: accountData.dateRegistered
        ? new Date(
            Number(accountData.dateRegistered.toString()) * 1000
          ).toLocaleDateString("en-GB")
        : "loadin...",

      reward: "+50 000",
      status: taskStatus[0] ? "Claimed" : "UnClaimed",

      profile: profile,
    },

    {
      account: address
        ? address.slice(0, 5) + "...." + address.slice(-4)
        : "xxxxx....xxxx",

      task: "Account Verification",

      date: accountData.dateRegistered
        ? new Date(
            Number(accountData.dateRegistered.toString()) * 1000
          ).toLocaleDateString("en-GB")
        : "loadin...",

      reward: "+50 000 ",
      status: taskStatus[3] ? "Claimed" : "UnClaimed",
      profile: profile,
    },
  ];

  const Social = [
    {
      account: address
        ? address.slice(0, 5) + "...." + address.slice(-4)
        : "xxxxx....xxxx",

      task: "Join & Follow (X) ",
      date: accountData.dateRegistered
        ? new Date(
            Number(accountData.dateRegistered.toString()) * 1000
          ).toLocaleDateString("en-GB")
        : "loadin...",

      reward: "+10 000",
      status: taskStatus[1] ? "Claimed" : "UnClaimed",
      claimed: taskStatus[1],
      profile: profile,
    },

    {
      account: address
        ? address.slice(0, 5) + "...." + address.slice(-4)
        : "xxxxx....xxxx",

      task: "Join Our Telegram  ",
      date: accountData.dateRegistered
        ? new Date(
            Number(accountData.dateRegistered.toString()) * 1000
          ).toLocaleDateString("en-GB")
        : "loadin...",

      reward: "+10 000",
      status: taskStatus[2] ? "Claimed" : "UnClaimed",
      claimed: taskStatus[2],
      profile: profile,
    },
    {
      account: address
        ? address.slice(0, 5) + "...." + address.slice(-4)
        : "xxxxx....xxxx",

      task: "Join Telegram Channel ",
      date: accountData.dateRegistered
        ? new Date(
            Number(accountData.dateRegistered.toString()) * 1000
          ).toLocaleDateString("en-GB")
        : "loadin...",

      reward: "+10 000",
      status: taskStatus[3] ? "Claimed" : "UnClaimed",
      claimed: taskStatus[3],
      profile: profile,
    },
    {
      account: address
        ? address.slice(0, 5) + "...." + address.slice(-4)
        : "xxxxx....xxxx",

      task: "Join Our Discord ",
      date: accountData.dateRegistered
        ? new Date(
            Number(accountData.dateRegistered.toString()) * 1000
          ).toLocaleDateString("en-GB")
        : "loadin...",

      reward: "+10 000",
      status: taskStatus[4] ? "Claimed" : "UnClaimed",
      claimed: taskStatus[4],
      profile: profile,
    },
    {
      account: address
        ? address.slice(0, 5) + "...." + address.slice(-4)
        : "xxxxx....xxxx",

      task: "Subscribe Our YouTube",
      date: accountData.dateRegistered
        ? new Date(
            Number(accountData.dateRegistered.toString()) * 1000
          ).toLocaleDateString("en-GB")
        : "loadin...",

      reward: "+10 000",
      status: taskStatus[5] ? "Claimed" : "UnClaimed",
      claimed: taskStatus[5],
      profile: profile,
    },
  ];

  useEffect(() => {
    const data = async () => {
      try {
        const result = await handleFetchUserAccount();
        const status = await handleUserTasks();
        /* console.log(result.user); */
        setAccountData(result);
        setTaskStatus(status);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    data();
  }, []);

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
      {activeTab === "Social" && <ReferralSocialTable Data={Social} />}
      {activeTab === "Withdrawal" && <WithdrawalTable Data={Withdrawal} />}
    </div>
  );
};

export default Activity;
