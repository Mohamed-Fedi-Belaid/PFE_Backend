import "module-alias/register";
import helmet from 'helmet';
import { StartProjectInit } from "@tsclean/core";       
import { AppContainer } from "@/application/app";
import { PORT } from "@/application/config/environment";
import { singletonInitializers } from "@/application/singleton";
import cors from 'cors';

async function init(): Promise<void> {
  /** Iterate the singleton functions */
  for (const initFn of singletonInitializers) {
    await initFn();
  }
  
  const app = await StartProjectInit.create(AppContainer)
  app.use(cors());
  app.use(helmet());
  await app.listen(PORT, () => console.log(`Running on port: ${PORT}`))

}
  
void init().catch();