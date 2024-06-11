"use client";

import React, { useState, useEffect } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { CodeSnippetClient } from "./CodeSnippet/CodeSnippetClient";
import Stately from "./Stately";
import Stackblitz from "./Stackblitz";
import CodeEditorProvider from "./CodeEditorProvider";

const BlogPostClient = ({ allPosts, postSlug, frontmatter, content }) => {
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    const index = allPosts.findIndex((post) => post.slug === postSlug);
    if (index !== -1) {
      setCurrentIndex(index);
    }
  }, [allPosts, postSlug]);

  const nextPost =
    currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

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
            pre: CodeSnippetClient,
            Stately,
            Stackblitz,
            CodeEditorProvider,
          }}
        />
      </div>
      <footer>
        <nav>
          {prevPost && (
            <a href={`/blog/${prevPost.slug}`}>
              &lt; Previous Post: {prevPost.title}
            </a>
          )}
          {nextPost && (
            <a href={`/blog/${nextPost.slug}`}>
              Next Post: {nextPost.title} &gt;
            </a>
          )}
        </nav>
      </footer>
    </article>
  );
};

export default BlogPostClient;
