import Head from 'next/head';
import styles from './styles/About.module.scss';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function Support() {
  return (
    <div>
      <Head>
        <title>Support</title>
      </Head>
      <motion.div layoutId="pageInfo" className={styles.header} transition={{ ease: [0.11, 0.91, 0.32, 0.99], duration: 0.25 }}>
        <h2>Support Wikidive</h2>
      </motion.div>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}>
        <p>If you enjoy the blog, you can support it without spending a penny.
          But if you have pennies to spare, that's cool too.</p>
        <p>The simplest way to help out is to follow and share on{' '}
          <a href="https://www.instagram.com/wikidive.blog/" target="_blank">Instagram</a>,{' '}
          <a href="https://twitter.com/wiki_dive" target="_blank">Twitter</a> and{' '}
          <a href="https://www.reddit.com/r/wikidive/" target="_blank">Reddit</a>.{' '}
          It's also a great way to stay updated on new posts.</p>
        <p>If you're feeling extra nice, you can also <a href="https://ko-fi.com/wikidive">buy me a coffee</a>.</p>
        <p>Another free way to support the blog is to suggest an article.
          Send an email to <strong>wikidivemail@gmail.com</strong> with a link!</p>
        <div style={{ textAlign: 'center' }}>
          <FontAwesomeIcon icon={faHeart} style={{ width: '18px', color: 'var(--icon-pink)' }} />
        </div>
      </motion.div>
    </div>
  )
}