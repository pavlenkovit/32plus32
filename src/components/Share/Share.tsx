import React, { useEffect, useState, FC } from 'react';
import axios from 'axios';
import FbIcon from '../../icons/FbIcon';
import VkIcon from '../../icons/VkIcon';
import OkIcon from '../../icons/OkIcon';
import Styled from './Share.styled';

interface IProps {
  isInline?: boolean;
}

const Share: FC<IProps> = ({ isInline = false }) => {
  const [vkCount, updVkCount] = useState<number>(0);
  const [fbCount, updFbCount] = useState<number>(0);
  const [okCount, updOkCount] = useState<number>(0);

  const shareVk = () => {
    window.open(`http://vk.com/share.php?url=${window.location.href}`, '', 'width=626,height=436');
  };

  const shareOk = () => {
    window.open(`https://connect.ok.ru/offer?url=${window.location.href}`, '', 'width=626,height=436');
  };

  const shareFb = () => {
    // @ts-ignore
    window.FB.ui({ method: 'share', href: window.location.href, }); // eslint-disable-line
  };

  useEffect(() => {
    // @ts-ignore
    window.VK = {}; // eslint-disable-line
    // @ts-ignore
    window.VK.Share = {}; // eslint-disable-line
    // @ts-ignore
    window.VK.Share.count = (index: number, count: number) => { // eslint-disable-line
      updVkCount(count);
    };

    const scriptVk = document.createElement('script');

    scriptVk.src = `https://vk.com/share.php?act=count&index=1&url=${window.location.href}`;
    scriptVk.async = true;

    document.body.appendChild(scriptVk);

    // @ts-ignore
    window.ODKL = {};
    // @ts-ignore
    window.ODKL.updateCount = (uid: number, count: number) => {
      updOkCount(count);
    };

    const scriptOdnoklassniki = document.createElement('script');

    scriptOdnoklassniki.src = `https://connect.ok.ru/dk?st.cmd=extLike&uid=1&ref=${window.location.href}&callback=?`;
    scriptOdnoklassniki.async = true;

    document.body.appendChild(scriptOdnoklassniki);

    // подсчет количества репостов fb
    axios.get(`https://graph.facebook.com/${window.location.href}`).then((data: any) => {
      if (data.shares !== undefined) {
        updFbCount(data.shares);
      }
    });

    return () => {
      document.body.removeChild(scriptVk);
      document.body.removeChild(scriptOdnoklassniki);
    };
  }, []);

  return (
    <>
      <Styled.List isInline={isInline}>
        {isInline && <Styled.Item><Styled.ShareTitle>Поделиться:</Styled.ShareTitle></Styled.Item>}
        <Styled.Item>
          <Styled.Button onClick={shareVk}>
            <VkIcon size={23} />
            {vkCount > 0 && <Styled.Info>{vkCount}</Styled.Info>}
          </Styled.Button>
        </Styled.Item>
        <Styled.Item>
          <Styled.Button onClick={shareFb}>
            <FbIcon />
            {fbCount > 0 && <Styled.Info>{fbCount}</Styled.Info>}
          </Styled.Button>
        </Styled.Item>
        <Styled.Item>
          <Styled.Button onClick={shareOk}>
            <OkIcon />
            {okCount > 0 && <Styled.Info>{okCount}</Styled.Info>}
          </Styled.Button>
        </Styled.Item>
      </Styled.List>
    </>
  );
};

export default Share;
