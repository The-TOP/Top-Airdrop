import React, { useContext, useState, useEffect } from "react";
import OverviewCards from "../component/dashboard/OverviewCards";
import DistributionCountdown from "../component/dashboard/DistributionCountdown";
import myWalletContext from "../context/WalletContext1";
import ReferralCard from "../component/activity/ReferralCard";

const Dashboad = () => {
  const [data, setData] = useState([]);
  const { getCompleteReferralInfo } = useContext(myWalletContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getCompleteReferralInfo();

        setData(result);
      } catch (error) {
        console.error("Error fetching  Data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full p-1 md:p-3  max-w-6xl mx-auto  space-y-6 h-full ">
      <section className="mb-6 p-4 rounded-t-2xl bg-white/2">
        <h2 className="text-white font-stretch-condensed text-xl font-semibold tracking-wider italic mb-3">
          Overview
        </h2>
        <p className="text-sm text-zinc-400 mb-6">
          Track key metrics – A real-time snapshot of your platform’s
          performance.
        </p>
        <OverviewCards />
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 pb-10">
        <div className="lg:col-span-2">
           <ReferralCard data={data} /> 
        </div>
        <div>
          <DistributionCountdown />
        </div>
      </section>
    </div>
  );
};

export default Dashboad;
