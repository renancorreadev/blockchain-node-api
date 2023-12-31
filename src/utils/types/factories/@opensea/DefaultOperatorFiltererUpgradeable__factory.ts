/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  DefaultOperatorFiltererUpgradeable,
  DefaultOperatorFiltererUpgradeableInterface,
} from "../../@opensea/DefaultOperatorFiltererUpgradeable";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "OperatorNotAllowed",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    inputs: [],
    name: "OPERATOR_FILTER_REGISTRY",
    outputs: [
      {
        internalType: "contract IOperatorFilterRegistry",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class DefaultOperatorFiltererUpgradeable__factory {
  static readonly abi = _abi;
  static createInterface(): DefaultOperatorFiltererUpgradeableInterface {
    return new utils.Interface(
      _abi
    ) as DefaultOperatorFiltererUpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DefaultOperatorFiltererUpgradeable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as DefaultOperatorFiltererUpgradeable;
  }
}
