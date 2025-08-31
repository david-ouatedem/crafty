import { Box, Center, Stack, StackSeparator } from "@chakra-ui/react";
import { AddPostForm } from "./AddPostForm";
import { Post } from "./Post";

export const PostList = ({
                             messages,
                             addPostPlaceholder = "What's on your mind ?",
                         }: {
    messages: {
        id: string;
        profilePictureUrl: string;
        username: string;
        publishedAt: string;
        text: string;
        userId: string;
    }[];
    addPostPlaceholder?: string;
}) => {
    return (
        <Center mx="auto" py={{ base: "4", md: "8" }}>
            <Box bg="bg-surface" py="4" width="full">
                <Stack separator={<StackSeparator />} gap="4">
                    <AddPostForm placeholder={addPostPlaceholder} />
                    {messages.map((msg) => (
                        <Post key={msg.id} {...msg} />
                    ))}
                </Stack>
            </Box>
        </Center>
    );
};