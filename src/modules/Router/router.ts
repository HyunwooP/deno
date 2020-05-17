import {
    Server,
    Request,
    Response
} from "https://deno.land/x/rute/mod.ts";

export class Router {

    private port: number;
    private app: Server = new Server();

    constructor(port: number) {
        this.port = port;
    }

    public create() {
        this.app.listen({ port: this.port });
    }

    public get() {
        this.app.get("/", (req: Request, res: Response) => {
            return res.set({"message": "Hello World!"});
        });
    }
}


