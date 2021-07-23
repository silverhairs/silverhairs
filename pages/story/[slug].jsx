import fs from "fs";
import path from "path";
import marked from "marked";
import matter from "gray-matter";
import Layout from "@components/Layout";

export default function Story({ frontmatter, slug, content }) {
  return (
    <Layout title={`The Silverbook | ${frontmatter.title}`}>
      <div className="container story">
        <div className="header">
          <h1>{frontmatter.title}</h1>
          <small>{frontmatter.date}</small>
        </div>
        <div className="body">
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("stories"));
  const paths = files.map((f) => ({
    params: { slug: f.replace(".md", "") },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("stories", `${slug}.md`),
    "utf-8"
  );
  const { data: frontmatter, content } = matter(markdownWithMeta);
  return {
    props: { frontmatter, slug, content },
  };
}
