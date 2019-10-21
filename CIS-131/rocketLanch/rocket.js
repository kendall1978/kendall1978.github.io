/*Kendall Roberts
CIS-131
Address Book
10/16/2019*/

var httpRequest = new XMLHttpRequest();
httpRequest.open('get', 'https://launchlibrary.net/1.4/launch?next=5');
httpRequest.send(null);
httpRequest.onreadystatechange = aFunction;

function aFunction(){
    if(httpRequest.readyState == 4 && httpRequest.status == 200){
        var nextLaunch = httpRequest.responseText;
        var jsLaunch = JSON.parse(nextLaunch);
        console.log(jsLaunch.launches);
        for(var i = 0; i < jsLaunch.launches.length; i++){
            document.getElementById('launchDisplay').innerHTML +=
            `<section><h3>${jsLaunch.launches[i].net} 
            ${jsLaunch.launches[i].name}</h3></section>`;
        }
    }
}
