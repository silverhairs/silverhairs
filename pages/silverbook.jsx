import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Layout from "@components/Layout";

export default function Silverbook({ posts }) {
  return (
    <Layout title="Boris Kayi |The Silverbook">
      <div className="container">
        <div className="silverbook">
          <div className="header">
            <h1>
              What The f<code>ork</code> is The Silverbook?
            </h1>
            <p>
              A collection of texts where I talk about my journey in sotware
              engineering, you may call it a journal if you want, but The
              Silverbook just sounds cooler; I also talk about other
              non-computer related things.
            </p>
            <h2>Stories</h2>
          </div>
          <div className="stories">
            <ul>
              {posts.map((story, index) => {
                return (
                  <Link
                    key={`story-${index}`}
                    href={`/story/${story.slug}`}
                    passHref
                  >
                    <li>
                      <h3>{story.frontmatter.title}</h3>
                      <div className="footer">
                        <p>{story.frontmatter.excerpt}</p>
                        <small>{story.frontmatter.date}</small>
                      </div>
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export async function getStaticProps() {
  const files = fs.readdirSync(path.join("stories"));
  const stories = files.map((s) => {
    const slug = s.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(path.join("stories", s), "utf-8");

    const { data: frontmatter } = matter(markdownWithMeta);

    return { slug, frontmatter };
  });

  return {
    props: {
      posts: stories.sort((a, b) => {
        return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
      }),
    },
  };
}
