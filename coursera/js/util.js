function doSearch(text) {
    if (window.find(text)) {
        console.log(window.find(text));
    }
}

function newWindow(loc, title) {
    var win = window.open(loc, title, 
        'width=600, height=950, top=20, left=20, resizable=1, menubar=no', true);
    win.focus();
}