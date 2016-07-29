(function() {
    CookieUtil.set("foo", "bar", new Date(2017, 0, 1), "/p23_offline-mode-and-client-storage/index.html");
    CookieUtil.set("jojo", "mojo");

    assert(CookieUtil.get("foo") === "bar", "Wrong cookie value");
    assert(CookieUtil.get("jojo") === "mojo", "Wrong cookie value");

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
        "Wrong cookie value");
    assert(SubCookieUtil.get("data", "book") === "Professional Javascript",
        "Wrong cookie value");


    SubCookieUtil.unsetAll("data");
    assert(SubCookieUtil.get("data", "name") === null, 
        "Wrong cookie value");
    assert(SubCookieUtil.get("data", "book") === null, 
        "Wrong cookie value");

    SubCookieUtil.setAll("data", { 
        name: "Nicholas",
        book: "Professional Javascript"
    }, new Date(2017, 0, 1));

    assert(SubCookieUtil.get("data", "name") === "Nicholas", 
        "Wrong cookie value");
    assert(SubCookieUtil.get("data", "book") === "Professional Javascript",
        "Wrong cookie value");

    SubCookieUtil.set("data", "name", "Michael", new Date(2017, 0, 1));

    assert(SubCookieUtil.get("data", "name") === "Michael", 
        "Wrong cookie value");

    SubCookieUtil.unset("data", "name");
    assert(SubCookieUtil.get("data", "name") === null, 
        "Wrong cookie value");

    SubCookieUtil.unsetAll("data");

    assert(CookieUtil.get("date") === null, "Cookie must not exist");
}());