import { Box, Button, ButtonProps, HStack, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Link } from "react-router";
import { IconType } from "react-icons";

type NavButtonProps = ButtonProps & {
    icon: IconType;
    label: string;
    to: string;
    endElement?: ReactNode;
};

export const NavButton = (props: NavButtonProps) => {
    const { icon: IconComponent, label, to, endElement, ...buttonProps } = props;
    return (
        <Button variant="ghost" justifyContent="start" asChild {...buttonProps}>
            <Link to={to}>
                <HStack gap="3">
                    <IconComponent size="24" color="currentColor" />
                    <Text>{label}</Text>
                    {endElement && <Box>{endElement}</Box>}
                </HStack>
            </Link>
        </Button>
    );
};