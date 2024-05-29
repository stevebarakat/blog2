import React from "react";
import Link from "next/link";
import { getBlogPostList } from "../helpers/file-helpers";
import { format } from "date-fns";

async function Home() {
  const blogPosts = await getBlogPostList();

  return (
    <div>
      <h1>Latest Content:</h1>

      {blogPosts.map(({ slug, title, abstract, publishedOn }) => (
        <>
          <Link href={`${slug}`}>{title}</Link>
          <time dateTime={publishedOn}>
            {format(new Date(publishedOn), "MMMM do, yyyy")}
          </time>
          <p>
            {abstract}{" "}
            <Link href={`${slug}`}>
              Continue reading <span>→</span>
            </Link>
          </p>
        </>
      ))}
    </div>
  );
}

export default Home;
