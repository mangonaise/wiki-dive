import { getAllPostSlugs, getPostDataBySlug, PostMetadata } from '../../ssg/posts'
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Markdown from 'markdown-to-jsx';
import Head from 'next/head';
import styles from './Post.module.scss';
import CategoryIcon from '../../components/CategoryIcon';
import FooterLink from '../../components/FooterLink';
import { faInstagram, faRedditAlien, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Spacer from '../../components/Spacer';


export default function Post({ metadata, content }: { metadata: PostMetadata, content: string }) {
  return (
    <div className={styles.post}>
      <Head>
        <title>{metadata.title}</title>
      </Head>
      <PostInfoSection metadata={metadata} />
      <motion.div
        className={styles.content}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}>
        <Markdown>
          {content}
        </Markdown>
        {metadata.articleUrl && <FooterLink text="VISIT ARTICLE" url={metadata.articleUrl} newTab />}
        <Spacer height="32px" />
        <SocialMediaLinks />
      </motion.div>
    </div>
  )
}

function PostInfoSection({ metadata }: { metadata: PostMetadata }) {
  return (
    <motion.div
      className={styles.postInfo}
      layoutId={metadata.slug}
      transition={{ ease: [0.13, 0.83, 0.61, 1], duration: 0.3 }}>
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
    </motion.div>
  )
}

function SocialMediaLinks() {
  return (
    <div className={styles.socialLinks}>
      <a href="https://twitter.com/wiki_dive">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="https://www.instagram.com/wikidive.blog/">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="https://www.reddit.com/r/wikidive/">
        <FontAwesomeIcon icon={faRedditAlien} />
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