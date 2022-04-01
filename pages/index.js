// pages/index.js
import Link from "next/link";
import { client } from "../libs/client";

export default function Home({ blog }) {
  return (

    <div className="max-w-lg mx-auto">

      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
              <div className="p-5">
                <a>
                  <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2"><a>{blog.title}</a></h5>
                </a>
                <p className="font-normal text-gray-700 mb-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <Link href={`/blog/${blog.id}`}>
                  <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="#">
                    Read more
                  </a>
                </Link>
              </div>
            </div>
          </li>

        ))}
      </ul>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};
