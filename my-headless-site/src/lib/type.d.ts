export interface Post {
  id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
}

export interface PageInfo {
  endCursor: string;
  hasNextPage: boolean;
}

export interface AllPostsResponse {
  posts: {
    nodes: Post[];
    pageInfo: PageInfo;
  };
}