import Head from "next/head";
import Header from "./Header";
export default function Layout(props) {
  return (
    <div className="layout">
      <Head>
        <title>{props.title}</title>
        <meta
          name="description"
          content="Boris Kayi is Software Engineer specialized in web and mobile technologies. He gives life to your ideas by using the language of the gods."
        />
        <meta property="og:title" content="Boris Kayi, Software Engineer." />
        <meta property="og:image" content="/me.jpeg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Header />
      </header>
      <main>{props.children}</main>
    </div>
  );
}
