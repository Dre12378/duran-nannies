import { fetchAPI } from "@/lib/wordpress";
import { GET_ALL_POSTS } from "@/lib/queries";
import { AllPostsResponse } from "@/lib/type"; // Type safety!
import { formatDate } from "@/lib/utils";

export default async function Home() {
  // 1. Use the pre-written query
  const data: AllPostsResponse = await fetchAPI(GET_ALL_POSTS);
  
  // 2. Data is strictly typed now
  const posts = data.posts.nodes;

  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold mb-6">Latest Articles</h1>
      <div className="grid gap-6">
        {posts.map((post) => (
          <article key={post.id} className="border p-4 rounded">
            <h2 className="text-xl font-bold">{post.title}</h2>
            {/* 3. Use the utility function */}
            <p className="text-gray-500 text-sm">{formatDate(post.date)}</p>
          </article>
        ))}
      </div>
    </main>
  );
}