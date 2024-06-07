import { PodcastDTO } from "../models/podcast-dto-model";
import { IPodcast } from "../models/podcast-model";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";


export const serviceListEpisodes = async (): Promise<PodcastDTO> => {

    let responseFormat: PodcastDTO = {
        statusCode: 0,
        body: []
    };

    const data: IPodcast[] = await repositoryPodcast();

    responseFormat.statusCode = data.length ? StatusCode.OK : StatusCode.NO_CONTENT
    responseFormat.body = data

    return responseFormat;
}