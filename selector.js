function getSelected() {
    if (window.getSelection) { return window.getSelection(); }
    else if (document.getSelection) { return document.getSelection(); }
    else {
        var selection = document.selection && document.selection.createRange();
        if (selection.text) { return selection.text; }
        return false;
    }
    return false;
}

document.addEventListener("mouseup", (e) => {
    var selection = getSelected();

    // var newSpan = document.createElement('span');
    // newSpan.setAttribute('class', 'popuptext');
    // newSpan.setAttribute('id', 'search_popup');
    // newSpan.innerHTML="Search...";

    // document.getElementsByTagName("body").appendChild(newSpan);
    // selection.appendChild(newSpan);

    // var popup = '<span class="popuptext show" id="search_popup">Search...</span>';
    
    
    if (selection.toString().length > 0) {
        // newSpan.setAttribute('class', 'popuptext show');
        alert(selection + "\n");
        console.log(selection);
    }
});

function phoneNumberPopup() {
    var popup = document.getElementById("search_popup");
    popup.classList.toggle("show");
}