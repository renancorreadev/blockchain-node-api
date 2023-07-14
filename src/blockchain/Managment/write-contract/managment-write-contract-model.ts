import { ContractTransaction } from "ethers";
import { 
  NewCrowdfundFunctionParams, 
} from "./managment-write-contract-functions-params";
import { CrowdfundEvent } from "../../../utils/types/Management";

export type ManagementWriteContractFunctionsParamsType = {
  newCrowdfund: [params: NewCrowdfundFunctionParams];
}

export type ManagementWriteContractFunctionsReturnsType = {
  newCrowdfund: Promise<CrowdfundEvent[]>;
}

export interface IManagmentWriteContract {
  newCrowdfund(params: NewCrowdfundFunctionParams): Promise<CrowdfundEvent[]>;
}

