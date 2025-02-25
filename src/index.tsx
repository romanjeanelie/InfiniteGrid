import * as React from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react";
import photos from "./photos.json";
import { InfiniteGrid } from "./infinite-grid";
import "./styles.css";

function App() {
  return (
    <InfiniteGrid>
      <Grid
        templateAreas={`
          "a a a b b b c c"
          "d d e e e f f f"
          "g g g h h i i i"
        `}
        gridTemplateColumns={"repeat(8, 1fr)"}
        gridTemplateRows={"repeat(3, 1fr)"}
        w={{ base: "150vw", md: "100vw" }}
        h={{ base: "100vh", md: "125vh" }}
        gap={8}
        p={4}
      >
        <GridItem
          area="a"
          bgImage={photos[0].download_url}
          bgSize="cover"
          rounded="3xl"
        />
        <GridItem
          area="b"
          bgImage={photos[1].download_url}
          bgSize="cover"
          rounded="3xl"
        />
        <GridItem
          area="c"
          bgImage={photos[2].download_url}
          bgSize="cover"
          rounded="3xl"
        />
        <GridItem
          area="d"
          bgImage={photos[3].download_url}
          bgSize="cover"
          rounded="3xl"
        />
        <GridItem
          area="e"
          bgImage={photos[4].download_url}
          bgSize="cover"
          rounded="3xl"
        />
        <GridItem
          area="f"
          bgImage={photos[5].download_url}
          bgSize="cover"
          rounded="3xl"
        />{" "}
        <GridItem
          area="g"
          bgImage={photos[6].download_url}
          bgSize="cover"
          rounded="3xl"
        />
        <GridItem
          area="h"
          bgImage={photos[7].download_url}
          bgSize="cover"
          rounded="3xl"
        />
        <GridItem
          area="i"
          bgImage={photos[8].download_url}
          bgSize="cover"
          rounded="3xl"
        />
      </Grid>
    </InfiniteGrid>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
