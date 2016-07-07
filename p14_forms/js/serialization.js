log_header("Form serialization");

(function() {

    function serialize(form) {
        var parts = [],
            field = null,
            i,
            len,
            j,
            optLen,
            option,
            optValue;

        for (i=0, len=form.elements.length; i < len; i++) {
            field = form.elements[i];

            switch(field.type) {
                case "select-one":
                case "select-multiple":
                    if (field.name.length) {
                        for (j=0, optLen=field.options.length; j < optLen; j++) {
                            option = field.options[j];
                            log(option);
                            if (option.selected) {
                                optValue = "";
                                if (option.hasAttribute) {
                                    optValue = (option.hasAttribute("value") ?
                                        option.value : option.text);
                                } else {
                                    optValue = 
                                        (option.attributes["value"].specified ?
                                            option.value : option.text);
                                }
                                parts.push(encodeURIComponent(field.name) + 
                                    "=" + encodeURIComponent(optValue));
                            }
                        }
                    }
                    break;
                case undefined:
                case "file":
                case "submit":
                case "reset":
                case "button":
                    break;

                case "radio":
                case "checkbox":
                    if(!field.checked) {
                        break;
                    }
                default:
                    if (field.name.length) {
                        parts.push(encodeURIComponent(field.name) + "=" +
                            encodeURIComponent(field.value));
                    }
            }
            return parts.join("&");
        }
    }

    var selectMultipleForm = document.getElementById("selectMultipleForm");
    EventUtil.addHandler(selectMultipleForm, "change", function(event) {
        event = EventUtil.getEvent(event);
        var target = EventUtil.getTarget(event);
        log(serialize(target.form));
    })
})();