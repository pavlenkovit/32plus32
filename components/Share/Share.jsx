import React from 'react';
import FbIcon from '../../icons/FbIcon';
import VkIcon from '../../icons/VkIcon';
import OkIcon from '../../icons/OkIcon';
import css from './Share.module.scss';

const Share = () => {
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
    }, (response) => {});
  };

  return (
    <div className={css.container}>
      <div
        onClick={shareFb}
        className={css.item}
      >
        <FbIcon className={css.icon} />
      </div>
      <div
        onClick={shareVk}
        className={css.item}
      >
        <VkIcon className={css.icon} />
      </div>
      <div
        onClick={shareOk}
        className={css.item}
      >
        <OkIcon className={css.icon} />
      </div>
    </div>
  );
};

export default Share;
