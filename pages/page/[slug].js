import Link from 'next/link';

const Page = ({ slug }) => {
  return (
    <div>
      <h1>Page: {slug}</h1>
      <ul>
        <li>
          <Link href="/page/[slug]" as="/page/abc">abc</Link>
        </li>
        <li>
          <Link href="/page/[slug]" as="/page/about">about</Link>
        </li>
      </ul>
    </div>
  );
};

Page.getInitialProps = async (context) => {
  const { slug } = context.query;
  return { slug };
};

export default Page;
