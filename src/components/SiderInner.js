import 'antd/dist/antd.css';
import {  Menu } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import React , {useState} from 'react'
import { Link } from 'react-router-dom';
function SiderInner() {


  return (
   <div>
    <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
      <Menu.Item key="1" icon={<UserOutlined />}>
        <Link to='/'>Dashboard</Link>
      </Menu.Item>
      <Menu.Item key="2" icon={<VideoCameraOutlined />}>
      <Link to='/user'>User</Link>
      </Menu.Item>
      <Menu.Item key="3" icon={<UploadOutlined />}>
        nav 3
      </Menu.Item>
    </Menu>
    </div>
  );
  }
export default SiderInner;
