
filterSelection('all')
function filterSelection(filter) {
    var elements = document.getElementsByClassName("filterDiv");
    if (filter === "all") {
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.display = "block";
        }

    }
    else {
        for (var i = 0; i < elements.length; i++) {
            var classList = elements[i].className.split(" ");
            if (classList.indexOf(filter) > -1) {
                elements[i].style.display = "block";
            } else {
                elements[i].style.display = "none";
            }
        }
    }
}

var $temp = $("<input>");
var $url = $(location).attr('href');

$('.clipboard').on('click', function (e) {
    if (e.target.id === "share-button") {

        $("body").append($temp);
        $temp.val($url).select();
        document.execCommand("copy");
        $temp.remove();
        $(".clipboard").text("URL copied!");
        e.preventDefault()
        e.stopPropagation()
    }
})