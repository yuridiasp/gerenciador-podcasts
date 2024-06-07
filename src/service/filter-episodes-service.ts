import { IncomingMessage } from "http";
import { repositoryPodcast } from "../repositories/podcasts-repository"

export const serviceFilterEpisodes = async (url: string | undefined) => {

    const podcastName = url?.split("?p=")[1] ?? "";
    console.log(podcastName);
    
    const data = await repositoryPodcast(podcastName);

    return data;
};