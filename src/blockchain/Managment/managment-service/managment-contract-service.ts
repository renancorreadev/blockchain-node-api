
import { ethers, Signer } from 'ethers';

import { 
  ManagementReadContract, 
  ManagementReadContractFunctionParamsType, 
  ManagementReadContractFunctionReturnsType 
} from '../read-contract';

import { 
  ManagmentWriteContract,
  NewCrowdfundFunctionParams,   
  ManagementWriteContractFunctionsParamsType,
  ManagementWriteContractFunctionsReturnsType
} from '../write-contract';
import { IManagementContractService } from './managment-service-contract-model';


/**
A classe ManagementContractService implementa a interface IManagementContractService e 
é responsável por fornecer serviços para interagir com um contrato chamado Management. 
A classe possui dois atributos privados: managementReadContract, que é uma instância da classe ManagementReadContract,
 e managementWriteContract, que é uma instância da classe ManagmentWriteContract.
*/
export class ManagementContractService implements IManagementContractService {
  private managementReadContract: ManagementReadContract;
  private managementWriteContract: ManagmentWriteContract


  /**
  contractAddress é uma string que representa o endereço do contrato Management que será utilizado.
  provider é uma instância do objeto ethers.providers.Provider, que fornece uma conexão com a blockchain Ethereum.
  signer é uma instância do objeto Signer, que representa a entidade responsável pela assinatura de transações.

  e 


  Dentro do construtor, são criadas as instâncias dos contratos ManagementReadContract
  e ManagmentWriteContract, passando os mesmos parâmetros do construtor.

  Isso seria inversão de dependencia em DDD
  */
  constructor(
    private contractAddress: string,
    private provider: ethers.providers.Provider,
    private signer: Signer
  ) {
    this.managementReadContract = new ManagementReadContract(contractAddress, provider, signer);
    this.managementWriteContract = new ManagmentWriteContract(contractAddress, provider, signer);
  }


  public async readContract<K extends keyof ManagementReadContractFunctionParamsType>(
    functionName: K, ...params: ManagementReadContractFunctionParamsType[K])
    : Promise<ManagementReadContractFunctionReturnsType[K]> {
    switch (functionName) {
      case 'getFee':
        return this.managementReadContract.getFee() as ManagementReadContractFunctionReturnsType[K];
      case 'isPaused':
        return this.managementReadContract.isPaused() as ManagementReadContractFunctionReturnsType[K];
      default:
        throw new Error(`Unsupported read function: ${functionName}`);
    }
  }
  
/**
  O método writeContract é semelhante ao readContract, mas é usado para chamar funções de escrita do 
  contrato ManagmentWriteContract. Atualmente, o código suporta apenas a função newCrowdfund, 
  passando os parâmetros apropriados. Se for chamada uma função não suportada, uma exceção é lançada.
*/
  public async writeContract<K extends keyof ManagementWriteContractFunctionsParamsType>(
    functionName: K,
    ...params: ManagementWriteContractFunctionsParamsType[K]
  ): Promise<ManagementWriteContractFunctionsReturnsType[K]> {
    switch (functionName) {
      case 'newCrowdfund':
        return this.managementWriteContract.newCrowdfund(params[0] as NewCrowdfundFunctionParams) as ManagementWriteContractFunctionsReturnsType[K];
      default:
        throw new Error(`Unsupported write function: ${functionName}`);
    }
  }
}
