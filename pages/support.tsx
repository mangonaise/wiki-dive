import Head from 'next/head';

export default function Support() {
  return (
    <div>
      <Head>
        <title>Support</title>
      </Head>
      <h2 style={{ margin: 'auto', textAlign: 'center', marginBottom: '24px' }}>
        Support Wikidive
      </h2>
      <div style={{ margin: 'auto', maxWidth: 'var(--post-width)', lineHeight: '26px' }}>
        <p>
          Wikidive is a personal project that I work on in my spare time. 
          I want this to be free and with no annoying ads.
          If you enjoy the blog, you can support it without spending a penny. 
          But if you have pennies to spare, that's cool too.
          <br/><br/>
          The simplest way to help out is to follow and share on{' '}
          <a href="https://www.instagram.com/wikidive.blog/" target="_blank">Instagram</a>,{' '}
          <a href="https://twitter.com/wiki_dive" target="_blank">Twitter</a> and{' '}
          <a href="https://www.reddit.com/r/wikidive/" target="_blank">Reddit</a>.{' '}
          I update these channels when I post, so it's a great way to stay in the loop.
          <br/><br/>
          Another free way to support the blog is to suggest an article.
          It saves me time on curating content. 
          Send an email to <strong>wikidivemail@gmail.com</strong> with a link to the article. 
          <br/><br/>
          If you're feeling extra nice, you can make a{' '}
          <a href="https://www.paypal.com/paypalme/wikidive" target="_blank">one-time PayPal donation</a>.
          <br/><br/>
          <div style={{ margin: 'auto', textAlign: 'center' }}>❤️</div>
        </p>
      </div>
    </div>
  )
}