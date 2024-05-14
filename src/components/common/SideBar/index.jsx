
import './sidebar.less'
import React from 'react'
import { Menu, Layout, theme } from 'antd'

import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';

 const { Sider} = Layout

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);

    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  },
);

function Sidebar() {
     const {
    token: { colorBgContainer},
  } = theme.useToken();

    return (
      <div className="sidebar_container">
          
              <Sider style={{ background: colorBgContainer }} width={200}>
                <Menu
                  mode="inline"
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  style={{ height: '100%' }}
                  items={items2}
                />
              </Sider>
      </div>
    )
}

export default Sidebar