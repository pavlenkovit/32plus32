import React, { PureComponent, Ref } from 'react';
import Adsense from './components/Adsense';

import Styled from './Sidebar.styled';

interface IState {
  isFixedTop: boolean;
  isFixedBottom: boolean;
  marginTop: number;
}

class Sidebar extends PureComponent<{}, IState> {
  sidebar: Ref<HTMLDivElement> = React.createRef();

  lastScrollTop = 0;

  isUpdateDirectionTop = false;

  sidebarOverflow = false;

  downDirectionScroll = true;

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

  scrollDirection = () => {
    const st = window.pageYOffset;
    this.downDirectionScroll = st > this.lastScrollTop;
    this.lastScrollTop = st <= 0 ? 0 : st;
  };

  updatePosition = (top: boolean, bottom: boolean, margin: number) => {
    this.setState({
      isFixedTop: top,
      isFixedBottom: bottom,
      marginTop: margin,
    });
  };

  setPosition = () => {
    const { isFixedBottom, isFixedTop } = this.state;
    const y = window.scrollY;
    // @ts-ignore
    const sidebar: HTMLDivElement = this.sidebar.current;
    const sidebarHeight = sidebar.offsetHeight;
    // @ts-ignore
    const parentHeight = sidebar.parentElement.offsetHeight;
    const windowHeight = window.innerHeight;
    const rect = sidebar.getBoundingClientRect();
    // @ts-ignore
    const offsetTop = document.querySelector('#header').offsetHeight + 50;
    this.scrollDirection();

    this.sidebarOverflow = sidebarHeight > windowHeight;

    if (y < 0) { // в зоне хедера
      this.updatePosition(false, false, 0);
      return;
    }

    if (!this.sidebarOverflow) { // если сайдбар меньше высоты экрана
      if (y > offsetTop + parentHeight - sidebarHeight - 15) { // долистали до футера
        this.updatePosition(false, false, parentHeight - sidebarHeight);
        return;
      }

      this.updatePosition(true, false, 0);
    }

    if (this.sidebarOverflow) { // если сайдбар больше высоты экрана
      if (y + windowHeight > offsetTop + parentHeight) { // долистали до футера
        this.updatePosition(false, false, parentHeight - sidebarHeight);
        return;
      }

      if (this.downDirectionScroll) { // листаем вниз
        if (!isFixedBottom && !isFixedTop) {
          if (rect.bottom - windowHeight < 0) {
            this.updatePosition(false, true, 0);
            return;
          }
        }

        if (isFixedTop) { // если поменяли направление при прибитом к верху сайдбару
          this.updatePosition(false, false, y);
          return;
        }
      }

      if (!this.downDirectionScroll) { // листаем вверх
        if (!isFixedTop) {
          if (rect.y - offsetTop > 0) {
            this.updatePosition(true, false, 0);
            return;
          }
        }

        if (!isFixedBottom && !isFixedTop) {
          return;
        }

        if (isFixedBottom) { // если поменяли направление при прибитом к низу сайдбару
          this.updatePosition(false, false, y - sidebarHeight + windowHeight - offsetTop);
        }
      }
    }
  };

  render() {
    const { isFixedTop, isFixedBottom, marginTop } = this.state;

    return (
      <Styled.Container
        ref={this.sidebar}
        isFixedTop={isFixedTop}
        isFixedBottom={isFixedBottom}
        marginTop={marginTop}
      >
        <Adsense />
      </Styled.Container>
    );
  }
}

export default Sidebar;
