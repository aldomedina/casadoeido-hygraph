import React from "react";
import { RichText, RichTextProps } from "@graphcms/rich-text-react-renderer";

const RichContent = ({ ...props }: RichTextProps) => {
  return (
    <RichText
      renderers={{
        p: ({ children }) => (
          <p className="text-md font-light mb-5">{children}</p>
        ),
      }}
      {...props}
    />
  );
};

export default RichContent;
