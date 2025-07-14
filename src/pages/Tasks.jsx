import React, { useState } from "react";
import SocialtaskCard from "../component/task/SocialtaskCard";
import { LuCircleArrowOutUpRight } from "react-icons/lu";
import VerifyAccount from "../component/task/VerifyAccount";
import { motion } from "framer-motion";
import { FaCopy, FaSquareXTwitter } from "react-icons/fa6";
import AirdropModal from "../modal/AirdropModal";
import EmailModal from "../modal/EmailModal";
import { FaDiscord, FaTelegram, FaYoutube } from "react-icons/fa";

const Tasks = () => {
  const [claimed, setClaimed] = useState({
    airdrop: false,
    account: false,
    twitter: false,
    telegram: false,
    discord: false,
    youtube: false,
    email: false,
  });
  const [userEmail, setUserEmail] = useState("");
  const [OpenAirdropModal, setOpenAirdropModal] = useState(false);
  const [OpenEmailModal, setOpenEmailModal] = useState(false);

  const [trackLoading, setTrackLoading] = useState(false);
  const [trackLoading2, setTrackLoading2] = useState(false);
  const [trackLoading3, setTrackLoading3] = useState(false);
  const [trackLoading4, setTrackLoading4] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className=" p-3 md:p-6 pb-10 text-white"
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
        onButtonClick={() => setOpenAirdropModal(true)}
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
        onButtonClick={() => setOpenEmailModal(true)}
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
        buttonLabel={"copy"}
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
        buttonDisabled={claimed.twitter}
        onButtonClick={() => {
          setTrackLoading(true);
          setTimeout(() => {
            setTrackLoading(false);
            setClaimed((prev) => ({ ...prev, twitter: true }));
          }, 5000);
        }}
        Icon={FaSquareXTwitter}
        buttonLabel={"Go"}
        borderstyle={"rounded-t-xl"}
        trackLoading={trackLoading}
      />
      <SocialtaskCard
        textcolor={"text-white/80"}
        title={"Telegram"}
        description={"Join the Telegram Community"}
        buttonDisabled={claimed.telegram}
        onButtonClick={() => {
          setTrackLoading2(true);
          setTimeout(() => {
            setTrackLoading2(false);
            setClaimed((prev) => ({ ...prev, telegram: true }));
          }, 5000);
        }}
        Icon={FaTelegram}
        buttonLabel={"Go"}
        borderstyle={""}
        trackLoading={trackLoading2}
      />
      <SocialtaskCard
        textcolor={"text-white/80"}
        title={"Discord"}
        description={"Join the Discord Community"}
        buttonDisabled={claimed.discord}
       onButtonClick={() => {
          setTrackLoading3(true);
          setTimeout(() => {
            setTrackLoading3(false);
            setClaimed((prev) => ({ ...prev, discord: true }));
          }, 5000);
        }}
        Icon={FaDiscord}
        buttonLabel={"Go"}
        borderstyle={""}
        trackLoading={trackLoading3}
      />
      <SocialtaskCard
        textcolor={"text-white/80"}
        title={"Youtube"}
        description={"Subscribe to Youtube channel"}
        buttonDisabled={claimed.youtube}
       onButtonClick={() => {
          setTrackLoading4(true);
          setTimeout(() => {
            setTrackLoading4(false);
            setClaimed((prev) => ({ ...prev, youtube: true }));
          }, 5000);
        }}
        Icon={FaYoutube}
        buttonLabel={"Go"}
        borderstyle={"rounded-b-xl"}
        trackLoading={trackLoading4}
      />

      <AirdropModal
        isOpen={OpenAirdropModal}
        onClose={setOpenAirdropModal}
        setClaimed={setClaimed}
      />
      <EmailModal
        isOpen={OpenEmailModal}
        onClose={setOpenEmailModal}
        setClaimed={setClaimed}
        email={userEmail}
        setMail={setUserEmail}
      />
    </motion.div>
  );
};

export default Tasks;
