let number = document.getElementsByClassName("number");

for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function() {

        let output = document.getElementById("output_value").innerHTML;
        document.getElementById("output_value").innerHTML = output + number[i].id;
    })
}

let operator = document.getElementsByClassName("operator");

for (let a = 0; a < operator.length; a++) {
    operator[a].addEventListener('click', function() {

        if (operator[a].id == "clear") {
            document.getElementById("output_value").innerHTML = "";
            document.getElementById("history_value").innerHTML = "";

        } else if (operator[a].id == "back") {
            let output = document.getElementById("output_value").innerHTML;
            document.getElementById("output_value").innerHTML = output.substr(0, output.length - 1);

        } else {
            if (operator[a].id == "=") {
                let history = document.getElementById("history_value").innerHTML;
                let output = document.getElementById("output_value").innerHTML;

                document.getElementById("history_value").innerHTML = history + output;

                document.getElementById("output_value").innerHTML = eval(history + output);
            } else {

                let output = document.getElementById("output_value").innerHTML;
                document.getElementById("history_value").innerHTML = output + operator[a].id;
                document.getElementById("output_value").innerHTML = "";
            }
        }
    })
}