import React from 'react';
import css from './Adsense.module.scss';

const Adsense = () => {
  return null;
  return (
    <>
      <div className={css.widget}>
        {/* Yandex.RTB R-A-332263-1 */}
        <div id="yandex_rtb_R-A-332263-1" />
        <script type="text/javascript" dangerouslySetInnerHTML={{
          __html: `
            (function(w, d, n, s, t) {
                w[n] = w[n] || [];
                w[n].push(function() {
                    Ya.Context.AdvManager.render({
                        blockId: "R-A-332263-1",
                        renderTo: "yandex_rtb_R-A-332263-1",
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
      </div>
      <div className={css.widget}>
        {/* Yandex.RTB R-A-332263-4 */}
        <div id="yandex_rtb_R-A-332263-4" />
        <script type="text/javascript" dangerouslySetInnerHTML={{
          __html: `
            (function(w, d, n, s, t) {
                w[n] = w[n] || [];
                w[n].push(function() {
                    Ya.Context.AdvManager.render({
                        blockId: "R-A-332263-4",
                        renderTo: "yandex_rtb_R-A-332263-4",
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
      </div>
      <div className={css.widget}>
        {/* Yandex.RTB R-A-332263-5 */}
        <div id="yandex_rtb_R-A-332263-5" />
        <script type="text/javascript" dangerouslySetInnerHTML={{
          __html: `
            (function(w, d, n, s, t) {
                w[n] = w[n] || [];
                w[n].push(function() {
                    Ya.Context.AdvManager.render({
                        blockId: "R-A-332263-5",
                        renderTo: "yandex_rtb_R-A-332263-5",
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
      </div>
    </>
  );
};

export default Adsense;
