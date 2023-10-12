import { Story } from "@storybook/react";

export const NewDesignDecorator = (StoryComponent: Story) => {
  return (
    <div className="app_redesigned">
      <StoryComponent />
    </div>
  );
};
