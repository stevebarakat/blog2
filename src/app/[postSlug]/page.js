import { format } from "date-fns";
import { loadBlogPost } from "../../helpers/file-helpers";
import { MDXRemote } from "next-mdx-remote/rsc";
import { BLOG_TITLE } from "../../constants";
import CodeSnippet from "../../components/CodeSnippet/CodeSnippet";
import Stately from "../../components/Stately";
import Stackblitz from "../../components/Stackblitz";
import CodeEditorProvider from "../../components/CodeEditorProvider";

export async function generateMetadata({ params }) {
  console.log("params", params);
  const { frontmatter } = await loadBlogPost(params?.postSlug);
  return {
    title: `${frontmatter.title} | ${BLOG_TITLE}`,
    description: frontmatter.abstract,
  };
}
async function BlogPost({ params }) {
  const { frontmatter, content } = await loadBlogPost(params.postSlug);
  const formattedDate = format(
    new Date(frontmatter.publishedOn),
    "MMMM do, yyyy"
  );
  return (
    <article className="container">
      <header>
        <div>
          <h1>{frontmatter.title}</h1>
          <p>
            Published on
            <time dateTime={frontmatter.publishedOn}>{formattedDate}</time>
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
            CodeEditorProvider,
          }}
        />
      </div>
    </article>
  );
}

export default BlogPost;