
import React, { useState } from 'react'
import { Menu, Layout, theme } from 'antd'
import $axios from '../../../server/request'
import { FileOutlined,UserOutlined, } from '@ant-design/icons';
import { useEffect } from 'react';
import './sidebar.less'
 const { Sider} = Layout

function Sidebar() {
  const [menuList, setMenuList] = useState([])
  const {
    token: { colorBgContainer},
  } = theme.useToken();
  
  useEffect(() => {
      //初始化函数
      getList(setMenuList)
  },[])
 
  function selectClick({ item, key, keyPath, selectedKeys, domEvent }) {
      console.log({ item, key, keyPath, selectedKeys, domEvent })
  }
    return (
        <div className="sidebar_container">
              <Sider style={{ background: colorBgContainer }} width={200}>
                <Menu
                  mode="inline"
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  style={{ height: '100%' }}
                  items={menuList}
                  onSelect={selectClick}
                />
              </Sider>
      </div>
    )
}
function getList(cb) {
   $axios.get('/src/json/sidebar.json').then(res => {
   let data = res.data
    if(data && data instanceof Array) {
      let newList = data.map((item,index) => {
        item.icon = React.createElement([FileOutlined,UserOutlined][index])
        return item
      })
      cb && cb(newList)
    }
  })
}
export default Sidebar