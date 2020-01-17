import { useEffect } from 'react';

function useHandleObservers(container: HTMLDivElement | null, content: any): void {
  useEffect(() => {
    if (content !== null && container !== null) {
      const elements = container.querySelectorAll('img');

      const observer: IntersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (!el.getAttribute('data-src')) {
            observer.unobserve(el);
          }
          if (entry.isIntersecting && el.getAttribute('data-src')) {
            const src = el.getAttribute('data-src');
            if (src) {
              el.setAttribute('src', src);
            }
            const srcset = el.getAttribute('data-srcset');
            if (srcset) {
              el.setAttribute('srcset', srcset);
            }
            el.removeAttribute('data-src');
            el.removeAttribute('data-srcset');
          }
        });
      }, {
        rootMargin: '0px',
        threshold: 0.15,
      });

      elements.forEach((el: Element) => {
        observer.observe(el);
      });
    }
  }, [content]);
}

export default useHandleObservers;
