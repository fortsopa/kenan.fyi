import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

function capitalize(s: string) {
  return s && s[0].toUpperCase() + s.slice(1);
}

export default function PostPreview(props: PostMetadata) {
  return (
    <div className='border border-slate-200 p-4 rounded-md shadow-md bg-white'>
      <Link href={`/posts/${props.slug}`}>
        <h2 className='font-bold text-violet-600 hover:underline'>
          {capitalize(props.slug).split("-").join(" ")}
        </h2>
      </Link>
      <p className='text-sm text-slate-400'> {props.date}</p>
      <p className='text-slate-700'> {props.desc} </p>
    </div>
  );
}
