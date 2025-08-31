import {
    Avatar,
    Button,
    Flex,
    Stack,
    Textarea,
} from "@chakra-ui/react";
import { Field } from "@chakra-ui/react/field";
import { Link } from "react-router";

export const AddPostForm = ({ placeholder }: { placeholder: string }) => {
    return (
        <form>
            <Stack direction="row" gap={4}>
                <Link to="/">
                    <Avatar.Root boxSize={12}>
                        <Avatar.Image
                            src="https://picsum.photos/200?random=pierre"
                            alt="User avatar"
                        />
                        <Avatar.Fallback>U</Avatar.Fallback>
                    </Avatar.Root>
                </Link>

                <Field.Root id="post-text" required>
                    <Field.Label srOnly>Post message</Field.Label>
                    <Textarea
                        rows={3}
                        resize="none"
                        placeholder={placeholder}
                        name="text"
                    />
                </Field.Root>
            </Stack>

            <Flex justify="flex-end" py={4} px={{ base: 4, md: 6 }}>
                <Button colorPalette="blue" type="submit">
                    Post message
                </Button>
            </Flex>
        </form>
    );
};