import React, { useContext, useEffect, useState } from "react";
import SocialtaskCard from "../component/task/SocialtaskCard";
import { LuCircleArrowOutUpRight } from "react-icons/lu";
import VerifyAccount from "../component/task/VerifyAccount";
import { motion } from "framer-motion";
import { FaCopy, FaSquareXTwitter } from "react-icons/fa6";
import AirdropModal from "../modal/AirdropModal";
import EmailModal from "../modal/EmailModal";
import { FaDiscord, FaTelegram, FaYoutube, FaThumbsUp } from "react-icons/fa";
import myWalletContext from "../context/WalletContext1";
import { useWallet } from "@solana/wallet-adapter-react";
import TaskCard from "../component/task/TaskCard";
import useTaskTimer from "../hook/useTaskTimer";
import DataContext from "../context/DataContext";
import { FiRefreshCw, FiShare2 } from "react-icons/fi";

const Tasks = () => {
  const { handleUserTasks, handleSocialTask,  handleFinishedTasks } =
    useContext(myWalletContext);
  const { refresh, setRefresh } = useContext(DataContext);
  const { publicKey } = useWallet();
  const address = publicKey.toString();

  const generateReferralLink = (walletAddress) => {
    return `${window.location.origin}/?ref=${walletAddress}`;
  };
  const referralLink = generateReferralLink(address);

  //console.log(referralLink);

  const [claimed, setClaimed] = useState({
    airdrop: false,
    account: false,
    twitter: false,
    telegram: false,
    channel: false,
    discord: false,
    youtube: false,

    ////////////////
    //New task Here
    NewTaskA: false,
    NewTaskB: false,
    NewTaskC: false,
    NewTaskD: false,
    NewTaskE: false,
    NewTaskF: false,
    NewTaskG: false,
    NewTaskH: false,
  });

  useEffect(() => {
    const fetchTasks = async () => {
      const tasks = await handleUserTasks();
      if (tasks[0]) setClaimed((prev) => ({ ...prev, airdrop: true }));
      if (tasks[1]) setClaimed((prev) => ({ ...prev, twitter: true }));
      if (tasks[2]) setClaimed((prev) => ({ ...prev, telegram: true }));
      if (tasks[3]) setClaimed((prev) => ({ ...prev, channel: true }));
      if (tasks[4]) setClaimed((prev) => ({ ...prev, discord: true }));
      if (tasks[5]) setClaimed((prev) => ({ ...prev, youtube: true }));
      if (tasks[6]) setClaimed((prev) => ({ ...prev, account: true }));
    };
    const fetchTasksB = async () => {
      const tasks = await handleFinishedTasks();
      

      //new task here

      if (tasks[0]) setClaimed((prev) => ({ ...prev, NewTaskA: true }));
      if (tasks[1]) setClaimed((prev) => ({ ...prev, NewTaskB: true }));
      if (tasks[2]) setClaimed((prev) => ({ ...prev, NewTaskC: true }));
      if (tasks[3]) setClaimed((prev) => ({ ...prev, NewTaskD: true }));
      if (tasks[4]) setClaimed((prev) => ({ ...prev, NewTaskE: true }));
      if (tasks[5]) setClaimed((prev) => ({ ...prev, NewTaskF: true }));
      if (tasks[6]) setClaimed((prev) => ({ ...prev, NewTaskG: true }));
      if (tasks[7]) setClaimed((prev) => ({ ...prev, NewTaskH: true }));
    };

    fetchTasks();
    fetchTasksB();
  }, [refresh]);
  // backup refresh on page unMount.... if transaction feedback pends
  useEffect(() => {
    return () => {
      setRefresh((prev) => prev + 1); // safe: runs on unmount
    };
  }, []);

  const [userEmail, setUserEmail] = useState("");
  const [OpenAirdropModal, setOpenAirdropModal] = useState(false);
  const [OpenEmailModal, setOpenEmailModal] = useState(false);
  const [linkTracker, setlinkTracker] = useState(false);

  const twitterTimer = useTaskTimer("task_start_twitter");
  const telegramTimer = useTaskTimer("task_start_telegram");
  const channelTimer = useTaskTimer("task_start_channel");
  const discordTimer = useTaskTimer("task_start_discord");
  const youtubeTimer = useTaskTimer("task_start_youtube");
  ///////////////
  //New Task timer here
  const NewTaskATimer = useTaskTimer("task_start_NewTaskA");
  const NewTaskBTimer = useTaskTimer("task_start_NewTaskB");
  const NewTaskCTimer = useTaskTimer("task_start_NewTaskC");
  const NewTaskDTimer = useTaskTimer("task_start_NewTaskD");
  const NewTaskETimer = useTaskTimer("task_start_NewTaskE");
  const NewTaskFTimer = useTaskTimer("task_start_NewTaskF");
  const NewTaskGTimer = useTaskTimer("task_start_NewTaskG");
  const NewTaskHTimer = useTaskTimer("task_start_NewTaskH");

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
        description={referralLink}
        onButtonClick={() => {
          setlinkTracker(true);
          navigator.clipboard.writeText(referralLink);
          setTimeout(() => {
            setlinkTracker(false);
          }, 500);
        }}
        Tracker={linkTracker}
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

      <TaskCard
        textcolor={"text-white/80"}
        title={"Twitter (X)"}
        description={"Follow TOP on Twitter (X)"}
        buttonDisabled={claimed.twitter}
        onButtonClick={() => {
          twitterTimer.startTimer(); // Start and store timestamp
          window.open("https://x.com/theTOPXchange", "_blank");
        }}
        onButtonClick2={async () => {
          const check = await handleSocialTask(1, address);
          check && setRefresh((prev) => prev + 1); // 🔁 Trigger refetch
        }}
        Icon={FaSquareXTwitter}
        buttonLabel={"Go"}
        borderstyle={"rounded-t-xl"}
        trackLoading={twitterTimer.loading}
        check={twitterTimer.check}
      />

      <TaskCard
        textcolor={"text-white/80"}
        title={"Telegram"}
        description={"Join the Telegram Community"}
        buttonDisabled={claimed.telegram}
        onButtonClick={() => {
          telegramTimer.startTimer(); // Start and store timestamp

          window.open(" https://t.me/ProtocolChain", "_blank");
        }}
        onButtonClick2={async () => {
          const check = await handleSocialTask(2, address);
          check && setRefresh((prev) => prev + 1); // 🔁 Trigger refetch
        }}
        Icon={FaTelegram}
        buttonLabel={"Go"}
        borderstyle={""}
        trackLoading={telegramTimer.loading}
        check={telegramTimer.check}
      />

      <TaskCard
        textcolor={"text-white/80"}
        title={"Telegram"}
        description={"Join our Telegram Channel"}
        buttonDisabled={claimed.channel}
        onButtonClick={() => {
          channelTimer.startTimer(); // Start and store timestamp

          window.open("https://t.me/theTOPXchange", "_blank");
        }}
        onButtonClick2={async () => {
          const check = await handleSocialTask(3, address);
          check && setRefresh((prev) => prev + 1); // 🔁 Trigger refetch
        }}
        Icon={FaTelegram}
        buttonLabel={"Go"}
        borderstyle={""}
        trackLoading={channelTimer.loading}
        check={channelTimer.check}
      />

      <TaskCard
        textcolor={"text-white/80"}
        title={"Discord"}
        description={"Join the Discord Community"}
        buttonDisabled={claimed.discord}
        onButtonClick={() => {
          discordTimer.startTimer(); // Start and store timestamp

          window.open(" https://discord.gg/yTxsnK6CgA", "_blank");
        }}
        onButtonClick2={async () => {
          const check = await handleSocialTask(4, address);
          check && setRefresh((prev) => prev + 1); // 🔁 Trigger refetch
        }}
        Icon={FaDiscord}
        buttonLabel={"Go"}
        borderstyle={""}
        trackLoading={discordTimer.loading}
        check={discordTimer.check}
      />

      <TaskCard
        textcolor={"text-white/80"}
        title={"Youtube"}
        description={"Subscribe to Youtube channel"}
        buttonDisabled={claimed.youtube}
        onButtonClick={() => {
          youtubeTimer.startTimer();
          window.open(
            "https://youtube.com/@topxchange?feature=shared",
            "_blank"
          );
        }}
        onButtonClick2={async () => {
          const check = await handleSocialTask(5, address);
          check && setRefresh((prev) => prev + 1); // 🔁 Trigger refetch
        }}
        Icon={FaYoutube}
        buttonLabel={"Go"}
        borderstyle={"rounded-b-xl"}
        trackLoading={youtubeTimer.loading}
        check={youtubeTimer.check}
      />

      {/* //////////////////////////////////////////////////////////////// */}
      {/* New Task Element here */}

      <div className="p-1 py-3 ps-2">
        <h2 className=" text-white font-stretch-condensed text-base font-semibold tracking-wide mt-3 ">
          New Tasks
        </h2>
        <p className="text-zinc-400 text-xs ">
          Earn free $TOP tokens by simply engaging with us online!
        </p>
      </div>

      <TaskCard
        textcolor={"text-white/80"}
        title={" Like "}
        description={"Like this post"}
        buttonDisabled={claimed.NewTaskA}
        onButtonClick={() => {
          NewTaskATimer.startTimer();
          window.open(
            "https://x.com/protocolchain/status/1956508911554458069",
            "_blank"
          );
        }}
        onButtonClick2={async () => {
          const check = await handleSocialTask(7, address);
          check && setRefresh((prev) => prev + 1); // 🔁 Trigger refetch
        }}
        Icon={FaThumbsUp}
        buttonLabel={"Go"}
        borderstyle={"rounded-b-xl"}
        trackLoading={NewTaskATimer.loading}
        check={NewTaskATimer.check}
      />
      <TaskCard
        textcolor={"text-white/80"}
        title={" Like "}
        description={"Like this post"}
        buttonDisabled={claimed.NewTaskB}
        onButtonClick={() => {
          NewTaskBTimer.startTimer();
          window.open(
            " https://www.instagram.com/p/DNbWpm3izeC/?igsh=MWdwdnJyMjN0czN1bw==",
            "_blank"
          );
        }}
        onButtonClick2={async () => {
          const check = await handleSocialTask(8, address);
          check && setRefresh((prev) => prev + 1); // 🔁 Trigger refetch
        }}
        Icon={FaThumbsUp}
        buttonLabel={"Go"}
        borderstyle={"rounded-b-xl"}
        trackLoading={NewTaskBTimer.loading}
        check={NewTaskBTimer.check}
      />
      <TaskCard
        textcolor={"text-white/80"}
        title={" Like "}
        description={"Like this post"}
        buttonDisabled={claimed.NewTaskC}
        onButtonClick={() => {
          NewTaskCTimer.startTimer();
          window.open(
            "https://x.com/thetopxchange/status/1955588241819906337",
            "_blank"
          );
        }}
        onButtonClick2={async () => {
          const check = await handleSocialTask(9, address);
          check && setRefresh((prev) => prev + 1); // 🔁 Trigger refetch
        }}
        Icon={FaThumbsUp}
        buttonLabel={"Go"}
        borderstyle={"rounded-b-xl"}
        trackLoading={NewTaskCTimer.loading}
        check={NewTaskCTimer.check}
      />
      <TaskCard
        textcolor={"text-white/80"}
        title={" Repost "}
        description={" Repost this post"}
        buttonDisabled={claimed.NewTaskD}
        onButtonClick={() => {
          NewTaskDTimer.startTimer();
          window.open(
            "https://x.com/protocolchain/status/1956508911554458069",
            "_blank"
          );
        }}
        onButtonClick2={async () => {
          const check = await handleSocialTask(10, address);
          check && setRefresh((prev) => prev + 1); // 🔁 Trigger refetch
        }}
        Icon={FiRefreshCw}
        buttonLabel={"Go"}
        borderstyle={"rounded-b-xl"}
        trackLoading={NewTaskDTimer.loading}
        check={NewTaskDTimer.check}
      />
      <TaskCard
        textcolor={"text-white/80"}
        title={"Share"}
        description={" Share this post "}
        buttonDisabled={claimed.NewTaskE}
        onButtonClick={() => {
          NewTaskETimer.startTimer();
          window.open(
            "https://www.instagram.com/p/DNbWpm3izeC/?igsh=MWdwdnJyMjN0czN1bw==",
            "_blank"
          );
        }}
        onButtonClick2={async () => {
          const check = await handleSocialTask(11, address);
          check && setRefresh((prev) => prev + 1); // 🔁 Trigger refetch
        }}
        Icon={FiShare2}
        buttonLabel={"Go"}
        borderstyle={"rounded-b-xl"}
        trackLoading={NewTaskETimer.loading}
        check={NewTaskETimer.check}
      />
      <TaskCard
        textcolor={"text-white/80"}
        title={"  Repost "}
        description={" Repost this post"}
        buttonDisabled={claimed.NewTaskF}
        onButtonClick={() => {
          NewTaskFTimer.startTimer();
          window.open(
            "https://x.com/thetopxchange/status/1955588241819906337",
            "_blank"
          );
        }}
        onButtonClick2={async () => {
          const check = await handleSocialTask(12, address);
          check && setRefresh((prev) => prev + 1); // 🔁 Trigger refetch
        }}
        Icon={FiRefreshCw}
        buttonLabel={"Go"}
        borderstyle={"rounded-b-xl"}
        trackLoading={NewTaskFTimer.loading}
        check={NewTaskFTimer.check}
      />
      <TaskCard
        textcolor={"text-white/80"}
        title={" Like "}
        description={"Clap for this article"}
        buttonDisabled={claimed.NewTaskG}
        onButtonClick={() => {
          NewTaskGTimer.startTimer();
          window.open(
            " https://medium.com/@theopenprotocol/the-open-protocol-exchange-a-hybrid-407e9d4c7523",
            "_blank"
          );
        }}
        onButtonClick2={async () => {
          const check = await handleSocialTask(13, address);
          check && setRefresh((prev) => prev + 1); // 🔁 Trigger refetch
        }}
        Icon={FaThumbsUp}
        buttonLabel={"Go"}
        borderstyle={"rounded-b-xl"}
        trackLoading={NewTaskGTimer.loading}
        check={NewTaskGTimer.check}
      />
      <TaskCard
        textcolor={"text-white/80"}
        title={" Like & Repost "}
        description={"Like and Repost this Post"}
        buttonDisabled={claimed.NewTaskH}
        onButtonClick={() => {
          NewTaskHTimer.startTimer();
          window.open(
            "https://x.com/ProtocolChain/status/1957044889579114841",
            "_blank"
          );
        }}
        onButtonClick2={async () => {
          const check = await handleSocialTask(14, address);
          check && setRefresh((prev) => prev + 1); // 🔁 Trigger refetch
        }}
        Icon={FaThumbsUp}
        buttonLabel={"Go"}
        borderstyle={"rounded-b-xl"}
        trackLoading={NewTaskHTimer.loading}
        check={NewTaskHTimer.check}
      />

      {/* ///////////////////////////////// */}
      {/*  Modals */}

      <AirdropModal
        isOpen={OpenAirdropModal}
        onClose={setOpenAirdropModal}
        setClaimed={async () => {
          const check = await handleSocialTask(0, address);
          check && setRefresh((prev) => prev + 1);
        }}
        status={claimed.airdrop}
      />
      <EmailModal
        isOpen={OpenEmailModal}
        onClose={setOpenEmailModal}
        setClaimed={async () => {
          const check = await handleSocialTask(6, address);
          check && setRefresh((prev) => prev + 1); // 🔁 Trigger refetch
        }}
        email={userEmail}
        setMail={setUserEmail}
      />
    </motion.div>
  );
};

export default Tasks;
