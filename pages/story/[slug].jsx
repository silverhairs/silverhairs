import fs from "fs";
import path from "path";
import marked from "marked";
import matter from "gray-matter";
import Layout from "@components/Layout";
import { FaLinkedin, FaTwitterSquare, FaGithubSquare } from "react-icons/fa";

export default function Story({ frontmatter, slug, content }) {
  const socialIcons = [
    {
      icon: <FaTwitterSquare size={40} color="1da1f2" />,
      href: "https://twitter.com/silverhairs7",
    },
    {
      icon: <FaLinkedin size={40} color="0072b1" />,
      href: "https://linkedin.com/in/iamboriskayi",
    },
    {
      icon: <FaGithubSquare size={40} color="000" />,
      href: "https://github.com/silverhairs",
    },
  ];
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
        <div className="footer">
          <h3>Contact me</h3>
          <div className="socials">
            <ul>
              {socialIcons.map((item, index) => {
                return (
                  <li key={`social-${index}`}>
                    <a href={item.href} target="_blank" rel="noreferrer">
                      {item.icon}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
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
