import { Http } from './src/modules/Http/http.ts';
import { Watch } from './src/modules/Watch/watch.ts';

const init = async() => {
    
    const watch = new Watch('/Users/blank/Desktop/project/deno');
    const http = new Http();

    http.create();
    watch.watcher();
}

init();