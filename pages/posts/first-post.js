import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function FirstPost() {
  const router = useRouter();

  useEffect(() => {
    // router.push('/posts/first-post/?counter=10', undefined, { shallow: true });
  }, []);

  // useEffect(() => {
  //   // alert(router.query.counter);
  // }, [router.query.counter]);

  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src='https://connect.facebook.net/en_US/sdk.js'
        strategy='lazyOnload'
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1>First Post</h1>
      <h2>
        <Link href='/'>
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}
