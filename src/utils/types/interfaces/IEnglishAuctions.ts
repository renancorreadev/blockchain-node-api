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
} from "../common";

export declare namespace IEnglishAuctions {
  export type AuctionStruct = {
    auctionId: PromiseOrValue<BigNumberish>;
    auctionCreator: PromiseOrValue<string>;
    assetContract: PromiseOrValue<string>;
    tokenId: PromiseOrValue<BigNumberish>;
    quantity: PromiseOrValue<BigNumberish>;
    currency: PromiseOrValue<string>;
    minimumBidAmount: PromiseOrValue<BigNumberish>;
    buyoutBidAmount: PromiseOrValue<BigNumberish>;
    timeBufferInSeconds: PromiseOrValue<BigNumberish>;
    bidBufferBps: PromiseOrValue<BigNumberish>;
    startTimestamp: PromiseOrValue<BigNumberish>;
    endTimestamp: PromiseOrValue<BigNumberish>;
    tokenType: PromiseOrValue<BigNumberish>;
    status: PromiseOrValue<BigNumberish>;
  };

  export type AuctionStructOutput = [
    BigNumber,
    string,
    string,
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    number,
    number
  ] & {
    auctionId: BigNumber;
    auctionCreator: string;
    assetContract: string;
    tokenId: BigNumber;
    quantity: BigNumber;
    currency: string;
    minimumBidAmount: BigNumber;
    buyoutBidAmount: BigNumber;
    timeBufferInSeconds: BigNumber;
    bidBufferBps: BigNumber;
    startTimestamp: BigNumber;
    endTimestamp: BigNumber;
    tokenType: number;
    status: number;
  };

  export type AuctionParametersStruct = {
    assetContract: PromiseOrValue<string>;
    tokenId: PromiseOrValue<BigNumberish>;
    quantity: PromiseOrValue<BigNumberish>;
    currency: PromiseOrValue<string>;
    minimumBidAmount: PromiseOrValue<BigNumberish>;
    buyoutBidAmount: PromiseOrValue<BigNumberish>;
    timeBufferInSeconds: PromiseOrValue<BigNumberish>;
    bidBufferBps: PromiseOrValue<BigNumberish>;
    startTimestamp: PromiseOrValue<BigNumberish>;
    endTimestamp: PromiseOrValue<BigNumberish>;
  };

  export type AuctionParametersStructOutput = [
    string,
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    assetContract: string;
    tokenId: BigNumber;
    quantity: BigNumber;
    currency: string;
    minimumBidAmount: BigNumber;
    buyoutBidAmount: BigNumber;
    timeBufferInSeconds: BigNumber;
    bidBufferBps: BigNumber;
    startTimestamp: BigNumber;
    endTimestamp: BigNumber;
  };
}

