import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";

function Home() {
    const [news, setNews] = useState(null);

    const fetchNews = async () => {
        
        const response = await axios({
          method: 'get',
          url: "https://techcrunch.com/wp-json/wp/v2/posts?per_page=20&context=embed",
          withCredentials: false,
        });
       // const json = await response.json();
        console.log(response.data[0]);
        setNews(response.data);
      };
      useEffect(() => {
        fetchNews();
      }, []);

  return(
    <div>
        {news && news.map(item => (
            <div class="card">
            <div class="card-body">
              {item.slug} <br/>
              <Link to={"/article"} className="Link" state={item}>
              View
            </Link>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Home