import Head from 'next/head'
import styles from './styles/index.module.scss';

export default function Home() {
  return (
    <div>
      <Head>
        <title>wiki-dive</title>
      </Head>
      <div className={styles.landing}>
        <h2 className={styles.catchphrase}>
          <span>Level up </span>your daily scroll.
        </h2>
        <div className={styles.info}>
          <strong>wiki-dive</strong> is a
          simple blog dedicated to exploring the <span>most fascinating Wikipedia articles</span> ever written.
        </div>
      </div>
      <h2 className={styles.postsHeader}>Posts</h2>
    </div>
  )
}