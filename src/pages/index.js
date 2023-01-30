import CreateNameModal from "@/components/CreateNameModal";
import { Box, Flex, Input } from "@chakra-ui/react";
import { useState } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const [search, setSearch] = useState("");
  const { data, error } = useSWR(
    "/api/names",
    fetcher
  );
  console.log(data)
  return (
    <Box maxW="4xl" mx="auto" w="full" p="4">
      <Flex align="center" gap="4">
        <Input
           onChange={(event) => setSearch(event.target.value)}
            placeholder="Search"
            value={search}
        />
        <CreateNameModal />
      </Flex>
      
    </Box>
  );
}
