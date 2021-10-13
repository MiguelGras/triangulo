function piramide() {
    let n = document.getElementById("num").value;
    var pir = "";
    var res = "";
    for (let i = 0; i < n; i++) {
        pir += " #";
        res += "<p>" + pir + "</p>";
    }
    document.getElementById("res").innerHTML = res;
}