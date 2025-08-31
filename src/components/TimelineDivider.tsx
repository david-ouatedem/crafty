import {Box, Container, Separator, HStack, Text} from "@chakra-ui/react";

export const TimelineDivider = ({ text }: { text: string }) => (
    <Box bg="bg-surface">
        <Container py={{ base: "4", md: "8" }}>
            <HStack>
                <Separator />
                <Text fontSize="lg" fontWeight="medium" whiteSpace="nowrap">
                    {text}
                </Text>
                <Separator />
            </HStack>
        </Container>
    </Box>
);