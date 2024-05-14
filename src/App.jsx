
import './App.css';
import './assets/css/common.css';
import Header from './components/common/Header';
import Article from './components/article/article';
// 侧边导航
import SideBar from './components/common/SideBar';

import {Layout,theme } from 'antd';

const { Content } = Layout;



const App= () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <div className="container">
       <Layout class="he_fill">
          <Header style={{ display: 'flex', alignItems: 'center' }}>
          </Header>
          <Content style={{ padding: '16px 300px 0 16px' }}  className="content">
            <Layout
              className="he_fill"
              style={{ padding: '24px 0', background: colorBgContainer, borderRadius: borderRadiusLG }}
            >
              <SideBar/>
              <Content style={{ padding: '0 24px', minHeight: 280 }} className="scroll_box">
                <Article/>
              </Content>
            </Layout>
          </Content>
     
    </Layout>
    </div>
   
  );
};

export default App;
