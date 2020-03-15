jQuery(function($) {
  $(document).ready(function() {

    // ISOTOPE GRID FOR PROJECTS

    var projects = $(".projects");

    projects.isotope({
      // options
      itemSelector: ".project",
      layoutMode: "fitRows",
      fitRows: {
        gutter: 0
      },
      transitionDuration: "0"
    });

    // when images are loaded
    $(".project").each(function() {
      let project = $(this);
      project
        .find(".picture")
        .imagesLoaded({ background: true }, function(instance, image) {
          project.find(".picture-img").removeClass("not-loaded");
        });
    });


    let filterProjects = (value, filter_value) => {
      if(value && filter_value) {
        // change body class
        $('body').removeClass('writing').removeClass('editing').removeClass('interviews');
        $('body').addClass(value);
        // filter projects
        projects.isotope({ filter: filter_value });
        projects.isotope('layout');
        // change menu item highlight
        $(".menu-item")
          .removeClass("active")
        $('a[href="/#' + value + '"]')
          .addClass("active");
      }
    }

    // filter on load
    let url = window.location;
    let value = url.hash.substring(1);
    let filter_value = "." + url.hash.substring(1);
    if(url.hash.length > 1 && url.hash.includes("#")) {
      filterProjects(value, filter_value)
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
      let filter_value = "." + url.hash.substring(1);
      if(url.hash.length > 1 && url.hash.includes("#")) {
        filterProjects(value, filter_value)
      }
    });

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
