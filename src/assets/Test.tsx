/* const handleSocialTask = async (
  taskType: number,
  proof: string
): Promise<any> => {
  try {
    const anchProvider = getProvider();
    const userPublicKey = anchProvider.publicKey;
    const program = new Program<TopxAirdrop>(idl_object, anchProvider);

    const userPubKey =
      typeof userPublicKey === "string"
        ? new PublicKey(userPublicKey)
        : userPublicKey;

    console.log("\n=== COMPLETING SOCIAL TASK ===");

    // ✅ Logging helper only (not used in program call)
    const taskTypes = {
      0: "WelcomeAirdop",
      1: "FollowTwitter",
      2: "LikeAndRetweetPinned",
      3: "JoinTelegramGroup",
      4: "JoinDiscordServer",
      5: "SubscribeYouTube",
    };

    console.log(`Task: ${taskTypes[taskType] || taskType}`);
    console.log(`Proof: ${proof}`);

    // ✅ PDA derivation
    const [userAccountPda] = PublicKey.findProgramAddressSync(
      [Buffer.from("user_account"), userPubKey.toBuffer()],
      program.programId
    );

    const [airdropStatePda] = PublicKey.findProgramAddressSync(
      [Buffer.from("airdrop_state")],
      program.programId
    );

    // ✅ Enum values that match Anchor IDL exactly
    const enumMap: Record<number, any> = {
      0: { welcomeAirdop: {} },
      1: { followTwitter: {} },
      2: { likeAndRetweetPinned: {} },
      3: { joinTelegramGroup: {} },
      4: { joinDiscordServer: {} },
      5: { subscribeYouTube: {} },
    };

    const socialTaskType = enumMap[taskType];
    if (!socialTaskType) throw new Error("Invalid task type index: " + taskType);
console.log("Completing social task...");
    // ✅ Transaction call
    const tx = await program.methods
      .completeSocialTask(socialTaskType, proof)
      .accounts({
        userAccount: userAccountPda,
        airdropState: airdropStatePda,
        user: userPubKey,
      })
      .rpc();

    console.log("✅ Social task completed successfully!");
    console.log("Transaction signature:", tx);
    console.log(
      "View on Explorer: https://explorer.solana.com/tx/" + tx + "?cluster=devnet"
    );

    // ✅ Fetch updated account info
    const userAccount = await program.account.userAccount.fetch(userAccountPda);
    console.log("Updated pending rewards:", userAccount.pendingRewards.toString());
    console.log("Completed tasks:", userAccount.completedTasks);

    return tx;
  } catch (err: any) {
    console.error("❌ Failed to complete social task:", err.message);

    if (err.logs) {
      console.error("Program logs:");
      err.logs.forEach((log: string) => console.log(log));
    }

    throw err;
  }
};
 */