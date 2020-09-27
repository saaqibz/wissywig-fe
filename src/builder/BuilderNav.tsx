import React, { useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';

interface Step {
  name: string;
  url: string;
}

const steps: Step[] = [
  {
    name: 'Setup',
    url: 'setup',
  },
  {
    name: 'Content',
    url: 'content',
  },
  {
    name: 'Review',
    url: 'review',
  },
  {
    name: 'Tweak',
    url: 'tweak',
  },
  {
    name: 'Deploy',
    url: 'deploy',
  },
];

function useNavLocation(): string {
  const [navLocation, setNavLocation] = useState<string>('');
  const location = useLocation();
  useEffect(() => {
    const nav = location.pathname.split('/')[1].split('?')[0];
    setNavLocation(nav);
  }, [location]);
  return navLocation;
}

function BuilderNav(): JSX.Element {
  const { Header } = Layout;
  const navLoc = useNavLocation();

  return (
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" selectedKeys={[navLoc]}>
        {steps.map((step: Step) => (
          <Menu.Item key={step.url}>
            <Link to={step.url}>{step.name}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Header>
  );
}

export default BuilderNav;
