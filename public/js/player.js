$(document).ready(function() {

  var song;
  var tracker = $('.tracker');
  var volume = $('.volume');

  function initAudio(elem) {
      var url=elem.attr('audiourl');
      var title =elem.text();
      var artist=elem.attr('artist');

      $('.player .title1').text(title);
      $('.player .artist').text(artist);

      song=new Audio(url);

      song.addEventListener('timeupdate',function() {
          var curtime= parseInt(song.currentTime, 10);
          tracker.slider('value', curtime);
      });

      $('.playlist li').removeClass('active1');
      elem.addClass('active1');
  }

  function playAudio(){
      song.play();

      tracker.slider("option","max",song.duration);

      $('.play').addClass('hidden');
      $('.pause').addClass('visible');
  }

  function stopAudio(){
      song.pause();

      $('.play').removeClass('hidden');
      $('.pause').removeClass('visible');
  }

  $('.play').on("click",function(e){
      e.preventDefault();

      song.addEventListener('ended', function() {
          var next = $('.playlist li.active').next();
          if (next.length == 0) {
              next = $('.playlist li:first-child');
          }
          initAudio(next);
          song.addEventListener('loadedmetadata', function() {
              playAudio();
            });
      }, false);

      tracker.slider("option","max", song.duration);
      song.play();
      $('.play').addClass('hidden');
      $('.pause').addClass('visible');

  });

  $('.pause').on("click",function(e){
      e.preventDefault();
      stopAudio();
  })

  $('.fwd').on("clock",function(e) {
      e.preventDefault();
      stopAudio();

      var next = $('.playlist li.active').next();
      if (next.length === 0) {
        next = $('.playlist li:first-child');
      }
      initAudio(next);
      song.addEventListener('loadedmetadata', function() {
        playAudio();
      });
  });

    $('.rew').on("click", function(e) {
      e.preventDefault();
      stopAudio();
  
      var prev = $('.playlist li.active').prev();
      if (prev.length === 0) {
        prev = $('.playlist li:last-child');
      }
      initAudio(prev);
  
      song.addEventListener('loadedmetadata', function() {
        playAudio();
      });
  });
  $('.playlistIcon').on("click", function(e) {
      e.preventDefault();
      $('.playlist').toggleClass('show');
    });
  
    $('.playlist li').on("click", function() {
      stopAudio();
      initAudio($(this));
    });

    initAudio($('.playlist li:first-child'));
  
    song.volume = 0.8;
  
    volume.slider({
      orientation: 'vertical',
      range: 'max',
      max: 100,
      min: 1,
      value: 80,
      start: function(event, ui) {},
      slide: function(event, ui) {
        song.volume = ui.value / 100;
      },
      stop: function(event, ui) {},
    });
  
    $('.volumeIcon').on("click", function(e) {
      e.preventDefault();
      $('.volume').toggleClass('show');
    });
  
    tracker.slider({
      range: 'min',
      min: 0,
      max: 10,
      start: function(event, ui) {},
      slide: function(event, ui) {
        song.currentTime = ui.value;
      },
      stop: function(event, ui) {}
    });
});
