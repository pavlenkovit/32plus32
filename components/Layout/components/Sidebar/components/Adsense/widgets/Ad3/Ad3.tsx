import React, { FC, useEffect } from 'react';

const Ad3: FC = () => {
  useEffect(() => {
    // @ts-ignore
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-2490800653471089"
      data-ad-slot="3087451703"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
};

export default Ad3;
