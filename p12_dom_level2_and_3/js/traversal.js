var supportTraversal = document.implementation.hasFeature("Traversal", "2.0");
var supportNodeIterator = (typeof document.createNodeIterator == "function");
var supportTreeWalker = (typeof document.createTreeWalker == "function");


if (supportNodeIterator) {
	var whatToShow = NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT;

	// Only P
	var filter = {
		acceptNode: function(node) {
			return node.tagName.toLowerCase() == "p" ?
				NodeFilter.FILTER_ACCEPT :
				NodeFilter.FILTER_SKIP;
		}
	};

	var wrapper = document.getElementById("wrapper");
	var iterator = document.createNodeIterator(wrapper, NodeFilter.SHOW_ELEMENT, filter, false);

	var node = iterator.nextNode();
	while (node !== null) {
		log(node.tagName);
		node = iterator.nextNode();
	}
}

// Always use treeWalker because it has more method .firstChil, .lastChil, .
// .nextSibling, .previousSibling
if (supportTreeWalker) {
	// Only text nodes
	var cleaned;
	var walker = document.createTreeWalker(wrapper, NodeFilter.SHOW_TEXT, 
                         false, false);
	node = walker.nextNode();
	while (node !== null) {
		if (node.nodeValue) {
			cleaned = node.nodeValue.replace( /\n/g , "");
			log(cleaned);	
		}
		node = walker.nextNode();
	}
}