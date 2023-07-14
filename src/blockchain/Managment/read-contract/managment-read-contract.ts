import { Management, Management__factory } from '../../../utils/types';
import { ethers, Signer } from 'ethers';
import { IManagementReadContract } from './managment-read-contract-model';

export class ManagementReadContract implements IManagementReadContract {
  private managementContract: Management;
  private signer: Signer;

  constructor(contractAddress: string, provider: ethers.providers.Provider, signer: Signer) {
    const factory = new Management__factory(signer);
    this.managementContract = factory.attach(contractAddress);
    this.signer = signer;
  }

  async getFee(): Promise<number> {
    try {
      const fee = await this.managementContract.getFee();
      return Number(fee);
    } catch (err) {
      throw new Error(`Error executing getFee(): ${err}`);
    }
  }


  async isPaused(): Promise<boolean> {
    try {
      const isPaused = await this.managementContract.paused();
      return isPaused;
    } catch (err) {
      throw new Error(`Error executing isPaused(): ${err}`);
    }
  }
}
