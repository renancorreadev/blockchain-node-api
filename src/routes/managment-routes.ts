import { Router } from 'express';
import { ManagementController } from '../controllers/managementController';
import { IManagementContractService } from '../blockchain/Managment';


export function createManagementRoutes(managementContractService: IManagementContractService): Router {
  const router = Router();
  const managementController = new ManagementController(managementContractService);

  //rotas
  router.get('/ispaused', managementController.isPaused.bind(managementController));
  router.get('/getfee', managementController.getFee.bind(managementController));
  router.post('/newcrowdfund', managementController.newCrowdfund.bind(managementController));

  return router;
}




