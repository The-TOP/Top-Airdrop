import React, { useContext } from "react";
import OverviewCards from "../component/dashboard/OverviewCards";
import ReferralsTable from "../component/dashboard/ReferralsTable";
import DistributionCountdown from "../component/dashboard/DistributionCountdown";
import myWalletContext from "../context/WalletContext1";

const Dashboad = () => {
  const { handleUserBalance} = useContext(myWalletContext)
  
  return (
    <div className="w-full p-1 md:p-3  max-w-6xl mx-auto  space-y-6 h-full ">
      <section className="mb-6 p-4 rounded-t-2xl bg-white/2">
        <h2 className="text-white font-stretch-condensed text-xl font-semibold tracking-wider italic mb-3">Overview</h2>
        <p className="text-sm text-zinc-400 mb-6">
          Track key metrics – A real-time snapshot of your platform’s
          performance.
        </p>
        <OverviewCards />
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 pb-10">
        <div className="lg:col-span-2">
          <ReferralsTable />
        </div>
        <div>
          <DistributionCountdown />
        </div>
      </section>
    </div>
  );
};

export default Dashboad;
