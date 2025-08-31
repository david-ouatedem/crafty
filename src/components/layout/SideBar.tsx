import { Separator, Flex, Stack, Text } from "@chakra-ui/react";
import {
    FiBell,
    FiHome,
    FiInstagram,
    FiLinkedin,
    FiPower,
    FiTwitter,
} from "react-icons/fi";
import { UserProfile } from "./UserProfile";
import { Link } from "react-router";
import { NavButton } from "./NavButton.tsx";

export const Sidebar = () => {
    return (
        <Flex
            flex="1"
            bg="bg.subtle"
            color="fg"
            overflowY="auto"
            maxW={{ base: "full", sm: "xs" }}
            py={{ base: "6", sm: "8" }}
            px={{ base: "4", sm: "6" }}
            css={{
                position: "sticky",
                top: "0",
            }}
        >
            <Stack justify="space-between" gap="1" width="full">
                <Stack gap="8">
                    <Stack gap="1">
                        <NavButton label="Home" icon={FiHome} to="/home" />
                        <NavButton
                            label="Notifications"
                            icon={FiBell}
                            to="/notifications"
                        />
                    </Stack>
                    <Stack>
                        <Text fontSize="sm" color="fg.muted" fontWeight="medium">
                            Social
                        </Text>
                        <Stack gap="1">
                            <NavButton label="Twitter" icon={FiTwitter} to="/home" />
                            <NavButton label="Instagram" icon={FiInstagram} to="/home" />
                            <NavButton label="Linkedin" icon={FiLinkedin} to="/home" />
                        </Stack>
                    </Stack>
                    <Stack>
                        <NavButton label="Sign Out" icon={FiPower} to="/signout" />
                    </Stack>
                    <Separator borderColor="border.subtle" />
                    <Link to={`/u/pierre`}>
                        <UserProfile
                            username={"Pierre"}
                            profilePicture={"https://picsum.photos/200?random=pierre"}
                        />
                    </Link>
                </Stack>
            </Stack>
        </Flex>
    );
};