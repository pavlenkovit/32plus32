import React from 'react';
import ReactDOM from 'react-dom';
import css from './Breadcrumbs.module.scss';
import Container from '../Container';
import Link from 'next/link';

class Breadcrumbs extends React.PureComponent {
  componentDidMount() {
    this.root = document.querySelector('#breadcrumbs');
    this.forceUpdate()
  }

  el = () => {
    const { items } = this.props;
    return (
      <div className={css.container}>
        <Container>
          <ul className={css.list}>
            <li className={css.item}>
              <Link href="/">
                <a className={css.link}>Главная</a>
              </Link>
            </li>
            {items.map(item => {
              return item.href ? (
                <li className={css.item}>
                  <Link href={item.href} as={item.as}>
                    <a className={css.link}>
                      {item.title}
                    </a>
                  </Link>
                </li>
              ) : (
                <li className={css.item}>
                  {item.title}
                </li>
              );
            })}
          </ul>
        </Container>
      </div>
    )
  };

  render() {
    if (!this.root) {
      return null;
    }
    return ReactDOM.createPortal(this.el(), this.root);
  }
}

export default Breadcrumbs;
