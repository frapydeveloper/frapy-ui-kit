import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Avatar from "../../lib/components/Avatar";

export default {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
    name: {
      description: "Name of the user.",
    },
    type: {
      description:
        "The 'compact' mode shows just the avatar. The 'full' mode shows the name of the avatar too.",
    },
    size: {
      description: "The size of the component.",
    },
    avatar: {
      description: "URI for the avatar image",
    },
    onClick: {
      description:
        "Provide an optional function to be called when the button element is clicked.",
      control: "none",
    },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "John Adams",
  type: "compact",
  size: "md",
};

export const WithAvatarImage = Template.bind({});
WithAvatarImage.args = {
  name: "John Adams",
  type: "compact",
  size: "md",
  avatar:
    "https://kep.cdn.index.hu/1/0/4109/41095/410959/41095997_3136019_8f94a35f60569ffcd7ab3a2cfb0bfb78_wm.png",
};
