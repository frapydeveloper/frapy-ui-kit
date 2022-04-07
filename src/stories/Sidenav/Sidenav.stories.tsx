import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Sidenav from "../../lib/components/Sidenav";
import SidenavMenu from "../../lib/components/SidenavMenu";
import SidenavMenuItem from "../../lib/components/SidenavMenuItem";

export default {
  title: "Components/Sidenav",
  component: Sidenav,
  argTypes: {
    children: { description: "The content of the component." },
  },
} as ComponentMeta<typeof Sidenav>;

const Template: ComponentStory<typeof Sidenav> = (args) => (
  <Sidenav {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "Sidenav",
};

export const Example = Template.bind({});
Example.args = {
  children: (
    <SidenavMenu labelText="Items">
      <SidenavMenuItem labelText="Sub-menu 1">
        <SidenavMenuItem>Item1</SidenavMenuItem>
        <SidenavMenuItem>Item2</SidenavMenuItem>
        <SidenavMenuItem>Item3</SidenavMenuItem>
      </SidenavMenuItem>
      <SidenavMenuItem>Item2</SidenavMenuItem>
      <SidenavMenuItem>Item3</SidenavMenuItem>
      <SidenavMenuItem labelText="Sub-menu 2">
        <SidenavMenuItem labelText="Sub-sub-menu 1">
          <SidenavMenuItem active>Item1</SidenavMenuItem>
          <SidenavMenuItem>Item2</SidenavMenuItem>
          <SidenavMenuItem>Item3</SidenavMenuItem>
        </SidenavMenuItem>
        <SidenavMenuItem>Item1</SidenavMenuItem>
      </SidenavMenuItem>
    </SidenavMenu>
  ),
};
