(function(window) {
  init();
  function init() {
    // オーディオファイルのロードが終了したならloadHandlerが呼ばれる
    createjs.Sound.addEventListener("fileload", loadHandler);
    
    // オーディオファイルを登録
    createjs.Sound.registerSound("asserts/sound.mp3", "sound01");
  }
  
  function loadHandler(event) {
    // 音を出す
    createjs.Sound.play("sound01");
  }
}(window));
