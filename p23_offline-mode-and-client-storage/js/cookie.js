(function() {
    CookieUtil.set("foo", "bar", new Date(2017, 0, 1), "/p23_offline-mode-and-client-storage/index.html");
    CookieUtil.set("jojo", "mojo");

    assert(CookieUtil.get("foo") === "bar", "CookieUtil Wrong cookie value");
    assert(CookieUtil.get("jojo") === "mojo", "CookieUtil Wrong cookie value");

    CookieUtil.unset("foo");
    CookieUtil.unset("jojo");

    assert(CookieUtil.get("foo") !== null, "Cookie mustn't be null");
    assert(CookieUtil.get("jojo") === null, "Cookie must be null");

    CookieUtil.unset("foo", "/p23_offline-mode-and-client-storage/index.html");
    assert(CookieUtil.get("foo") === null, "Cookie must be null");

}());

(function() {
    SubCookieUtil.set("data", "name", "Nicholas");
    SubCookieUtil.set("data", "book", "Professional Javascript");

    assert(SubCookieUtil.get("data", "name") === "Nicholas", 
        "SubCookieUtil Wrong cookie value 1");
    assert(SubCookieUtil.get("data", "book") === "Professional Javascript",
        "SubCookieUtil Wrong cookie value 2");


    SubCookieUtil.unsetAll("data");
    assert(SubCookieUtil.get("data", "name") === null, 
        "Wrong cookie value 1 after unset");
    assert(SubCookieUtil.get("data", "book") === null, 
        "Wrong cookie value 2 after unset");

    SubCookieUtil.setAll("data", { 
        name: "Nicholas",
        book: "Professional Javascript"
    }, new Date(2020, 0, 1));

    assert(SubCookieUtil.get("data", "name") === "Nicholas", 
        "Wrong cookie value 1 after setAll");
    assert(SubCookieUtil.get("data", "book") === "Professional Javascript",
        "Wrong cookie value 2 after setAll");

    SubCookieUtil.set("data", "name", "Michael", new Date(2017, 0, 1));

    assert(SubCookieUtil.get("data", "name") === "Michael", 
        "Wrong cookie value 1 after change");

    SubCookieUtil.unset("data", "name");
    assert(SubCookieUtil.get("data", "name") === null, 
        "Wrong cookie value");

    SubCookieUtil.unsetAll("data");

    assert(CookieUtil.get("date") === null, "Cookie must not exist");
}());