import React from 'react';
import cn from 'classnames';
import FbIcon from '../../icons/FbIcon';
import VkIcon from '../../icons/VkIcon';
import OkIcon from '../../icons/OkIcon';
import css from './Share.module.scss';
import TwitterIcon from '../../icons/TwitterIcon';

const Share = ({ isInline = false }) => {
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
    });
  };

  return (
    <div className={cn(css.list, { [css.inline]: isInline })}>
      <div className={css.item}>
        <button onClick={shareVk} className={css.button}>
          <VkIcon size={23} className={css.icon} />
          <div className={css.info}>11</div>
        </button>
      </div>
      <div className={css.item}>
        <button onClick={shareFb} className={css.button}>
          <FbIcon className={css.icon} />
          <div className={css.info}>5</div>
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
        </button>
      </div>
    </div>
  );
};

export default Share;
