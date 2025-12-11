import CreatePostButton from "@/components/post/createPostButton";
import PostFeed from "@/components/post/postFeed";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-10">
      <CreatePostButton />
      <PostFeed />
    </div>
  );
}
