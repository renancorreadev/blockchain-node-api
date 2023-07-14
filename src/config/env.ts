import dotenv from 'dotenv';

const environment = process.env.NODE_ENV || 'development';

// Defina as configurações específicas para cada ambiente
const envFile = `.env.${environment}`;

dotenv.config({ path: envFile });

export default {
  privateKey: process.env.PRIVATE_KEY,
  provider: process.env.PROVIDER_RPC,
  managmentAddress: process.env.MANAGMENT_ADDRESS,
};
