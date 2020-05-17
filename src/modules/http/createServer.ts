import { serve } from 'https://deno.land/std/http/server.ts';
const s = serve({ port: 8000 });

// web server open
export const createServer = async () => {
    for await (const req of s) {
        try {
            // fetch module이 deno에 내장되어 있음...
            // 테스트용으로는 deno를 많이 쓸 것 같다. 굳이 모듈 일일이 깔 필요 없이
            const restfulTest = await fetch('http://www.naver.com');
            console.log(restfulTest);
    
            req.respond({ body: 'hello world!!!' });
        } catch(e) {
            console.log(e);
        }
    }
}
