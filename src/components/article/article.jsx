import { useState } from 'react'
import ArticleItem from "./article-item"
import articleJson from '../../json/article.js'
import './article.less'
// import './article.css'
function Article() {
   const [articleList,setArticleList] = useState(articleJson)
  function updateHandle(articleObj,index) {
    let list = articleList
    list[index] = articleObj
    setArticleList([...list])
  }
  return (
    <div className="article_container">
          <ul>
              { articleList.map((item,index) => {
                  return (
                     <div key={index}>
                         <ArticleItem key={index} item={item} update={() => updateHandle(item,index)} onClick={() => {}}></ArticleItem>
                     </div>
                  )
              })}

          </ul>
    </div>
  )
}

export default Article