import { Button, useColorMode,useColorModeValue } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ToggleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white","black");
  return (
    <Button
      onClick={() => toggleColorMode()}
      pos="absolute"
      top="0"
      right="0"
      m="1rem"
      bg={bg}
    >
      {colorMode === "dark" ? (
        <SunIcon color="orange.200" />
      ) : (
        <MoonIcon color="blue.200" />
      )}
    </Button>
  );
};

export default ToggleColorMode;