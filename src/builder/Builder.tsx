import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import styled from '@emotion/styled';
import BuilderProvider from './BuilderProvider';
import BuilderNav from './BuilderNav';
import StepLessonType from './pages/LessonType';
import StepLessonFolder from './pages/LessonFolder';

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
                  <StepLessonType />
                </Route>
                <Route path="/content">
                  <StepLessonFolder />
                </Route>
                <Redirect to="/setup" />
              </Switch>
            </Layout>
          </Content>
          <Footer style={{ textAlign: 'center', margin: '0 50px' }}>
            LizBop ©2020. Created by S. Alexander Zaman
          </Footer>
        </Container>
      </BuilderProvider>
    </Router>
  );
}

const Container = styled.div``;

export default Builder;
