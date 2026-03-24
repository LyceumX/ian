import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export interface PostData {
  id: string;
  date: string;
  title: string;
  categories: string[];
  tags: string[];
  excerpt: string;
  image: string;
}

export function getSortedPostsData(): PostData[] {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse of post metadata section
    const matterResult = matter(fileContents);
    const data = matterResult.data as {
      date: string;
      title: string;
      categories: string[];
      tags: string[];
      excerpt: string;
      image: string;
    };

    return {
      id,
      title: data.title,
      date: String(data.date),
      categories: data.categories || [],
      tags: data.tags || [],
      excerpt: data.excerpt,
      image: data.image,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);
  const data = matterResult.data as {
    date: string;
    title: string;
    categories: string[];
    tags: string[];
    excerpt: string;
    image: string;
  };

  return {
    slug,
    title: data.title,
    date: String(data.date),
    categories: data.categories || [],
    tags: data.tags || [],
    excerpt: data.excerpt,
    image: data.image,
    content: matterResult.content,
  };
}
