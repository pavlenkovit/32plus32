import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

const CustomHead = (props) => {
  const {
    title = 'Гиревой спорт',
    description = 'Сайт о гиревом спорте',
    imgKey = '',
    url = '',
    keywords = '',
  } = props;

  return (
    <Head>
      <title key="title">{title} | 32PLUS32</title>
      <meta key="meta-image" property="og:image" content={imgKey} />
      <meta key="meta-url" property="og:url" content={`https://32plus32.ru${url}`} />
      <meta key="meta-title" property="og:title" content={title} />
      <meta key="meta-description" name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Head>
  );
};

CustomHead.propTypes = {
  title: PropTypes.string,
  imgKey: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  keywords: PropTypes.string,
};

export default CustomHead;
