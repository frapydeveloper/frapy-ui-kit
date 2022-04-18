import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Stack from "../../lib/components/Stack";

export default {
  title: "Components/Stack",
  component: Stack,
  argTypes: {
    children: { description: "The content of the component." },
  },
} as ComponentMeta<typeof Stack>;

const Template: ComponentStory<typeof Stack> = (args) => <Stack {...args} />;

export const Default = Template.bind({});
Default.args = {
  styles: {
    border: "1px solid black",
  },
  paddingUnit: "px",
  marginUnit: "px",
  rowGapUnit: "px",
  direction: "column",
};
