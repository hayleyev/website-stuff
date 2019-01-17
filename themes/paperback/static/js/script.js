jQuery(function($) {
  $(document).ready(function() {

    // ISOTOPE GRID FOR OLD PROJECTS

    var old_projects = $(".old-row");

    old_projects.isotope({
      // options
      itemSelector: ".old-project",
      layoutMode: "fitRows",
      transitionDuration: "0"
    });

    $(".tag").click(function(e) {
      e.preventDefault();
      var filter_value = $(this).data("filter");
      console.log(filter_value);
      old_projects.isotope({ filter: filter_value });
      $(".tag")
        .find("[data-fa-i2svg]")
        .removeClass("fas")
        .addClass("far");
      $(this)
        .find("[data-fa-i2svg]")
        .addClass("fas");
    });
  });
});
