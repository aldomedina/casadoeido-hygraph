import React from "react";
import { RichText, RichTextProps } from "@graphcms/rich-text-react-renderer";

const RichContent = ({ ...props }: RichTextProps) => {
  return (
    <RichText
      renderers={{
        p: ({ children }) => (
          <p className="text-md font-light mb-5">{children}</p>
        ),
        li: ({ children }) => (
          <li className="ml-4 pl-2 font-light mb-2">
            <span>{children}</span>
          </li>
        ),
        ul: ({ children }) => (
          <ul className="list-disc">
            <span>{children}</span>
          </ul>
        ),
        img: (props) => (
          <div className="grid place-content-center w-full">
            <img
              className="md:max-w-60v md:max-h-70v self-end"
              src={props.src}
              alt={props.title}
            />
          </div>
        ),
      }}
      {...props}
    />
  );
};

export default RichContent;
