import { useEffect, useState } from 'react';
import axios from 'axios';

function HomePage() {
  let [article, setArticle] = useState([])

  useEffect(() => {
    axios.get('https://hacker-news.firebaseio.com/v0/topstories.json').then((response) => {
      console.log("top stories:", response)
      // const promises = []
      // for (let i = 0; i < 10; i++){
      //   promises.push(axios.get(`https://hacker-news.firebaseio.com/v0/item/${response.data[i]}.json`))
      // }
      // Promise.all(promises).then((responses) => {
      //   setArticles(responses.map((response) => {
      //     return response.data
      //   }))
      // })
      let articleData = [axios.get(`https://hacker-news.firebaseio.com/v0/item/${response.data[0]}.json`)]
      console.log("articleData:", articleData)
      Promise.all(articleData).then((response) => {
        console.log("response.data:", response[0].data)
        setArticle(response[0].data)
      })
    })
  }, [])

  console.log("Article:", article)
  return (
    <div className="App">
      Hello Home
      <br/>
      {article.title}
    </div>
  )
}

export default HomePage