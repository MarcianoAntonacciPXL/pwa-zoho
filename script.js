let form = document.getElementById('afspraak-form'); 

form.addEventListener("submit", (e) => {
    e.preventDefault();
    //const url = "http://localhost:3000";
    const url = "https://awesome-wescoff-1f766c.netlify.app/.netlify/functions/api";
    const http = new XMLHttpRequest();
    http.open("POST", url, true);
    //http.open("GET", url, true);
    http.setRequestHeader("Content-type", "application/json");
    http.setRequestHeader('X-Requested-With', 'XMLHttpRequest'); 
    http.setRequestHeader('Access-Control-Allow-Origin', '*');

    http.onreadystatechange = () => {
        if (http.readyState == 4 && http.status == 200) {
            console.log(http.responseText);
        }
    }
    const data = new FormData(e.target);
    const values = Object.fromEntries(data.entries());
    const json = JSON.stringify(values);
    http.send(json);    
    //http.send();
});