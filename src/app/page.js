import React from "react";
import Link from "next/link";
import { getBlogPostList } from "../helpers/file-helpers";
import { format } from "date-fns";

async function Home() {
  const blogPosts = await getBlogPostList();

  return (
    <div>
      <h1>Exercises:</h1>

      <ol>
        {blogPosts.map(({ slug, title, abstract, publishedOn }) => (
          <li key={slug}>
            <Link href={`${slug}`}>{title}</Link>

            {/* <p>
              {abstract}{" "}
              <Link href={`${slug}`}>
                Continue reading <span>→</span>
              </Link>
            </p> */}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Home;
