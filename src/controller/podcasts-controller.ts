import { IncomingMessage, ServerResponse } from 'http';
import { serviceListEpisodes } from '../service/list-episodes-service';
import { serviceFilterEpisodes } from '../service/filter-episodes-service';
import { ContentType } from '../utils/content-type';
import { PodcastDTO } from '../models/podcast-dto-model';


export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {

    const content: PodcastDTO = await serviceListEpisodes();

    res.writeHead(content.statusCode, {'Content-Type': ContentType.JSON});

    res.write(JSON.stringify(content.body));

    res.end();
};

export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {

    const content: PodcastDTO = await serviceFilterEpisodes(req.url);
    
    res.writeHead(content.statusCode, {"Content-Type": ContentType.JSON});

    res.write(JSON.stringify(content.body));

    res.end();
};