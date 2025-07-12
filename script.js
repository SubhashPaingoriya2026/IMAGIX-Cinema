// let player;

// function onYouTubeIframeAPIReady() {
//   player = new YT.Player('youtube-video', {
//     events: {
//       onReady: (event) => {
//         const box = document.querySelector('.FRONT-PAGE'); //  use class instead of wrong ID
//         const wrapper = document.getElementById('player-wrapper');

//         box.addEventListener('mouseenter', () => {
//           wrapper.style.opacity = 1;
//           player.mute();         //  required for autoplay in most browsers
//           player.playVideo();
//         });

//         box.addEventListener('mouseleave', () => {
//           wrapper.style.opacity = 0;
//           player.pauseVideo();
//         });
//       }
//     }
//   });
// }
