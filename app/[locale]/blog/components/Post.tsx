import RichContent from "@/components/RichContent";
import { IBlogContent, TLocales } from "@/types";
import React from "react";

interface PostProps extends IBlogContent {
  locale: TLocales;
}

const Post = ({
  title,
  dateOfPublication,
  post,
  backgroundImage,
  locale,
}: PostProps) => {
  return (
    <article className="even:bg-beige mb-10 md:mb-20">
      <div className="container py-10 md:py-20">
        <div
          className="bg-center bg-cover flex-1 md:flex-none w-full h-50v mb-10"
          style={{ backgroundImage: `url(${backgroundImage.url})` }}
        />
        <div className="flex justify-between mb-10">
          <h1 className="title text-xxxl">{title}</h1>
          <span className="title font-extralight">
            {new Date(dateOfPublication).toLocaleDateString(locale)}
          </span>
        </div>
        <div className="font-light prose max-w-full text-lg">
          <RichContent content={post.raw} />
        </div>
      </div>
    </article>
  );
};

export default Post;
