export default (post: any) => {
  const { fimg_url, meta: { _aioseop_description, _aioseop_keywords } } = post;

  return {
    description: _aioseop_description ? _aioseop_description[0] : '',
    keywords: _aioseop_keywords ? _aioseop_keywords[0] : '',
    img: fimg_url,
  };
};
