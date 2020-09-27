import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import styled from '@emotion/styled';
import BuilderProvider from './BuilderProvider';
import BuilderNav from './BuilderNav';
import StepSetup from './pages/Setup';
import StepContent from './pages/Content';

const { Content, Footer } = Layout;

function Builder(): JSX.Element {
  return (
    <Router>
      <BuilderProvider>
        <Container>
          <Layout>
            <BuilderNav />
          </Layout>
          <Content style={{ padding: '0 50px' }}>
            <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
              <Switch>
                <Route path="/setup">
                  <StepSetup />
                </Route>
                <Route path="/content">
                  <StepContent />
                </Route>
                <Redirect to="/setup" />
              </Switch>
            </Layout>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            WissyWig Prototype ©2020 Created by S. Alexander Zaman
          </Footer>
        </Container>
      </BuilderProvider>
    </Router>
  );
}

const Container = styled.div``;

export default Builder;
