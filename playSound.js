(function(window) {
  init();
  
  function button_onClick() {
    createjs.Sound.play("sound01");
  }
  
  function init() {
    // オーディオファイルのロードが終了したならloadHandlerが呼ばれる
    createjs.Sound.addEventListener("fileload", loadHandler);
    
    // オーディオファイルを登録
    createjs.Sound.registerSound("sound.mp3", "sound01");
    
    var btn = window.document.getElementById("btn);
    btn.addEventListener("click", button_onClick);
  }
  
  /*
  function loadHandler(event) {
    // 音を出す
    createjs.Sound.play("sound01");
  }*/
}(window));
