EventUtil.addHandler(window, "load", function() {
    frames["richedit"].document.designMode = "on";

    // Doesn't wor
    frames["richedit"].document.body.execCommand("insertparagraph", false,
    null); 
});