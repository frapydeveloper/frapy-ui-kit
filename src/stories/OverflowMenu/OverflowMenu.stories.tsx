import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import OverflowMenu from "../../lib/components/OverflowMenu";
import Button from "../../lib/components/Button";
import OverflowMenuItem from "../../lib/components/OverflowMenuItem";

export default {
  title: "Components/OverflowMenu",
  component: OverflowMenu,
  argTypes: {
    light: {
      description:
        "The color of the component. It supports those light and dark colors that make sense for this design system.",
    },
    flipped: {
      description: "The overflowMenu will appear on the left or right side",
    },
    children: { description: "The content of the component." },
    onClick: {
      description:
        "Provide an optional function to be called when the button element is clicked.",
      control: "none",
    },
  },
} as ComponentMeta<typeof OverflowMenu>;

const Template: ComponentStory<typeof OverflowMenu> = (args) => (
  <OverflowMenu {...args} />
);

export const Default = Template.bind({});
Default.args = {
  invokeItem: <Button>Overflow Menu</Button>,
  children: (
    <>
      <OverflowMenuItem>Menu item 1</OverflowMenuItem>
      <OverflowMenuItem>Menu item 1</OverflowMenuItem>
    </>
  ),
};
