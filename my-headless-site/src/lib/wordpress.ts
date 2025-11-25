import { WORDPRESS_API_URL } from "./constant";

// Define the shape of the fetch options
interface FetchAPIOptions {
  variables?: Record<string, any>;
  preview?: boolean;
}

/**
 * The main fetcher function.
 * @param query - The GraphQL query string (from queries.ts)
 * @param options - Variables and preview mode settings
 * @returns The 'data' object from the response
 */
export async function fetchAPI(
  query: string,
  { variables }: FetchAPIOptions = {}
) {
  const headers = { "Content-Type": "application/json" };

  if (!WORDPRESS_API_URL) {
    throw new Error("NEXT_PUBLIC_WORDPRESS_API_URL is not defined in .env.local");
  }

  const res = await fetch(WORDPRESS_API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
    // 'force-cache' = Static Site Generation (SSG) - Fast!
    // 'no-store' = Server Side Rendering (SSR) - Always fresh.
    // Use 'next: { revalidate: 60 }' to refresh every 60 seconds.
    next: { revalidate: 60 }, 
  });

  const json = await res.json();

  if (json.errors) {
    console.error("GraphQL Errors:", json.errors);
    throw new Error("Failed to fetch API");
  }

  return json.data;
}