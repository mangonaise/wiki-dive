import { getAllPostSlugs, getPostDataBySlug, PostMetadata } from '../../ssg/posts'
import Markdown from 'markdown-to-jsx';
import Head from 'next/head';
import styles from './post.module.scss';
import { format } from 'date-fns';
import CategoryIcon from '../../components/CategoryIcon';

export default function Post({ metadata, content }: { metadata: PostMetadata, content: string }) {
  return (
    <div className={styles.post}>
      <Head>
        <title>{metadata.title}</title>
      </Head>
      <div className={styles.postInfo}>
        <p className={styles.date}>
          {format(new Date(metadata.date), 'MMM d, yyyy').toUpperCase()}
        </p>
        <h2>{metadata.title}</h2>
        <div className={styles.tagsContainer}>
          {metadata.tags.map(tag => (
            <div className={styles.tag} key={tag}>
              <CategoryIcon category={tag} className={styles.icon} sizePx={28} />
              <span className={styles.label} style={{ color: `var(--category-${tag})` }}>
                {tag.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
      </div>
      <Markdown>
        {content}
      </Markdown>
    </div>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostSlugs();
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const props = getPostDataBySlug(params.slug);
  return {
    props: {
      metadata: props.metadata,
      content: props.content
    }
  }
}