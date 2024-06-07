import { repositoryPodcast } from "../repositories/podcasts-repository"
import { StatusCode } from "../utils/status-code";
import { PodcastDTO } from "../models/podcast-dto-model";

export const serviceFilterEpisodes = async (url: string | undefined): Promise<PodcastDTO> => {

    let responseFormat: PodcastDTO = {
        statusCode: 0,
        body: []
    };

    const podcastName = url?.split("?p=")[1];
    
    const data = await repositoryPodcast(podcastName);

    responseFormat.statusCode = data.length ? StatusCode.OK : StatusCode.NO_CONTENT
    responseFormat.body = data

    return responseFormat;
};