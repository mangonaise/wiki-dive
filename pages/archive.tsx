import { format } from 'date-fns';
import { getAllPostsData } from '../ssg/posts';
import Head from 'next/head'
import styles from './styles/Archive.module.scss';
import Link from 'next/link';

type BasicPostMetadata = { slug: string, title: string, dateString: string, time: number }
type YearArchive = { year: number, posts: BasicPostMetadata[] }
type ArchiveData = YearArchive[]

export default function Archive({ postsData }: { postsData: ArchiveData }) {
  return (
    <div style={{ maxWidth: '850px', margin: 'auto' }}>
      <Head>
        <title>Wikidive Archive</title>
      </Head>
      <h2 className="sectionHeader">Archive</h2>
      {postsData.map(data => (
        <div key={data.year}>
          <h3 className={styles.year}>{data.year}</h3>
          {data.posts.map(postData => (
            <Link href={'/posts/' + postData.slug} key={postData.slug}>
              <button className={styles.openPostButton} key={postData.title}>
                <div className={styles.date}>{postData.dateString}</div>
                <div className={styles.title}><span>{postData.title}</span></div>
              </button>
            </Link>
          ))}
        </div>
      ))}
    </div>
  )
}

export async function getStaticProps() {
  let pageData = [] as ArchiveData;

  const allPostsData = getAllPostsData();
  const postsCount = allPostsData.length;
  if (postsCount > 24) {
    allPostsData.slice(postsCount - 24, postsCount).forEach(postData => {
      const year = parseInt(postData.date.split('-')[0]);
      const date = new Date(postData.date);

      const basicMetadata = {
        slug: postData.slug,
        title: postData.title,
        dateString: format(date, 'MMM dd'),
        time: date.valueOf()
      }

      const existingYearData = pageData.find(data => data.year === year);
      if (existingYearData) {
        existingYearData.posts.push(basicMetadata);
      }
      else {
        pageData.push({ year: year, posts: [basicMetadata] });
      }
    });
  }

  return {
    props: {
      postsData: pageData
    }
  }
}