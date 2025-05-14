import Link from "next/link";
import Head from "next/head";
import { CalendarIcon, Clock, ArrowLeft } from "lucide-react";
import { formatDate } from "@/lib/utils";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

interface BlogLayoutProps {
  children: React.ReactNode;
  post: {
    id: string;
    title: string;
    content: string;
    coverImage: string;
    date: string;
    author: {
      name: string;
      avatar: string;
    };
    readingTime: string;
    category: string;
    meta?: {
      keywords: string[];
      description: string;
    };
  };
}

const host = "https://www.multimind.com/blogs/";

export default function BlogLayout({ children, post }: BlogLayoutProps) {
  return (
    <div className="min-h-screen bg-[#050A14]">
      <Head>
        <title>{post.title} | MultiMind Blog</title>
        <meta name="description" content={post.meta?.description || post.title} />
        <meta name="keywords" content={post.meta?.keywords?.join(", ") || post.category} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${host}${post.id}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.meta?.description || post.title} />
        {post.coverImage && <meta property="og:image" content={post.coverImage} />}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.meta?.description || post.title} />
        {post.coverImage && <meta name="twitter:image" content={post.coverImage} />}
      </Head>
      <Navbar />
      <div className="container mx-auto py-8 px-4">
        <Link
          href="/blogs"
          className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <article className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-block bg-purple-600 text-white text-sm font-medium px-3 py-1 rounded mb-4">
              {post.category}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-gray-300 mb-8">
              <div className="flex items-center gap-2">
                {/* <div className="relative h-10 w-10 rounded-full overflow-hidden">
                  <Image
                    src={post.author.avatar || "/placeholder.svg?height=40&width=40"}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div> */}
                <span>{post.author.name}</span>
              </div>
              <div className="flex items-center gap-1">
                <CalendarIcon className="h-5 w-5" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-5 w-5" />
                <span>{post.readingTime}</span>
              </div>
            </div>
          </div>

          {/* <div className="relative h-[400px] w-full mb-8 rounded-xl overflow-hidden">
            <Image
              src={post.coverImage || "/placeholder.svg?height=400&width=800"}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div> */}

          <div
            className="prose prose-lg prose-invert max-w-none
                       prose-headings:text-white
                       prose-p:text-gray-300
                       prose-strong:text-white
                       prose-ul:text-gray-300
                       prose-ol:text-gray-300
                       prose-li:text-gray-300
                       prose-a:text-purple-400 prose-a:no-underline hover:prose-a:text-purple-300
                       prose-blockquote:border-purple-400 prose-blockquote:bg-gray-900/50 prose-blockquote:p-4 prose-blockquote:rounded-md
                       prose-code:bg-gray-900 prose-code:p-0.5 prose-code:rounded prose-code:text-gray-300
                       prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-800 prose-pre:text-gray-300
                       prose-table:border-collapse prose-table:border prose-table:border-gray-800
                       prose-th:bg-gray-900 prose-th:p-2 prose-th:border prose-th:border-gray-800
                       prose-td:p-2 prose-td:border prose-td:border-gray-800"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-12 pt-8 border-t border-gray-800">
            <h3 className="text-xl font-bold text-white mb-4">
              Share this post
            </h3>
            <div className="flex gap-4">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${
                  host + post.id
                }`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-white"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${host + post.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-white"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
            </div>
          </div>
        </article>
      </div>
      <Footer />
    </div>
  );
}
