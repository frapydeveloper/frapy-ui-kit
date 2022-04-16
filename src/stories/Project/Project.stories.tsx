import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { LinearScale } from "@frapy/icons";

import Project from "../../lib/components/Project";

export default {
  title: "Components/Project",
  component: Project,
  argTypes: {
    labelText: { description: "This is the name of the project." },
    createdAt: { description: "The project is created at this time" },
    fullWidth: {
      description:
        "If true, the button will take up the full width of its container.",
    },
    color: {
      description:
        "The color of the icon. It supports any color that make sense for this design system.",
    },
    icon: {
      description: "Project icon.",
      control: "none",
    },
    onClick: {
      description:
        "Provide an optional function to be called when the button element is clicked.",
      control: "none",
    },
  },
} as ComponentMeta<typeof Project>;

const Template: ComponentStory<typeof Project> = (args) => (
  <Project {...args} />
);

export const Default = Template.bind({});
Default.args = {
  labelText: "Project Name",
  createdAt: "04-08-2022",
  icon: <LinearScale size={24} color="#002bff" />,
  color: "#007bff",
  fullWidth: false,
};
