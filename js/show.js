//Create light box
//add overlay
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

$overlay.append($image);
//text image caption
$overlay.append($caption );

$("body").append($overlay);


$("#gallery a").click(function(event){
    event.preventDefault();
   var imageHolder = $(this).attr("href");
   //Update the link for overlay
    $image.attr("src", imageHolder );

   //Overlay
    $overlay.show();
    //Show image text caption
    var captionText = $(this).children("img").attr("alt");
    $caption.text(captionText);


});

$overlay.click(function(){
 $overlay.hide();
});