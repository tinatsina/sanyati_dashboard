import { UserOutlined } from '@ant-design/icons'
import { Flex, Menu } from 'antd'
import React from 'react'
import { FaLeaf } from 'react-icons/fa'

const Sidebar = () => {
  return (
    <>
      <Flex align='center' justify='center'>
        <div className="logo">
          <FaLeaf/>
        </div>
      </Flex>
      <Menu 
        mode='inline' 
        defaultSelectedKeys={['1']} 
        className='menu-bar'
        items={[
          {key: '1', icon: <UserOutlined/>, label: 'Dashboard'}
        ]}
      />
    </>
  )
}

export default Sidebar