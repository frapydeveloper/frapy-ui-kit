import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Logo from "../../lib/components/Logo";

export default {
  title: "Components/Logo",
  component: Logo,
  argTypes: {
    type: {
      description:
        "The color of the component. It supports those theme colors that make sense for this design system.",
    },
    size: {
      describe: "Height of the logo in pixels",
    },
  },
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "small",
  size: 32,
  variant: "dark",
};
