var nedry = {
  run: function(){
    //display
    document.body.innerHTML +=
    '<div style="z-index:999999999;position:fixed;left:0;top:0;width:100%;height:100%;background-color:rgb(250, 250, 250)">'+
      '<img style="position:relative;margin-left: 40%;margin-top: 200px;" src="nedry.gif" alt="" />'+
    '</div>'
    //play sound
    var magicword = new Audio('magicword.mp3');
    magicword.loop = true;
    magicword.play();
  }
}
