$(document).ready(function(){
  $("a").click(function(){
    // calls out the image url and logs it
    var imgURL = $(".lightbox").data("image")
    console.log(imgURL)
    // place the image on the screen with the background taking up the entire screen
    $("body").append("<div id='lightboxBG'><div>").append("<img src="+imgURL+">")

    // when opacity background is clicked, remove background and image
  $("#lightboxBG").click(function(){
    $("img").remove()
    $("#lightboxBG").remove()
    })
  })
})