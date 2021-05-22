import { useContext, useEffect, useRef } from 'react';
import { getHomepageData, PostMetadata } from '../ssg/posts';
import { motion } from 'framer-motion';
import { PreviousPageContext } from './_app';
import Head from 'next/head'
import Link from 'next/link';
import CategoryIcon from '../components/CategoryIcon';
import styles from './styles/Home.module.scss';

interface Props {
  recentPostsData: PostMetadata[],
  featuredPostsData: PostMetadata[]
}

export default function Home({ recentPostsData, featuredPostsData }: Props) {
  const currentTime = Date.now();

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

      {featuredPostsData.length > 0 && <>
        <h2 className="sectionHeader">Featured posts</h2>
        <div className={styles.postsGrid}>
          {featuredPostsData.map(metadata => <PostPreview metadata={metadata} key={metadata.slug} />)}
        </div>
      </>
      }

      <h2 className="sectionHeader">Recent posts</h2>
      <div className={styles.postsGrid}>
        {recentPostsData
          .filter(metadata => new Date(metadata.date).valueOf() <= currentTime)
          .splice(0, 24)
          .map(metadata => <PostPreview metadata={metadata} key={metadata.slug} />)}
      </div>
    </div>
  )
}

function PostPreview({ metadata }: { metadata: PostMetadata }) {
  if (new Date(metadata.date).valueOf() > Date.now()) {
    return null;
  }

  const buttonRef = useRef<HTMLButtonElement>(null);
  const previousPage = useContext(PreviousPageContext);
  const { slug, title, description, tags } = metadata;
  const mainCategory = tags[0];

  useEffect(() => {
    if (`/posts/${metadata.slug}` === previousPage) {
      setTimeout(() => {
        buttonRef.current.scrollIntoView({ block: 'start', behavior: 'smooth' });
      }, 0);
    }
  }, []);

  return (
    <Link href={`/posts/${slug}`}>
      <motion.div
        className={styles.postPreview}
        layoutId={slug}
        whileHover={{ y: -5 }}
        transition={{ ease: [0.11, 0.91, 0.32, 0.99], duration: 0.3 }}>
        <button ref={buttonRef}>
          <div className={styles.category}>
            <CategoryIcon category={mainCategory} sizePx={32} className={styles.icon} />
            <p style={{ color: `var(--category-${mainCategory})` }}>{mainCategory.toUpperCase()}</p>
          </div>
          <h3>{title}</h3>
          <p className={styles.description}>{description}</p>
        </button>
      </motion.div>
    </Link>
  )
}

export async function getStaticProps() {
  const { recentPostsData, featuredPostsData } = getHomepageData();
  return {
    props: {
      recentPostsData,
      featuredPostsData
    }
  }
}