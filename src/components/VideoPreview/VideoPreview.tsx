import React, { FC, useState } from 'react';
import Styled from './VideoPreview.styled';

const VideoPreview: FC = () => {
  const [isRect, toggleRect] = useState(false);

  return (
    <Styled.Main>
      <Styled.Container isRect={isRect} src="/img/video/dop1.jpg">
        <Styled.TopContent>
          <Styled.Tag>#упражнение</Styled.Tag>
          <Styled.Title>Отжимания на гирях</Styled.Title>
        </Styled.TopContent>
        <Styled.Brand>
          <img src="/img/logo.png" alt="32PLUS32" />
        </Styled.Brand>
      </Styled.Container>
      <Styled.Buttons>
        <button type="button" onClick={() => { toggleRect(!isRect); }}>Квадрат?</button>
        <div>{isRect ? '764 x 764' : '764 x 955'}</div>
      </Styled.Buttons>
    </Styled.Main>
  );
};

export default VideoPreview;
