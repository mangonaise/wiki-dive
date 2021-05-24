import Head from 'next/head';

export default function About() {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <h2 style={{ margin: 'auto', textAlign: 'center', marginBottom: '24px' }}>
        Welcome to Wikidive!
      </h2>
      <div style={{ margin: 'auto', maxWidth: 'var(--post-width)', lineHeight: '26px' }}>
        <p>
          Ahoy there! I'm Liam, and this is my blog.
          <br/><br/>
          There are over <strong>6 million articles</strong> on English Wikipedia.
          My goal is to find the most weird and wonderful ones, and write about them. 
          <br/><br/>
          At present, I'm able to write 3 posts a week. They'll show up on Monday, Wednesday and Friday (midnight UTC).
          Eventually, I hope that this site will be a massive repository of fascinating stories and interesting facts.
          <br/><br/>
          If you like this project, there are some simple ways you can <a href="/support">support the blog</a>.
          <br/><br/>
          To get in touch or suggest an article, write to <strong>wikidivemail@gmail.com</strong>
          <br/><br/>
          Thanks for visiting!
        </p>
      </div>
    </div>
  )
}