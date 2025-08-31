import {ChakraProvider, createSystem, defaultConfig} from "@chakra-ui/react";
import { RouterProvider } from "react-router";
import { router } from "./router";

const system = createSystem(defaultConfig);

export const Provider = () => (
    <ChakraProvider value={system}>
        <RouterProvider router={router} />
    </ChakraProvider>
);