import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import css from './Breadcrumbs.module.scss';
import Container from '../Container';
import Link from 'next/link';

const Breadcrumbs = ({ items }) => {
  const [root, updRoot] = useState(null);

  const el = () => {
    return (
      <div className={css.container}>
        <Container>
          <ul className={css.list}>
            <li className={css.item}>
              <Link href="/">
                <a className={css.link}>Главная</a>
              </Link>
            </li>
            {items.map((item, idx) => {
              return item.href ? (
                <li key={idx} className={css.item}>
                  <Link href={item.href} as={item.as}>
                    <a className={css.link}>
                      {item.title}
                    </a>
                  </Link>
                </li>
              ) : (
                <li key={idx} className={css.item}>
                  {item.title}
                </li>
              );
            })}
          </ul>
        </Container>
      </div>
    )
  };

  useEffect(() => {
    updRoot(document.querySelector('#breadcrumbs'));
  }, [root]);

  if (!root) {
    return null;
  }

  return ReactDOM.createPortal(el(), root);
};

export default Breadcrumbs;
