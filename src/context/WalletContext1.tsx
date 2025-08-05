import React, { createContext, useState, ReactNode, useEffect } from "react";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import {
  Program,
  AnchorProvider,
  web3,
  setProvider,
  BN,
  Idl,
} from "@coral-xyz/anchor";
import idl from "../idl/idl.json";
import { TopxAirdrop } from "../idl/topx_airdrop";
import { PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import type { WalletContextState } from "@solana/wallet-adapter-react";
import { TransactionSignature } from "@solana/web3.js";

const idl_string = JSON.stringify(idl);
const idl_object = JSON.parse(idl_string);
const programID = new PublicKey(idl.address);

interface WalletContextProps {
  name: string;
  handleRegisterUser: (referrerPublicKey?: string | null) => Promise<any>;
  handleUserBalance: () => Promise<any>;
  handlePlatformStats: () => Promise<any>;
  handleWithdrawStats: () => Promise<any>;
  handleReferralStats: () => Promise<any>;
  handleSocialTask: (taskType: number, proof: string) => Promise<any>;
  handleUserTasks: () => Promise<any>;
  handleFetchUserAccount: () => Promise<any>;
  handleWithdrawTokens: (
    userWallet: WalletContextState,
    amount: number
  ) => Promise<TransactionSignature>;
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

  /* const handleRegisterUser = async (
    referrerPublicKey: string | null = null
  ): Promise<any> => {
    try {
      const anchProvider = getProvider();
      const userPublicKey = anchProvider.publicKey;
      const program = new Program<TopxAirdrop>(idl_object, anchProvider);

      const userPubKey =
        typeof userPublicKey === "string"
          ? new PublicKey(userPublicKey)
          : userPublicKey;

      console.log("\n=== REGISTERING USER ===");

      const [userAccountPda] = PublicKey.findProgramAddressSync(
        [Buffer.from("user_account"), userPubKey.toBuffer()],
        program.programId
      );

      const [airdropStatePda] = PublicKey.findProgramAddressSync(
        [Buffer.from("airdrop_state")],
        program.programId
      );

      const [referralTrackerPda] = PublicKey.findProgramAddressSync(
        [Buffer.from("referral_tracker"), userPubKey.toBuffer()],
        program.programId
      );

      console.log("User:", userPubKey.toString());
      console.log("User Account PDA:", userAccountPda.toString());
      console.log("Referral Tracker PDA:", referralTrackerPda.toString());

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

        return existingUser;
      } catch {
        console.log("User not registered yet. Proceeding...");
      }

      
      let referrer = PublicKey.default;
      let [dummyPda] = PublicKey.findProgramAddressSync(
        [Buffer.from("user_account"), PublicKey.default.toBuffer()],
        program.programId
      );

      let referrerAccount: PublicKey = dummyPda;
      let referrerUserAccount: PublicKey = dummyPda;

      if (referrerPublicKey) {
        referrer = new PublicKey(referrerPublicKey);

        const [referrerAccountPda] = PublicKey.findProgramAddressSync(
          [Buffer.from("user_account"), referrer.toBuffer()],
          program.programId
        );

        try {
          const referrerData = await program.account.userAccount.fetch(
            referrerAccountPda
          );
          referrerAccount = referrerAccountPda;
          referrerUserAccount = referrerAccountPda;
        } catch (err) {
          console.warn("⚠️ Referrer not registered. Ignoring referral.");
        }
      }

      const accounts = {
        userAccount: userAccountPda,
        airdropState: airdropStatePda,
        referralTracker: referralTrackerPda,
        user: userPubKey,
        sponsor: userPubKey,
        systemProgram: web3.SystemProgram.programId,
        referrerAccount,
        referrerUserAccount,
      };

      console.log("🚀 Final Accounts Object:", accounts);

      const tx = await program.methods
        .registerUser(referrer)
        .accounts(accounts)
        .rpc();

      console.log("✅ User registered successfully!", tx);
      console.log(
        "View on Explorer: https://explorer.solana.com/tx/" +
          tx +
          "?cluster=devnet"
      );

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
      if (err.logs) {
        err.logs.forEach((log: string) => console.log(log));
      }
      throw err;
    }
  }; */

  const handleRegisterUser = async (
    referrerPublicKey: string | null = null
  ): Promise<any> => {
    try {
      const anchProvider = getProvider();
      const userPublicKey = anchProvider.publicKey;
      const program = new Program<TopxAirdrop>(idl_object, anchProvider);

      const userPubKey =
        typeof userPublicKey === "string"
          ? new PublicKey(userPublicKey)
          : userPublicKey;

      console.log("\n=== REGISTERING USER ===");

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

      // Derive referral tracker PDA for the user being registered
      const [referralTrackerPda] = PublicKey.findProgramAddressSync(
        [Buffer.from("referral_tracker"), userPubKey.toBuffer()],
        program.programId
      );

      console.log("User:", userPubKey.toString());
      console.log("User Account PDA:", userAccountPda.toString());
      console.log("Referral Tracker PDA:", referralTrackerPda.toString());

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

        console.log("user already registered");
        return existingUser;
      } catch (e) {
        console.log("User not registered yet. Proceeding...");
      }
      let referrer = PublicKey.default;
      let referrerAccount: PublicKey | null = null;
      let referrerUserAccount: PublicKey | null = null;

      if (referrerPublicKey) {
        referrer = new PublicKey(referrerPublicKey);

        // Derive referrer account PDA
        const [referrerAccountPda] = PublicKey.findProgramAddressSync(
          [Buffer.from("user_account"), referrer.toBuffer()],
          program.programId
        );

        referrerAccount = referrerAccountPda;
        referrerUserAccount = referrerAccountPda;

        console.log("✅ Referrer:", referrer.toBase58());
        console.log("✅ Referrer Account PDA:", referrerAccount.toBase58());
      }
 
      const accounts = {
        userAccount: userAccountPda,
        airdropState: airdropStatePda,
        referralTracker: referralTrackerPda,
        user: userPubKey,
        sponsor: userPubKey,
        systemProgram: web3.SystemProgram.programId,
        referrerUserAccount,
        referrerAccount,
      };

      if (referrerAccount) {
        accounts.referrerAccount = referrerAccount;
         accounts.referrerUserAccount = referrerUserAccount;
      }

      console.log("Registering user...");
      const tx = await program.methods
        .registerUser(referrer)
        .accounts(accounts)
        .rpc();
      console.log("✅ User registered successfully!", tx);

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

      if (err.logs) {
        err.logs.forEach((log: string) => console.log(log));
      }
      throw err;
    }
  };

  /*  const handleRegisterUser = async (
    referrerPublicKey: string | null = null
  ): Promise<any> => {
    const SPONSOR_URL =
      "https://solana-verification.onrender.com/build_sponsored_transaction/";
    const SPONSOR_PUBKEY = new PublicKey(
      "2eyiRKix5DoW32K5GzpafbukGkkncREfXTC4aoK6Lq2i"
    ); // Devnet

    try {
      const anchProvider = getProvider();
      const userPublicKey = anchProvider.publicKey;
      const program = new Program<TopxAirdrop>(idl_object, anchProvider);
      const connection = anchProvider.connection;
      console.log(program.programId.toBase58());

      const userPubKey =
        typeof userPublicKey === "string"
          ? new PublicKey(userPublicKey)
          : userPublicKey;

      console.log("\n=== REGISTERING USER ===");

      // === Derive user + airdrop PDAs ===
      const [userAccountPda] = PublicKey.findProgramAddressSync(
        [Buffer.from("user_account"), userPubKey.toBuffer()],
        program.programId
      );

      const [airdropStatePda] = PublicKey.findProgramAddressSync(
        [Buffer.from("airdrop_state")],
        program.programId
      );

      console.log("User:", userPubKey.toString());
      console.log("User Account PDA:", userAccountPda.toString());

      // === Check if user already registered ===
      try {
        const existingUser = await program.account.userAccount.fetch(
          userAccountPda
        );
        console.log("User already registered:", {
          user: existingUser.user.toString(),
          referrer: existingUser.referrer?.toString() || "None",
          pendingRewards: existingUser.pendingRewards.toString(),
          referralsCount: existingUser.referralsCount,
        });
        console.log("user already registered");
        return existingUser;
      } catch {
        console.log("User not registered yet. Proceeding...");
      }

      // === Handle optional referrer ===
      let referrer = PublicKey.default;
      let referrerAccount: PublicKey | null = null;

      if (referrerPublicKey) {
        referrer = new PublicKey(referrerPublicKey);

        const [referrerAccountPda] = PublicKey.findProgramAddressSync(
          [Buffer.from("user_account"), referrer.toBuffer()],
          program.programId
        );

        referrerAccount = referrerAccountPda;

        console.log("Referrer:", referrer.toString());
        console.log("Referrer Account PDA:", referrerAccount.toString());
      }

      // === Build accounts object ===
      const accounts: any = {
        userAccount: userAccountPda,
        airdropState: airdropStatePda,
        referrerAccount: null,
        user: userPubKey,
        systemProgram: web3.SystemProgram.programId,
      };

      /*    if (referrerAccount) {
        accounts.referrerAccount = referrerAccount;
      } */
  ////////////////

  // === Create transaction ===
  //const tx = new web3.Transaction();

  /*  const instruction = await program.methods
        .registerUser(referrer)
        .accounts(accounts)
        .instruction();

      tx.add(
        instruction,
        SystemProgram.transfer({
          fromPubkey: anchProvider.wallet.publicKey,
          toPubkey: SPONSOR_PUBKEY,
          lamports: 0,
        })
      );
      console.log("➡  Final instructions BEFORE signing:");
      tx.instructions.forEach((ix, i) => {
        console.log(`  [${i}] programId=${ix.programId.toBase58()}`);
        ix.keys.forEach((k, j) => {
          console.log(
            `      key[${j}] ${k.pubkey.toBase58()}  isSigner=${
              k.isSigner
            }  writable=${k.isWritable}`
          );
        });
      });
 
      //tx.setSigners(SPONSOR_PUBKEY, userPubKey);
      //tx.feePayer = SPONSOR_PUBKEY!;
      // const { blockhash } = await connection.getLatestBlockhash("finalized");
      //tx.recentBlockhash = blockhash;

      // === Sign & sponsor ===
      //const signedTx = await anchProvider.wallet.signTransaction(tx);

      

      const res = await fetch(SPONSOR_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          referrerPublicKey: referrerPublicKey,
          userPublicKey: userPubKey.toBase58(),
        }),
      });

      const { base64Tx, success } = await res.json();

      const tx = Transaction.from(Buffer.from(base64Tx, "base64"));
      console.log(tx.signatures[0].publicKey.toString());

       //tx.setSigners(SPONSOR_PUBKEY, userPubKey); 
      const signedTx = await anchProvider.wallet.signTransaction(tx);
      // slot 0: sponsor signature (remains), slot1: user signature

      const txBuffer = signedTx.serialize(); // already signed
      const txSignature = await connection.sendRawTransaction(txBuffer, {
        skipPreflight: false, // optional: true = faster but less safe
      });

      console.log("✅ Sent! Transaction signature:", txSignature);

      // Wait for confirmation (optional but recommended)
      await connection.confirmTransaction(txSignature, "confirmed");
      console.log("✅ Confirmed on chain");

        // const { signature, error } = await res.json();
      if (!signature) throw new Error("Sponsored transaction failed.");
      ///// 

      // if (error) throw new Error("Sponsor failed: " + error);

      // console.log("✅ User registered successfully!");
       console.log(
        "Explorer: https://explorer.solana.com/tx/" +
          signature +
          "?cluster=devnet"
      ); 

      const userAccount = await program.account.userAccount.fetch(
        userAccountPda
      );

      console.log("User account:", {
        user: userAccount.user.toString(),
        referrer: userAccount.referrer?.toString() || "None",
        pendingRewards: userAccount.pendingRewards.toString(),
        dateRegistered: new Date(
          Number(userAccount.dateRegistered) * 1000
        ).toLocaleDateString("en-GB"),
      });

      return userAccount;
    } catch (err: any) {
      console.error("❌ Failed to register user:", err.message);
      if (err.logs) err.logs.forEach((log: string) => console.log(log));
      throw err;
    }
  }; */

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
  const handleWithdrawStats = async (): Promise<any> => {
    try {
      const anchProvider = getProvider();
      const userPublicKey = anchProvider.publicKey;
      const program = new Program<TopxAirdrop>(idl_object, anchProvider);

      if (!anchProvider.publicKey) {
        throw new Error(
          "Wallet not connected – public key missing in provider"
        );
      }

      const userPubKey =
        typeof userPublicKey === "string"
          ? new PublicKey(userPublicKey)
          : userPublicKey;

      console.log("\n=== GETTING WITHDRAWAL STATS ===");
      // Derive withdrawal tracker PDA
      const [withdrawalTrackerPda] = PublicKey.findProgramAddressSync(
        [Buffer.from("withdrawal_tracker"), userPubKey.toBuffer()],
        program.programId
      );

      console.log("User:", userPubKey.toString());
      console.log("Withdrawal Tracker PDA:", withdrawalTrackerPda.toString());

      const accountInfo = await anchProvider.connection.getAccountInfo(
        withdrawalTrackerPda
      );

      if (!accountInfo) {
        console.log("Withdrawal tracker account doesn't exist.");
        return null;
      }

      const stats = await program.account.withdrawalTracker.fetch(
        withdrawalTrackerPda
      );
      console.log("✅ Withdrawal tracker account data:", stats);

      const lastWithdrawalTime = stats.lastWithdrawal.toNumber();

      console.log("Withdrawal Stats:", {
        account: stats.account.toString(),
        task: stats.task,
        totalWithdrawals: stats.totalWithdrawals.toString(),
        lastWithdrawal: new Date(lastWithdrawalTime * 1000).toISOString(),
      });

      // Convert to human readable (assuming 9 decimals)
      const humanReadableTotal = stats.totalWithdrawals.toNumber() / 10 ** 9;
      console.log(`Total withdrawals: ${humanReadableTotal} tokens`);

      return stats;
    } catch (err) {
      console.error("❌ Failed to get withdrawal stats:", err.message);
      if (err.message.includes("Account does not exist")) {
        console.log("No withdrawal data found for this user");
        return null;
      }
      throw err;
    }
  };

  const handleReferralStats = async (): Promise<any> => {
    try {
      const anchProvider = getProvider();
      const userPublicKey = anchProvider.publicKey;
      const program = new Program<TopxAirdrop>(idl_object, anchProvider);
      /* const connection = anchProvider.connection; */
      console.log(program.programId.toBase58());

      console.log("\n=== GETTING REFERRAL STATS ===");

      const userPubKey =
        typeof userPublicKey === "string"
          ? new PublicKey(userPublicKey)
          : userPublicKey;

      // Derive referral tracker PDA
      const [referralTrackerPda] = PublicKey.findProgramAddressSync(
        [Buffer.from("referral_tracker"), userPubKey.toBuffer()],
        program.programId
      );

      console.log("User:", userPubKey.toString());
      console.log("Referral Tracker PDA:", referralTrackerPda.toString());

      ///////

      const accountInfo = await anchProvider.connection.getAccountInfo(
        referralTrackerPda
      );

      if (!accountInfo) {
        console.log("Referral tracker account doesn't exist.");
        return null;
      }

      const stats = await program.account.referralTracker.fetch(
        referralTrackerPda
      );
      console.log("✅ Referral tracker account data:", stats);

      console.log("Referral Stats:", {
        account: stats.account.toString(),
        task: stats.task,
        totalReferrals: stats.totalReferrals,
      });
      return stats;
    } catch (err) {
      console.error("❌ Failed to get referral stats:", err.message);
      if (err.message.includes("Account does not exist")) {
        console.log("No referral data found for this user");
        return null;
      }
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

      const userPubKey =
        typeof userPublicKey === "string"
          ? new PublicKey(userPublicKey)
          : userPublicKey;

      console.log("\n=== COMPLETING SOCIAL TASK ===");

      // ✅ Logging helper only (not used in program call)
      const taskTypes = {
        0: "welcomeAirdrop",
        1: "followTwitter",
        2: "likeAndRetweetPinned",
        3: "joinTelegramGroup",
        4: "joinDiscordServer",
        5: "subscribeYouTube",
        6: "accountVerification",
      };

      console.log(`Task: ${taskTypes[taskType] || taskType}`);
      console.log(`Proof: ${proof}`);

      // ✅ PDA derivation
      const [userAccountPda] = PublicKey.findProgramAddressSync(
        [Buffer.from("user_account"), userPubKey.toBuffer()],
        program.programId
      );
      // Derive task registry PDA
      const [taskRegistryPda] = PublicKey.findProgramAddressSync(
        [Buffer.from("task_registry")],
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
        6: { accountVerification: {} },
      };

      const socialTaskType = enumMap[taskType];
      if (!socialTaskType)
        throw new Error("Invalid task type index: " + taskType);
      console.log("Completing social task...");
      // ✅ Transaction call
      const tx = await program.methods
        .completeSocialTask(socialTaskType, proof)
        .accountsStrict({
          userAccount: userAccountPda,
          airdropState: airdropStatePda,
          taskRegistry: taskRegistryPda,
          user: userPubKey,
          sponsor: userPubKey, // Added sponsor
          systemProgram: SystemProgram.programId,
        })
        .rpc();

      console.log("✅ Social task completed successfully!");
      console.log("Transaction signature:", tx);
      console.log(
        "View on Explorer: https://explorer.solana.com/tx/" +
          tx +
          "?cluster=devnet"
      );

      // ✅ Fetch updated account info
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

  /*  const handleSocialTask = async (
    taskType: number,
    proof: string
  ): Promise<any> => {
    try {
      const anchProvider = getProvider();
      const connection = anchProvider.connection;
      const userPublicKey = anchProvider.publicKey;
      const program = new Program<TopxAirdrop>(idl_object, anchProvider);

      const userPubKey =
        typeof anchProvider.publicKey === "string"
          ? new PublicKey(userPublicKey)
          : userPublicKey;

      // Task type mapping
      const taskTypes = {
        0: "FollowTwitter",
        1: "LikeAndRetweetPinned",
        2: "JoinTelegramGroup",
        3: "JoinTelegramChannel",
        4: "JoinDiscordServer",
        5: "SubscribeYouTube",
      };

      // === Derive PDAs ===
      const [userAccountPda] = PublicKey.findProgramAddressSync(
        [Buffer.from("user_account"), userPubKey.toBuffer()],
        program.programId
      );

      const [airdropStatePda] = PublicKey.findProgramAddressSync(
        [Buffer.from("airdrop_state")],
        program.programId
      );

      console.log(`Task: ${taskTypes[taskType] || taskType}`);
      console.log(`Proof: ${proof}`);

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

      // === Build Transaction ===
      const tx = new web3.Transaction();

      const instruction = await program.methods
        .completeSocialTask(socialTaskType, proof)
        .accounts({
          userAccount: userAccountPda,
          airdropState: airdropStatePda,
          user: userPubKey,
        })
        .instruction();

      tx.add(instruction);

      // === Set blockhash & fee payer ===
      const latestBlockhash = await connection.getLatestBlockhash("finalized");
      tx.recentBlockhash = latestBlockhash.blockhash;
      tx.feePayer = userPubKey;

      // === Sign Locally ===
      const signedTx = await anchProvider.wallet.signTransaction(tx);

      // === Send to Sponsor Backend ===
      const serialized = signedTx
        .serialize({ requireAllSignatures: false })
        .toString("base64");

      const res = await fetch(
        "https://martian-crescent-241154.postman.co/workspace/Team-Workspace~65e514e1-acdb-45f1-8ca7-b121f0041912/collection/23659108-df7020c1-a8a4-4d67-a003-a61cfb14768a?action=share&source=copy-link&creator=23659108",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userTransaction: serialized,
            userPublicKey: userPubKey.toBase58(),
          }),
        }
      );

      const { signature } = await res.json();
      if (!signature) {
        throw new Error("Sponsored transaction failed.");
      }

      console.log("✅ Social task completed!");
      console.log("Tx Signature:", signature);
      console.log(
        "Explorer: https://explorer.solana.com/tx/" +
          signature +
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

      return signature;
    } catch (err: any) {
      console.error("❌ Social task failed:", err.message);
      if (err.logs) err.logs.forEach((log: string) => console.log(log));
      throw err;
    }
  }; */

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
        "WelcomeAirdop",
        "FollowTwitter",
        "LikeAndRetweetPinned",
        "JoinTelegramGroup",
        "JoinDiscordServer",
        "SubscribeYouTube",
        "accountVerification",
      ];

      console.log("Task completion status:");

      tasks.forEach((completed, index) => {
        const status = completed ? "✅ Completed" : "❌ Not completed";
        console.log(`  ${index}. ${taskNames[index]}: ${status}`);
      });
      /* console.log(tasks.length); */

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

      const userAccount = await program.account.userAccount.fetch(
        userAccountPda
      );

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

  const checkTokenAccount = async (tokenAccount, accountName) => {
    const { getAccount } = await import("@solana/spl-token");

    try {
      console.log(`Checking ${accountName}: ${tokenAccount.toString()}`);

      const accountInfo = await getAccount(connection, tokenAccount);

      console.log(
        `✅ ${accountName} exists with balance: ${accountInfo.amount.toString()}`
      );
      return accountInfo;
    } catch (err) {
      if (err.name === "TokenAccountNotFoundError") {
        console.log(`❌ ${accountName} not found`);
        return null;
      }
      throw err;
    }
  };

  const handleWithdrawTokens = async (
    userWallet: WalletContextState,
    amountInTokens: number
  ): Promise<TransactionSignature> => {
    // inside a function

    if (!userWallet || !userWallet.publicKey) {
      throw new Error("Wallet not connected or missing public key");
    }
    const {
      TOKEN_PROGRAM_ID,
      ASSOCIATED_TOKEN_PROGRAM_ID,
      getAssociatedTokenAddress,
      createAssociatedTokenAccountInstruction,
      getAccount,
      getMint,
    } = await import("@solana/spl-token");

    try {
      const TOKEN_MINT = new PublicKey(
        "AFxAyQqpnqazUkP3RYpvcpVpvNPpvPGE9JuQmSzaCA8m"
      );

      const anchProvider = getProvider();
      const userPublicKey = anchProvider.publicKey;
      // const program = new Program<TopxAirdrop>(idl_object, anchProvider);

      const program = new Program<TopxAirdrop>(idl as Idl, anchProvider);

      const userPubKey =
        typeof userPublicKey === "string"
          ? new PublicKey(userPublicKey)
          : userPublicKey;

      console.log("\n=== WITHDRAWING TOKENS ===");

      // Convert amount to BN with proper decimals (assuming 9 decimals)
      const amount = new BN(amountInTokens).mul(new BN(10).pow(new BN(9)));
      console.log(
        `Withdrawing ${amountInTokens} tokens (${amount.toString()} base units)`
      );

      // Derive user account PDA
      const [userAccountPda] = PublicKey.findProgramAddressSync(
        [Buffer.from("user_account"), userPubKey.toBuffer()],
        program.programId
      );

      // Derive airdrop token account PDA
      const [airdropTokenAccount] = PublicKey.findProgramAddressSync(
        [Buffer.from("airdrop_token_account"), TOKEN_MINT.toBuffer()],
        program.programId
      );

      // Get user's associated token account
      const userTokenAccount = await getAssociatedTokenAddress(
        TOKEN_MINT,
        userWallet.publicKey || userPubKey ////check this later
      );

      console.log("User token account:", userTokenAccount.toString());

      // Check if user token account exists, create if needed
      const userTokenAccountInfo = await checkTokenAccount(
        userTokenAccount,
        "User token account"
      );

      if (!userTokenAccountInfo) {
        console.log("Creating user token account...");

        const createIx = createAssociatedTokenAccountInstruction(
          userWallet.publicKey, // payer
          userTokenAccount, // ata
          userWallet.publicKey, // owner
          TOKEN_MINT // mint
        );

        const createTx = new Transaction().add(createIx);
        /* const createSignature = await connection.sendTransaction(createTx, [userWallet]);
      await connection.confirmTransaction(createSignature); */

        await anchProvider.sendAndConfirm(createTx, []);
        console.log("✅ User token account created!");
      }

      // Get airdrop state to find admin

      // Derive airdropState PDA
      const [airdropStatePda] = PublicKey.findProgramAddressSync(
        [Buffer.from("airdrop_state")],
        program.programId
      );

      const [withdrawalTrackerPda] = PublicKey.findProgramAddressSync(
        [Buffer.from("withdrawal_tracker"), userPubKey.toBuffer()],
        program.programId
      );

      const ata = await getAssociatedTokenAddress(
        TOKEN_MINT,
        userWallet.publicKey
      );
      console.log("Derived ATA:", ata.toString());

      try {
        const info = await getAccount(anchProvider.connection, ata);
        console.log("Owner:", info.owner.toBase58());
        console.log("Mint:", info.mint.toBase58());
        console.log("Amount:", info.amount.toString());
      } catch (e) {
        console.log("❌ Invalid ATA:", e.message);
      }

      const mintInfo = await getMint(anchProvider.connection, TOKEN_MINT);
      console.log("Decimals:", mintInfo.decimals);
      console.log("Supply:", mintInfo.supply.toString());

      const airdropState = await program.account.airdropState.fetch(
        airdropStatePda
      );
      console.log("Withdrawing tokens...");

      const tx = await program.methods
        .withdrawTokens(amount)
        .accountsStrict({
          userAccount: userAccountPda,
          airdropState: airdropStatePda,
          withdrawalTracker: withdrawalTrackerPda, // ✅ now included
          airdropTokenAccount: airdropTokenAccount,
          userTokenAccount: userTokenAccount,
          tokenMint: TOKEN_MINT,
          user: userWallet.publicKey,
          admin: airdropState.admin,
          tokenProgram: TOKEN_PROGRAM_ID,
          systemProgram: web3.SystemProgram.programId,
        })

        .rpc();

      console.log("✅ Tokens withdrawn successfully!");
      console.log("Transaction signature:", tx);
      console.log(
        "View on Explorer: https://explorer.solana.com/tx/" +
          tx +
          "?cluster=devnet"
      );

      // Verify withdrawal
      const updatedUserAccount = await program.account.userAccount.fetch(
        userAccountPda
      );
      const updatedUserTokenAccount = await checkTokenAccount(
        userTokenAccount,
        "Updated user token account"
      );

      console.log(
        "Updated pending rewards:",
        updatedUserAccount.pendingRewards.toString()
      );
      if (!updatedUserTokenAccount) {
        console.error("❌ Failed to fetch updated user token account");
      } else {
        console.log(
          "User token balance:",
          updatedUserTokenAccount.amount.toString()
        );
      }

      return tx;
    } catch (err) {
      console.error("❌ Failed to withdraw tokens:", err.message);

      if (err.logs) {
        console.error("Program logs:");
        err.logs.forEach((log) => console.log(log));
      }

      throw err;
    }
  };
  /* const handleWithdrawTokens = async (
    userWallet: WalletContextState,
    amountInTokens: number
  ): Promise<TransactionSignature> => {
    // inside a function

    if (!userWallet || !userWallet.publicKey) {
      throw new Error("Wallet not connected or missing public key");
    }
    const {
      TOKEN_PROGRAM_ID,
      ASSOCIATED_TOKEN_PROGRAM_ID,
      getAssociatedTokenAddress,
      createAssociatedTokenAccountInstruction,
      getAccount,
    } = await import("@solana/spl-token");

    try {
      const TOKEN_MINT = new PublicKey(
        "AFxAyQqpnqazUkP3RYpvcpVpvNPpvPGE9JuQmSzaCA8m"
      );

      const anchProvider = getProvider();
      const userPublicKey = anchProvider.publicKey;
      // const program = new Program<TopxAirdrop>(idl_object, anchProvider);
      const program = new Program(idl_object as TopxAirdrop, anchProvider);
      const userPubKey =
        typeof userPublicKey === "string"
          ? new PublicKey(userPublicKey)
          : userPublicKey;

      console.log("\n=== WITHDRAWING TOKENS ===");

      // Convert amount to BN with proper decimals (assuming 9 decimals)
      const amount = new BN(amountInTokens).mul(new BN(10).pow(new BN(9)));
      console.log(
        `Withdrawing ${amountInTokens} tokens (${amount.toString()} base units)`
      );

      // Derive user account PDA
      const [userAccountPda] = PublicKey.findProgramAddressSync(
        [Buffer.from("user_account"), userPubKey.toBuffer()],
        program.programId
      );

      // Derive airdrop token account PDA
      const [airdropTokenAccount] = PublicKey.findProgramAddressSync(
        [Buffer.from("airdrop_token_account"), TOKEN_MINT.toBuffer()],
        program.programId
      );

      // Get user's associated token account
      const userTokenAccount = await getAssociatedTokenAddress(
        TOKEN_MINT,
        userWallet.publicKey || userPubKey ////check this later
      );

      console.log("User token account:", userTokenAccount.toString());

      // Check if user token account exists, create if needed
      const userTokenAccountInfo = await checkTokenAccount(
        userTokenAccount,
        "User token account"
      );

      if (!userTokenAccountInfo) {
        console.log("Creating user token account...");

        const createIx = createAssociatedTokenAccountInstruction(
          userWallet.publicKey, // payer
          userTokenAccount, // ata
          userWallet.publicKey, // owner
          TOKEN_MINT // mint
        );

        const createTx = new Transaction().add(createIx);
        /// const createSignature = await connection.sendTransaction(createTx, [userWallet]);
      //await connection.confirmTransaction(createSignature); *

        await anchProvider.sendAndConfirm(createTx, []);
        console.log("✅ User token account created!");
      }

      // Get airdrop state to find admin

      // Derive airdropState PDA
      const [airdropStatePda] = PublicKey.findProgramAddressSync(
        [Buffer.from("airdrop_state")],
        program.programId
      );

      const airdropState = await program.account.airdropState.fetch(
        airdropStatePda
      );
      console.log("Withdrawing tokens...");

      const tx = await program.methods
        .withdrawTokens(amount)
        .accounts({
          userAccount: userAccountPda,
          airdropState: airdropStatePda,
          airdropTokenAccount: airdropTokenAccount,
          userTokenAccount: userTokenAccount,
          tokenMint: TOKEN_MINT,
          user: userWallet.publicKey,
          admin: airdropState.admin,
          tokenProgram: TOKEN_PROGRAM_ID,
          systemProgram: web3.SystemProgram.programId,
        })

        .rpc();

      console.log("✅ Tokens withdrawn successfully!");
      console.log("Transaction signature:", tx);
      console.log(
        "View on Explorer: https://explorer.solana.com/tx/" +
          tx +
          "?cluster=devnet"
      );

      // Verify withdrawal
      const updatedUserAccount = await program.account.userAccount.fetch(
        userAccountPda
      );
      const updatedUserTokenAccount = await checkTokenAccount(
        userTokenAccount,
        "Updated user token account"
      );

      console.log(
        "Updated pending rewards:",
        updatedUserAccount.pendingRewards.toString()
      );
      console.log(
        "User token balance:",
        updatedUserTokenAccount.amount.toString()
      );

      return tx;
    } catch (err) {
      console.error("❌ Failed to withdraw tokens:", err.message);

      if (err.logs) {
        console.error("Program logs:");
        err.logs.forEach((log) => console.log(log));
      }

      throw err;
    }
  }; */

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
        handleWithdrawTokens,
        handleReferralStats,
        handleWithdrawStats,
      }}
    >
      {children}
    </myWalletContext.Provider>
  );
};

export default myWalletContext;
