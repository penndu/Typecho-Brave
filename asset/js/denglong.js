(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
        factory();
}((function () {
    'use strict';

    function styleInject(css, ref) {
        if (ref === void 0) ref = {};
        var insertAt = ref.insertAt;

        if (!css || typeof document === 'undefined') {
            return;
        }

        var head = document.head || document.getElementsByTagName('head')[0];
        var style = document.createElement('style');
        style.type = 'text/css';

        if (insertAt === 'top') {
            if (head.firstChild) {
                head.insertBefore(style, head.firstChild);
            } else {
                head.appendChild(style);
            }
        } else {
            head.appendChild(style);
        }

        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
    }

    var css_248z = "@charset \"UTF-8\";.lantern__warpper{position:fixed;top:12px;left:40px;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:999}.lantern__warpper.lantern__secondary{left:calc(100% - 130px)}.lantern__warpper.lantern__secondary .lantern__box{-webkit-animation-duration:3s;animation-duration:3s}.lantern__box{position:relative;display:inline-block;width:90px;height:70px;background:rgba(216,0,15,.8);border-radius:50% 50%;animation:lantern-swing 3s ease-in-out infinite alternate-reverse;-webkit-transform-origin:50% -70px;-ms-transform-origin:50% -70px;transform-origin:50% -70px;-webkit-box-shadow:-5px 5px 50px 4px #fa6c00;box-shadow:-5px 5px 50px 4px #fa6c00}.lantern__box:after,.lantern__box:before{content:\"\";position:absolute;height:8px;width:45px;left:50%;border:1px solid #dc8f03;background:-webkit-gradient(linear,left top,right top,from(#dc8f03),color-stop(orange),color-stop(#dc8f03),color-stop(orange),to(#dc8f03));background:-o-linear-gradient(left,#dc8f03,orange,#dc8f03,orange,#dc8f03);background:linear-gradient(90deg,#dc8f03,orange,#dc8f03,orange,#dc8f03)}.lantern__box:before{top:0;border-radius:5px 5px 0 0;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.lantern__box:after{bottom:0;border-radius:0 0 5px 5px;-webkit-transform:translate(-50%,50%);-ms-transform:translate(-50%,50%);transform:translate(-50%,50%)}.lantern__line{position:absolute;width:2px;height:12px;top:0;left:50%;-webkit-transform:translate(-50%,-100%);-ms-transform:translate(-50%,-100%);transform:translate(-50%,-100%);background:#dc8f03}.lantern__circle{width:80%;-webkit-box-sizing:border-box;box-sizing:border-box}.lantern__circle,.lantern__circle .lantern__ellipse{height:100%;margin:0 auto;border-radius:50%;border:2px solid #dc8f03}.lantern__circle .lantern__ellipse{width:50%}.lantern__circle .lantern__text{font-family:华文行楷,Microsoft YaHei,sans-serif;font-size:24.3px;color:#dc8f03;font-weight:700;line-height:66px;text-align:center}.lantern__tail{position:relative;width:4px;height:12px;margin:0 auto;animation:lantern-swing 4s ease-in-out infinite alternate-reverse;background:orange;border-radius:0 0 5px 5px}.lantern__tail .lantern__junction{position:absolute;top:0;left:50%;width:8px;height:8px;-webkit-transform:translate(-50%,8.4px);-ms-transform:translate(-50%,8.4px);transform:translate(-50%,8.4px);background:#e69603;border-radius:50%}.lantern__tail .lantern__rect{position:absolute;top:0;left:50%;-webkit-transform:translate(-50%,10.8px);-ms-transform:translate(-50%,10.8px);transform:translate(-50%,10.8px);width:8px;height:24px;background:orange;border-radius:5px 5px 0 5px}@-webkit-keyframes lantern-swing{0%{-webkit-transform:rotate(-8deg);transform:rotate(-8deg)}to{-webkit-transform:rotate(8deg);transform:rotate(8deg)}}@keyframes lantern-swing{0%{-webkit-transform:rotate(-8deg);transform:rotate(-8deg)}to{-webkit-transform:rotate(8deg);transform:rotate(8deg)}}@media (max-width:460px){.lantern__warpper{top:8px;left:30px}.lantern__warpper.lantern__secondary{left:calc(100% - 80px)}.lantern__box{width:50px;height:40px;-webkit-transform-origin:50% -40px;-ms-transform-origin:50% -40px;transform-origin:50% -40px;-webkit-box-shadow:-5px 5px 50px -1px #fa6c00;box-shadow:-5px 5px 50px -1px #fa6c00}.lantern__box:after,.lantern__box:before{height:4px;width:25px}.lantern__line{width:2px;height:8px}.lantern__circle .lantern__text{font-size:13.5px;line-height:38px}.lantern__tail{width:4px;height:8px}.lantern__tail .lantern__junction{width:8px;height:8px;-webkit-transform:translate(-50%,5.6px);-ms-transform:translate(-50%,5.6px);transform:translate(-50%,5.6px)}.lantern__tail .lantern__rect{-webkit-transform:translate(-50%,7.2px);-ms-transform:translate(-50%,7.2px);transform:translate(-50%,7.2px);width:8px;height:16px}}";
    styleInject(css_248z);

    var content = '<div class="lantern__warpper"><div class="lantern__box"><div class="lantern__line"></div><div class="lantern__circle"><div class="lantern__ellipse"><div class="lantern__text">春</div></div></div><div class="lantern__tail"><div class="lantern__rect"></div><div class="lantern__junction"></div></div></div></div><div class="lantern__warpper lantern__secondary"><div class="lantern__box"><div class="lantern__line"></div><div class="lantern__circle"><div class="lantern__ellipse"><div class="lantern__text">节</div></div></div><div class="lantern__tail"><div class="lantern__rect"></div><div class="lantern__junction"></div></div></div></div>';

    function createElement() {
        var div = document.createElement('div');
        div.className = 'j-china-lantern';
        div.innerHTML = content;
        document.body.appendChild(div);
    }

    createElement();

})));