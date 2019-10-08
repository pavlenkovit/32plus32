import React, { PureComponent } from 'react';
import cn from 'classnames';
import css from './Sidebar.module.scss';

class Sidebar extends PureComponent {
  sidebar = React.createRef();

  lastScrollTop = 0;
  isUpdateDirectionTop = false;
  sidebarOverflow = false;
  downDirectionScroll = true;

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

  scrollDirection = () => {
    const st = window.pageYOffset;
    this.downDirectionScroll = st > this.lastScrollTop;
    this.lastScrollTop = st <= 0 ? 0 : st;
  };

  updatePosition = (top, bottom, margin) => {
    this.setState({
      isFixedTop: top,
      isFixedBottom: bottom,
      marginTop: margin,
    });
  };

  setPosition = () => {
    const { isFixedBottom, isFixedTop } = this.state;
    const y = window.scrollY;
    const sidebar = this.sidebar.current;
    const sidebarHeight = sidebar.offsetHeight;
    const parentHeight = sidebar.parentElement.offsetHeight;
    const windowHeight = window.innerHeight;
    const rect = sidebar.getBoundingClientRect();
    const offsetTop = document.querySelector('#header').offsetHeight + 30;

    this.scrollDirection();

    this.sidebarOverflow = sidebarHeight > windowHeight;

    if (!this.sidebarOverflow) { // если сайдбар меньше высоты экрана
      this.updatePosition(y > offsetTop - 15, false, 0);
    }

    if (this.sidebarOverflow) { // если сайдбар больше высоты экрана
      if (y + windowHeight > offsetTop + parentHeight) { // долистали до футера
        this.updatePosition(false, false, parentHeight - sidebarHeight);
        return;
      }

      if (y < offsetTop - 15) { // в зоне хедера
        this.updatePosition(false, false, 0);
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
          this.updatePosition(false, false, y - offsetTop + 15);
          return;
        }
      }

      if (!this.downDirectionScroll) {  // листаем вверх

        if (!isFixedTop) {
          if (rect.y - 15 > 0) {
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
    const classesSidebar = cn(css.sidebar, {
      [css.fixedTop]: isFixedTop,
      [css.fixedBottom]: isFixedBottom,
    });

    return (
      <div ref={this.sidebar} className={classesSidebar} style={{ marginTop }}>
        {[1, 2, 3, 4].map(item => (
          <aside key={item} className={css.widget}>
            Рекламный блок
          </aside>
        ))}
      </div>
    );
  }
}

export default Sidebar;
