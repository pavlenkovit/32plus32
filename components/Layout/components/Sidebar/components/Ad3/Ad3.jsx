import React from 'react';

export default class Ad3 extends React.Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return (
      <ins
        className='adsbygoogle'
        style={{ display: 'block' }}
        data-ad-client="ca-pub-2490800653471089"
        data-ad-slot="3087451703"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    );
  }
}
