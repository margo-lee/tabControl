$(function () {
  let tabBtn = $(".nav-item");
  $(".nav-item button").focus(navTab);
  //tab切換內容的函式
  function navTab() {
    $(this).addClass("active");
    $(this).parent().siblings().children().removeClass("active");
    let activeTabBtn = tabBtn.find(".active");
    activeTabBtn.attr("data-btn");
    let tabContent = $(".tab-content div");
    tabContent.each(function (index, item) {
      if (activeTabBtn.attr("data-btn") === $(this).attr("data-tabContent")) {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
      }
    });
    //當點其他按鈕時觸發
    tabFocusout();
  }
  //當點其他按鈕時觸發
  function tabFocusout() {
    //當點按鈕是  tab時
    $(".nav-link.active").keydown(function (e) {
      if (e.keyCode === 9) {
        focusALink();
      }
    });
  }

  function focusALink() {
    //點擊的按鈕離開 找到 內容區的第一個Ａ連結
    $(".nav-link.active").focusout(function () {
      $(".tab-pane.show.fade.active").find("a").first().focus();

      //當點按鈕是  tab時 是最後一個 a 連結 離開時觸發 nextFocusBtn
      $(".tab-pane.show.fade.active")
        .find("a")
        .last()
        .focusout(checkNextFocusBtn);
    });
  }
  function checkNextFocusBtn() {
    // 按鈕列長度
    let len = $(".nav-item button").length;
    // 點擊的按鈕編號
    let num = JSON.parse(tabBtn.find(".active").attr("data-btn"));
    // 如果按鈕列長度較長 在按鈕編號加1
    if (len > num) {
      num = num + 1;
    } else {
      return;
    }

    nextFocusBtn(num);
  }
  function nextFocusBtn(nextNum) {
    let th;
    if (nextNum !== null) {
      nextNum = nextNum;
    }

    $(".nav-item button").each(function () {
      //如果確認的按鈕值為傳入的按鈕值 則啟動
      let num = JSON.parse($(this).attr("data-btn"));
      if (num === nextNum) {
        th = $(this);
      }
    });
    th.focus();
  }
});
