import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Layout, Avatar } from "antd";
// eslint-disable-next-line import/no-extraneous-dependencies
import { UserOutlined } from "@ant-design/icons";

const { Header, Footer, Sider, Content } = Layout;

export default function LayoutView() {
  return (
    <Layout>
      <Header className="bg-white text-[#333] flex items-center justify-between h-[60px] px-[20px]">
        <div className="flex items-center">
          <span className="text-[20px] ml-[12px] text-bold">
            半秒送后台管理系统
          </span>
        </div>
        <Avatar size={32} icon={<UserOutlined />} />
      </Header>
      <Layout hasSider>
        <Sider>Sider</Sider>
        <Content>Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
}
