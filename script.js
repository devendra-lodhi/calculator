let last = null;

function restart() {
    window.location = "index.html"
}

function addDigitOrOperator(d, type) {

    let prev = document.getElementById('inp').value
    if (last == type && type == "op") {
        alert("Two operators together are not allowed")
    }

    else {
        if (prev == '') {
            if (d == '**' || d == '*' || d == '+' || d == '-' || d == '%' || d == '/' || d == '.') {
                alert("Please start with a digit")
            }
            else {
                document.getElementById('inp').value = prev + d
                last = type;
            }

        }
        else {
            document.getElementById('inp').value = prev + d
            last = type;
        }


    }


}
function calculate() {
    let str = document.getElementById('inp').value

    try {
        let result = eval(str)
        document.getElementById('inp').value = result
    }
    catch {
        alert("Idiot, you have written something wrong")
        window.location = "index.html"
    }

}


function deleteLast() {
    let prev = document.getElementById('inp').value
    document.getElementById('inp').value = prev.slice(0, prev.length - 1)
}