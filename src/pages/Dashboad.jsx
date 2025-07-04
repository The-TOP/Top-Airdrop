import React from "react";
import OverviewCards from "../component/dashboard/OverviewCards";
import ReferralsTable from "../component/dashboard/ReferralsTable";
import DistributionCountdown from "../component/dashboard/DistributionCountdown";

const Dashboad = () => {
  return (
    <div className="w-full p-3 md:p-6   space-y-6 h-full ">
      <section>
        <h2 className="text-white text-xl font-semibold mb-2">Overview</h2>
        <p className="text-sm text-zinc-400 mb-4">
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
