import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Typography from "../../lib/components/Typography";

export default {
  title: "Components/Typography",
  component: Typography,
  argTypes: {
    children: { description: "The content of the component." },
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "Typography Title",
  type: "h1",
  direction: "to right bottom",
};
