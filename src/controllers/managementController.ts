import { Request, Response } from 'express';
import { IManagementContractService, ManagementContractService, NewCrowdfundFunctionParams } from '../blockchain/Managment';

import { JsonRpcSigner, Web3Provider } from '@ethersproject/providers';
import { AddressZero } from '@ethersproject/constants';
import { managmentAddress } from '../utils/config';

/**
A classe ManagementController é responsável por definir os controladores (handlers) 
 das rotas relacionadas ao contrato Management. 
*/
export class ManagementController {
  constructor(private readonly managementContractService: IManagementContractService) {}

  /**
  O método isPaused é um controlador para a rota que verifica se o contrato Management está pausado. Ele chama o método readContract do serviço managementContractService para ler o estado do contrato isPaused. Se a leitura for bem-sucedida, ele retorna a resposta JSON contendo o valor de isPaused. 
  Caso ocorra um erro, ele retorna uma resposta de status 500 com uma mensagem de erro.
  */
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

  /**
    O método newCrowdfund é um controlador para a rota que cria um novo crowdfunding. 
    Ele assume que os parâmetros necessários estão presentes no corpo da solicitação (req.body.params). 

    Além disso, o provedor MetaMask e o assinante (signer) também são extraídos do corpo da solicitação 
    (req.body.provider e req.body.signer, respectivamente). Em seguida, ele cria uma instância de 
    ManagementContractService com os valores fornecidos e chama o método writeContract para executar a 
    função newCrowdfund com os parâmetros fornecidos. Se a execução for bem-sucedida, ele retorna a resposta 
    JSON contendo o hash da transação. 

    Caso ocorra um erro, ele retorna uma resposta de status 500 com uma mensagem de erro.
  */
  public async newCrowdfund(req: Request, res: Response): Promise<void> {
    try {
      const params: NewCrowdfundFunctionParams = req.body.params; 

      // Extract the MetaMask provider and signer from the request body
      const provider = req.body.provider;
      const signer = req.body.signer;

      const managementContractService = new ManagementContractService(managmentAddress, provider, signer);

      const result = await managementContractService.writeContract("newCrowdfund", params);
      res.json({ transactionHash: result[0] });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}
