import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Modal from "../../lib/components/Modal";

export default {
  title: "Components/Modal",
  component: Modal,
  argTypes: {
    primaryButtonText: {
      description: "If primaryButtonText used, footer will be appeared.",
    },
    onSubmitRequest: {
      description: "Function for primaryButton, when it's clicked.",
      control: "none",
    },
    onModalClose: {
      description: "Function for closing modal.",
      control: "none",
    },
    children: { description: "The content of the component.", control: "none" },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: "sm",
  modalHeading: "Modal Title",
  primaryButtonText: "Save",
  children: <div>Content</div>,
};
