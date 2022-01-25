import Layout from "@components/Layout";

export default function Experiments():JSX.Element{
    return (
        <Layout title="Boris Kayi | Experiments">
            <div className="container">
                <h1>Nothing's here yet</h1>
                <h3>But I'm working on it</h3>
            </div>
        </Layout>
    )
}


interface Experiment{
    title: string;
    description: string;
    content: string;
}