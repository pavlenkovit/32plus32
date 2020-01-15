import React, { FC } from 'react';
import VkIcon from '../../../../../../icons/VkIcon';
import FbIcon from '../../../../../../icons/FbIcon';
import OkIcon from '../../../../../../icons/OkIcon';
import InstaIcon from '../../../../../../icons/InstaIcon';

import Styled from './Social.styled';

const Social: FC = () => {
  const socials = [
    {
      href: 'https://vk.com/32plus32',
      icon: VkIcon,
    },
    {
      href: 'https://www.instagram.com/32plus32/',
      icon: InstaIcon,
    },
    {
      href: 'https://www.facebook.com/32plus32/',
      icon: FbIcon,
    },
    {
      href: 'https://ok.ru/ok32plus32',
      icon: OkIcon,
    },
  ];

  return (
    <Styled.Container>
      {socials.map((item, idx) => (
        <Styled.Link key={idx} href={item.href} target="_blank">
          <item.icon color="#9B9B9B" />
        </Styled.Link>
      ))}
    </Styled.Container>
  );
};

export default Social;
