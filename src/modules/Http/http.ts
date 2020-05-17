import { serve } from 'https://deno.land/std/http/server.ts';

export class Http {

    private s = serve({ port: 8000 });
    
    public async create() {
        console.log('create server');
        for await (const req of this.s) {
            req.respond({ body: 'hello world!!!' });
        }
    }
}
