import React from "react";

const ReferralCard = ({ data }) => {
  if (!data) {
    return (
      <div>
        <div className="p-2 md:px-4 bg-white/2 rounded-t-2xl my-1">
          <h3 className="text-white font-stretch-condensed text-xl font-semibold tracking-wider mb-3">
            Referrals
          </h3>
          <p className="text-sm text-zinc-400 mb-4">
            Help grow the community and get rewarded!
          </p>
        </div>
        <div className="bg-zinc-900 p-6 rounded-xl text-center text-zinc-400">
          No data available
        </div>
      </div>
    );
  }
  console.log(data);

  const referralSource = data?.referralSource;
  const referralsMade = data?.referralsMade;

  const account = referralsMade?.user;
  const referees = referralsMade?.referralsCount;
  const earn = referees * 10000;

  return (
    <div className="max-w-6xl min-h-5/6  mx-auto mt-6 bg-black/30 p-6 rounded-xl shadow-md border border-zinc-800 text-white">
      <h2 className="text-lg font-semibold text-zinc-200 mb-4">
        Referral Summary
      </h2>

      <div className="mb-3">
        <div className="text-sm text-zinc-400">Account</div>
        <div className="text-sm font-medium truncate">{account?.toString()}</div>
      </div>

      <div className="mb-3">
        <div className="text-sm text-zinc-400 capitalize">referees</div>
        <div className="text-sm font-medium capitalize">{referees}</div>
      </div>

      <div className="mb-3">
        <div className="text-sm text-zinc-400  capitalize"> Profit </div>
        <div className="text-sm font-medium">
          {earn} <span className="text-green-400">tokens</span>
        </div>
      </div>

      <div>
        <div className="text-sm text-zinc-400 capitalize">reffered by</div>
        <div className="text-sm  text-red-400">
          {referralSource?.referredBy
            ? referralSource?.referredBy.toString()
            : "None"}
        </div>
      </div>
    </div>
  );
};

export default ReferralCard;
