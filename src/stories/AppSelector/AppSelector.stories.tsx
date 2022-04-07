import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import AppSelector from "../../lib/components/AppSelector";

export default {
  title: "Components/AppSelector",
  component: AppSelector,
  argTypes: {
    onClick: { control: "none" },
  },
} as ComponentMeta<typeof AppSelector>;

const Template: ComponentStory<typeof AppSelector> = (args) => (
  <AppSelector {...args} />
);

export const Default = Template.bind({});
Default.args = {};
