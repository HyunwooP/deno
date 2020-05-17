// path를 /로 주면 deno를 글로벌 설치를 해버린 탓인지 os상에서 모든 파일의 변화를 감지함.
const watch = Deno.watchFs('/Users/blank/Desktop/project/deno', { recursive: true });

export const watcher = async () => {
    for await (const event of watch) {
        console.log(`${event.kind} file ===> ${event.paths}`);
    }
}
