import {useState} from 'react'
import {Menu , Drawer ,Row,Col , Breadcrumb , Card , Dropdown , Button , Layout} from 'antd'
import {Switch , Route, withRouter, Link} from 'react-router-dom'
import SiderInner from '../components/SiderInner'
import {MenuUnfoldOutlined ,  MenuFoldOutlined ,UserOutlined } from '@ant-design/icons'
import User from './user'
import Dashboard from './dashboard'
import IsAuth from '../components/IsAuth'

const LayoutComp = (props) =>{
    const { Header, Sider, Content } = Layout;
    const [collapsed,setCollapsed] = useState(false)
    const toggle = () => {
    setCollapsed(prevState => !prevState)
    };
    console.log(props.children);
    const profileMenu = (
      <Menu>
        <Menu.Item>
          <Link to='/auth/login'>Log Out</Link>
        </Menu.Item>
      
      </Menu>
    )
    
    return(
    <Layout style={{height : '100vh' , overflow : 'hidden'}}>
     <Drawer
          theme='dark'
          title="Admin Dashboard"
          placement='left'
          closable={false}
          onClose={()=> setCollapsed(prevState => !prevState)}
          visible={collapsed}
          style={{padding : '0 !important'}}
        >
           <SiderInner />
        </Drawer>
 <Layout className="site-layout">
    <Row >
        <Col span={24}>
          <Header className="site-layout-background"  theme='dark' style={{ display : 'flex' , justifyContent : 'space-between' , alignItems : 'center'}}>
            {collapsed 
            ?<MenuUnfoldOutlined onClick={toggle} style={{ color : '#fff' , fontSize : '1.4rem'}} className='trigger' />
            :<MenuFoldOutlined   onClick={toggle} style={{ color : '#fff' , fontSize : '1.4rem'}} className='trigger' />
            }
            <div className='profile'>
              <Dropdown overlay={profileMenu} placement="bottomCenter">
                <Button ghost type="white" shape='circle' icon={<UserOutlined />}>
                </Button>
            </Dropdown>
            </div>
        </Header>
      </Col>
    </Row>
      <Switch>
      <Route exact path="/">
          <Dashboard />
          </Route>
          <Route path="/user">
            <User />
          </Route>
        </Switch>
</Layout>
</Layout>
    )
} 

export default withRouter(LayoutComp)