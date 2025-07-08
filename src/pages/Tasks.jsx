import React, { useState } from "react";
import TaskCard from "../component/task/TaskCard";
import SocialtaskCard from "../component/task/SocialtaskCard";
import { LuCircleArrowOutUpRight } from "react-icons/lu";
import token from "../img/miniLogo.png";
import VerifyAccount from "../component/task/VerifyAccount";
import { motion } from "framer-motion";
import { FaCopy } from "react-icons/fa6";

const Tasks = () => {
  const [claimed, setClaimed] = useState({
    airdrop: false,
    account: false,
    twitter: false,
    telegram: false,
    discord: false,
    youtube: false,
  });
  const [userEmail, setUserEmail] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="max-w-3xl mx-auto p-3 md:p-6 pb-10 text-white"
    >
      <div className="bg-white/2 mt-3 mb-1 p-2 pt-3 py-1 rounded-t-2xl ">
        <h2 className=" text-white font-stretch-condensed text-base font-semibold tracking-wide mb-3">
          Welcome Airdrop
        </h2>
        <p className="text-zinc-400 text-sm mb-2 ">
          Receive a special Welcome Airdrop of $TOP tokens when you connect your
          wallet
        </p>
      </div>

      <SocialtaskCard
        textcolor={"text-white/80"}
        title={"Welcome Airdrop"}
        description={"Get rewarded just for joining as a new user"}
        buttonDisabled={claimed.airdrop}
        onButtonClick={() => {}}
        Icon={""}
        buttonLabel={"claim"}
        borderstyle={"rounded-b-xl"}
      />

      <div className="p-1 ps-2">
        <h2 className=" text-white font-stretch-condensed text-base font-semibold tracking-wide mt-3 ">
          Account Verification
        </h2>
        <p className="text-zinc-400 text-xs ">
          Secure your account and stay updated by adding your email.
        </p>
      </div>
      <VerifyAccount
        title={"Email Verification"}
        userEmail={userEmail}
        setUserEmail={setUserEmail}
        buttonDisabled={claimed.account}
        onButtonClick={() => console.log(userEmail)}
        Icon={LuCircleArrowOutUpRight}
        buttonLabel={"Go"}
        borderstyle={"rounded-t-xl"}
      />

      <div className="p-1 ps-2">
        <h2 className=" text-white font-stretch-condensed text-base font-semibold tracking-wide mt-3 ">
          Referrals
        </h2>
        <p className="text-zinc-400 text-xs ">
          Share your link. Help grow the community and get rewarded!
        </p>
      </div>

      <SocialtaskCard
        textcolor={"text-white/80"}
        title={"Your unique link"}
        description={"https://airdrop.topprotocol.xyz/ref/yourwalletaddress"}
        onButtonClick={() => {
          navigator.clipboard.writeText(
            "https://airdrop.topprotocol.xyz/ref/yourwalletaddress"
          );
        }}
        Icon={FaCopy}
        buttonLabel={"claim"}
        borderstyle={"rounded-b-xl"}
      />
      <div className="p-1 ps-2">
        <h2 className=" text-white font-stretch-condensed text-base font-semibold tracking-wide mt-3 ">
          Socials
        </h2>
        <p className="text-zinc-400 text-xs ">
          Earn free $TOP tokens by simply engaging with us online!
        </p>
      </div>
      <SocialtaskCard
        textcolor={"text-white/80"}
        title={"Twitter (X)"}
        description={"Follow TOP on Twitter (X)"}
        img={""}
        buttonDisabled={claimed.twitter}
        onButtonClick={() => {}}
        Icon={LuCircleArrowOutUpRight}
        buttonLabel={"Go"}
        borderstyle={"rounded-t-xl"}
      />
      <SocialtaskCard
        textcolor={"text-white/80"}
        title={"Telegram"}
        description={"Join the Telegram Community"}
        img={""}
        buttonDisabled={claimed.telegram}
        onButtonClick={() => {}}
        Icon={LuCircleArrowOutUpRight}
        buttonLabel={"Go"}
        borderstyle={""}
      />
      <SocialtaskCard
        textcolor={"text-white/80"}
        title={"Discord"}
        description={"Join the Discord Community"}
        img={""}
        buttonDisabled={claimed.discord}
        onButtonClick={() => {}}
        Icon={LuCircleArrowOutUpRight}
        buttonLabel={"Go"}
        borderstyle={""}
      />
      <SocialtaskCard
        textcolor={"text-white/80"}
        title={"Youtube"}
        description={"Subscribe to Youtube channel"}
        img={""}
        buttonDisabled={claimed.youtube}
        onButtonClick={() => {}}
        Icon={LuCircleArrowOutUpRight}
        buttonLabel={"Go"}
        borderstyle={"rounded-b-xl"}
      />
    </motion.div>

    /*  <TaskCard
        title="Welcome Airdrop"
        description="Get rewarded just for joining as a new user"
        showButton={true}
        buttonLabel="Claim"
        buttonDisabled={claimed}
        onButtonClick={() => setClaimed(true)}
      />*/
  );
};

export default Tasks;
