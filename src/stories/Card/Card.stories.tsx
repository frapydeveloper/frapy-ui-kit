import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Card from "../../lib/components/Card";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    children: { description: "The content of the component." },
    direction: {
      description:
        "The direciton of the gradient color. Applied only if backgroundStyle is 'linear' or 'radial'",
    },
    // color: {
    //   description:
    //     "The color of the component. It supports those theme colors that make sense for this design system.",
    // },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Card content",
};
