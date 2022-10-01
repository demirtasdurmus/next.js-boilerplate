import Head from 'next/head'
import ArticleList from '../components/articles/ArticleList';


export default function Home(props) {
  const { posts } = props;
  return (
    <div>
      <Head>
        <title>Next Boilerpalte</title>
        <meta name="description" content="My Next.js Boilerplate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ArticleList posts={posts} />
    </div>
  )
};

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
  const posts = await res.json();
  return {
    props: {
      posts: posts,
    }
  }
};
