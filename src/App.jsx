import React, { useState } from 'react'
import { Button, Layout } from 'antd'
import Sidebar from './components/Sidebar'
import './App.css';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

const {Sider, Header, Content} = Layout;


export const App = () => {

  /////////////////////////////////////////
  //////////// Extra Functions ////////////
  /////////////////////////////////////////
  const [collapsed, setcollapsed] = useState(false);



  /////////////////////////////////////////
  //////////// Return Function ////////////
  /////////////////////////////////////////
  return (
    <Layout>
      <Sider theme='light'
             trigger={null} 
             collapsible 
             collapsed={collapsed} 
             className='sider'>
              <Sidebar/>
              <Button 
                type='text' 
                icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                onClick={() => setcollapsed(!collapsed)} 
                className='triger-btn'/>
      </Sider>
      <Layout>
        <Header className='header'></Header>
        <Content className='content'></Content>
      </Layout>
    </Layout>
  )
}

export default App;
