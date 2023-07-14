import { Request, Response } from 'express';
import { IManagementContractService, ManagementContractService, NewCrowdfundFunctionParams } from '../blockchain/Managment';

import env from '../../src/config/env';

export class ManagementController {
  constructor(private readonly managementContractService: IManagementContractService) {}

  public async isPaused(req: Request, res: Response): Promise<void> {
    try {
      const isPaused = await this.managementContractService.readContract('isPaused');
      res.json({ isPaused });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  public async getFee(req: Request, res: Response): Promise<void> {
    try {
      const fee = await this.managementContractService.readContract('getFee');
      res.json({ fee });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  public async newCrowdfund(req: Request, res: Response): Promise<void> {
    try {
      const params: NewCrowdfundFunctionParams = req.body.params; 

      // Extract the MetaMask provider and signer from the request body
      const provider = req.body.provider;
      const signer = req.body.signer;

      const managementContractService = new ManagementContractService(env.managmentAddress!, provider, signer);

      const result = await managementContractService.writeContract("newCrowdfund", params);
      res.json({ transactionHash: result[0] });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}
