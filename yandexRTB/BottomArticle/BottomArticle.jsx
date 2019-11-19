import React from 'react';

export default class BottomArticle extends React.Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return (
      <ins
        className='adsbygoogle'
        style={{ display: 'block' }}
        data-ad-client="ca-pub-2490800653471089"
        data-ad-slot="5553832941"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    );
  }
}
