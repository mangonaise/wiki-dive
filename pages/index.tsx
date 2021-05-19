import Head from 'next/head'
import Link from 'next/link';
import CategoryIcon from '../components/CategoryIcon';
import { getPostsData, PostMetadata } from '../ssg/posts';
import styles from './styles/Home.module.scss';

export default function Home({ postsData }: { postsData: PostMetadata[] }) {
  return (
    <div>
      <Head>
        <title>Wikidive</title>
      </Head>
      <div className={styles.landing}>
        <h2 className={styles.catchphrase}>
          <span>Level up </span>your daily scroll.
        </h2>
        <div className={styles.info}>
          <strong>Wikidive</strong> is a
          simple blog dedicated to exploring the <span>most fascinating Wikipedia articles</span> ever written.
        </div>
      </div>
      <h2 className={styles.postsHeader}>Recent posts</h2>
      <div className={styles.postsGrid}>
        {postsData.map(metadata => <PostPreview metadata={metadata} key={metadata.slug} />)}
      </div>
    </div>
  )
}

function PostPreview({ metadata }: { metadata: PostMetadata }) {
  const { slug, title, description, tags } = metadata;
  const mainCategory = tags[0];

  return (
    <Link href={`/blog/${slug}`}>
      <button className={styles.postPreview}>
        <div className={styles.category}>
          <CategoryIcon category={mainCategory} sizePx={32} className={styles.icon} />
          <p style={{ color: `var(--category-${mainCategory})` }}>{mainCategory.toUpperCase()}</p>
        </div>
        <h3>{title}</h3>
        <p className={styles.description}>{description}</p>
      </button>
    </Link>
  )
}

export async function getStaticProps() {
  const postsData = getPostsData();
  return {
    props: {
      postsData
    }
  }
}