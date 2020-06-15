import React, { PureComponent, Ref } from 'react';
import Styled from './StickyContainer.styled';

interface IState {
  isFixedTop: boolean;
  isFixedBottom: boolean;
  marginTop: number;
}

class StickyContainer extends PureComponent<{}, IState> {
  sidebar: Ref<HTMLDivElement> = React.createRef();

  constructor(props: any) {
    super(props);

    this.state = {
      isFixedTop: false,
      isFixedBottom: false,
      marginTop: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.setPosition);
    setTimeout(() => {
      this.setPosition();
    }, 0);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.setPosition);
  }

  updatePosition = (top: boolean, bottom: boolean, margin: number) => {
    this.setState({
      isFixedTop: top,
      isFixedBottom: bottom,
      marginTop: margin,
    });
  };

  setPosition = () => {
    const y = window.scrollY;
    if (!this.sidebar) {
      return;
    }
    // @ts-ignore
    const sidebar = this.sidebar.current;
    const sidebarHeight = sidebar.offsetHeight;
    const parentHeight = sidebar.parentElement.offsetHeight;
    // @ts-ignore
    const offsetTop = document.querySelector('#header').offsetHeight + 50;

    if (y > offsetTop + parentHeight - sidebarHeight) { // долистали до футера
      this.updatePosition(false, false, parentHeight - sidebarHeight + 50);
      return;
    }

    this.updatePosition(true, false, 0);
  };

  render() {
    const { isFixedTop, isFixedBottom, marginTop } = this.state;
    const { children } = this.props;

    return (
      <Styled.Container>
        <Styled.Inner
          ref={this.sidebar}
          style={{ marginTop }}
          isFixedTop={isFixedTop}
          isFixedBottom={isFixedBottom}
          marginTop={marginTop}
        >
          {children}
        </Styled.Inner>
      </Styled.Container>
    );
  }
}

export default StickyContainer;
