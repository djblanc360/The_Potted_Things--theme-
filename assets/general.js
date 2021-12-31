function closeTopHeader() {
  document.getElementById("topBar").style.display = "none"; //"250px"
  //document.getElementById("main").style.padding = "5rem";
}

function difference(a, b) {
  return Math.abs(a - b);
}

$(document).ready(function(){

  // Mobile hide nav on scroll down, show on scroll up
  var lastScrollTop = 0;

  var toggleHeader = function(){
    //console.log("OLD lastScrollTop: " + lastScrollTop);

  var scrollTop = $(window).scrollTop();
    //console.log("scrolltop: " + scrollTop);

      let scrollPadding = difference(parseInt(lastScrollTop),parseInt(scrollTop));
    //console.log("scrollPadding: " + scrollPadding);
    if(scrollPadding > 20) {  
      if (scrollTop > lastScrollTop) { 
          //console.log("downscroll code");
          $("#header #navbar").addClass('toggleHideHeader');
          $("#header #navbar").removeClass('toggleShowHeader');
      } else {
          console.log("upscroll code");
          $("#header #navbar").removeClass('toggleHideHeader');
          $("#header #navbar").addClass('toggleShowHeader');
      }
    }
      lastScrollTop = scrollTop;
    //console.log("NEW lastScrollTop: " + lastScrollTop);
  };



  if ($(window).width() < 767) {  
    toggleHeader();

      $(window).scroll(function() {
        toggleHeader();
        //console.log("window scroll");
      });
  }
  


  // Add minus icon for collapse element which is open by default
  $(".collapse.show").each(function(){
    $(this).prev(".card-header").find(".collapseIcon").addClass("minus");
  });
  
  // Toggle plus minus icon on show hide of collapse element
  $(".collapse").on('show.bs.collapse', function(){
    $(this).prev(".card-header").find(".collapseIcon").addClass("minus");
  }).on('hide.bs.collapse', function(){
    $(this).prev(".card-header").find(".collapseIcon").removeClass("minus");
  });

  // Add minus icon for collapse element which is open by default
  $(".collapse.show").each(function(){
  	$(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
  });
  
  // Toggle plus minus icon on show hide of collapse element
  $(".collapse").on('show.bs.collapse', function(){
  	$(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
  }).on('hide.bs.collapse', function(){
  	$(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
  });

  // Open buy now subscription product mobile dash
  $("#buyNow").on('click touchend', function(){
    console.log("#buyNow on click");
    $("#mobileAddDash").removeClass("hide");
    $("#buyNow").addClass("hide");
  });

  // Close buy now subscription product mobile dash
  $("#closeDash").on('click touchend', function(){
    console.log("#closeDash on click");
    $("#mobileAddDash").addClass("hide");
    $("#buyNow").removeClass("hide");
  });

  // Open mobile menu
  $(".mobileMenuOpenLink").click(function(){
    console.log("mobile menu open");
    $("#mobileMenu").addClass("mobileMenuOpen");
    $(".slideOutCover").addClass("slideOutCoverActive");
    
    
   // Close mobile menu on cover click
    $(".slideOutCover.slideOutCoverActive").on("click",function() {

        console.log("mobile menu click");

        $("#mobileMenu").removeClass("mobileMenuOpen");
        $(".slideOutCover").removeClass("slideOutCoverActive");

    }); 
   
    
  });

  // Close mobile menu
  $(".mobileMenuCloseLink").click(function(){
    
    console.log("mobile menu close");
    
 
    $("#mobileMenu").removeClass("mobileMenuOpen");
    $(".slideOutCover").removeClass("slideOutCoverActive");
    
  });
  

  
  // Open side cart


  // Close side cart

  
  // Open shop all header cat
  $(".shopHeadSelectCat").click(function(){
    $(".shopHeadMenuCat").addClass("shopHeadMenuOpen");
  });

  // Open shop all header tag
  $(".shopHeadSelectTag").click(function(){
    $(".shopHeadMenuTag").addClass("shopHeadMenuOpen");
  });

  // Sticky nav styling
    var stickyNav = function(){
      var scrollTop = $(window).scrollTop();
      if (scrollTop > 100) { 
          $('#header').addClass('sticky');
      } else {
          $('#header').removeClass('sticky'); 
      }
    };

    stickyNav();
    
    $(window).scroll(function() {
      stickyNav();
    });

  // Nav dropdowns
  $('#menuShop, #dropdownShopAll').hover(
     function(){ $('#dropdownShopAll').addClass('displayDropdown') },
     function(){ $('#dropdownShopAll').removeClass('displayDropdown') }
  );
  $('#menuShop, #dropdownShopAll').hover(
     function(){ $('#menuShop a').addClass('hover') },
     function(){ $('#menuShop a').removeClass('hover') }
  );
  $('#menuShop, #dropdownShopAll').hover(
     function(){ $(".slideOutCover").addClass("slideOutCoverActive") },
     function(){ $(".slideOutCover").removeClass("slideOutCoverActive") }
  );
  
  $('#menuComm, #dropdownCommunity').hover(
     function(){ $('#dropdownCommunity').addClass('displayDropdown') },
     function(){ $('#dropdownCommunity').removeClass('displayDropdown') }
  );
  $('#menuComm, #dropdownCommunity').hover(
     function(){ $('#menuComm a').addClass('hover') },
     function(){ $('#menuComm a').removeClass('hover') }
  );
  $('#menuComm, #dropdownCommunity').hover(
     function(){ $(".slideOutCover").addClass("slideOutCoverActive") },
     function(){ $(".slideOutCover").removeClass("slideOutCoverActive") }
  );

  $('#menuJournal, #dropdownJournal').hover(
     function(){ $('#dropdownJournal').addClass('displayDropdown') },
     function(){ $('#dropdownJournal').removeClass('displayDropdown') } 
  );
  $('#menuJournal, #dropdownJournal').hover(
     function(){ $('#menuJournal a').addClass('hover') },
     function(){ $('#menuJournal a').removeClass('hover') }
  );
  $('#menuJournal, #dropdownJournal').hover(
     function(){ $(".slideOutCover").addClass("slideOutCoverActive") },
     function(){ $(".slideOutCover").removeClass("slideOutCoverActive") }
  );

  $('#menuMore, #dropdownMore').hover(
     function(){ $('#dropdownMore').addClass('displayDropdown') },
     function(){ $('#dropdownMore').removeClass('displayDropdown') } 
  );
  $('#menuMore, #dropdownMore').hover(
     function(){ $('#menuMore a').addClass('hover') },
     function(){ $('#menuMore a').removeClass('hover') }
  );
  $('#menuMore, #dropdownMore').hover(
     function(){ $(".slideOutCover").addClass("slideOutCoverActive") },
     function(){ $(".slideOutCover").removeClass("slideOutCoverActive") }
  );

  // $('#menuSearch, #dropdownSearch').hover(
  //    // function(){ $('#dropdownSearch').addClass('displayDropdown') },
  //    function(){ $('#dropdownSearch').removeClass('displayDropdown') }
  // );
  // $('#menuSearch, #dropdownSearch').hover(
  //    // function(){ $(".slideOutCover").addClass("slideOutCoverActive") },
  //    function(){ $(".slideOutCover").removeClass("slideOutCoverActive") }
  // );


    
  
});