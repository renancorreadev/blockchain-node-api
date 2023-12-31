/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  PermissionsEnumerable,
  PermissionsEnumerableInterface,
} from "../../../@thirdweb/extension/PermissionsEnumerable";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getRoleMember",
    outputs: [
      {
        internalType: "address",
        name: "member",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleMemberCount",
    outputs: [
      {
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRoleWithSwitch",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610aca806100206000396000f3fe608060405234801561001057600080fd5b50600436106100a35760003560e01c806391d1485411610076578063a32fa5b31161005b578063a32fa5b31461017d578063ca15c87314610190578063d547741f146101a357600080fd5b806391d148541461012e578063a217fddf1461017557600080fd5b8063248a9ca3146100a85780632f2ff15d146100db57806336568abe146100f05780639010d07c14610103575b600080fd5b6100c86100b63660046108c2565b60009081526001602052604090205490565b6040519081526020015b60405180910390f35b6100ee6100e93660046108db565b6101b6565b005b6100ee6100fe3660046108db565b610253565b610116610111366004610917565b6102b5565b6040516001600160a01b0390911681526020016100d2565b61016561013c3660046108db565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b60405190151581526020016100d2565b6100c8600081565b61016561018b3660046108db565b6103b3565b6100c861019e3660046108c2565b610405565b6100ee6101b13660046108db565b61049e565b6000828152600160205260409020546101cf90336104b3565b6000828152602081815260408083206001600160a01b038516845290915290205460ff16156102455760405162461bcd60e51b815260206004820152601d60248201527f43616e206f6e6c79206772616e7420746f206e6f6e20686f6c6465727300000060448201526064015b60405180910390fd5b61024f8282610531565b5050565b336001600160a01b038216146102ab5760405162461bcd60e51b815260206004820152601a60248201527f43616e206f6e6c792072656e6f756e636520666f722073656c66000000000000604482015260640161023c565b61024f8282610545565b60008281526002602052604081205481805b828110156103a95760008681526002602090815260408083208484526001019091529020546001600160a01b031615610343578482036103315760008681526002602090815260408083209383526001909301905220546001600160a01b031692506103ad915050565b61033c60018361094f565b9150610397565b60008681526020818152604080832083805290915290205460ff16801561038457506000868152600260208181526040808420848052909201905290205481145b156103975761039460018361094f565b91505b6103a260018261094f565b90506102c7565b5050505b92915050565b60008281526020818152604080832083805290915281205460ff166103fc57506000828152602081815260408083206001600160a01b038516845290915290205460ff166103ad565b50600192915050565b600081815260026020526040812054815b818110156104695760008481526002602090815260408083208484526001019091529020546001600160a01b0316156104575761045460018461094f565b92505b61046260018261094f565b9050610416565b5060008381526020818152604080832083805290915290205460ff16156104985761049560018361094f565b91505b50919050565b6000828152600160205260409020546102ab90335b6000828152602081815260408083206001600160a01b038516845290915290205460ff1661024f576104ef816001600160a01b031660146105a8565b6104fa8360206105a8565b60405160200161050b929190610986565b60408051601f198184030181529082905262461bcd60e51b825261023c91600401610a07565b61053b8282610790565b61024f82826107e9565b61054f8282610862565b60009182526002602081815260408085206001600160a01b03949094168086529284018083528186208054875260019095018352908520805473ffffffffffffffffffffffffffffffffffffffff191690559184525255565b606060006105b7836002610a3a565b6105c290600261094f565b67ffffffffffffffff8111156105da576105da610a51565b6040519080825280601f01601f191660200182016040528015610604576020820181803683370190505b5090507f30000000000000000000000000000000000000000000000000000000000000008160008151811061063b5761063b610a67565b60200101906001600160f81b031916908160001a9053507f78000000000000000000000000000000000000000000000000000000000000008160018151811061068657610686610a67565b60200101906001600160f81b031916908160001a90535060006106aa846002610a3a565b6106b590600161094f565b90505b600181111561073a577f303132333435363738396162636465660000000000000000000000000000000085600f16601081106106f6576106f6610a67565b1a60f81b82828151811061070c5761070c610a67565b60200101906001600160f81b031916908160001a90535060049490941c9361073381610a7d565b90506106b8565b5083156107895760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640161023c565b9392505050565b6000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916600117905551339285917f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9190a45050565b600082815260026020526040812080549160019190610808838561094f565b9091555050600092835260026020818152604080862084875260018101835281872080546001600160a01b0390971673ffffffffffffffffffffffffffffffffffffffff1990971687179055948652939091019052912055565b61086c82826104b3565b6000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6000602082840312156108d457600080fd5b5035919050565b600080604083850312156108ee57600080fd5b8235915060208301356001600160a01b038116811461090c57600080fd5b809150509250929050565b6000806040838503121561092a57600080fd5b50508035926020909101359150565b634e487b7160e01b600052601160045260246000fd5b808201808211156103ad576103ad610939565b60005b8381101561097d578181015183820152602001610965565b50506000910152565b7f5065726d697373696f6e733a206163636f756e742000000000000000000000008152600083516109be816015850160208801610962565b7f206973206d697373696e6720726f6c652000000000000000000000000000000060159184019182015283516109fb816026840160208801610962565b01602601949350505050565b6020815260008251806020840152610a26816040850160208701610962565b601f01601f19169190910160400192915050565b80820281158282048414176103ad576103ad610939565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b600081610a8c57610a8c610939565b50600019019056fea2646970667358221220b315c258f7b23acccf96721eef66347c8690d871706b7c024d425a2aff20759464736f6c63430008130033";

type PermissionsEnumerableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PermissionsEnumerableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PermissionsEnumerable__factory extends ContractFactory {
  constructor(...args: PermissionsEnumerableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<PermissionsEnumerable> {
    return super.deploy(overrides || {}) as Promise<PermissionsEnumerable>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): PermissionsEnumerable {
    return super.attach(address) as PermissionsEnumerable;
  }
  override connect(signer: Signer): PermissionsEnumerable__factory {
    return super.connect(signer) as PermissionsEnumerable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PermissionsEnumerableInterface {
    return new utils.Interface(_abi) as PermissionsEnumerableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PermissionsEnumerable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as PermissionsEnumerable;
  }
}
