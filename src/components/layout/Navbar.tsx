import {
    Box,
    Flex,
    useDisclosure,
} from "@chakra-ui/react";
import {Drawer} from "@chakra-ui/react/drawer";
import {Sidebar} from "./SideBar.tsx";
import {ToggleButton} from "./ToggleButton.tsx";

export const Navbar = () => {
    const {open, onToggle, onClose} = useDisclosure();
    return (
        <Box width="full" py="4" px={{base: "4", md: "8"}} bg="bg.subtle">
            <Flex justify="space-between">
                <ToggleButton
                    isOpen={open}
                    aria-label="Open Menu"
                    onClick={onToggle}
                />
                <Drawer.Root
                    open={open}
                    placement="start"
                    onOpenChange={({open}) => !open && onClose()}
                    trapFocus={false}
                >
                    <Drawer.Backdrop/>
                    <Drawer.Content>
                        <Sidebar/>
                    </Drawer.Content>
                </Drawer.Root>
            </Flex>
        </Box>
    );
};