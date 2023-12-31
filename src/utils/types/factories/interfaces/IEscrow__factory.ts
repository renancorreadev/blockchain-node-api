/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IEscrow, IEscrowInterface } from "../../interfaces/IEscrow";

const _abi = [
  {
    inputs: [],
    name: "Escrow__AmountGreaterThanDeposited",
    type: "error",
  },
  {
    inputs: [],
    name: "Escrow__InvalidCollectionAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "Escrow__NFTRefundNotPossible",
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
        name: "payer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "weiAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "endTimestamp",
        type: "uint256",
      },
    ],
    name: "Deposited",
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
        indexed: true,
        internalType: "address",
        name: "collection",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "NFTRefunded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "startDepositId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "endDepositId",
        type: "uint256",
      },
    ],
    name: "Withdrawn",
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
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "enum IManagement.Coin",
        name: "coin",
        type: "uint8",
      },
      {
        indexed: true,
        internalType: "bool",
        name: "withdrawnAll",
        type: "bool",
      },
    ],
    name: "WithdrawnByManager",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_payer",
        type: "address",
      },
      {
        internalType: "enum IManagement.Coin",
        name: "_coin",
        type: "uint8",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "depositId",
        type: "uint256",
      },
    ],
    name: "depositOf",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endTimestamp",
            type: "uint256",
          },
          {
            internalType: "enum IManagement.Coin",
            name: "coin",
            type: "uint8",
          },
        ],
        internalType: "struct IEscrow.Deposit",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllAvailableDeposits",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endTimestamp",
            type: "uint256",
          },
          {
            internalType: "enum IManagement.Coin",
            name: "coin",
            type: "uint8",
          },
        ],
        internalType: "struct IEscrow.Deposit[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getNextDepositId",
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
    name: "getNextDepositIdToWithdraw",
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
        name: "_collection",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_depositId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "refundNFT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_depositId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdrawByManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawByManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IEscrow__factory {
  static readonly abi = _abi;
  static createInterface(): IEscrowInterface {
    return new utils.Interface(_abi) as IEscrowInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IEscrow {
    return new Contract(address, _abi, signerOrProvider) as IEscrow;
  }
}
