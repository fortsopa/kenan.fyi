import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetaData from "@/components/getPostMetadata";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResultPost = matter(content);

  return {
    date: matterResultPost.data.date,
    title: matterResultPost.data.title,
    content: matterResultPost.content,
  };
};

export const generateStaticParams = async () => {
  const posts = getPostMetaData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const { date: date, title: title, content: content } = getPostContent(slug);

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <h3 className='text-left text-2xl text-violet-600'>{title}</h3>
        <p className='text-right'>{date}</p>
      </div>
      <article className='prose lg:prose-xl'>
        <Markdown>{content}</Markdown>
      </article>
    </div>
  );
};

export default PostPage;
