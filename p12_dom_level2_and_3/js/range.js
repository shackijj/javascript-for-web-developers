log_header("Ranges");

var supportRange = document.implementation.hasFeature("Range", "2.0");
var alseSupportRange = (typeof document.createRange == "function");

if (supportRange || alsoSupportRange) {
	var range1 = document.createRange(),
	    range2 = document.createRange(),
	    p1 = document.getElementById("p1");

    range1.selectNode(p1);
    range2.selectNodeContents(p1);

    log(range1.startContainer);
    log(range1.endContainer);
    log(range1.commonAncestorContainer);
    log(range1.startOffset);
    log(range1.endOffset);

    log(range2.startContainer === p1);
    log(range2.endContainer === p1);
    log(range2.commonAncestorContainer === p1);

    // another complex way

    var range3 = document.createRange(),
    	range4 = document.createRange(),
    	p1Index = -1,
    	i, len;

    for(i = 0, len = p1.parentNode.childNodes.length; i < len; i++) {
    	if (p1.parentNode.childNodes[i] == p1) {
    		p1Index = i;
    		break;
    	}
    }

    range1.setStart(p1.parentNode, p1Index);
    range1.setEnd(p1.parentNode, p1Index + 1);
    range2.setStart(p1, 0);
    range2.setEnd(p1, p1.childNodes.length);

    var helloNode = p1.firstChild.firstChild,
    	worldNode = p1.lastChild,
    	helloWorldRange = document.createRange();
    // llo
    helloWorldRange.setStart(helloNode, 2);
    helloWorldRange.setEnd(worldNode, 3);

    var fragment1 = helloWorldRange.cloneContents(),
        fragment2 = helloWorldRange.extractContents();

    p1.parentNode.appendChild(fragment1);
    p1.parentNode.appendChild(fragment2);

    var p2 = document.getElementById("p2"),
        yeNode = p2.lastChild,
    	range5 = document.createRange(),
    	range6 = document.createRange();

    range5.setStart(yeNode, 0);
    range5.setEnd(yeNode, yeNode.length);

    var span = document.createElement("span");
    span.style.color = "red";
    span.appendChild(document.createTextNode("Yaya"));
    range5.insertNode(span);

    range6.setStart(p2.firstChild, 4);
    range6.setEnd(p2.firstChild, 6);

    var yellowSpan = document.createElement("span");
    yellowSpan.style.backgroundColor = "yellow";

    range6.surroundContents(yellowSpan);

    // Clean up
    range1.detach();
    range2.detach();
    range3.detach();
    range4.detach();
    range5.detach();
    range6.detach();
    range1 = range2 = range3 = range4 = range5 = range6 = null;

    // Read about IE diaposons in last part of 12 paragraph
}