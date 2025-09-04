/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/topx_airdrop.json`.
 */
export type TopxAirdrop = {
  "address": "Bfd3USbTQAgejPJ8eyygtoNsjV9foHoYEPqRNnkrpUFk",
  "metadata": {
    "name": "topxAirdrop",
    "version": "0.1.1",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "addSocialTask",
      "discriminator": [
        231,
        108,
        210,
        182,
        109,
        180,
        131,
        216
      ],
      "accounts": [
        {
          "name": "airdropState",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  105,
                  114,
                  100,
                  114,
                  111,
                  112,
                  95,
                  115,
                  116,
                  97,
                  116,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "taskRegistry",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  97,
                  115,
                  107,
                  95,
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "admin",
          "signer": true
        }
      ],
      "args": [
        {
          "name": "taskName",
          "type": "string"
        },
        {
          "name": "rewardTokens",
          "type": "u64"
        }
      ]
    },
    {
      "name": "changeAdmin",
      "discriminator": [
        193,
        151,
        203,
        161,
        200,
        202,
        32,
        146
      ],
      "accounts": [
        {
          "name": "airdropState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  105,
                  114,
                  100,
                  114,
                  111,
                  112,
                  95,
                  115,
                  116,
                  97,
                  116,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "admin",
          "signer": true
        }
      ],
      "args": [
        {
          "name": "newAdmin",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "completeSocialTask",
      "discriminator": [
        64,
        77,
        3,
        119,
        95,
        84,
        113,
        54
      ],
      "accounts": [
        {
          "name": "userAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "user"
              }
            ]
          }
        },
        {
          "name": "airdropState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  105,
                  114,
                  100,
                  114,
                  111,
                  112,
                  95,
                  115,
                  116,
                  97,
                  116,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "taskRegistry",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  97,
                  115,
                  107,
                  95,
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "user",
          "relations": [
            "userAccount"
          ]
        },
        {
          "name": "sponsor",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "taskId",
          "type": "u8"
        },
        {
          "name": "proof",
          "type": "string"
        }
      ]
    },
    {
      "name": "emergencyPause",
      "discriminator": [
        21,
        143,
        27,
        142,
        200,
        181,
        210,
        255
      ],
      "accounts": [
        {
          "name": "airdropState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  105,
                  114,
                  100,
                  114,
                  111,
                  112,
                  95,
                  115,
                  116,
                  97,
                  116,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "admin",
          "signer": true
        }
      ],
      "args": []
    },
    {
      "name": "endAirdrop",
      "discriminator": [
        128,
        69,
        166,
        254,
        137,
        197,
        2,
        140
      ],
      "accounts": [
        {
          "name": "airdropState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  105,
                  114,
                  100,
                  114,
                  111,
                  112,
                  95,
                  115,
                  116,
                  97,
                  116,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "admin",
          "signer": true
        }
      ],
      "args": []
    },
    {
      "name": "fundAirdrop",
      "discriminator": [
        63,
        24,
        238,
        60,
        169,
        178,
        131,
        99
      ],
      "accounts": [
        {
          "name": "airdropState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  105,
                  114,
                  100,
                  114,
                  111,
                  112,
                  95,
                  115,
                  116,
                  97,
                  116,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "admin",
          "signer": true
        },
        {
          "name": "adminTokenAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "admin"
              },
              {
                "kind": "const",
                "value": [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                "kind": "account",
                "path": "tokenMint"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "tokenMint"
        },
        {
          "name": "airdropTokenAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  105,
                  114,
                  100,
                  114,
                  111,
                  112,
                  95,
                  116,
                  111,
                  107,
                  101,
                  110,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "tokenMint"
              }
            ]
          }
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "getPlatformStats",
      "discriminator": [
        7,
        67,
        17,
        0,
        4,
        24,
        81,
        38
      ],
      "accounts": [
        {
          "name": "airdropState",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  105,
                  114,
                  100,
                  114,
                  111,
                  112,
                  95,
                  115,
                  116,
                  97,
                  116,
                  101
                ]
              }
            ]
          }
        }
      ],
      "args": [],
      "returns": {
        "defined": {
          "name": "platformStats"
        }
      }
    },
    {
      "name": "getReferralStats",
      "discriminator": [
        175,
        132,
        28,
        234,
        49,
        218,
        79,
        255
      ],
      "accounts": [
        {
          "name": "referralTracker",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  102,
                  101,
                  114,
                  114,
                  97,
                  108,
                  95,
                  116,
                  114,
                  97,
                  99,
                  107,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "referral_tracker.account",
                "account": "referralTracker"
              }
            ]
          }
        }
      ],
      "args": [],
      "returns": {
        "defined": {
          "name": "referralStats"
        }
      }
    },
    {
      "name": "getSocialTasks",
      "discriminator": [
        254,
        93,
        92,
        89,
        143,
        130,
        195,
        186
      ],
      "accounts": [
        {
          "name": "taskRegistry",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  97,
                  115,
                  107,
                  95,
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121
                ]
              }
            ]
          }
        }
      ],
      "args": [],
      "returns": {
        "vec": {
          "defined": {
            "name": "dynamicSocialTask"
          }
        }
      }
    },
    {
      "name": "getUserBalance",
      "discriminator": [
        244,
        189,
        220,
        239,
        164,
        70,
        32,
        235
      ],
      "accounts": [
        {
          "name": "userAccount",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "user_account.user",
                "account": "userAccount"
              }
            ]
          }
        }
      ],
      "args": [],
      "returns": "u64"
    },
    {
      "name": "getUserTasks",
      "discriminator": [
        79,
        28,
        160,
        129,
        177,
        182,
        234,
        208
      ],
      "accounts": [
        {
          "name": "userAccount",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "user_account.user",
                "account": "userAccount"
              }
            ]
          }
        }
      ],
      "args": [],
      "returns": {
        "vec": "bool"
      }
    },
    {
      "name": "getWithdrawalStats",
      "discriminator": [
        224,
        127,
        195,
        151,
        28,
        201,
        177,
        204
      ],
      "accounts": [
        {
          "name": "withdrawalTracker",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  119,
                  105,
                  116,
                  104,
                  100,
                  114,
                  97,
                  119,
                  97,
                  108,
                  95,
                  116,
                  114,
                  97,
                  99,
                  107,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "withdrawal_tracker.account",
                "account": "withdrawalTracker"
              }
            ]
          }
        }
      ],
      "args": [],
      "returns": {
        "defined": {
          "name": "withdrawalStats"
        }
      }
    },
    {
      "name": "initialize",
      "discriminator": [
        175,
        175,
        109,
        31,
        13,
        152,
        155,
        237
      ],
      "accounts": [
        {
          "name": "airdropState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  105,
                  114,
                  100,
                  114,
                  111,
                  112,
                  95,
                  115,
                  116,
                  97,
                  116,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "tokenMint",
          "type": "pubkey"
        },
        {
          "name": "maxTotalTokens",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initializeAirdropTokenAccount",
      "discriminator": [
        69,
        205,
        208,
        25,
        184,
        139,
        48,
        18
      ],
      "accounts": [
        {
          "name": "airdropState",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  105,
                  114,
                  100,
                  114,
                  111,
                  112,
                  95,
                  115,
                  116,
                  97,
                  116,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "airdropTokenAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  105,
                  114,
                  100,
                  114,
                  111,
                  112,
                  95,
                  116,
                  111,
                  107,
                  101,
                  110,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "tokenMint"
              }
            ]
          }
        },
        {
          "name": "tokenMint"
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "initializeTaskRegistry",
      "discriminator": [
        65,
        207,
        222,
        58,
        180,
        61,
        200,
        118
      ],
      "accounts": [
        {
          "name": "airdropState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  105,
                  114,
                  100,
                  114,
                  111,
                  112,
                  95,
                  115,
                  116,
                  97,
                  116,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "taskRegistry",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  97,
                  115,
                  107,
                  95,
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "registerUser",
      "discriminator": [
        2,
        241,
        150,
        223,
        99,
        214,
        116,
        97
      ],
      "accounts": [
        {
          "name": "userAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "user"
              }
            ]
          }
        },
        {
          "name": "airdropState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  105,
                  114,
                  100,
                  114,
                  111,
                  112,
                  95,
                  115,
                  116,
                  97,
                  116,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "referralTracker",
          "writable": true,
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  102,
                  101,
                  114,
                  114,
                  97,
                  108,
                  95,
                  116,
                  114,
                  97,
                  99,
                  107,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "user"
              }
            ]
          }
        },
        {
          "name": "referrerUserAccount",
          "writable": true,
          "optional": true
        },
        {
          "name": "referrerAccount",
          "writable": true,
          "optional": true
        },
        {
          "name": "user"
        },
        {
          "name": "sponsor",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "referrer",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "removeSocialTask",
      "discriminator": [
        39,
        244,
        161,
        3,
        133,
        248,
        113,
        104
      ],
      "accounts": [
        {
          "name": "airdropState",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  105,
                  114,
                  100,
                  114,
                  111,
                  112,
                  95,
                  115,
                  116,
                  97,
                  116,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "taskRegistry",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  97,
                  115,
                  107,
                  95,
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "admin",
          "signer": true
        }
      ],
      "args": [
        {
          "name": "taskId",
          "type": "u8"
        }
      ]
    },
    {
      "name": "resumeAirdrop",
      "discriminator": [
        204,
        105,
        226,
        85,
        141,
        155,
        208,
        3
      ],
      "accounts": [
        {
          "name": "airdropState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  105,
                  114,
                  100,
                  114,
                  111,
                  112,
                  95,
                  115,
                  116,
                  97,
                  116,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "admin",
          "signer": true
        }
      ],
      "args": []
    },
    {
      "name": "withdrawLeftoverTokens",
      "discriminator": [
        153,
        54,
        171,
        204,
        203,
        173,
        189,
        228
      ],
      "accounts": [
        {
          "name": "airdropState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  105,
                  114,
                  100,
                  114,
                  111,
                  112,
                  95,
                  115,
                  116,
                  97,
                  116,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "airdropTokenAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  105,
                  114,
                  100,
                  114,
                  111,
                  112,
                  95,
                  116,
                  111,
                  107,
                  101,
                  110,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "tokenMint"
              }
            ]
          }
        },
        {
          "name": "adminTokenAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "admin"
              },
              {
                "kind": "const",
                "value": [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                "kind": "account",
                "path": "tokenMint"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "tokenMint"
        },
        {
          "name": "admin",
          "signer": true
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "withdrawTokens",
      "discriminator": [
        2,
        4,
        225,
        61,
        19,
        182,
        106,
        170
      ],
      "accounts": [
        {
          "name": "userAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "user"
              }
            ]
          }
        },
        {
          "name": "airdropState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  105,
                  114,
                  100,
                  114,
                  111,
                  112,
                  95,
                  115,
                  116,
                  97,
                  116,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "withdrawalTracker",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  119,
                  105,
                  116,
                  104,
                  100,
                  114,
                  97,
                  119,
                  97,
                  108,
                  95,
                  116,
                  114,
                  97,
                  99,
                  107,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "user"
              }
            ]
          }
        },
        {
          "name": "airdropTokenAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  105,
                  114,
                  100,
                  114,
                  111,
                  112,
                  95,
                  116,
                  111,
                  107,
                  101,
                  110,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "tokenMint"
              }
            ]
          }
        },
        {
          "name": "userTokenAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "user"
              },
              {
                "kind": "const",
                "value": [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                "kind": "account",
                "path": "tokenMint"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "tokenMint"
        },
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "admin",
          "writable": true
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "airdropState",
      "discriminator": [
        1,
        49,
        110,
        205,
        185,
        136,
        198,
        165
      ]
    },
    {
      "name": "referralTracker",
      "discriminator": [
        244,
        194,
        53,
        58,
        139,
        143,
        113,
        96
      ]
    },
    {
      "name": "socialTaskRegistry",
      "discriminator": [
        158,
        250,
        166,
        205,
        141,
        58,
        102,
        191
      ]
    },
    {
      "name": "userAccount",
      "discriminator": [
        211,
        33,
        136,
        16,
        186,
        110,
        242,
        127
      ]
    },
    {
      "name": "withdrawalTracker",
      "discriminator": [
        62,
        56,
        77,
        73,
        100,
        254,
        155,
        145
      ]
    }
  ],
  "events": [
    {
      "name": "adminChanged",
      "discriminator": [
        232,
        34,
        31,
        226,
        62,
        18,
        19,
        114
      ]
    },
    {
      "name": "airdropEnded",
      "discriminator": [
        2,
        119,
        146,
        235,
        145,
        37,
        84,
        192
      ]
    },
    {
      "name": "airdropFunded",
      "discriminator": [
        18,
        9,
        102,
        76,
        28,
        210,
        194,
        99
      ]
    },
    {
      "name": "airdropInitialized",
      "discriminator": [
        218,
        5,
        88,
        115,
        246,
        124,
        154,
        187
      ]
    },
    {
      "name": "airdropResumed",
      "discriminator": [
        171,
        171,
        252,
        108,
        22,
        188,
        219,
        204
      ]
    },
    {
      "name": "airdropTokenAccountInitialized",
      "discriminator": [
        57,
        208,
        9,
        21,
        8,
        43,
        176,
        187
      ]
    },
    {
      "name": "emergencyPauseActivated",
      "discriminator": [
        27,
        50,
        161,
        55,
        240,
        51,
        173,
        218
      ]
    },
    {
      "name": "leftoverTokensWithdrawn",
      "discriminator": [
        73,
        230,
        71,
        25,
        73,
        34,
        63,
        32
      ]
    },
    {
      "name": "referralReward",
      "discriminator": [
        30,
        218,
        84,
        175,
        188,
        85,
        219,
        99
      ]
    },
    {
      "name": "socialTaskAdded",
      "discriminator": [
        181,
        226,
        208,
        217,
        88,
        161,
        75,
        225
      ]
    },
    {
      "name": "socialTaskCompleted",
      "discriminator": [
        238,
        250,
        173,
        96,
        223,
        89,
        138,
        53
      ]
    },
    {
      "name": "socialTaskRemoved",
      "discriminator": [
        180,
        1,
        241,
        218,
        97,
        150,
        243,
        229
      ]
    },
    {
      "name": "taskRegistryInitialized",
      "discriminator": [
        190,
        197,
        44,
        6,
        37,
        40,
        198,
        4
      ]
    },
    {
      "name": "tokensWithdrawn",
      "discriminator": [
        30,
        116,
        110,
        147,
        87,
        89,
        9,
        158
      ]
    },
    {
      "name": "userRegistered",
      "discriminator": [
        21,
        42,
        216,
        163,
        99,
        51,
        200,
        222
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "airdropNotActive",
      "msg": "Airdrop is not currently active"
    },
    {
      "code": 6001,
      "name": "airdropNotInitialized",
      "msg": "Airdrop has not been initialized"
    },
    {
      "code": 6002,
      "name": "airdropHasEnded",
      "msg": "Airdrop has already ended"
    },
    {
      "code": 6003,
      "name": "airdropNotEnded",
      "msg": "Airdrop has not ended yet"
    },
    {
      "code": 6004,
      "name": "airdropAlreadyEnded",
      "msg": "Airdrop has already been ended"
    },
    {
      "code": 6005,
      "name": "invalidReferrer",
      "msg": "Invalid referrer"
    },
    {
      "code": 6006,
      "name": "selfReferral",
      "msg": "Cannot refer yourself"
    },
    {
      "code": 6007,
      "name": "maxReferralsExceeded",
      "msg": "Maximum referrals per user exceeded"
    },
    {
      "code": 6008,
      "name": "taskAlreadyCompleted",
      "msg": "Task already completed"
    },
    {
      "code": 6009,
      "name": "insufficientBalance",
      "msg": "Insufficient balance"
    },
    {
      "code": 6010,
      "name": "invalidAmount",
      "msg": "Invalid amount"
    },
    {
      "code": 6011,
      "name": "invalidAdmin",
      "msg": "Invalid admin address"
    },
    {
      "code": 6012,
      "name": "sameAdmin",
      "msg": "Same admin address"
    },
    {
      "code": 6013,
      "name": "invalidTokenMint",
      "msg": "Invalid token mint"
    },
    {
      "code": 6014,
      "name": "invalidMaxTokens",
      "msg": "Invalid max tokens"
    },
    {
      "code": 6015,
      "name": "unauthorized",
      "msg": "Unauthorized access"
    },
    {
      "code": 6016,
      "name": "mathOverflow",
      "msg": "Math overflow"
    },
    {
      "code": 6017,
      "name": "maxTokensExceeded",
      "msg": "Maximum total tokens exceeded"
    },
    {
      "code": 6018,
      "name": "proofRequired",
      "msg": "Proof is required"
    },
    {
      "code": 6019,
      "name": "proofTooLong",
      "msg": "Proof is too long"
    },
    {
      "code": 6020,
      "name": "exceedsEarnedTokens",
      "msg": "Attempting to withdraw more tokens than earned"
    },
    {
      "code": 6021,
      "name": "noTokensAvailable",
      "msg": "No tokens available for withdrawal"
    },
    {
      "code": 6022,
      "name": "taskNameRequired",
      "msg": "Task name is required"
    },
    {
      "code": 6023,
      "name": "taskNameTooLong",
      "msg": "Task name is too long"
    },
    {
      "code": 6024,
      "name": "invalidRewardAmount",
      "msg": "Invalid reward amount"
    },
    {
      "code": 6025,
      "name": "maxTasksExceeded",
      "msg": "Maximum tasks exceeded"
    },
    {
      "code": 6026,
      "name": "cannotRemoveHardcodedTask",
      "msg": "Cannot remove hardcoded task"
    },
    {
      "code": 6027,
      "name": "taskNotFound",
      "msg": "Task not found"
    }
  ],
  "types": [
    {
      "name": "adminChanged",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "oldAdmin",
            "type": "pubkey"
          },
          {
            "name": "newAdmin",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "airdropEnded",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "type": "pubkey"
          },
          {
            "name": "totalUsers",
            "type": "u32"
          },
          {
            "name": "totalTokensDistributed",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "airdropFunded",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "type": "pubkey"
          },
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "airdropInitialized",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "type": "pubkey"
          },
          {
            "name": "tokenMint",
            "type": "pubkey"
          },
          {
            "name": "maxTotalTokens",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "airdropResumed",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "airdropState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "type": "pubkey"
          },
          {
            "name": "tokenMint",
            "type": "pubkey"
          },
          {
            "name": "totalUsers",
            "type": "u32"
          },
          {
            "name": "totalTokensDistributed",
            "type": "u64"
          },
          {
            "name": "totalReferrals",
            "type": "u32"
          },
          {
            "name": "totalTokensOwed",
            "type": "u64"
          },
          {
            "name": "maxTotalTokens",
            "type": "u64"
          },
          {
            "name": "isActive",
            "type": "bool"
          },
          {
            "name": "isInitialized",
            "type": "bool"
          },
          {
            "name": "isEnded",
            "type": "bool"
          },
          {
            "name": "hasTaskRegistry",
            "type": "bool"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "airdropTokenAccountInitialized",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "type": "pubkey"
          },
          {
            "name": "tokenMint",
            "type": "pubkey"
          },
          {
            "name": "tokenAccount",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "dynamicSocialTask",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "taskId",
            "type": "u8"
          },
          {
            "name": "taskName",
            "type": "string"
          },
          {
            "name": "rewardTokens",
            "type": "u64"
          },
          {
            "name": "isActive",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "emergencyPauseActivated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "leftoverTokensWithdrawn",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "type": "pubkey"
          },
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "platformStats",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "totalUsers",
            "type": "u32"
          },
          {
            "name": "totalTokensDistributed",
            "type": "u64"
          },
          {
            "name": "totalReferrals",
            "type": "u32"
          },
          {
            "name": "maxTotalTokens",
            "type": "u64"
          },
          {
            "name": "totalTokensOwed",
            "type": "u64"
          },
          {
            "name": "isActive",
            "type": "bool"
          },
          {
            "name": "isEnded",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "referralReward",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "referrer",
            "type": "pubkey"
          },
          {
            "name": "referee",
            "type": "pubkey"
          },
          {
            "name": "rewardAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "referralStats",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "account",
            "type": "pubkey"
          },
          {
            "name": "task",
            "type": "string"
          },
          {
            "name": "totalReferrals",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "referralTracker",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "account",
            "type": "pubkey"
          },
          {
            "name": "task",
            "type": "string"
          },
          {
            "name": "totalReferrals",
            "type": "u32"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "socialTaskAdded",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "type": "pubkey"
          },
          {
            "name": "taskId",
            "type": "u8"
          },
          {
            "name": "taskName",
            "type": "string"
          },
          {
            "name": "rewardTokens",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "socialTaskCompleted",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "pubkey"
          },
          {
            "name": "taskType",
            "type": "u8"
          },
          {
            "name": "rewardAmount",
            "type": "u64"
          },
          {
            "name": "proof",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "socialTaskRegistry",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tasks",
            "type": {
              "vec": {
                "defined": {
                  "name": "dynamicSocialTask"
                }
              }
            }
          },
          {
            "name": "taskCount",
            "type": "u8"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "socialTaskRemoved",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "type": "pubkey"
          },
          {
            "name": "taskId",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "taskRegistryInitialized",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "tokensWithdrawn",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "pubkey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "gasFeePaid",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "userAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "pubkey"
          },
          {
            "name": "referrer",
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "dateRegistered",
            "type": "i64"
          },
          {
            "name": "referralsCount",
            "type": "u32"
          },
          {
            "name": "pendingRewards",
            "type": "u64"
          },
          {
            "name": "completedTasks",
            "type": "bytes"
          },
          {
            "name": "socialTaskProof",
            "type": "string"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "userRegistered",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "pubkey"
          },
          {
            "name": "referrer",
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "registrationTime",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "withdrawalStats",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "account",
            "type": "pubkey"
          },
          {
            "name": "task",
            "type": "string"
          },
          {
            "name": "totalWithdrawals",
            "type": "u64"
          },
          {
            "name": "lastWithdrawal",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "withdrawalTracker",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "account",
            "type": "pubkey"
          },
          {
            "name": "task",
            "type": "string"
          },
          {
            "name": "totalWithdrawals",
            "type": "u64"
          },
          {
            "name": "lastWithdrawal",
            "type": "i64"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    }
  ]
};
