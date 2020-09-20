import React from 'react';
import { Layout } from 'antd';
import styled from '@emotion/styled';
import BuilderProvider from './BuilderProvider';
import BuilderNav from './BuilderNav';
import StepSetup from './Setup';

const { Content, Footer } = Layout;

function Builder() {
  return (
    <BuilderProvider>
      <Container>
      <Layout>
        <BuilderNav />
      </Layout>
            <Content style={{ padding: '0 50px' }}>
            <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
              <StepSetup />
            </Layout>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Seecrets Prototype ©2020 Created by S. Alexander Zaman</Footer>
      </Container>
    </BuilderProvider>
  );
}

const Container = styled.div``;

export default Builder;
