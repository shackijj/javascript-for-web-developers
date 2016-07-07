log_header("Select");

(function() {

    function getSelectedOptions(selectbox) {
        var result = [],
            option = null;

        for (var i=0, len=selectbox.options.length; i < len; i++) {
            option = selectbox.options[i];
            if (option.selected) {
                result.push(option);
            }
        }

        return result;
    }

    var selectbox = document.getElementById("selLocation");
    var selectMultipleBox = document.getElementById("selMultipleLocation");

    var newOption = document.createElement("option");
    newOption.appendChild(document.createTextNode("Option Text"));
    newOption.setAttribute("value", "Kokojambo");
    selectbox.appendChild(newOption);

    // Move an option from one select to another.
    selectMultipleBox.appendChild(newOption);

    // Change an option's position in select
    selectMultipleBox.insertBefore(newOption,
        selectMultipleBox.options[newOption.index-1]);

    EventUtil.addHandler(selectbox, "change", function(event) {
        event = EventUtil.getEvent(event);
        var target = EventUtil.getTarget(event);
        if (target.id == "selLocation") {
            var text = target.options[target.selectedIndex].text;
            var value = target.options[target.selectedIndex].value;

            log("selectForm text: " + text + " value: " + value);
        }
    });

    EventUtil.addHandler(selectMultipleBox, "change", function(event) {
        event = EventUtil.getEvent(event);
        var target = EventUtil.getTarget(event);

        var selectedOptions = getSelectedOptions(target),
            message = "";

        for (var i=0, len=selectedOptions.length; i < len; i++) {
            message += "Selected index: " + selectedOptions[i].index + 
                "\nSelected text: " + selectedOptions[i].text + 
                "\nSelected value: " + selectedOptions[i].value + "\n";
        }

        log(message);
    });
})();
