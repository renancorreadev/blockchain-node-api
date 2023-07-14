import {  Management__factory, Management} from '../../../utils/types';
import { ContractTransaction, ethers, Signer } from 'ethers';
import { IManagmentWriteContract } from './managment-write-contract-model';
import { NewCrowdfundFunctionParams } from './managment-write-contract-functions-params';
import { CrowdfundEvent } from '../../../utils/types/Management';


export class ManagmentWriteContract implements IManagmentWriteContract  {
  private managmentContract: Management;
  private signer: Signer;


  constructor(contractAddress: string, provider: ethers.providers.Provider, signer: Signer) {
    const factory = new Management__factory(signer);
    this.managmentContract = factory.attach(contractAddress);
    this.signer = signer;
  }
  public async newCrowdfund(params: NewCrowdfundFunctionParams): Promise<CrowdfundEvent[]> {
    try {
    const result: ContractTransaction = await this.managmentContract["newCrowdfund(string,string,string,uint256,address,(uint256[3],uint256[3],uint256[3],uint256,uint256,uint256,address,uint256,uint256,uint256))"](
      params.name,
      params.symbol,
      params.baseURI,
      params.royalty,
      params.owner,
      params.cfParams,
      params.overrides
    );

    //Wait for the transaction to be mined
    await result.wait();

    // Obtain events ommiteds
    const filter = this.managmentContract.filters.Crowdfund();
    const events = await this.managmentContract.queryFilter(filter, result.blockNumber);

    return events;    
    } catch (error) {
      throw new Error(`Error executing newCrowdfund() of contract: ${error}`);
    }
  }
}