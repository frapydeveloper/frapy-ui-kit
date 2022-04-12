import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ContextMenu from "../../lib/components/ContextMenu";

export default {
  title: "Components/ContextMenu",
  component: ContextMenu,
  argTypes: {
    color: {
      description:
        "The color of the component. It supports those theme colors that make sense for this design system.",
    },
    kind: { description: "Specify the kind of Button you want to create." },
    fullWidth: {
      description:
        "If true, the button will take up the full width of its container.",
    },
    size: {
      description: "The size of the component.",
    },
    renderIcon: {
      description: "Optional prop to allow overriding the icon rendering.",
    },
    hasIconOnly: {
      description: "Specify if the button is an icon-only button",
    },
    disabled: { description: "If true, the component is disabled." },
    children: { description: "The content of the component." },
    onClick: {
      description:
        "Provide an optional function to be called when the button element is clicked.",
      control: "none",
    },
  },
} as ComponentMeta<typeof ContextMenu>;

const Template: ComponentStory<typeof ContextMenu> = (args) => (
  <ContextMenu {...args} />
);

export const Default = Template.bind({});
Default.args = {};
