import { Game } from "../entites/Game";
import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScour from "./CriticScour";
import getCroppedUrl from "../services/imgUrl";

import Emoje from "./Emoje";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}
export const CardGame = ({ game }: Props) => {
  return (
    <Card>
      <Image
        src={getCroppedUrl(game.background_image)}
        objectFit="cover"
        borderRadius={20}
        overflow="hidden"
      ></Image>
      <CardBody>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScour scour={game.metacritic} />
        </HStack>
        <Heading fontSize="2l">
          <Link to={"/games/" + game.slug}>{game.name}</Link>
          <Emoje rating={game.rating_top}></Emoje>
        </Heading>
      </CardBody>
    </Card>
  );
};
