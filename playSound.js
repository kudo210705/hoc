(function(window) {
  init();
  function init() {
    // オーディオファイルのロードが終了したならloadHandlerが呼ばれる
    createjs.Sound.addEventListener("fileload", loadHandler);
    
    // オーディオファイルを登録
    createjs.Sound.registerSound("sound.mp3", "sound01");
    
    var buttons = window.document.getElementsByName("sound01");
    for (int i = 0; i < buttons.length; i++) {
      button[i].addEventListener("click", button_onClick);
    }
  }
  
  
  function button_onClick() {
    createjs.Sound.play("sound01");
  };
  
  /*
  function loadHandler(event) {
    // 音を出す
    createjs.Sound.play("sound01");
  }*/
}(window));
