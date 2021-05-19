import { getAllPostSlugs, getPostDataBySlug, PostMetadata } from '../../ssg/posts'
import Markdown from 'markdown-to-jsx';
import Head from 'next/head';
import styles from './Post.module.scss';
import { format } from 'date-fns';
import CategoryIcon from '../../components/CategoryIcon';

export default function Post({ metadata, content }: { metadata: PostMetadata, content: string }) {
  return (
    <div className={styles.post}>
      <Head>
        <title>{metadata.title}</title>
      </Head>
      <PostInfoSection metadata={metadata} />
      <Markdown>
        {content}
      </Markdown>
      {metadata.articleUrl && <ArticleLink url={metadata.articleUrl} />}
    </div>
  )
}

function PostInfoSection({ metadata }: { metadata: PostMetadata }) {
  return (
    <div className={styles.postInfo}>
      <p className={styles.date}>
        {metadata.index && <span>#{metadata.index}{' '}·{' '}</span>}
        {format(new Date(metadata.date), 'MMM d, yyyy').toUpperCase()}
      </p>
      <h2>{metadata.title}</h2>
      <p className={styles.description}>{metadata.description}</p>
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
  )
}

function ArticleLink({ url }: { url: string }) {
  return (
    <div className={styles.articleLink}>
      <div className={styles.strike} />
      <a className={styles.articleLink} href={url} target="_blank">
        VISIT ARTICLE
      </a>
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