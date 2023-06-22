import { ComponentSingleStyleConfig } from "@chakra-ui/react";

export const Textarea: ComponentSingleStyleConfig = {
  // baseStyle: {
  //   field: {
  //     color: "red",
  //     bg: "whiteAlpha.500",
  //   },
  // },
  variants: {
    filled: {
      color: "textAccent",
      bg: "whiteAlpha.300",
      _placeholder: {
        color: "textNormal",
      },
      _hover: {
        bg: "whiteAlpha.400",
      },
      _focus: {
        bg: "whiteAlpha.500",
      },
    },
  },
  defaultProps: {
    variant: "filled",
    // variant: null,
  },
};
