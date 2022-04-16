import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PasswordStrenght from "../../lib/components/PasswordStrenght";

export default {
  title: "Components/PasswordStrenght",
  component: PasswordStrenght,
  argTypes: {
    onChange: { control: "none" },
  },
} as ComponentMeta<typeof PasswordStrenght>;

const Template: ComponentStory<typeof PasswordStrenght> = (args) => (
  <PasswordStrenght {...args} />
);

export const Default = Template.bind({});
Default.args = {};
