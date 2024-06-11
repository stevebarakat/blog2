import React from "react";
import Link from "next/link";
import { getBlogPostList } from "../helpers/file-helpers";
import { format } from "date-fns";

async function Home() {
  const blogPosts = await getBlogPostList();

  return (
    <div className="container page">
      <h1>Module One</h1>

      <ol className="table-of-contents">
        {blogPosts.map(({ slug, title, abstract, publishedOn }) => (
          <li key={slug}>
            <Link className="lesson-title" href={`${slug}`}>
              {title}
            </Link>

            <p>
              {abstract}{" "}
              <Link href={`${slug}`}>
                Go to lesson <span>→</span>
              </Link>
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Home;
