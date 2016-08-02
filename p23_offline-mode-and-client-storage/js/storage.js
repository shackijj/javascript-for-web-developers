(function() {
    sessionStorage.setItem("name", "Nicholas");
    sessionStorage.book = "Professional Javascript";

    assert(sessionStorage.book === "Professional Javascript", "Storage Wrong book value");
    assert(sessionStorage.name === "Nicholas", "Storage wrong name value");
    assert(sessionStorage.getItem("name") === "Nicholas", "Storage name value");
    assert(sessionStorage.length == 2, "Storage Wrong storage length");

    sessionStorage.removeItem("name");

    assert(sessionStorage.getItem("name") == null, "Storage Wrong value after removeItem");
}());

(function() {
    /*
    DEPRICATED

    var domain = "localhost:9000"
    globalStorage[domain].name = "foo";
    assert(globalStorage[domain].name === "foo", "GlobalStorage wrong value");
    */


    /*
    Storage event fired if another window is changing values
    */
    EventUtil.addHandler(window, "storage", function(event) {
        event = EventUtil.getEvent(event);
        console.log("Domain: " + event.domain + " Key:" + event.key +
           " New Value: " + event.newValue + " Old Value:" + event.oldValue);
    });

    localStorage.setItem("name", "foo");
    localStorage.book = "baz";

    assert(localStorage.getItem("name") === "foo", "localStorage wrong name value");
    assert(localStorage.book == "baz", "localStorage wrong book value");
}());

var IDBApp = (function() {
    var indexedDB = window.indexedDB || window.msIndexedDB || window.webkitIndexedDB || window.mozIndexedDB;
    // Optional but important
    var IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction;
    var IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange;
    var users = [
            {
                username: "007",
                firstName: "James",
                lastName: "Bond",
                password: "foo"
            },
            {
                username: "Batman",
                firstName: "Bruce",
                lastName: "Wayne",
                password: "boo"
            }
        ], 
        name = "idb-app",
        version = 4,
        db;

    return {
        openDB: function() {

            var DBOpenRequest = indexedDB.open(name, version);

            DBOpenRequest.onerror = function(event) {
                log("Something bad happend while trying to open: " + event.target.errorCode);
            }

            DBOpenRequest.onsuccess = function(event) {
                log("Database opened");
                db = event.target.result;
            }

            DBOpenRequest.onupgradeneeded = function(event) {
                log("Database created");
                db = event.target.result
                var store,
                    i = 0,
                    request,
                    requests = [],
                    len = users.length;
                
                try {
                    db.deleteObjectStore("users");
                } catch(ex) {
                    //
                }
                storage = db.createObjectStore("users", { keyPath: "username" });

                while(i < len) {
                    request = storage.add(users[i++]);
                    
                    request.onerror = function(event) {
                        log("Can't add user to store");
                    }

                    request.onsuccess = function(event) {
                        log("User added");
                    }

                    requests.push(request);
                }
            }
        },

        showUser: function(key) {

            if (!db) {
                log("Database is not opened");
                return;
            }

            var transactionRequest = db.transaction("users");
            transactionRequest.oncomplete = function(event) {
                log("getUser transaction complete");
            }
            transactionRequest.onerror = function(event) {
                throw {
                    name: "getUser",
                    message: "Transaction Failed"
                }
            };

            var getRequest = transactionRequest.objectStore("users").get(key);
            
            getRequest.onsuccess = function(event) {
                log("USER: " + JSON.stringify(event.target.result));
            }

            getRequest.onerror = function(event) {
                throw {
                    name: "getUser",
                    message: "getRequest failed"
                };
            }
        },

        updateUserProp(key, prop, value) {
            if (!db) {
                log("Database is not opened");
                return;
            }

            var transaction = db.transaction("users", "readwrite"),
                range  = IDBKeyRange.only(key);
                store  = transaction.objectStore("users"),
                request = store.openCursor(range),
                obj;

            request.onsuccess = function(event) {
                var cursor = event.target.result;
                if (cursor) {
                    obj = cursor.value
                    obj[prop] = value;
                    cursor.update(obj);
                }
            };
            
            request.onerror = function(event) {
                throw {
                    name: "updateUserProp",
                    message: "update request failed" + event.target.errorCode
                }
            };

            transaction.oncomplete = function(event) {
                log("updateUserProp transaction complete");
            };

            transaction.onerror = function(event) {
                throw {
                    name: "updateUserProp",
                    message: "Transaction Failed" + event.target.errorCode
                }
            };
        },

        showAllUsers: function() {
            if (!db) {
                log("DB is not opened");
                return;
            }

            var transaction = db.transaction("users"),
                store = db.objectStore("users"),
                request = store.openCursor();

            request.onsuccess = function(event) {
                var cursor = event.target.result;
            };
        }
    };

}());