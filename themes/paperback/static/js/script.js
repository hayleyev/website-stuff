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
    let filter_value = "." + url.hash.substring(1);
    projects.isotope({ filter: filter_value });

    // filter on change
    $(window).bind('hashchange', function() {
      let url = window.location;
      let filter_value = url.hash.substring(1);
      projects.isotope({ filter: "." + filter_value });
      $(".menu-item")
        .removeClass("active")
      $('a[href="#' + filter_value + '"]')
        .addClass("active");
    });
  });
});
