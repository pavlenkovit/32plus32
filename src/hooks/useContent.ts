import { useEffect, useState } from 'react';

// Использовать для замены атрибутов src и srcset на data-src и data-srcset соответственно

function useContent(initContent: string): null | string {
  const [content, updContent] = useState(null);

  useEffect(() => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = initContent;
    const elements = wrapper.querySelectorAll('img');
    elements.forEach((el) => {
      const src = el.getAttribute('src');
      if (src) {
        el.setAttribute('data-src', src);
      }
      const srcset = el.getAttribute('srcset');
      if (srcset) {
        el.setAttribute('data-srcset', srcset);
      }
      el.setAttribute('src', '/img/dummy.png');
      el.removeAttribute('srcset');
    });
    // @ts-ignore
    updContent(wrapper.outerHTML);
  }, []);

  return content;
}

export default useContent;
