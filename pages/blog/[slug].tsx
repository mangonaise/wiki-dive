import { getAllPostSlugs, getPostDataBySlug, PostMetadata } from '../../ssg/posts'
import Markdown from 'markdown-to-jsx';
import Head from 'next/head';

export default function Post({ metadata, content }: { metadata: PostMetadata, content: string }) {
  return (
    <div>
      <Head>
        <title>{metadata.title}</title>
      </Head>
      <h2>{metadata.title}</h2>
      <p>{metadata.description}</p>
      <p>{metadata.date}</p>
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