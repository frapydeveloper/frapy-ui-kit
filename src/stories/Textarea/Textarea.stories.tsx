import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Textarea from "../../lib/components/Textarea";

export default {
  title: "Components/Textarea",
  component: Textarea,
  argTypes: {
    type: {
      description:
        "The color of the component. It supports those theme colors that make sense for this design system.",
    },
    labelText: {
      description:
        "Provide the text that will be visible above the input field",
    },
    hideLabel: {
      description: "Specify whether you want the label to be visually hidden",
    },
    fullWidth: {
      description:
        "If true, the button will take up the full width of its container.",
    },
    disabled: { description: "If true, the component is disabled." },
    onChange: {
      description:
        "Provide an optional function to be called when the input changed.",
      control: "none",
    },
  },
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => (
  <Textarea {...args} />
);

export const Default = Template.bind({});
Default.args = {
  defaultValue: "Test",
};
