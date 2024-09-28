import { getSortedPostsData } from '../lib/posts';
import EmailForm from '../components/emailForm';

export default function Home({ allPostsData }) {
  return (
      <EmailForm />
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
