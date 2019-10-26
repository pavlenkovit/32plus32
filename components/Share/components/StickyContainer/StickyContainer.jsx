import React, { PureComponent } from 'react';
import css from './StickyContainer.module.scss';
import cn from 'classnames';

class StickyContainer extends PureComponent {
  sidebar = React.createRef();

  state = {
    isFixedTop: false,
    isFixedBottom: false,
    marginTop: 0,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.setPosition);
    this.setPosition();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.setPosition);
  }

  updatePosition = (top, bottom, margin) => {
    this.setState({
      isFixedTop: top,
      isFixedBottom: bottom,
      marginTop: margin,
    });
  };

  setPosition = () => {
    const y = window.scrollY;
    const sidebar = this.sidebar.current;
    const sidebarHeight = sidebar.offsetHeight;
    const parentHeight = sidebar.parentElement.offsetHeight;
    const offsetTop = document.querySelector('#header').offsetHeight + 30;

    if (y < offsetTop - 15) { // в зоне хедера
      this.updatePosition(false, false, 0);
      return;
    }

    if (y > offsetTop + parentHeight - sidebarHeight - 15) { // долистали до футера
      this.updatePosition(false, false, parentHeight - sidebarHeight);
      return;
    }

    this.updatePosition(true, false, 0);
  };

  render() {
    const { isFixedTop, isFixedBottom, marginTop } = this.state;
    const { children } = this.props;

    const classesSidebar = cn(css.container, {
      [css.fixedTop]: isFixedTop,
      [css.fixedBottom]: isFixedBottom,
    });

    return (
      <div className={css.wrapper}>
        <div ref={this.sidebar} className={classesSidebar} style={{ marginTop }}>
          {children}
        </div>
      </div>
    );
  }
}

export default StickyContainer;
