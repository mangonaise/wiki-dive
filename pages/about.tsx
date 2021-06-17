import Head from 'next/head';
import Link from 'next/link';
import styles from './styles/About.module.scss';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <motion.div layoutId="pageInfo" className={styles.header} transition={{ ease: [0.11, 0.91, 0.32, 0.99], duration: 0.25 }}>
        <h2>Welcome to Wikidive!</h2>
      </motion.div>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}>
        <p>Ahoy there! I'm Liam, and this is my blog.</p>
        <p>There are over <strong>6 million articles</strong> on English Wikipedia.
          My goal is to find the most weird and wonderful ones, and write about them.</p>
        <p>At present, I'm able to write 3 posts a week. They'll show up on Monday, Wednesday and Friday (midnight UTC).
          Eventually, I hope that this site will be a massive repository of fascinating stories and interesting facts.</p>
        <p>If you like this project, there are some simple ways you can <Link href="/support"><a>support the blog</a></Link>.</p>
        <p>Thanks for visiting!</p>
      </motion.div>
    </div>
  )
}