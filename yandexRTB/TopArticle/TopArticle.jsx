import React from 'react';

const TopArticle = () => {
  return null;
  return (
    <>
      {/* Yandex.RTB R-A-332263-2 */}
      <div id="yandex_rtb_R-A-332263-2" />
      <script type="text/javascript" dangerouslySetInnerHTML={{
        __html: `
         (function(w, d, n, s, t) {
              w[n] = w[n] || [];
              w[n].push(function() {
                  Ya.Context.AdvManager.render({
                      blockId: "R-A-332263-2",
                      renderTo: "yandex_rtb_R-A-332263-2",
                      async: true
                  });
              });
              t = d.getElementsByTagName("script")[0];
              s = d.createElement("script");
              s.type = "text/javascript";
              s.src = "//an.yandex.ru/system/context.js";
              s.async = true;
              t.parentNode.insertBefore(s, t);
          })(this, this.document, "yandexContextAsyncCallbacks");
        `}}
      />
    </>
  );
};

export default TopArticle;
