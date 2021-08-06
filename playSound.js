$(function() {
  var button_onClick = function() {
    console.log("button_onClick");
    createjs.Sound.play("sound01");
  };
  
  var init = function() {
    // var client = mqtt.connect("wss://mqtt.uko.jp:8080", 
    //                           { username: "icecream", password: "5oGbReD7" });
    // var client = mqtt.connect("mqtt://mqtt.uko.jp:1883", {
    //   username: "icecream", 
    //   password: "5oGbReD7" });
    var client = mqtt.connect("ws://test.mosquitto.org:8080");
    
    client.on("connect", () => {
      console.log("connected");
      client.subscribe("hopeling_c");
    });
    client.on("message", (topic, message) => {
      console.log(topic + " : " + message);
    });
    
    
    
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
