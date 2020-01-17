import { useEffect, useState } from 'react';

// Использовать, когда изображение в видимой части экрана уже при открытии страницы

interface IImgParams {
  src: string;
  'data-src'?: string;
}

function useImgParams(src: string, dummy: string = '/img/dummy.png'): IImgParams {
  const initParams = {
    src: dummy,
    'data-src': src,
  };

  const [params, setParams] = useState<IImgParams>(initParams);

  useEffect(() => {
    setParams({ src });
  }, []);

  return params;
}

export default useImgParams;
