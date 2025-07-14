import React from "react";
import miniLogo from "../../img/miniLogo.png";
import user from "../../img/Pprofile.png";

const Dashheader = ({xstyle}) => {
  return (
    <div className={`flex rounded-bl-xl bg-white/10 justify-center gap-3 items-center px-2 py-3 ${xstyle}`}>
      <div className="flex justify-center items-center gap-2">
        <img src={miniLogo} className="w-5" alt="top" />
        <p className="text-xs">5 035 353</p>
      </div>
      <div className="flex gap-2 justify-center items-center">
        <img src={user} className="w-5" alt="top" />
        <p className="text-xs">Cxao39...8a1c5</p>
      </div>
    </div>
  );
};

export default Dashheader;
