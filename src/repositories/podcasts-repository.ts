import fs from 'fs';
import path from 'path'

import { IPodcast } from '../models/podcast-model';

const directory = path.join(__dirname, "..", "data", "podcasts.json");

export const repositoryPodcast = async (podcastName?: string): Promise<IPodcast[]> => {

    const encode = "utf-8";

    const rawData = fs.readFileSync(directory, encode);

    let jsonFile = JSON.parse(rawData);

    if (podcastName) {
       jsonFile = jsonFile.filter((podcast: IPodcast) => podcast.podcastName === podcastName);
    }

    return jsonFile;
};