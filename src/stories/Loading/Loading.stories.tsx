import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Loading from "../../lib/components/Loading";

export default {
  title: "Components/Loading",
  component: Loading,
  argTypes: {},
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = (args) => (
  <Loading {...args} />
);

export const Default = Template.bind({});
Default.args = {};
