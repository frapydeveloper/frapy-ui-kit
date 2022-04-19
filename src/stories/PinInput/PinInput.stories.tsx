import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PinInput from "../../lib/components/PinInput";

export default {
  title: "Components/PinInput",
  component: PinInput,
  argTypes: {
    digits: {
      description:
        "Number of the pin character inputs. On default it accepts numberic characters.",
    },
    onFilled: {
      description: "Invoke function if the pin is filled",
      control: "none",
    },
  },
} as ComponentMeta<typeof PinInput>;

const Template: ComponentStory<typeof PinInput> = (args) => (
  <PinInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  digits: 6,
  onFilled: ({ pin }: any) => console.log("PIN: " + pin),
};
