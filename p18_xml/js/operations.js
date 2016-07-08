log_header("operations.js");

(function () {
    var root, child, parser, children, serializer;

    if (document.implementation.hasFeature("XML", "2.0")) {

        root = document.implementation.createDocument("", "root", null);
        child = root.createElement("child");
        root.documentElement.appendChild(child);
        assert(root.documentElement.tagName === "root", 
            "Tag name is different");
    }

    parser = new DOMParser();
    root = parser.parseFromString("<root><child/></root>", "text/xml");
    assert(root.documentElement.tagName === "root", 
        "Tag name is different");
    assert(root.documentElement.firstChild.tagName === "child", 
        "Tag name is different");

    child = root.createElement("child");
    root.documentElement.appendChild(child);

    children = root.documentElement.getElementsByTagName("child");
    assert(children.length === 2, "Children length is wrong");

    serializer = new XMLSerializer();
    assert(serializer.serializeToString(root) ===  "<root><child/><child/></root>",
        "Serialization is wrong");
})();