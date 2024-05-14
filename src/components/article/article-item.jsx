import { Avatar } from 'antd';
import { LikeOutlined,EyeOutlined } from '@ant-design/icons'
function ArticleItem({item={},index,onClick,update}) {
function starHandle() {
    let articleObj = item
    if (articleObj.startFlag) {
        articleObj.startNum = articleObj.startNum - 1
    } else {
        articleObj.startNum = articleObj.startNum + 1
    }
    articleObj.startFlag = !articleObj.startFlag
    update(articleObj,index)
}
  return (
    <>
       <li className="article_list_item">
           <div className="user">
               <Avatar size={45} src={item.avatarImg}/>
               <div className="user_info">
                   <div className="user_name">{item.username}</div>
                   <div className="description">{item.desc}</div>
               </div>
           </div>
          <div className="article_header">{item.title}</div>
          <div className="article_box">
            <p>{item.content}
            </p>
            <img src={item.img} alt="" />
          </div>
           <div className="tool_bar">
                <span onClick={starHandle}>
                    <LikeOutlined style={{fontSize: '18px',color: item.startFlag ? '#55b3ee' : '#8a8a8a'}}/>
                    &nbsp;<i className="num">{item.startNum}</i>
                </span>
               <span>
                   <EyeOutlined style={{fontSize: '18px',color: '#8a8a8a'}}/>
                   &nbsp;<i className="num">{item.readNum}</i>
               </span>

           </div>
       </li>
    </>
  )
}

export default ArticleItem