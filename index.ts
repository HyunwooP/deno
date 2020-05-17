import { createServer } from './src/modules/http/createServer.ts';
import { watcher } from './src/modules/watcher/watcher.ts';

const init = async() => {
    watcher();
    await createServer();
}

init();