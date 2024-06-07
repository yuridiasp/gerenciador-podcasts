import * as http from "http";

import { Routes } from "./routes/routes";
import { getFilterEpisodes, getListEpisodes } from './controller/podcasts-controller';
import { HTTPMethod } from "./utils/http-methods";

export const app = async (req: http.IncomingMessage, res: http.ServerResponse) => {
    const { method, url } = req;
    
    const baseURL = url?.split("?")[0];

    if (method === HTTPMethod.GET && baseURL === Routes.LIST) {
        await getListEpisodes(req, res);
    }

    if (method === HTTPMethod.GET && baseURL === Routes.EPISODE) {
        await getFilterEpisodes(req, res);
    }
};