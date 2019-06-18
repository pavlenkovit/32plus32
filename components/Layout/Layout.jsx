import React, {PureComponent} from 'react';
import Link from 'next/link';
import { Container, Row, Col } from 'react-grid-system';

import Header from './components/Header';
import Sidebar from './components/Sidebar';

import '../../style.scss';
import css from './Layout.module.scss';

class Layout extends PureComponent {
  render() {
    const {children} = this.props;
    return (
      <div>
        <Header />
        <main className={css.content}>
          <Container>
            <Row>
              <Col md={9}>
                {children}
              </Col>
              <Col md={3}>
                <Sidebar />
              </Col>
            </Row>
          </Container>
        </main>
      </div>
    );
  }
}

export default Layout;
