import { useEffect, useState } from 'react';

// Использовать, когда изображение в видимой части экрана уже при открытии страницы

interface IImgParams {
  style: {
    backgroundImage: string;
  }
}

function useAsImgStyle(src: string, dummy: string = '/img/dummy.png', array: any[] = []): IImgParams {
  const initParams = {
    style: {
      backgroundImage: `url(${dummy})`,
    },
  };

  const [params, setParams] = useState<IImgParams>(initParams);

  useEffect(() => {
    setParams({
      style: {
        backgroundImage: `url(${src})`,
      },
    });
  }, array);

  return params;
}

export default useAsImgStyle;
