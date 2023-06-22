import { ComponentSingleStyleConfig } from "@chakra-ui/react";

export const Table: ComponentSingleStyleConfig = {
  variants: {
    simple: {
      th: {
        borderColor: "whiteAlpha.300",
      },
      td: {
        borderColor: "whiteAlpha.300",
      },
    },
    custom: {
      table: {
        overflow: "hidden",
      },
      tbody: {
        borderBottomRadius: "lg",
        overflow: "hidden",
      },
    },
  },
};
