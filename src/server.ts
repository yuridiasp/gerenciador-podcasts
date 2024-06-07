import * as http from "http";

import { app } from "./app";

const server = http.createServer(app);

const { PORT } = process.env;

server.listen(PORT, () => {
    console.log(`server started on port ${PORT}`); 
});