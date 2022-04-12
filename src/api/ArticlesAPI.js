import { useEffect } from "react";
import axios from 'axios';

const GetArticle = () => {
  useEffect(() => {
    axios.get('https://hacker-news.firebaseio.com/v0/topstories.json').then((response) => {
      console.log(response)
      let article = axios.get(`https://hacker-news.firebaseio.com/v0/item/${response.data[0]}.json`)
      Promise.all(article).then((response) => {
        console.log(response)
        return response.data
      })
    })
  }, [])
};


export default GetArticle