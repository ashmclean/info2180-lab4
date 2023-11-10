document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("searchBtn");
    const httpReq = new XMLHttpRequest();

    button.addEventListener('click', function() {
        let url = "http://localhost/info2180-lab4/superheroes.php";
        httpReq.onreadystatechange = printHeroList;
        httpReq.open('GET', url);
        httpReq.send();
    });

    function printHeroList() {
        if (httpReq.readyState === XMLHttpRequest.DONE) {
            if (httpReq.status === 200) {
                let response = httpReq.responseText;
                alert(response);
            } else {
                alert('There was a problem with the request');
            }
        }
    }
});