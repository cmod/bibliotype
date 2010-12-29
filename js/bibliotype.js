/*  ---------------------------------------------------

    Bibliotype Javascript handlers

    --------------------------------------------------- */


    $(document).ready(function() {

      // --------------------------------------
      // Setup hyphenator
      //      
      Hyphenator.config({
              displaytogglebox : true,
              classname: 'body_text',
              minwordlength : 4,
              togglebox : function (hyphenate) {
                        var myelem = document.getElementById('hyphenToggle');
                        if (hyphenate) {
                          myelem.style.backgroundColor = '#000000';
                          myelem.onclick = Hyphenator.toggleHyphenation;
                        } else {
                          myelem.style.backgroundColor = '#ffffff';
                          myelem.onclick = Hyphenator.toggleHyphenation;
                        }
                }
      });
      //Hyphenator.run();
      
      // --------------------------------------
      // Swipe Right to reload the page 
      // (great for quick debugging)
      //
      $('body').addSwipeEvents().
        bind('swiperight', function(evt, touch) {
          window.location.reload();
      });


      // --------------------------------------
      // Doubletap to show / hide menu
      //
      $('body').addSwipeEvents().
        bind('doubletap', function(evt, touch) {
          $('menu').slideToggle('fast', function() {
            // Animation complete.
          });
      });


      // --------------------------------------
      // Doubleclick to show menu on desktop
      //
      $(document).bind('dblclick', function(){
        $('menu').slideToggle('fast', function() {
            // Animation complete.
          });
      });


      // -------------------------------------
      // Size toggles
      //
      $('.size1').click(function() {
        $('#content_container').removeClass();
        $('#content_container').addClass('bed');
      });

      $('.size3').click(function() {
        $('#content_container').removeClass();
        $('#content_container').addClass('knee');
      });

      $('.size5').click(function() {
        $('#content_container').removeClass();
        $('#content_container').addClass('breakfast');
      });
      
      
      // -------------------------------------
      // Contrast Toggles
      //
      $('.highc').click(function() {
        $('body').removeClass('low');
        $('body').removeClass('high');
        $('body').addClass('high');
      });

      $('.lowc').click(function() {
        $('body').removeClass('low');
        $('body').removeClass('high');
        $('body').addClass('low');
      });


      // -------------------------------------
      // Justification Toggles
      //
      $('.just').click(function() {
        $('body').removeClass('ragged');
        $('body').removeClass('justified');
        $('body').addClass('justified');
      });

      $('.rag').click(function() {
        $('body').removeClass('ragged');
        $('body').removeClass('justified');
        $('body').addClass('ragged');
      });


      // -------------------------------------
      // Serif toggle
      //
      $('.hel').click(function() {
        $('body').removeClass('helvetica');
        $('body').removeClass('georgia');
        $('body').addClass('helvetica');
      });

      $('.geo').click(function() {
        $('body').removeClass('helvetica');
        $('body').removeClass('georgia');
        $('body').addClass('georgia');
      });


      $('.bg_on').click(function() {
        $('body').removeClass('bg_grid');
        $('body').addClass('bg_grid');
      });

      $('.bg_off').click(function() {
        $('body').removeClass('bg_grid');
      });



    })
