import React from "react";

import FolhasSection from "@/components/FolhasSection";
import RichContent from "@/components/RichContent";
import { getBlogContent } from "@/services";
import { TLocales } from "@/types";
import ImageCarousel from "@/components/ImageCarousel";
import Post from "./components/Post";

const BlogPage = async ({ params }: { params: { locale: TLocales } }) => {
  const posts = await getBlogContent(params.locale);

  return (
    <div className="pt-16 md:pt-24 flex flex-col gap-20 md:gap-36 pb-20 md:pb-36">
      {posts &&
        !!posts?.length &&
        posts.map((post) => (
          <Post key={post.id} locale={params.locale} {...post} />
        ))}
    </div>
  );
};

export default BlogPage;
