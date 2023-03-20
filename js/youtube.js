// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubePlayerAPIReady() {
    // id맞 찾아짐
    new YT.Player('player', {
    
    // 영상 재생할 유튜브 ID
    videoId: 'EJF919p_hb0', //처음재생할 영상

    // 유투브 어떻게 재생할 건지
    playerVars:{
        autoplay:true, //자동재생 유무
        loop:true, //반복재생 유무
        playlist: 'EJF919p_hb0' //반복해서 재생할 유튜브 영상 목록
    },

    events:{
        onReady:function(event){
            event.target.mute() //음소거

        }
    }
  });
}