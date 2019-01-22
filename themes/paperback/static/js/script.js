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

    // mobile menu {
    $('.menu-button').click(function() {
      $('.menu-content').toggleClass('visible');
      $('.menu-content').toggleClass('hidden');
    });

    $('.menu-content').find('.close').click(function() {
      $('.menu-content').toggleClass('visible');
      $('.menu-content').toggleClass('hidden');
    });

    $('.menu-content').find('a').click(function() {
      $('.menu-content').toggleClass('visible');
      $('.menu-content').toggleClass('hidden');
    });

  });
});
