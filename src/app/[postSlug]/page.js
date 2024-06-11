import { loadBlogPost } from "../../helpers/file-helpers";
import { MDXRemote } from "next-mdx-remote/rsc";
import { BLOG_TITLE } from "../../constants";
import CodeSnippet from "../../components/CodeSnippet/CodeSnippet";
import Stately from "../../components/Stately";
import Stackblitz from "../../components/Stackblitz";
import CodeEditor from "../../components/CodeEditor";

export async function generateMetadata({ params }) {
  const { frontmatter } = await loadBlogPost(params?.postSlug);
  return {
    title: `${frontmatter.title} | ${BLOG_TITLE}`,
    description: frontmatter.abstract,
  };
}
async function BlogPost({ params }) {
  const { frontmatter, content } = await loadBlogPost(params.postSlug);

  return (
    <article>
      <header>
        <div>
          <h1>{frontmatter.title}</h1>
        </div>
      </header>
      <div>
        <MDXRemote
          source={content}
          components={{
            pre: CodeSnippet,
            Stately,
            Stackblitz,
            CodeEditor,
          }}
        />
      </div>
    </article>
  );
}

export default BlogPost;
