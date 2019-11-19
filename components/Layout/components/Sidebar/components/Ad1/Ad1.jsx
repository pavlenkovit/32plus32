import React from 'react';

export default class Ad1 extends React.Component {
  componentDidMount() {
    console.log('render');
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return (
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-2490800653471089"
        data-ad-slot="6185717328"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    );
  }
}
