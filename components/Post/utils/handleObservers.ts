export default (elements: any) => {
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
};
