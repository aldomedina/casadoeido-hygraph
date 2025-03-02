import React from "react";
import { RichText, RichTextProps } from "@graphcms/rich-text-react-renderer";

const RichContent = ({ ...props }: RichTextProps) => {
  return (
    <RichText
      renderers={{
        // Párrafos
        p: ({ children }) => (
          <p className="text-md font-light mb-5">{children}</p>
        ),

        // Elementos de lista
        li: ({ children }) => (
          <li className="ml-4 pl-2 font-light mb-2">
            <span>{children}</span>
          </li>
        ),
        ul: ({ children }) => (
          <ul className="list-disc mb-5">
            <span>{children}</span>
          </ul>
        ),

        // Imágenes
        img: (props) => (
          <div className="grid place-content-center w-full my-6">
            <img
              className="md:max-w-60v md:max-h-70v self-end"
              src={props.src}
              alt={props.title}
            />
          </div>
        ),

        // Encabezados
        h1: ({ children }) => (
          <h1 className="text-3xl font-bold mb-5 mt-8">{children}</h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-2xl font-semibold mb-4 mt-6">{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-xl font-medium mb-3 mt-5">{children}</h3>
        ),
        h4: ({ children }) => (
          <h4 className="text-lg font-medium mb-3 mt-4">{children}</h4>
        ),

        // Enlaces
        a: ({ children, href, openInNewTab }) => (
          <a
            href={href}
            className="text-blue-600 hover:underline"
            target={openInNewTab ? "_blank" : "_self"}
            rel={openInNewTab ? "noopener noreferrer" : ""}
          >
            {children}
          </a>
        ),

        // Tablas
        table: ({ children }) => (
          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse ">{children}</table>
          </div>
        ),
        table_head: ({ children }) => <thead className="">{children}</thead>,
        table_body: ({ children }) => <tbody>{children}</tbody>,
        table_row: ({ children }) => (
          <tr className=" last:border-none ">{children}</tr>
        ),
        table_cell: ({ children }) => <td>{children}</td>,
        table_header_cell: ({ children }) => (
          <th className="py-2 font-semibold">{children}</th>
        ),

        // Texto con formato
        bold: ({ children }) => (
          <strong className="font-bold">{children}</strong>
        ),
        italic: ({ children }) => <em className="italic">{children}</em>,
        underline: ({ children }) => (
          <span className="underline">{children}</span>
        ),
        code: ({ children }) => (
          <code className=" px-1 py-0.5 rounded font-mono text-sm">
            {children}
          </code>
        ),

        // Bloques de código
        code_block: ({ children }) => (
          <pre className=" p-4 rounded-md font-mono text-sm overflow-x-auto mb-5">
            {children}
          </pre>
        ),
      }}
      {...props}
    />
  );
};

export default RichContent;
