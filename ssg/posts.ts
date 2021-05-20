import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const postCategories = [
  'animals',
  'catastrophe',
  'history',
  'internet',
  'language',
  'medicine',
  'miscellaneous',
  'nature',
  'people',
  'places',
  'politics',
  'psychology',
  'science',
  'society',
  'space',
  'technology',
  'meta'] as const;

export type PostCategory = typeof postCategories[number];

export type PostMetadata = {
  slug: string,
  index: number,
  title: string,
  description: string,
  date: string,
  articleUrl: string,
  tags: PostCategory[]
}

const postsDirectory = path.join(process.cwd(), 'posts');

export function getPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map(fileName => {
    const slug = fileName.replace('.md', '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const metadata = matter(fileContents).data;

    return {
      slug,
      ...metadata,
    } as PostMetadata
  });

  return allPostsData.sort((a, b) => a.date < b.date ? 1 : -1);
}

export function getHomepageData() {
  const allPostsData = getPostsData();
  const buildTime = Date.now();
  let futurePostsCount = 0;
  allPostsData.forEach(metadata => {
    if (new Date(metadata.date).valueOf() > buildTime) {
      futurePostsCount++;
    }
  });

  const recentPostsLimit = 24 + futurePostsCount;

  return {
    recentPostsData: allPostsData.splice(0, recentPostsLimit)
  }
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map(fileName => {
    return {
      params: {
        slug: fileName.replace('.md', '')
      }
    }
  });
}

export function getPostDataBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath);
  const markdown = matter(fileContents);
  return {
    metadata: { slug, ...markdown.data } as PostMetadata,
    content: markdown.content
  }
}