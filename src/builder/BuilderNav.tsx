import React from 'react';
import { Layout, Menu } from 'antd';

const steps = [
  'Setup',
  'Content',
  'Review',
  'Tweak',
  'Deploy'
]

function BuilderNav() {
  const { Header } = Layout;

  return (
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
        {steps.map((step: string, $idx: number) => {
          return <Menu.Item key={$idx}>{step}</Menu.Item>
        })}
      </Menu>
    </Header>
  );
}

export default BuilderNav;