export interface IEnglishAuctionsInterface extends utils.Interface {
  functions: {
    "bidInAuction(uint256,uint256)": FunctionFragment;
    "cancelAuction(uint256)": FunctionFragment;
    "collectAuctionPayout(uint256)": FunctionFragment;
    "collectAuctionTokens(uint256)": FunctionFragment;
    "createAuction((address,uint256,uint256,address,uint256,uint256,uint64,uint64,uint64,uint64))": FunctionFragment;
    "getAllAuctions(uint256,uint256)": FunctionFragment;
    "getAllValidAuctions(uint256,uint256)": FunctionFragment;
    "getAuction(uint256)": FunctionFragment;
    "getWinningBid(uint256)": FunctionFragment;
    "isAuctionExpired(uint256)": FunctionFragment;
    "isNewWinningBid(uint256,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "bidInAuction"
      | "cancelAuction"
      | "collectAuctionPayout"
      | "collectAuctionTokens"
      | "createAuction"
      | "getAllAuctions"
      | "getAllValidAuctions"
      | "getAuction"
      | "getWinningBid"
      | "isAuctionExpired"
      | "isNewWinningBid"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "bidInAuction",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelAuction",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "collectAuctionPayout",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "collectAuctionTokens",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "createAuction",
    values: [IEnglishAuctions.AuctionParametersStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllAuctions",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllValidAuctions",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getAuction",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getWinningBid",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "isAuctionExpired",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "isNewWinningBid",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "bidInAuction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelAuction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collectAuctionPayout",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collectAuctionTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createAuction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllAuctions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllValidAuctions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getAuction", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getWinningBid",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isAuctionExpired",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isNewWinningBid",
    data: BytesLike
  ): Result;

  events: {
    "AuctionClosed(uint256,address,address,uint256,address,address)": EventFragment;
    "CancelledAuction(address,uint256)": EventFragment;
    "NewAuction(address,uint256,address,tuple)": EventFragment;
    "NewBid(uint256,address,address,uint256,tuple)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AuctionClosed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CancelledAuction"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewAuction"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewBid"): EventFragment;
}

export interface AuctionClosedEventObject {
  auctionId: BigNumber;
  assetContract: string;
  closer: string;
  tokenId: BigNumber;
  auctionCreator: string;
  winningBidder: string;
}
export type AuctionClosedEvent = TypedEvent<
  [BigNumber, string, string, BigNumber, string, string],
  AuctionClosedEventObject
>;

export type AuctionClosedEventFilter = TypedEventFilter<AuctionClosedEvent>;

export interface CancelledAuctionEventObject {
  auctionCreator: string;
  auctionId: BigNumber;
}
export type CancelledAuctionEvent = TypedEvent<
  [string, BigNumber],
  CancelledAuctionEventObject
>;

export type CancelledAuctionEventFilter =
  TypedEventFilter<CancelledAuctionEvent>;

export interface NewAuctionEventObject {
  auctionCreator: string;
  auctionId: BigNumber;
  assetContract: string;
  auction: IEnglishAuctions.AuctionStructOutput;
}
export type NewAuctionEvent = TypedEvent<
  [string, BigNumber, string, IEnglishAuctions.AuctionStructOutput],
  NewAuctionEventObject
>;

export type NewAuctionEventFilter = TypedEventFilter<NewAuctionEvent>;

export interface NewBidEventObject {
  auctionId: BigNumber;
  bidder: string;
  assetContract: string;
  bidAmount: BigNumber;
  auction: IEnglishAuctions.AuctionStructOutput;
}
export type NewBidEvent = TypedEvent<
  [BigNumber, string, string, BigNumber, IEnglishAuctions.AuctionStructOutput],
  NewBidEventObject
>;

export type NewBidEventFilter = TypedEventFilter<NewBidEvent>;

export interface IEnglishAuctions extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IEnglishAuctionsInterface;

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
    bidInAuction(
      _auctionId: PromiseOrValue<BigNumberish>,
      _bidAmount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    cancelAuction(
      _auctionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    collectAuctionPayout(
      _auctionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    collectAuctionTokens(
      _auctionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createAuction(
      _params: IEnglishAuctions.AuctionParametersStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getAllAuctions(
      _startId: PromiseOrValue<BigNumberish>,
      _endId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [IEnglishAuctions.AuctionStructOutput[]] & {
        auctions: IEnglishAuctions.AuctionStructOutput[];
      }
    >;

    getAllValidAuctions(
      _startId: PromiseOrValue<BigNumberish>,
      _endId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [IEnglishAuctions.AuctionStructOutput[]] & {
        auctions: IEnglishAuctions.AuctionStructOutput[];
      }
    >;

    getAuction(
      _auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [IEnglishAuctions.AuctionStructOutput] & {
        auction: IEnglishAuctions.AuctionStructOutput;
      }
    >;

    getWinningBid(
      _auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber] & {
        bidder: string;
        currency: string;
        bidAmount: BigNumber;
      }
    >;

    isAuctionExpired(
      _auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isNewWinningBid(
      _auctionId: PromiseOrValue<BigNumberish>,
      _bidAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  bidInAuction(
    _auctionId: PromiseOrValue<BigNumberish>,
    _bidAmount: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  cancelAuction(
    _auctionId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  collectAuctionPayout(
    _auctionId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  collectAuctionTokens(
    _auctionId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createAuction(
    _params: IEnglishAuctions.AuctionParametersStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getAllAuctions(
    _startId: PromiseOrValue<BigNumberish>,
    _endId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<IEnglishAuctions.AuctionStructOutput[]>;

  getAllValidAuctions(
    _startId: PromiseOrValue<BigNumberish>,
    _endId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<IEnglishAuctions.AuctionStructOutput[]>;

  getAuction(
    _auctionId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<IEnglishAuctions.AuctionStructOutput>;

  getWinningBid(
    _auctionId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, string, BigNumber] & {
      bidder: string;
      currency: string;
      bidAmount: BigNumber;
    }
  >;

  isAuctionExpired(
    _auctionId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isNewWinningBid(
    _auctionId: PromiseOrValue<BigNumberish>,
    _bidAmount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    bidInAuction(
      _auctionId: PromiseOrValue<BigNumberish>,
      _bidAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    cancelAuction(
      _auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    collectAuctionPayout(
      _auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    collectAuctionTokens(
      _auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    createAuction(
      _params: IEnglishAuctions.AuctionParametersStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAllAuctions(
      _startId: PromiseOrValue<BigNumberish>,
      _endId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<IEnglishAuctions.AuctionStructOutput[]>;

    getAllValidAuctions(
      _startId: PromiseOrValue<BigNumberish>,
      _endId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<IEnglishAuctions.AuctionStructOutput[]>;

    getAuction(
      _auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<IEnglishAuctions.AuctionStructOutput>;

    getWinningBid(
      _auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber] & {
        bidder: string;
        currency: string;
        bidAmount: BigNumber;
      }
    >;

    isAuctionExpired(
      _auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isNewWinningBid(
      _auctionId: PromiseOrValue<BigNumberish>,
      _bidAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "AuctionClosed(uint256,address,address,uint256,address,address)"(
      auctionId?: PromiseOrValue<BigNumberish> | null,
      assetContract?: PromiseOrValue<string> | null,
      closer?: PromiseOrValue<string> | null,
      tokenId?: null,
      auctionCreator?: null,
      winningBidder?: null
    ): AuctionClosedEventFilter;
    AuctionClosed(
      auctionId?: PromiseOrValue<BigNumberish> | null,
      assetContract?: PromiseOrValue<string> | null,
      closer?: PromiseOrValue<string> | null,
      tokenId?: null,
      auctionCreator?: null,
      winningBidder?: null
    ): AuctionClosedEventFilter;

    "CancelledAuction(address,uint256)"(
      auctionCreator?: PromiseOrValue<string> | null,
      auctionId?: PromiseOrValue<BigNumberish> | null
    ): CancelledAuctionEventFilter;
    CancelledAuction(
      auctionCreator?: PromiseOrValue<string> | null,
      auctionId?: PromiseOrValue<BigNumberish> | null
    ): CancelledAuctionEventFilter;

    "NewAuction(address,uint256,address,tuple)"(
      auctionCreator?: PromiseOrValue<string> | null,
      auctionId?: PromiseOrValue<BigNumberish> | null,
      assetContract?: PromiseOrValue<string> | null,
      auction?: null
    ): NewAuctionEventFilter;
    NewAuction(
      auctionCreator?: PromiseOrValue<string> | null,
      auctionId?: PromiseOrValue<BigNumberish> | null,
      assetContract?: PromiseOrValue<string> | null,
      auction?: null
    ): NewAuctionEventFilter;

    "NewBid(uint256,address,address,uint256,tuple)"(
      auctionId?: PromiseOrValue<BigNumberish> | null,
      bidder?: PromiseOrValue<string> | null,
      assetContract?: PromiseOrValue<string> | null,
      bidAmount?: null,
      auction?: null
    ): NewBidEventFilter;
    NewBid(
      auctionId?: PromiseOrValue<BigNumberish> | null,
      bidder?: PromiseOrValue<string> | null,
      assetContract?: PromiseOrValue<string> | null,
      bidAmount?: null,
      auction?: null
    ): NewBidEventFilter;
  };

  estimateGas: {
    bidInAuction(
      _auctionId: PromiseOrValue<BigNumberish>,
      _bidAmount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    cancelAuction(
      _auctionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    collectAuctionPayout(
      _auctionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    collectAuctionTokens(
      _auctionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createAuction(
      _params: IEnglishAuctions.AuctionParametersStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getAllAuctions(
      _startId: PromiseOrValue<BigNumberish>,
      _endId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAllValidAuctions(
      _startId: PromiseOrValue<BigNumberish>,
      _endId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAuction(
      _auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getWinningBid(
      _auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isAuctionExpired(
      _auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isNewWinningBid(
      _auctionId: PromiseOrValue<BigNumberish>,
      _bidAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    bidInAuction(
      _auctionId: PromiseOrValue<BigNumberish>,
      _bidAmount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    cancelAuction(
      _auctionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    collectAuctionPayout(
      _auctionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    collectAuctionTokens(
      _auctionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createAuction(
      _params: IEnglishAuctions.AuctionParametersStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getAllAuctions(
      _startId: PromiseOrValue<BigNumberish>,
      _endId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAllValidAuctions(
      _startId: PromiseOrValue<BigNumberish>,
      _endId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAuction(
      _auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getWinningBid(
      _auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isAuctionExpired(
      _auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isNewWinningBid(
      _auctionId: PromiseOrValue<BigNumberish>,
      _bidAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
