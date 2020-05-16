import { serve } from 'https://deno.land/std/http/server.ts';
const s = serve({ port: 8000 });

// path를 /로 주면 deno를 글로벌 설치를 해버린 탓인지 os상에서 모든 파일의 변화를 감지함.
const nodemon = Deno.watchFs('/Users/blank/Desktop/project/deno', { recursive: true });
for await (const event of nodemon) {
    console.log(`${event.kind} file ===> ${event.paths}`);
}

// web server open
for await (const req of s) {
    try {
        // fetch module이 deno에 내장되어 있음...
        const restfulTest = await fetch('http://www.naver.com');
        console.log(restfulTest);
    } catch(e) {
        console.log(e);
    }
    
    req.respond({ body: 'Hello World\n' });
}