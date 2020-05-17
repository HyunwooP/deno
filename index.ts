import { Http } from './src/modules/Http/http.ts';
import { Watch } from './src/modules/Watch/watch.ts';
import { Router } from './src/modules/Router/router.ts';

const init = async() => {
    
    const watch = new Watch('/Users/blank/Desktop/project/deno');
    const router = new Router(8000);
    //const http = new Http();

    //http.create();
    router.create();
    router.get();
    watch.watcher();
    
}

init();