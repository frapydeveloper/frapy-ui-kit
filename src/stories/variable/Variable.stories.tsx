import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Variable from "../../lib/components/Variable";

export default {
  title: "Components/Variable",
  component: Variable,
  argTypes: {
    type: {
      description:
        "The variant of the component. It supports the declared variants.",
    },
  },
} as ComponentMeta<typeof Variable>;

const Template: ComponentStory<typeof Variable> = (args) => (
  <Variable {...args} />
);

export const String = Template.bind({});
String.args = {
  type: "string",
};

export const Int = Template.bind({});
Int.args = {
  type: "int",
};

export const Float = Template.bind({});
Float.args = {
  type: "float",
};

export const Boolean = Template.bind({});
Boolean.args = {
  type: "boolean",
};
