import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { Platform } from "../hooks/usePlatForms";

import { BsChevronBarDown } from "react-icons/bs";

import { usePlatForms } from "../hooks/usePlatForms";
import useStoreGame from "../store";
import { usePlatForme } from "../hooks/usePlatForme";


export const PlateFormSelector = () => {
  const { data, error } = usePlatForms();
  const  platformId = useStoreGame((s)=> s.gameQuery.platformId)
  const setPlatform = useStoreGame((s)=> s.setPlatformId)

  const platform = usePlatForme(platformId);


  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        {platform?.name || "All Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform: Platform) => (
          <MenuItem
            onClick={()=>setPlatform(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
