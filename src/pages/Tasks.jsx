import React, { useState } from "react";
import TaskCard from "../component/task/TaskCard";
import { div } from "framer-motion/client";

const Tasks = () => {
  const [claimed, setClaimed] = useState(false);

  return (
    <div className="flex flex-col p-3 pb-10 md:p-6 gap-4">
      <TaskCard
        title="Welcome Airdrop"
        description="Get rewarded just for joining as a new user"
        showButton={true}
        buttonLabel="Claim"
        buttonDisabled={claimed}
        onButtonClick={() => setClaimed(true)}
      />
      <TaskCard
        title="Referrals"
        description="Share your link. Help grow the community and get rewarded!"
        showInput={true}
        inputValue="https://airdrop.top.xyz/ref/yourwallet"
        inputReadOnly={true}
        showCopy={true}
        onCopyClick={() =>
          navigator.clipboard.writeText(
            "https://airdrop.top.xyz/ref/yourwallet"
          )
        }
      />
      <TaskCard
  title="Socials"
  description="Earn free tokens by engaging with us"
  showActionItems={[
    {
      label: "Follow TOP on Twitter (X)",
      done: false,
      onClick: () => alert("Followed!"),
    },
    {
      label: "Like & Retweet the pinned tweet",
      done: false,
      onClick: () => alert("Liked & Retweeted!"),
    },
  ]}
/>
<TaskCard
  title="Account Verification"
  description="Link your email to your account"
  showInput={true}
  inputType="email"
  buttonLink="/verify-email"
/>


    </div>
  );
};

export default Tasks;
