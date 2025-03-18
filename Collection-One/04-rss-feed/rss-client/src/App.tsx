import { useEffect, useState } from "react";
import axios from "axios";
import Feed from "./Feed";

export interface FeedModel {
  item: {
    title: string;
    link: string;
    pubDate: string;
  };
}

function App() {
  const [articles, setArticles] = useState<FeedModel[]>([]);

  const getArticles = async () => {
    try {
      const res = await axios.get("http://localhost:4000/");
      console.log("res is", res.data);
      setArticles(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(articles);

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      <h1 className="text-xl text-center mt-5 font-semibold">RSS Feed</h1>
      <h2 className="text-3xl font-semibold text-center px-6 mt-2 mb-4">
        Good morning, Ayeshan
      </h2>
      <div className="w-3/4 max-w-lg border mx-auto p-5 rounded-xl">
        <div className="bg-black flex flex-col items-center justify-center rounded-lg py-2 mb-5 w-full">
          <img src="https://cdn-images-1.medium.com/max/303/1*rOPLUJ3W6FUA3rO1U1IeuA@2x.png" />
        </div>
        {articles.map((post, i) => (
          <Feed
            key={i}
            title={post.item.title}
            link={post.item.link}
            date={post.item.pubDate}
          />
        ))}
      </div>
    </>
  );
}

export default App;
