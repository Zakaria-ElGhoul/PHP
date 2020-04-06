let FirstName = document.getElementById("firstname");
let LastName = document.getElementById("lastname");
let age = document.getElementById("age");
let response = document.getElementById("submit");

function Ajax() {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("response").innerHTML = this.responseText;
        }
    }
    xmlhttp.open("GET", "data.txt", true)
    xmlhttp.send()
}

function Ajax2() {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("response").innerHTML = this.responseText;
        }
    }

    let httplink = "php.php?firstname=" + FirstName.value + "&lastname=" + LastName.value + "&age=" + age.value;
    console.log(httplink);

    xmlhttp.open("GET", httplink, true);
    xmlhttp.send();
}



response.addEventListener("click", function () {Ajax2();});