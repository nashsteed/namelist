import ThemeButton from "./ThemeButton";

const { Flex, Text, Spacer } = require("@chakra-ui/react");

const Nav = () => {
  return (
    <Flex as="nav" align="center" maxW="4xl" mx="auto" p="4" w="full">
      <Text as="span" fontSize="3xl" fontWeight="bold">
        namelist
      </Text>
      <Spacer />
      <ThemeButton />
    </Flex>
  );
};

export default Nav;
