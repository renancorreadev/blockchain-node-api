
import   { 
  ManagementReadContractFunctionParamsType, 
  ManagementReadContractFunctionReturnsType 
  } from '../read-contract';
  
  import {
    ManagementWriteContractFunctionsParamsType,
    ManagementWriteContractFunctionsReturnsType,
  } from '../write-contract';
  
  export interface IManagementContractService {
    readContract<K extends keyof ManagementReadContractFunctionParamsType>(functionName: K, ...params: ManagementReadContractFunctionParamsType[K]) : Promise<ManagementReadContractFunctionReturnsType[K]> 
    writeContract<K extends keyof ManagementWriteContractFunctionsParamsType>(functionName: K, ...params: ManagementWriteContractFunctionsParamsType[K]) : Promise<ManagementWriteContractFunctionsReturnsType[K]> 
  }