var XMLUtil = {
    parseXML: function (xml) {
        var xmldom = null;

        if (typeof DOMParser != "undefined") {
            xmldom = (new DOMParser()).parseFromString(xml, "text/xml");
            var errors = xmldom.getElementsByTagName("parseerror");
            if (errors.length) {
                throw new Error("Parsing error XML: " + 
                    errors[0].textContent);
            }
        } else if (typeof ActiveXObject != "undefined") {
            xmldom = createDocument();
            xmldom.loadXML(xml);
            if (xmldom.parseError != 0) {
                throw new Error("Parsing error XML: " + 
                    xmldom.parseError.reason);
            }
        } else {
            throw new Error("No XML parser availiable");
        }

        return xmldom;
    },

    serializeXML: function (xmldom) {

        if (xmldom.documentElement === "undefined") {
            throw new Error("serializeXML: argument must be xml dom node");
        }

        if (typeof XMLSerializer != "undefined") {
            return (new XMLSerializer()).serializeToString(xmldom);
        } else if (typeof xmldom.xml != "undefined") {
            return xmldom.xml;
        } else {
            throw new Error("Could not serialize xml");
        }
    }, 

    selectSingleNode: function (context, expression, namespaces) {
        var doc = (context.nodeType != 9 ? context.ownerDocument : context);

        if (typeof doc.evaluate != "undefined") {
            var nsresolver = null;
            if (namespaces instanceof Object) {
                nsresolver = function (prefix) {
                    return namespaces[prefix];
                };
            }

            var result = doc.evaluate(expression, context,
                nsresolver, XPathResult.FIRST_ORDERED_NODE_TYPE, null);

            return (result !== null ? result.singleNodeValue : null);
        } else if (typeof context.selectSingleNode != "undefined") {
            if (namespaces instanceof Object) {
                var ns = "";

                for (var prefix in namespaces) {
                    if (namespaces.hasOwnProperty(prefix)) {
                        ns += "xmlns:" + prefix + "='" +
                            namespaces[prefix] + "'"; 
                    } 
                }

                doc.setProperty("SelectionNamespaces", ns);
                return context.selectSingleNode(expression);
            }
        } else {
            throw new Error("No XPATH engine found.");
        }
    }, 

    selectNodes: function (context, expression, namespaces) {
        var doc = (context.nodeType != 9 ? context.ownerDocument : context);

        if (typeof doc.evaluate != "undefined") {
            var nsresolver = null;
            if (namespaces instanceof Object) {
                nsresolver = function (prefix) {
                    return namespaces[prefix];
                };
            }

            var result = doc.evaluate(expression, context,
                nsresolver, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);

            var nodes = [];

            if (result !== null) {
                for (i = 0, len = result.snapshotLenth; i < len; i++) {
                    nodes.push(result.snapshotItem(i));
                }
            }

            return nodes;

        } else if (typeof context.selectSingleNode != "undefined") {
            if (namespaces instanceof Object) {
                var ns = "";

                for (var prefix in namespaces) {
                    if (namespaces.hasOwnProperty(prefix)) {
                        ns += "xmlns:" + prefix + "='" +
                            namespaces[prefix] + "'"; 
                    } 
                }

                doc.setProperty("SelectionNamespaces", ns);
                var result = context.selectNodes(expression);
                var nodes = [];

                for (i = 0, len = result.length; i < len; i++) {
                    nodes.push(result[i]);
                }

                return nodes;
            }
        } else {
            throw new Error("No XPATH engine found.");
        }
    }, 

    transform: function (context, xslt) {
        if (typeof XSLTProcessor != "undefined") {
            var processor = new XSLTProcessor();
            processor.importStylesheet(xslt);

            var result = processor.transformToDocument(context);
            return (new XMLSerializer()).serializeToString(result);
        } else if (typeof context.transformNode != "undefined") {
            return context.transformNode(xslt);
        } else {
            throw new Error("No XSLT processor available");
        }
    } 
}