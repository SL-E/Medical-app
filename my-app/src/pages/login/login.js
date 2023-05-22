import React from "react";
import "./login.css";
import touone from '../../images/touone.webp'
import { MailOutlined,CoffeeOutlined,CommentOutlined,FacebookOutlined,TwitterOutlined,UserOutlined,LockOutlined,AppleOutlined,WindowsOutlined} from '@ant-design/icons';
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";

import {userdata} from '../../store/user'
import { Input,Checkbox,Form,Button, message } from 'antd';


export default function login()  {


  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    // TODO: 处理表单数据
    userdata.onxx()
    message.success('提交成功');
  };

  const onFinishFailed = (errors) => {
    console.log('Errors:', errors);
    // TODO: 处理校验失败的表单项
    message.error('提交失败，请检查表单项');
  };



  
    return (


      
      <div className="login_boxs">












  <div className="login_biao">
  <UserOutlined />
  <p>User Login</p>

  
  </div>
  <div className="login_from">
  <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder="Username" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password prefix={<LockOutlined />} placeholder="Password" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  
  </div>
  <div className="login_from">
  {/* <Input size="large" placeholder="large size" prefix={<LockOutlined />} /> */}
 <div className="mima">
 <Checkbox ><span className="logn_w">
  Keep me signed in</span> </Checkbox>
<span className="logng_r"> Forget Your Password?</span>
 </div>
  </div>

  {/* <Routes></Routes>
   */}

    
  {/* <div onClick={userdata.onxx} className="dengl">
  <Link  to="/guanli">
  Sign In
              </Link>
   </div> */}
<div className="login_ti">
    <div className="biao_one"><AppleOutlined /></div>
    <div className="biao_one"><WindowsOutlined /></div>
    <div className="biao_one"><TwitterOutlined /></div>
    <div className="biao_one"><FacebookOutlined /></div>
    <div className="biao_one"><CommentOutlined /></div>
    <div className="biao_one"><CoffeeOutlined /></div>
</div>
      </div>
    );
  }

