import React, { useEffect, useState } from 'react';
import axios from 'axios';
import cn from 'classnames';
import FbIcon from '../../icons/FbIcon';
import VkIcon from '../../icons/VkIcon';
import OkIcon from '../../icons/OkIcon';
import css from './Share.module.scss';
import TwitterIcon from '../../icons/TwitterIcon';

const Share = ({ isInline = false }) => {
  const [vkCount, updVkCount] = useState(0);
  const [fbCount, updFbCount] = useState(0);
  const [okCount, updOkCount] = useState(0);

  const shareVk = () => {
    window.open(`http://vk.com/share.php?url=${window.location.href}`, '', 'width=626,height=436');
  };

  const shareOk = () => {
    window.open(`https://connect.ok.ru/offer?url=${window.location.href}`, '', 'width=626,height=436');
  };

  const shareFb = () => {
    FB.ui({
      method: 'share',
      href: window.location.href,
    }, (response) => {
      console.log(response);
    });
  };

  useEffect(() => {
    // подсчет количества репостов vk
    window.VK = {};
    window.VK.Share = {};
    window.VK.Share.count = (index, count) => {
      updVkCount(count);
    };

    const scriptVk = document.createElement('script');

    scriptVk.src = `https://vk.com/share.php?act=count&index=1&url=${window.location.href}`;
    scriptVk.async = true;

    document.body.appendChild(scriptVk);

    // подсчет количества репостов odnoklassniki
    window.ODKL = {};
    ODKL.updateCount = (uid, count) => {
      updOkCount(count);
    };

    const scriptOdnoklassniki = document.createElement('script');

    scriptOdnoklassniki.src = `https://connect.ok.ru/dk?st.cmd=extLike&uid=1&ref=${window.location.href}&callback=?`;
    scriptOdnoklassniki.async = true;

    document.body.appendChild(scriptOdnoklassniki);

    // подсчет количества репостов fb
    axios.get(`https://graph.facebook.com/${window.location.href}`).then(data => {
      if(data.shares !== undefined) {
        updFbCount(data.shares)
      }
    });

    return () => {
      document.body.removeChild(scriptVk);
      document.body.removeChild(scriptOdnoklassniki);
    }
  }, []);

  return (
    <div className={cn(css.list, { [css.inline]: isInline })}>
      <div className={css.item}>
        <button onClick={shareVk} className={css.button}>
          <VkIcon size={23} className={css.icon} />
          {vkCount > 0 && <div className={css.info}>{vkCount}</div>}
        </button>
      </div>
      <div className={css.item}>
        <button onClick={shareFb} className={css.button}>
          <FbIcon className={css.icon} />
          {fbCount > 0 &&<div className={css.info}>{fbCount}</div>}
        </button>
      </div>
      <div className={css.item}>
        <button onClick={() => {}} className={css.button}>
          <TwitterIcon className={css.icon} />
        </button>
      </div>
      <div className={css.item}>
        <button onClick={shareOk} className={css.button}>
          <OkIcon className={css.icon} />
          {okCount > 0 &&<div className={css.info}>{okCount}</div>}
        </button>
      </div>
    </div>
  );
};

export default Share;
