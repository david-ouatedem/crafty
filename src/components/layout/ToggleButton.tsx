import { Box, IconButton, IconButtonProps } from "@chakra-ui/react";

const Bar = (props: any) => (
    <Box
        as="span"
        display="block"
        position="absolute"
        width="1.25rem"
        height="0.125rem"
        borderRadius="full"
        bg="currentcolor"
        mx="auto"
        insetStart="0.125rem"
        transition="all 0.12s"
        {...props}
    />
);

const ToggleIcon = (props: { active: boolean }) => {
    const { active } = props;
    return (
        <Box
            className="group"
            data-active={active ? "" : undefined}
            as="span"
            display="block"
            width="1.5rem"
            height="1.5rem"
            position="relative"
            aria-hidden
            pointerEvents="none"
        >
            <Bar
                top="0.4375rem"
                css={{
                    "[data-active] &": {
                        top: "0.6875rem",
                        transform: "rotate(45deg)"
                    }
                }}
            />
            <Bar
                bottom="0.4375rem"
                css={{
                    "[data-active] &": {
                        bottom: "0.6875rem",
                        transform: "rotate(-45deg)"
                    }
                }}
            />
        </Box>
    );
};

interface ToggleButtonProps extends IconButtonProps {
    isOpen: boolean;
}

export const ToggleButton = (props: ToggleButtonProps) => {
    const { isOpen, ...iconButtonProps } = props;
    return (
        <IconButton
            position="relative"
            variant="ghost"
            size="sm"
            color="fg.muted"
            zIndex="modal"
            {...iconButtonProps}
        >
            <ToggleIcon active={isOpen} />
        </IconButton>
    );
};