import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { ManagementContractService } from './src/blockchain/Managment';
import { createManagementRoutes } from './src/routes/managment-routes';
import cors from 'cors';
import env from './src/config/env';


/** Inicializa o servidor */
const app = express();
const port = 4444;


import {ethers} from 'ethers';

/** Initialize blockchain providers */
export const privateKey = env.privateKey!; 
export const provider = new ethers.providers.JsonRpcProvider(env.provider!);

export const wallet = new ethers.Wallet(privateKey, provider);
export const managmentAddress = env.managmentAddress!;

/** Instantiate ManagementContractService */
const managementContractService = new ManagementContractService(managmentAddress, provider, wallet);
const managementRoutes = createManagementRoutes(managementContractService);

//cors configs
const corsOptions = {
  origin: 'http://localhost:4783'
};
app.use(cors(corsOptions));

// Rota padrão
app.get('/', (req, res) => {
  res.send(JSON.stringify({
    message: 'Blockchain development'
  }));
});


app.use('/management', managementRoutes);

app.listen(port, () => {
  console.log(`O servidor foi inicializado na porta: ${port}`);
});
