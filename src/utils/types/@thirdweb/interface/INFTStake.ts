/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface INFTStakeInterface extends utils.Interface {
  functions: {
    "depositRewardTokens(uint256)": FunctionFragment;
    "withdrawRewardTokens(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "depositRewardTokens" | "withdrawRewardTokens"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "depositRewardTokens",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawRewardTokens",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "depositRewardTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawRewardTokens",
    data: BytesLike
  ): Result;

  events: {
    "RewardTokensDepositedByAdmin(uint256)": EventFragment;
    "RewardTokensWithdrawnByAdmin(uint256)": EventFragment;
  };

  getEvent(
    nameOrSignatureOrTopic: "RewardTokensDepositedByAdmin"
  ): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "RewardTokensWithdrawnByAdmin"
  ): EventFragment;
}

export interface RewardTokensDepositedByAdminEventObject {
  _amount: BigNumber;
}
export type RewardTokensDepositedByAdminEvent = TypedEvent<
  [BigNumber],
  RewardTokensDepositedByAdminEventObject
>;

export type RewardTokensDepositedByAdminEventFilter =
  TypedEventFilter<RewardTokensDepositedByAdminEvent>;

export interface RewardTokensWithdrawnByAdminEventObject {
  _amount: BigNumber;
}
export type RewardTokensWithdrawnByAdminEvent = TypedEvent<
  [BigNumber],
  RewardTokensWithdrawnByAdminEventObject
>;

export type RewardTokensWithdrawnByAdminEventFilter =
  TypedEventFilter<RewardTokensWithdrawnByAdminEvent>;

export interface INFTStake extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: INFTStakeInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    depositRewardTokens(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdrawRewardTokens(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  depositRewardTokens(
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdrawRewardTokens(
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    depositRewardTokens(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawRewardTokens(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "RewardTokensDepositedByAdmin(uint256)"(
      _amount?: null
    ): RewardTokensDepositedByAdminEventFilter;
    RewardTokensDepositedByAdmin(
      _amount?: null
    ): RewardTokensDepositedByAdminEventFilter;

    "RewardTokensWithdrawnByAdmin(uint256)"(
      _amount?: null
    ): RewardTokensWithdrawnByAdminEventFilter;
    RewardTokensWithdrawnByAdmin(
      _amount?: null
    ): RewardTokensWithdrawnByAdminEventFilter;
  };

  estimateGas: {
    depositRewardTokens(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdrawRewardTokens(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    depositRewardTokens(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdrawRewardTokens(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
