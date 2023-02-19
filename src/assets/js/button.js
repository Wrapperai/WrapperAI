
filterSelection('all')
function filterSelection(filter) {
    var elements = document.getElementsByClassName("filterDiv");
    if (filter === "all") {
        console.log("all called")
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
