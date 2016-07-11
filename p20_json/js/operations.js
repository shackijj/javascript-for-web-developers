log_header("operations.js");

var arrBooks = [
    {     
        "title" : "ProfessionalJavaScript",                        
        "authors" : [                        
            "NicholasС.Zakas"                        
        ],                        
        "edition" : 3,                        
        "year" : 2011                        
    },
    {                     
        "title" : "ProfessionalJavaScript",                        
        "authors" : [                        
            "NicholasС.Zakas"                        
        ],                        
        "edition" : 2,                        
        "year" : 2009
    },
    {                        
        "title" : "Professional Ajax",                        
        "authors" : [                        
            "Nicholas С.Zakas",                        
            "Jeremy McPeak",                        
            "Joe Fawcett"                        
        ],                        
        "edition" : 2,                        
        "year" : 2008
    },
    {
        "title" : "ProfessionalAjax",                        
        "authors" : [                        
            "Nicholas С.Zakas",                        
            "JeremyMc Peak",                        
            "Joe Fawcett"                        
        ],                        
        "edition" : 1,                        
        "year" : 2007
    },
    {                        
        "title" : "Professional JavaScript",                        
        "authors" : [                        
            "Nicholas С.Zakas"                        
        ],                        
        "edition" : 1,                        
        "year" : 2006
    }
];                      

var jsonText = JSON.stringify(arrBooks);
var book = arrBooks[2];

var firstFilteredBook = JSON.stringify(book, ["title", "edition"]);
var secondFilteredBook = JSON.stringify(book, function(key, value) {
    switch(key) {
        case "title":
            return value.toLocaleUpperCase();
        case "authors":
            return value.join(", ");
        default:
            return value;
    }
});


book.toJSON = function() {
    return this.title;
}

// log(secondFilteredBook);
// log(JSON.stringify(arrBooks, null, 4));
// log(JSON.stringify(book));

var bookWithDate =  {                        
        "title" : "Professional JavaScript",                        
        "authors" : [                        
            "Nicholas С.Zakas"                        
        ],                        
        "edition" : 1,                        
        "year" : 2006,
        "releaseDate" : new Date(2015, 06, 18)
}

var stringifiedBookWithDate = JSON.stringify(bookWithDate); 
var bookCopy = JSON.parse(stringifiedBookWithDate, function (key, value) {
    if (key === "releaseDate") {
        return new Date(value);
    } else {
        return value;
    }
});

log(bookCopy.releaseDate.getFullYear());