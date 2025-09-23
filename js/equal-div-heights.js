/*

This script make sure all divs with a specific class are the same height, and large enough to fit the tallest item

*/

function equalHeight(group) {
    group.height('auto');
	tallest = 0;
    group.each(function() {
        thisHeight = $(this).height();
        if(thisHeight > tallest) {
            tallest = thisHeight;
        }
    });
    group.height(tallest);
}
 
$(document).ready(function(){
    equalHeight($(".testimonial-equal-heights"));
});

$(window).resize(function(){
	equalHeight($(".testimonial-equal-heights"));
});


//add more if needed