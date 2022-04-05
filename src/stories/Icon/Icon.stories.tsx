import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Add, History } from "../../lib/components/Icon";

export default {
  title: "Components/Icon",
  component: Add,
  argTypes: {
    size: {
      description: "The size of the icon.",
    },
  },
} as ComponentMeta<typeof Add>;

const Template: ComponentStory<typeof Add> = (args) => <Add {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 16,
};
