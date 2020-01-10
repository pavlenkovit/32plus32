import React from 'react';
import VkIcon from '../../../../../../icons/VkIcon';
import FbIcon from '../../../../../../icons/FbIcon';
import OkIcon from '../../../../../../icons/OkIcon';
import InstaIcon from '../../../../../../icons/InstaIcon';
import { Wrapper, Link } from './Social.styled';

const Social = () => {
  return (
    <Wrapper>
      <Link href="https://vk.com/32plus32" target="_blank">
        <VkIcon color="#9B9B9B" />
      </Link>
      <Link href="https://www.instagram.com/32plus32/" target="_blank">
        <InstaIcon color="#9B9B9B" />
      </Link>
      <Link href="https://www.facebook.com/32plus32/" target="_blank">
        <FbIcon color="#9B9B9B" />
      </Link>
      <Link href="https://ok.ru/ok32plus32" target="_blank">
        <OkIcon color="#9B9B9B" />
      </Link>
    </Wrapper>
  );
};

export default Social;
