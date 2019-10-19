import React from 'react';
import css from './Social.module.scss';
import VkIcon from '../../../../../../icons/VkIcon';
import FbIcon from '../../../../../../icons/FbIcon';
import OkIcon from '../../../../../../icons/OkIcon';
import InstaIcon from '../../../../../../icons/InstaIcon';

const Social = () => {
  return (
    <div className={css.container}>
      <a className={css.link} href="https://vk.com/32plus32" target="_blank">
        <VkIcon className={css.icon} color="#9B9B9B" size={28} />
      </a>
      <a className={css.link} href="https://www.instagram.com/32plus32/" target="_blank">
        <InstaIcon className={css.icon} color="#9B9B9B" size={20} />
      </a>
      <a className={css.link} href="https://www.facebook.com/32plus32/" target="_blank">
        <FbIcon className={css.icon} color="#9B9B9B" size={20} />
      </a>
      <a className={css.link} href="https://ok.ru/ok32plus32" target="_blank">
        <OkIcon className={css.icon} color="#9B9B9B" size={15} />
      </a>
    </div>
  );
};

export default Social;
