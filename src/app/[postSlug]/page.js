import React from "react";
import { format } from "date-fns";
import { loadBlogPost } from "../../helpers/file-helpers";
import { MDXRemote } from "next-mdx-remote/rsc";
import { BLOG_TITLE } from "../../constants";
import CodeSnippet from "../../components/CodeSnippet";
import Stately from "../../components/Stately";
import Stackblitz from "../../components/Stackblitz";
import P from "../../components/P";
import Sandbox from "../../components/Sandbox";
import { AceEdit } from "../../components/AceEdit";

export async function generateMetadata({ params }) {
  const { frontmatter } = await loadBlogPost(params.postSlug);
  return {
    title: `${frontmatter.title} | ${BLOG_TITLE}`,
    description: frontmatter.abstract,
  };
}
async function BlogPost({ params }) {
  const { frontmatter, content } = await loadBlogPost(params.postSlug);
  // const formattedDate = format(
  //   new Date(frontmatter.publishedOn),
  //   "MMMM do, yyyy"
  // );
  return (
    <article className="container">
      <header>
        <div>
          <h1>{frontmatter.title}</h1>
          <p>
            Published on
            {/* <time dateTime={frontmatter.publishedOn}>{formattedDate}</time> */}
          </p>
        </div>
      </header>
      <div>
        <MDXRemote
          source={content}
          components={{
            pre: CodeSnippet,
            Stately,
            Stackblitz,
            Sandbox,
            AceEdit,
            P,
          }}
        />
      </div>
    </article>
  );
}

export default BlogPost;
