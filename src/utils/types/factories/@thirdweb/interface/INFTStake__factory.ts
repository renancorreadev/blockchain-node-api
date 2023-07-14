/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  INFTStake,
  INFTStakeInterface,
} from "../../../@thirdweb/interface/INFTStake";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "RewardTokensDepositedByAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "RewardTokensWithdrawnByAdmin",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "depositRewardTokens",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdrawRewardTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class INFTStake__factory {
  static readonly abi = _abi;
  static createInterface(): INFTStakeInterface {
    return new utils.Interface(_abi) as INFTStakeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): INFTStake {
    return new Contract(address, _abi, signerOrProvider) as INFTStake;
  }
}