log_header("xpath.js");

(function () {

    var result, xmldom;

    if (!(document.implementation.hasFeature("XPath", "3.0"))) {
        return;
    }

    xmldom = XMLUtil.parseXML("<employee><name>Donald Duck</name></employee>");

    // Iterator
    result = xmldom.evaluate("/employee/name", xmldom.documentElement,
        null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);

    if (result !== null) {
        var element = result.iterateNext();
        
        while(element) {
            log(element.tagName);
            element = result.iterateNext();
        }
    }

    // Snapshot
    result = xmldom.evaluate("/employee/name", xmldom.documentElement,
        null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);

    if (result !== null) {
        for (i = 0, len = result.snapshotLength; i < len; i++) {
            log(result.snapshotItem(i).tagName);
        }
    }

    result = xmldom.evaluate("/employee/name", xmldom.documentElement,
        null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
    
    if (result !== null) {
        log(result.singleNodeValue.tagName);
    }

    // There are BOOLEAN_TYPE, NUMBER_TYPE and ANY_TYPE
    result = xmldom.evaluate("/employee/name", xmldom.documentElement,
        null, XPathResult.STRING_TYPE, null);
    
    if (result !== null) {
        log(result.stringValue);
    }


})();