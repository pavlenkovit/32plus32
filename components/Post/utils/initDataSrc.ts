export default (content: string): string => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = content;
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
    el.setAttribute('src', '/public/img/dummy.png');
    el.removeAttribute('srcset');
  });
  return wrapper.outerHTML;
};
