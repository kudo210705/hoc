$(function() {
  var button_onClick = function() {
    console.log("button_onClick");
    createjs.Sound.play("sound01");
  };
  
  var init = function() {
    createjs.Sound.addEventListener("fileload", function(e) {
      console.log(e);
      console.log(e.id);
    });
    
    // オーディオファイルを登録
    createjs.Sound.registerSound("sound.mp3", "sound01");
    
    // イベント登録
    $("#btn").on("click", button_onClick);
  }();
});
