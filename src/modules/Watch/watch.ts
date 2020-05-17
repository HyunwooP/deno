
export class Watch {
    private path: string;
    
    constructor(path: string) {
        this.path = path;
    }
    
    public async watcher() {
        for await (const event of Deno.watchFs(this.path, { recursive: true })) {
            return console.log(`${event.kind} file ===> ${event.paths}`);
        }
    }
}
