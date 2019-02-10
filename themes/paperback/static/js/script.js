jQuery(function($) {
  $(document).ready(function() {

    // ISOTOPE GRID FOR PROJECTS

    var projects = $(".projects");

    projects.isotope({
      // options
      itemSelector: ".project",
      layoutMode: "fitRows",
      transitionDuration: "0"
    });

    // filter on load
    let url = window.location;
    let value = url.hash.substring(1);
    let filter_value = "." + url.hash.substring(1);
    if(url.hash.length > 1 && url.hash.includes("#")) {
      projects.isotope({ filter: filter_value });
      $(".menu-item")
        .removeClass("active")
      $('a[href="/#' + value + '"]')
        .addClass("active");
    } else {
      let path = "/" + url.href.split('/')[3];
      if(path && $('a[href="' + path + '"]').length > 0) {
        $('a[href="' + path + '"]').addClass("active");
      }
    }

    // filter on change
    $(window).bind('hashchange', function() {
      let url = window.location;
      let value = url.hash.substring(1);
      let filter_value = url.hash.substring(1);
      if(url.hash.length > 1 && url.hash.includes("#")) {
        projects.isotope({ filter: "." + filter_value });
        $(".menu-item")
          .removeClass("active")
        $('a[href="/#' + value + '"]')
          .addClass("active");
      }
    });

    // set mobile menu to display block when site has loaded
    // $('.menu-content').css('display', 'block');

    // mobile menu {
    $('.menu-button').click(function() {
      $('.menu-content').addClass('visible');
      $('.menu-content').removeClass('hidden');
    });

    $('.menu-content').find('.close').click(function() {
      $('.menu-content').removeClass('visible');
      $('.menu-content').addClass('hidden');
    });

    $('.menu-content').find('a').click(function() {
      $('.menu-content').removeClass('visible');
      $('.menu-content').addClass('hidden');
    });

  });
});
