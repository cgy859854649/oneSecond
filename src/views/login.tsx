import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Button, Form, Input } from "antd";
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  LockOutlined,
  UserOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
// import { login } from "../service/api";

const MyForm = styled.div`
  .ant-input {
    line-height: 30px;
  }
  .ant-form-item-explain-error {
    text-align: left;
  }
`;
export default function Login() {
  // useEffect(console.log(login));
  return (
    <div className=" h-screen bg-white flex justify-center items-center">
      <div className="flex flex-col justify-between text-center">
        <div className="text-[26px] font-bold">半秒送后台管理系统</div>
        <div className="w-[800px] h-[500px] shadow-md flex">
          <div className="flex-[1] flex justify-center items-center">
            <img
              src="http://192.168.121.66:8888/_nuxt/assets/images/login.png"
              alt=""
              className="w-[360px] h-[360px] block"
            />
          </div>
          <MyForm className="flex-[1] flex flex-col items-center p-[40px]">
            <h1 className="text-[20px]">账号密码登录</h1>
            <Form
              name="login_info"
              className="w-[320px] h-[300px] mt-[60px]"
              initialValues={{ remember: true }}
            >
              <Form.Item
                name="username"
                rules={[{ required: true, message: "请输入账号" }]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="管理员账号"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: "请输入密码" }]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="管理员密码"
                />
              </Form.Item>
              <Form.Item
                name="verification"
                rules={[{ required: true, message: "请输入验证码" }]}
              >
                <Input
                  prefix={
                    <SafetyCertificateOutlined className="site-form-item-icon" />
                  }
                  placeholder="输入验证码"
                  className="w-[170px]"
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="w-full h-[40px] mt-[40px]"
                >
                  登录
                </Button>
              </Form.Item>
            </Form>
          </MyForm>
        </div>
      </div>
    </div>
  );
}
