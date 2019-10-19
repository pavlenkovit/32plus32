import React, { PureComponent } from 'react';
import FbIcon from '../../icons/FbIcon';
import VkIcon from '../../icons/VkIcon';
import OkIcon from '../../icons/OkIcon';
import css from './Share.module.scss';
import cn from 'classnames';
import TwitterIcon from '../../icons/TwitterIcon';

class Share extends PureComponent {
  sidebar = React.createRef();

  state = {
    isFixedTop: false,
    isFixedBottom: false,
    marginTop: 0,
    ww: 0,
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

  shareVk = () => {
    window.open(`http://vk.com/share.php?url=${window.location.href}`, '', 'width=626,height=436');
  };

  shareOk = () => {
    window.open(`https://connect.ok.ru/offer?url=${window.location.href}`, '', 'width=626,height=436');
  };

  shareFb = () => {
    FB.ui({
      method: 'share',
      href: window.location.href,
    }, (response) => {
    });
  };

  render() {
    const { isFixedTop, isFixedBottom, marginTop } = this.state;

    const classesSidebar = cn(css.container, {
      [css.fixedTop]: isFixedTop,
      [css.fixedBottom]: isFixedBottom,
    });

    return (
      <div className={css.wrapper}>
        <div ref={this.sidebar} className={classesSidebar} style={{ marginTop }}>
          <div className={css.item}>
            <button onClick={this.shareVk} className={css.button}>
              <VkIcon size={23} className={css.icon} />
              <div className={css.info}>33</div>
            </button>
          </div>
          <div className={css.item}>
            <button onClick={this.shareFb} className={css.button}>
              <FbIcon className={css.icon} />
              <div className={css.info}>313</div>
            </button>
          </div>
          <div className={css.item}>
            <button onClick={() => {}} className={css.button}>
              <TwitterIcon className={css.icon} />
            </button>
          </div>
          <div className={css.item}>
            <button onClick={this.shareOk} className={css.button}>
              <OkIcon className={css.icon} />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Share;
