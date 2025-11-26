# Next.js & WordPress Headless Starter

This is a starter template for building a headless website using [Next.js](https://nextjs.org/) and [WordPress](https://wordpress.org/) as the content source. It uses the Next.js App Router, TypeScript, and Tailwind CSS.

## Features

-   **Next.js 16:** Utilizes the latest features of Next.js, including the App Router.
-   **React 19:** The newest version of React.
-   **TypeScript:** For type-safe code.
-   **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
-   **WordPress Integration:** A solid foundation for fetching data from a WordPress backend.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   [Node.js](https://nodejs.org/) (v20 or later recommended)
-   `npm` or a compatible package manager
-   A WordPress website to fetch content from.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Environment Variables

This project requires some environment variables to connect to your WordPress backend. Create a file named `.env.local` in the root of your project and add the following variables:

```
WORDPRESS_URL=https://your-wordpress-site.com
```

-   `WORDPRESS_URL`: The full URL of your WordPress site's GraphQL endpoint (e.g., `https://your-site.com/graphql`) or REST API endpoint.

### Configure Remote Images

To allow Next.js to optimize images from your WordPress site, you need to configure the remote patterns in `next.config.ts`. Add the hostname of your WordPress site to the `images` configuration.

**Example `next.config.ts`:**

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "your-wordpress-site.com",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
```

Replace `"your-wordpress-site.com"` with the actual domain of your WordPress site.

## Available Scripts

In the project directory, you can run the following commands:

-   `npm run dev`: Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits.

-   `npm run build`: Builds the app for production to the `.next` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

-   `npm run start`: Starts a Next.js production server.

-   `npm run lint`: Runs the ESLint code linter to check for code quality and style issues.

## WordPress Setup

For a complete headless experience, it's recommended to use plugins that expose a robust API from your WordPress site.

-   **WPGraphQL:** If you prefer GraphQL, the [WPGraphQL](https://www.wpgraphql.com/) plugin is an excellent choice.
-   **REST API:** WordPress comes with a built-in REST API. You may need to use plugins to expose custom fields or custom post types.

### Revalidation (Optional)

To enable on-demand revalidation of your Next.js pages when content is updated in WordPress, you will need to set up a webhook. This project is structured to support a revalidation endpoint. You would typically create a secret key and a webhook in WordPress that triggers a request to an API route in your Next.js app (e.g., `/api/revalidate`).

## Learn More

To learn more about the technologies used in this starter, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [React Documentation](https://react.dev/) - learn about React.
-   [WordPress Developer Resources](https://developer.wordpress.org/) - learn about WordPress APIs.