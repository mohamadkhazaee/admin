import LayoutComp from '../LayoutComp'
import { Breadcrumb,Row,Col ,Layout } from 'antd'
import {Card} from 'antd'
const User = () =>{
    const { Header, Sider, Content } = Layout;
    return(
            <Content className="site-layout-background">
        <Row style={{height : '50px'}}>
            <Col className="gutter-row" style={{margin : '1rem'}} span={24}>
                <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="">Application Center</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="">Application List</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>An Application</Breadcrumb.Item>
            </Breadcrumb>
            </Col>
        </Row>
    <Row style={{height : '100%'}}>
          <Col span={24}>
          <div style={{height : '100%'}} className="site-card-border-less-wrapper">
            <Card title="Card title" bordered={false} style={{ width: '100%' , height : '100%' }}>
                sss
            </Card>
          </div>
          </Col>
    </Row>
    </Content>
    )   
}

export default User