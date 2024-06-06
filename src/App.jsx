
import './App.css';
import './assets/css/common.less';
import Header from './components/common/Header';
import Article from './components/article/article';
// 侧边导航
import SideBar from './components/common/SideBar';
// 右边统计
import RightStatistics from './components/statistics/right-statistics';
import {Layout,theme } from 'antd';

const { Content } = Layout;

const App = () => {
  const {
    token: { borderRadiusLG },
  } = theme.useToken();

  return (
    <div className="container">
       <Layout className="he_fill">
          <Header style={{ display: 'flex', alignItems: 'center' }}>
          </Header>
          <Content style={{ padding: '16px 16px 0 16px' }}  className="content">
            <Layout
              className="he_fill"
              style={{   borderRadius: borderRadiusLG }}
            >
              <SideBar/>
              <Content style={{ padding: '0 24px',margin: '0 16px', minHeight: 280 }} className="scroll_box">
                <Article/>
              </Content>
              <RightStatistics />
            </Layout>
          </Content>
     
    </Layout>
    </div>
   
  );
};

export default App;
