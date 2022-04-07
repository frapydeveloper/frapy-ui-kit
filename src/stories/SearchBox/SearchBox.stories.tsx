import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SearchBox from "../../lib/components/SearchBox";

export default {
  title: "Components/SearchBox",
  component: SearchBox,
  argTypes: {
    onChange: {
      description:
        "Provide an optional function to be called when the input is changed.",
      control: "none",
    },
  },
} as ComponentMeta<typeof SearchBox>;

const Template: ComponentStory<typeof SearchBox> = (args) => (
  <SearchBox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: "Type here for search",
};
