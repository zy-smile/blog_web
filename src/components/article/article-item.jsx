import { Avatar } from 'antd';
 function ArticleItem({item={},index,onClick,update}) {
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
              

           </div>
       </li>
    </>
  )
}

export default ArticleItem