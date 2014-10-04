(function() {

  // 需要首页的小箭头提示么？
  var isNeedTip = true;

  // 定制你的webapp
  var mySlip = {
    onStart: function(event) {

    },

    onMove: function(event) {
      console.log(this.orient);
    },

    onEnd: function(event) {
      console.log(this.orient);
    }
  };



  // 这里一般不需要改动
  (function() {
    var noop = function() {};

    var init = false;
    var elWrap = document.getElementById('slip-wrap');
    var elArrow = document.getElementById('slip-arrow');

    var onStart = mySlip.onStart || noop;
    var onMove = mySlip.onMove || noop;
    var onEnd = null;

    if (!isNeedTip) {
      elArrow.parentNode.removeChild(elArrow);
      onEnd = mySlip.onEnd || noop;
    } else {
      onEnd = function(event) {
        var orient = this.orient.join('');

        if (orient.indexOf('up') > -1) {
          if (!init) {
            elArrow.style.opacity = '0';
            init = true;
          }
        }

        mySlip.onEnd.apply(this, [event]);
      }
    }

    var slip = Slip(elWrap, 'y')
      .webapp()
      .start(onStart)
      .move(onMove)
      .end(onEnd);
  })();
})();
