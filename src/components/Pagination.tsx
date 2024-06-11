import React from "react";
import { getBlogPostList } from "../helpers/file-helpers";
import Link from "next/link";

async function Pagination({ currentPosition }) {
  const blogPosts = await getBlogPostList();
  const next = blogPosts[currentPosition + 1]?.slug;
  const previous = blogPosts[currentPosition - 1]?.slug;
  return (
    <div className="pagination">
      <div>
        {previous && (
          <Link href={`/${previous}`}>
            <button>Previous Lesson</button>
          </Link>
        )}
      </div>
      <div>
        {next && (
          <Link href={`/${next}`}>
            <button>Next Lesson</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Pagination;
