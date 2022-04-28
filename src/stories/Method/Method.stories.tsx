import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Method from "../../lib/components/Method";

export default {
  title: "Components/Method",
  component: Method,
  argTypes: {
    type: {
      description:
        "The variant of the component. It supports the declared variants.",
    },
  },
} as ComponentMeta<typeof Method>;

const Template: ComponentStory<typeof Method> = (args) => <Method {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "post",
};
