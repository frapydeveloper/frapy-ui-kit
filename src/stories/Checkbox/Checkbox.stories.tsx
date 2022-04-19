import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Checkbox from "../../lib/components/Checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    size: {
      description: "The size of the component.",
    },
    labelText: { description: "Checkbox label string" },
    hideLabel: { description: "Checkbox label can be hidden." },
    disabled: { description: "If true, the component is disabled." },
    onChange: {
      description:
        "Provide an optional function to be called when the input element checked status changed.",
      control: "none",
    },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: "sm",
  labelText: "LabelText",
};
