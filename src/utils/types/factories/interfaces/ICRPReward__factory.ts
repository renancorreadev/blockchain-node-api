/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ICRPReward,
  ICRPRewardInterface,
} from "../../interfaces/ICRPReward";

const _abi = [
  {
    inputs: [],
    name: "CRPReward__InputArraysNotSameLength",
    type: "error",
  },
  {
    inputs: [],
    name: "CRPReward__InteracPointsPrecisionIsZero",
    type: "error",
  },
  {
    inputs: [],
    name: "CRPReward__InvalidCoin",
    type: "error",
  },
  {
    inputs: [],
    name: "CRPReward__InvalidCollection",
    type: "error",
  },
  {
    inputs: [],
    name: "CRPReward__InvalidMaxRewardClaimValue",
    type: "error",
  },
  {
    inputs: [],
    name: "CRPReward__NoRewards",
    type: "error",
  },
  {
    inputs: [],
    name: "CRPReward__NotAllowed",
    type: "error",
  },
  {
    inputs: [],
    name: "CRPReward__TimeUnitZero",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "manager",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "collection",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256[]",
        name: "tokenId",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "hashpower",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "characteristId",
        type: "uint256[]",
      },
    ],
    name: "HashObjectSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "manager",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[3]",
        name: "precision",
        type: "uint256[3]",
      },
    ],
    name: "InteracPointsPrecisionSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "manager",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "maxRewardClaim",
        type: "uint256",
      },
    ],
    name: "MaxRewardClaimSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timeUnit",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "rewardsPerUnitTime",
        type: "uint256",
      },
    ],
    name: "NewRewardCondition",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "hashpower",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "points",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountPaid",
        type: "uint256",
      },
    ],
    name: "PointsSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "RewardsClaimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "TokenRemoved",
    type: "event",
  },
  {
    inputs: [],
    name: "claimRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "address",
        name: "collection",
        type: "address",
      },
    ],
    name: "getAllTokenIdsPerUser",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "address",
        name: "collection",
        type: "address",
      },
    ],
    name: "getCollectionIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentRewardCondition",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "timeUnit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rewardsPerUnitTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "startTimestamp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endTimestamp",
            type: "uint256",
          },
        ],
        internalType: "struct ICRPReward.RewardCondition",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "collection",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getHashObject",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getImplementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getInteracPointsPrecision",
    outputs: [
      {
        internalType: "uint256[3]",
        name: "",
        type: "uint256[3]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getMaxRewardClaim",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getNextConditionId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "conditionId",
        type: "uint256",
      },
    ],
    name: "getRewardCondition",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "timeUnit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rewardsPerUnitTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "startTimestamp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endTimestamp",
            type: "uint256",
          },
        ],
        internalType: "struct ICRPReward.RewardCondition",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "address",
        name: "collection",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getTokenIdsPerUser",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "collection",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getTokenInfo",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "index",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "hashpower",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "characteristId",
            type: "uint256",
          },
        ],
        internalType: "struct ICRPReward.TokenInfo",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getUnclaimedRewards",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getUser",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "index",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "score",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "points",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "timeOfLastUpdate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "unclaimedRewards",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "conditionIdOflastUpdate",
            type: "uint256",
          },
          {
            internalType: "address[]",
            name: "collections",
            type: "address[]",
          },
        ],
        internalType: "struct ICRPReward.User",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getUserUpdated",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "index",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "score",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "points",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "timeOfLastUpdate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "unclaimedRewards",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "conditionIdOflastUpdate",
            type: "uint256",
          },
          {
            internalType: "address[]",
            name: "collections",
            type: "address[]",
          },
        ],
        internalType: "struct ICRPReward.User",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getUsersArray",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "management",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "timeUnit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardsPerUnitTime",
        type: "uint256",
      },
      {
        internalType: "uint256[3]",
        name: "interacPoints",
        type: "uint256[3]",
      },
      {
        internalType: "uint256",
        name: "maxRewardClaim",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "emitEvent",
        type: "bool",
      },
    ],
    name: "removeToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "collection",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "tokenId",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "hashPower",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "characteristId",
        type: "uint256[]",
      },
    ],
    name: "setHashObject",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[3]",
        name: "precision",
        type: "uint256[3]",
      },
    ],
    name: "setInteracPointsPrecision",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "maxRewardClaim",
        type: "uint256",
      },
    ],
    name: "setMaxRewardClaim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "coin",
        type: "uint8",
      },
      {
        internalType: "bool",
        name: "isSell",
        type: "bool",
      },
    ],
    name: "setPoints",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "timeUnit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardsPerUnitTime",
        type: "uint256",
      },
    ],
    name: "setRewardCondition",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ICRPReward__factory {
  static readonly abi = _abi;
  static createInterface(): ICRPRewardInterface {
    return new utils.Interface(_abi) as ICRPRewardInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICRPReward {
    return new Contract(address, _abi, signerOrProvider) as ICRPReward;
  }
}