import React, { createContext, useState, ReactNode, useEffect } from "react";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { Program, AnchorProvider, web3, setProvider } from "@coral-xyz/anchor";
import idl from "../idl/idl.json";
import { TopxAirdrop } from "../idl/topx_airdrop";
import { PublicKey } from "@solana/web3.js";

const idl_string = JSON.stringify(idl);
const idl_object = JSON.parse(idl_string);
const programID = new PublicKey(idl.address);

interface WalletContextProps {
  name: string;
  handleRegisterUser: (referrerPublicKey?: string | null) => Promise<any>;
  handleUserBalance: () => Promise<any>;
  handlePlatformStats: () => Promise<any>;
  handleSocialTask: (taskType: number, proof: string) => Promise<any>;
  handleUserTasks: () => Promise<any>;
  handleFetchUserAccount: () => Promise<any>;
}

export const myWalletContext = createContext<WalletContextProps | null>(null);

interface WalletProviderProps {
  children: ReactNode;
}

export const WalletContextProvider: React.FC<WalletProviderProps> = ({
  children,
}) => {
  const name = "devlight";
  const myWallet = useWallet();
  const { connection } = useConnection();
  const [saveState, setSaveState] = useState<any[]>([]);

  const getProvider = (): AnchorProvider => {
    if (
      !myWallet.publicKey ||
      !myWallet.signTransaction ||
      !myWallet.signAllTransactions
    ) {
      throw new Error("Wallet not connected or missing signing methods");
    }

    const wallet = {
      publicKey: myWallet.publicKey,
      signTransaction: myWallet.signTransaction,
      signAllTransactions: myWallet.signAllTransactions,
    };

    const provider = new AnchorProvider(
      connection,
      wallet,
      AnchorProvider.defaultOptions()
    );

    setProvider(provider);
    return provider;
  };

  const handleRegisterUser = async (
    referrerPublicKey: string | null = null
  ): Promise<any> => {
    try {
      const anchProvider = getProvider();
      const userPublicKey = anchProvider.publicKey;
      const program = new Program<TopxAirdrop>(idl_object, anchProvider);
      console.log("\n=== GETTING USER BALANCE ===");

      const userPubKey =
        typeof userPublicKey === "string"
          ? new PublicKey(userPublicKey)
          : userPublicKey;

      alert("\n=== REGISTERING USER ===");
      if (userPublicKey) alert("publickey active")

      // Derive user account PDA

      const [userAccountPda] = PublicKey.findProgramAddressSync(
        [Buffer.from("user_account"), userPubKey.toBuffer()],
        program.programId
      );

      // Derive PDA for airdrop state
      const [airdropStatePda] = PublicKey.findProgramAddressSync(
        [Buffer.from("airdrop_state")],
        program.programId
      );

      console.log("User:", userPubKey.toString());
      console.log("User Account PDA:", userAccountPda.toString());

      // Check if user is already registered
      try {
        const existingUser = await program.account.userAccount.fetch(
          userAccountPda
        );
        console.log("User already registered:", {
          user: existingUser.user.toString(),
          referrer: existingUser.referrer
            ? existingUser.referrer.toString()
            : "None",
          pendingRewards: existingUser.pendingRewards.toString(),
          referralsCount: existingUser.referralsCount,
        });
        alert("user already registered")
        return existingUser;
      } catch (e) {
        alert("User not registered yet. Proceeding...");
      }

      let referrerAccount: PublicKey | null = null;
      let referrer = PublicKey.default;

      if (referrerPublicKey) {
        referrer = new PublicKey(referrerPublicKey);

        // Derive referrer account PDA
        const [referrerAccountPda] = PublicKey.findProgramAddressSync(
          [Buffer.from("user_account"), referrer.toBuffer()],
          program.programId
        );
        const referrerAccount = referrerAccountPda;
        console.log("Referrer:", referrer.toString());
        console.log("Referrer Account PDA:", referrerAccount.toString());
      }

      const accounts: any = {
        userAccount: userAccountPda,
        airdropState: airdropStatePda,
        referrerAccount: null,
        user: userPubKey,
        systemProgram: web3.SystemProgram.programId,
      };

      if (referrerAccount) {
        accounts.referrerAccount = referrerAccount;
      }

      alert("Registering user...");
      const tx = await program.methods
        .registerUser(referrer)
        .accounts(accounts)
        .rpc();
      console.log("✅ User registered successfully!", tx);
      alert("✅ User registered successfully!");
      console.log(
        "View on Explorer: https://explorer.solana.com/tx/" +
          tx +
          "?cluster=devnet"
      );

      // Verify registration
      const userAccount = await program.account.userAccount.fetch(
        userAccountPda
      );
      console.log("User account:", {
        user: userAccount.user.toString(),
        referrer: userAccount.referrer
          ? userAccount.referrer.toString()
          : "None",
        pendingRewards: userAccount.pendingRewards.toString(),
        dateRegistered: new Date(
          Number(userAccount.dateRegistered) * 1000
        ).toLocaleDateString("en-GB"),
      });

      return userAccount;
    } catch (err: any) {
      console.error("❌ Failed to register user:", err.message);
       alert("failed to register")
      if (err.logs) {
        err.logs.forEach((log: string) => console.log(log));
      }
      throw err;
    }
  };

  const handleUserBalance = async (): Promise<any> => {
    try {
      const anchProvider = getProvider();
      const userPublicKey = anchProvider.publicKey;
      const program = new Program<TopxAirdrop>(idl_object, anchProvider);
      console.log("\n=== GETTING USER BALANCE ===");

      const userPubKey =
        typeof userPublicKey === "string"
          ? new PublicKey(userPublicKey)
          : userPublicKey;

      // Derive user account PDA

      const [userAccountPda] = PublicKey.findProgramAddressSync(
        [Buffer.from("user_account"), userPubKey.toBuffer()],
        program.programId
      );

      console.log("User:", userPubKey.toString());
      console.log("User Account PDA:", userAccountPda.toString());

      const accountInfo = await program.provider.connection.getAccountInfo(
        userAccountPda
      );

      if (!accountInfo) {
        throw new Error("User account PDA is not initialized.");
      }

      const balance = await program.methods
        .getUserBalance()
        .accounts({
          userAccount: userAccountPda,
        })
        .view();

      console.log(`User balance: ${balance.toString()} base units`);

      // Convert to human readable (assuming 9 decimals)
      const humanReadable = balance / 10 ** 9;
      console.log(`User balance: ${humanReadable} tokens`);

      return balance;
    } catch (err) {
      console.error("❌ Failed to get user balance:", err.message);
      throw err;
    }
  };

  const handlePlatformStats = async (): Promise<any> => {
    try {
      const anchProvider = getProvider();
      const program = new Program<TopxAirdrop>(idl_object, anchProvider);

      console.log("\n=== PLATFORM STATISTICS ===");

      const stats = await program.methods
        .getPlatformStats()
        .accounts({})
        .view();

      console.log("Platform Stats:", {
        totalUsers: stats.totalUsers,
        totalTokensDistributed: stats.totalTokensDistributed.toString(),
        totalReferrals: stats.totalReferrals,
        maxTotalTokens: stats.maxTotalTokens.toString(),
        totalTokensOwed: stats.totalTokensOwed.toString(),
        isActive: stats.isActive,
        isEnded: stats.isEnded,
      });

      return stats;
    } catch (err) {
      console.error("❌ Failed to get platform stats:", err.message);
      throw err;
    }
  };

  const handleSocialTask = async (
    taskType: number,
    proof: string
  ): Promise<any> => {
    try {
      const anchProvider = getProvider();
      const userPublicKey = anchProvider.publicKey;
      const program = new Program<TopxAirdrop>(idl_object, anchProvider);
      console.log("\n=== GETTING USER BALANCE ===");

      const userPubKey =
        typeof userPublicKey === "string"
          ? new PublicKey(userPublicKey)
          : userPublicKey;

      console.log("\n=== COMPLETING SOCIAL TASK ===");

      // Task type mapping
      const taskTypes = {
        0: "FollowTwitter",
        1: "LikeAndRetweetPinned",
        2: "JoinTelegramGroup",
        3: "JoinTelegramChannel",
        4: "JoinDiscordServer",
        5: "SubscribeYouTube",
      };

      console.log(`Task: ${taskTypes[taskType] || taskType}`);
      console.log(`Proof: ${proof}`);

      // Derive user account PDA
      const [userAccountPda] = PublicKey.findProgramAddressSync(
        [Buffer.from("user_account"), userPubKey.toBuffer()],
        program.programId
      );

      // Derive PDA for airdrop state
      const [airdropStatePda] = PublicKey.findProgramAddressSync(
        [Buffer.from("airdrop_state")],
        program.programId
      );

      // Convert taskType to the enum format expected by the program

      // ✅ Define strict SocialTaskType enum
      type SocialTaskType =
        | { followTwitter: {} }
        | { likeAndRetweetPinned: {} }
        | { joinTelegramGroup: {} }
        | { joinTelegramChannel: {} }
        | { joinDiscordServer: {} }
        | { subscribeYouTube: {} };

      // ✅ Strict enumMap matching Anchor expected types
      const enumMap: Record<number, SocialTaskType> = {
        0: { followTwitter: {} },
        1: { likeAndRetweetPinned: {} },
        2: { joinTelegramGroup: {} },
        3: { joinTelegramChannel: {} },
        4: { joinDiscordServer: {} },
        5: { subscribeYouTube: {} },
      };

      const socialTaskType = enumMap[taskType];

      if (!socialTaskType) {
        throw new Error("Invalid task type index: " + taskType);
      }

      console.log("Completing social task...");
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
        "View on Explorer: https://explorer.solana.com/tx/" +
          tx +
          "?cluster=devnet"
      );

      // Get updated user account
      const userAccount = await program.account.userAccount.fetch(
        userAccountPda
      );
      console.log(
        "Updated pending rewards:",
        userAccount.pendingRewards.toString()
      );
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

  const handleUserTasks = async (): Promise<any> => {
    try {
      const anchProvider = getProvider();
      const userPublicKey = anchProvider.publicKey;
      const program = new Program<TopxAirdrop>(idl_object, anchProvider);

      const userPubKey =
        typeof userPublicKey === "string"
          ? new PublicKey(userPublicKey)
          : userPublicKey;

      console.log("\n=== GETTING USER TASKS ===");

      // Derive user account PDA
      const [userAccountPda] = PublicKey.findProgramAddressSync(
        [Buffer.from("user_account"), userPubKey.toBuffer()],
        program.programId
      );

      console.log("User:", userPubKey.toString());
      console.log("User Account PDA:", userAccountPda.toString());

      const tasks = await program.methods
        .getUserTasks()
        .accounts({
          userAccount: userAccountPda,
        })
        .view();

      const taskNames = [
        "FollowTwitter",
        "LikeAndRetweetPinned",
        "JoinTelegramGroup",
        "JoinTelegramChannel",
        "JoinDiscordServer",
        "SubscribeYouTube",
      ];

      console.log("Task completion status:");

      tasks.forEach((completed, index) => {
        const status = completed ? "✅ Completed" : "❌ Not completed";
        console.log(`  ${index}. ${taskNames[index]}: ${status}`);
      });

      return tasks;
    } catch (err) {
      console.error("❌ Failed to get user tasks:", err.message);
      throw err;
    }
  };

  const handleFetchUserAccount = async (): Promise<any> => {
  try {
    const anchProvider = getProvider();
    const userPublicKey = anchProvider.publicKey;
    const program = new Program<TopxAirdrop>(idl_object, anchProvider);

    const userPubKey =
      typeof userPublicKey === "string"
        ? new PublicKey(userPublicKey)
        : userPublicKey;

    // Derive user account PDA
    const [userAccountPda] = PublicKey.findProgramAddressSync(
      [Buffer.from("user_account"), userPubKey.toBuffer()],
      program.programId
    );

    const userAccount = await program.account.userAccount.fetch(userAccountPda);

    console.log("✅ User account found:", {
      user: userAccount.user.toString(),
      referrer: userAccount.referrer
        ? userAccount.referrer.toString()
        : "None",
      pendingRewards: userAccount.pendingRewards.toString(),
      dateRegistered: new Date(
        Number(userAccount.dateRegistered) * 1000
      ).toLocaleDateString("en-GB"),
    });

    return userAccount;
  } catch (err: any) {
    console.error("❌ Failed to fetch user account:", err.message);

    if (err.logs) {
      err.logs.forEach((log: string) => console.log(log));
    }

    throw err;
  }
};

  return (
    <myWalletContext.Provider
      value={{
        name,
        handleRegisterUser,
        handleUserBalance,
        handlePlatformStats,
        handleSocialTask,
        handleUserTasks,
        handleFetchUserAccount,
      }}
    >
      {children}
    </myWalletContext.Provider>
  );
};

export default myWalletContext;
