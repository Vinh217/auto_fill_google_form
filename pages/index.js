import { getSortedPostsData } from '../lib/posts';
import EmailForm from '../components/emailForm';
import Summary from '../components/Summary';

export default function Home({ allPostsData }) {
  return (
      // <EmailForm />
      <Summary />
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
