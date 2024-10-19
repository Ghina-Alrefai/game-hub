import { Genre } from "./Genre";
import { Platform } from "./Platform";
import Publisher from "./Publisher";




export interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  parent_platforms: { platform: Platform; }[];
  description_raw: string;
  metacritic: number;
  rating_top: number;
  publishers:Publisher[];
  genres: Genre[]
}
