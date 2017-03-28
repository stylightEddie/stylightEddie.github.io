(function($, undefined) {
    var isMobile = false;
      $(window).resize(showOrHideMenu);

      $(document).on("mouseenter", ".dropdown-link", function() {
        handleHover.apply(this, [true]);
      });

      $(document).on("mouseleave", ".dropdown-link", function() {
        handleHover.apply(this, [false]);
      });

      function handleHover(isHovering) {
        if (isMobile) {
          return;
        }

        var $dropdownLink = $(this);
        var $dropdownMenu = $dropdownLink.children(".dropdown-menu");
        
        if (isHovering) {
          $dropdownLink.css({
            border: "1px solid #ccc",
            "border-bottom": "0"
          });
          $dropdownMenu.css({
              position: "absolute",
              top: ($dropdownLink.position().top + $dropdownLink.outerHeight(true)).toString() + "px",
              left: $dropdownLink.position().left.toString() + "px",
              width: $dropdownLink.outerWidth() + "px"
            });
            $dropdownMenu.fadeIn();
        }
        else {
          $dropdownLink.css({ border: "0" });
          $dropdownMenu.fadeOut();
        }
      }

      $(document).on("click", ".dropdown-link", function() {
        if (!isMobile) {
          return;
        }

        var $dropdownLink = $(this);
        var $dropdownMenu = $dropdownLink.children(".dropdown-menu");
        var $dropdownMenus = $(".dropdown-menu");

        if ($dropdownMenus.length) {
          $(".dropdown-link").css({ border: "0" });
          $dropdownMenus.not($dropdownMenu).hide();

          if ($dropdownMenu.is(":hidden")) {
            $dropdownLink.css({
              border: "1px solid #ccc",
              "border-bottom": "0"
            });

            if ($("#navMenuLink").is(":hidden")) {
              $dropdownMenu.show();
            }
            else {
              $(".dropdown-link").css({ border: "0" });
            }

            $dropdownMenu.show();
          }
          else {
            $dropdownMenu.hide();
          }
        }
      });

      $(document).on("click", "#navMenuLink", function() {
        if ($("nav").is(":hidden")) {
          $("nav").show();
          $(".wrap").css({
            "margin-left": "250px"
          });
        }
        else {
          $("nav").hide();
          $(".wrap").css({
            "margin-left": "0"
          });
        }
      });

      function showOrHideMenu() {
        isMobile = !($(window).outerWidth(true) > 720);

        if (!isMobile) {
          $("#navMenuLink").hide();
          $("nav").show();
        }
        else {
          $("#navMenuLink").show();
          $("nav").hide();
          $(".dropdown-menu").hide();
          $(".wrap").css({
            "margin-left": "0"
          });
        }
      }

      showOrHideMenu();
}(jQuery));