import React from 'react'
import { Form, Input, Button, Checkbox, Card, Space } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom';
const Login = (props) =>{
        const onFinish = values => {
         props.history.push('/dashboard')
        };
        const val = {
            usename : 'mamad',
            password : 'khazaee'
        }
    return ( 
        <div className='auth-layout'>
            <Card>
                <h1>Login</h1>
            <Form
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            name="normal_login"
            className="login-form"
            initialValues={val}
            onFinish={onFinish}
            size='large'
            >
                <Space className='form-container' direction='vertical'>
                <Form.Item
                label='phone number'
                    name="username"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                <Input value={val} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <div className='submit-btn-container'>
                    <Button type="primary" htmlType="submit" className="login-form-button ">
                    Log in
                    </Button>
                    </div>
                </Form.Item>
                </Space>
    </Form>
            </Card>
        </div>
    )
}
export default withRouter(Login)