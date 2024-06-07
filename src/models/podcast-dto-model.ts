import { IPodcast } from "./podcast-model";

export interface PodcastDTO {
    statusCode: number;
    body: IPodcast[];
}