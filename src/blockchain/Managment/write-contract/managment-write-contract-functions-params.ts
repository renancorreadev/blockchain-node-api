import { BigNumberish, Overrides } from "ethers";
import { PromiseOrValue } from "../../../utils/types/common";
import { IManagement } from "../../../utils/types";


export type NewCrowdfundFunctionParams = {
  name: PromiseOrValue<string>,
  symbol: PromiseOrValue<string>,
  baseURI: PromiseOrValue<string>,
  royalty: PromiseOrValue<BigNumberish>,
  owner: PromiseOrValue<string>,
  cfParams: IManagement.CrowdFundParamsStruct,
  overrides?: Overrides & { from?: PromiseOrValue<string> }
};

