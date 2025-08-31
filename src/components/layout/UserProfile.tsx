import { Avatar, Box, HStack, Text } from "@chakra-ui/react";

export const UserProfile = ({
                                username,
                                profilePicture,
                            }: {
    username: string;
    profilePicture: string;
}) => {
    return (
        <HStack gap="3" ps="2">
            <Avatar.Root boxSize="10">
                <Avatar.Image src={profilePicture} alt={username} />
                <Avatar.Fallback>
                    {username?.charAt(0).toUpperCase() || "U"}
                </Avatar.Fallback>
            </Avatar.Root>
            <Box>
                <Text color="on-accent" fontWeight="medium" fontSize="sm">
                    {username}
                </Text>
            </Box>
        </HStack>
    );
};