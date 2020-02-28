import React, { FC, useState } from 'react';
import Styled from './VideoPreview.styled';

const VideoPreview: FC = () => {
  const [isRect, toggleRect] = useState(false);

  return (
    <Styled.Main>
      <Styled.Container isRect={isRect} src="https://api.32plus32.ru/wp-content/uploads/2020/02/vitamins.jpg">
        <Styled.TopContent>
          <Styled.Tag>#статья</Styled.Tag>
          <Styled.Title>Фармакологическая поддержка спортсмена <br />в гиревом спорте</Styled.Title>
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
