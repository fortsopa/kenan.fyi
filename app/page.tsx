import getPostMetaData from "@/components/getPostMetadata";
import PostPreview from "@/components/PostPreview";

function capitalize(s: string) {
  return s && s[0].toUpperCase() + s.slice(1);
}

const HomePage = () => {
  const postMetaData = getPostMetaData();
  const postPreviews = postMetaData.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>{postPreviews}</div>
  );
};

export default HomePage;
