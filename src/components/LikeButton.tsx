import { Button } from "@chakra-ui/react";
import { AiOutlineHeart } from "react-icons/ai";

export const LikeButton = () => {
    return (
        <Button
            color="red.400"
            variant="ghost"
            m={0}
            maxWidth={20}
        >
            <AiOutlineHeart />
            42
        </Button>
    );
};