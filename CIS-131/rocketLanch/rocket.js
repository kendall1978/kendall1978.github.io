/*Kendall Roberts
CIS-131
Rocket Project
10/22/2019*/

var launchesRequest = new XMLHttpRequest();
launchesRequest.open('get', 'https://launchlibrary.net/1.4/launch?next=120');
launchesRequest.send(null);
launchesRequest.onreadystatechange = nextFiveFunction;

function nextFiveFunction() {
    if (launchesRequest.readyState == 4 && launchesRequest.status == 200) {
        var nextLaunch = launchesRequest.responseText;
        var jsLaunch = JSON.parse(nextLaunch);
        var nextFiveArray = [jsLaunch.launches[0], jsLaunch.launches[1],
            jsLaunch.launches[2], jsLaunch.launches[3], jsLaunch.launches[4]
        ];
        document.getElementById('launchDisplay').innerHTML =
            `<section><h3>${nextFiveArray[0].net} 
        <h3>${nextFiveArray[0].name}</h3></section>
        <section><h3>${nextFiveArray[1].net} 
        ${nextFiveArray[1].name}</h3></section>
        <section><h3>${nextFiveArray[2].net} 
        ${nextFiveArray[2].name}</h3></section>
        <section><h3>${nextFiveArray[3].net} 
        ${nextFiveArray[3].name}</h3></section>
        <section><h3>${nextFiveArray[4].net} 
        ${nextFiveArray[4].name}</h3></section>`;

    }
}


document.getElementById('falconButton').addEventListener('click', function () {
    if (launchesRequest.readyState == 4 && launchesRequest.status == 200) {
        var nextLaunch = launchesRequest.responseText;
        var jsLaunch = JSON.parse(nextLaunch);
        var falconFive = [jsLaunch.launches[4], jsLaunch.launches[8],
            jsLaunch.launches[24], jsLaunch.launches[26], jsLaunch.launches[32]
        ];

        document.getElementById('launchDisplay').innerHTML =
            `<section><h3>${falconFive[0].net} 
        ${falconFive[0].name}</h3></section>
        <section><h3>${falconFive[1].net} 
        ${falconFive[1].name}</h3></section>
        <section><h3>${falconFive[2].net} 
        ${falconFive[2].name}</h3></section>
        <section><h3>${falconFive[3].net} 
        ${falconFive[3].name}</h3></section>
        <section><h3>${falconFive[4].net} 
        ${falconFive[4].name}</h3></section>`;



    }
});

document.getElementById('arianeButton').addEventListener('click', function () {
    if (launchesRequest.readyState == 4 && launchesRequest.status == 200) {
        var nextLaunch = launchesRequest.responseText;
        var jsLaunch = JSON.parse(nextLaunch);
        var arianeFive = [jsLaunch.launches[10], jsLaunch.launches[15],
            jsLaunch.launches[18], jsLaunch.launches[44], jsLaunch.launches[49]
        ];

        document.getElementById('launchDisplay').innerHTML =
            `<section><h3>${arianeFive[0].net} 
        ${arianeFive[0].name}</h3></section>
        <section><h3>${arianeFive[1].net} 
        ${arianeFive[1].name}</h3></section>
        <section><h3>${arianeFive[2].net} 
        ${arianeFive[2].name}</h3></section>
        <section><h3>${arianeFive[3].net} 
        ${arianeFive[3].name}</h3></section>
        <section><h3>${arianeFive[4].net} 
        ${arianeFive[4].name}</h3></section>`;


    }
});

document.getElementById('launcherOneButton').addEventListener('click', function () {
    if (launchesRequest.readyState == 4 && launchesRequest.status == 200) {
        var nextLaunch = launchesRequest.responseText;
        var jsLaunch = JSON.parse(nextLaunch);
        var launcherOneFive = [jsLaunch.launches[2], jsLaunch.launches[12],
            jsLaunch.launches[22], jsLaunch.launches[53], jsLaunch.launches[106]
        ];

        document.getElementById('launchDisplay').innerHTML =
            `<section><h3>${launcherOneFive[0].net} 
        ${launcherOneFive[0].name}</h3></section>
        <section><h3>${launcherOneFive[1].net} 
        ${launcherOneFive[1].name}</h3></section>
        <section><h3>${launcherOneFive[2].net} 
        ${launcherOneFive[2].name}</h3></section>
        <section><h3>${launcherOneFive[3].net} 
        ${launcherOneFive[3].name}</h3></section>
        <section><h3>${launcherOneFive[4].net} 
        ${launcherOneFive[4].name}</h3></section>`;
    }
});

document.getElementById('nextFive').addEventListener('click', function () {
    if (launchesRequest.readyState == 4 && launchesRequest.status == 200) {
        var nextLaunch = launchesRequest.responseText;
        var jsLaunch = JSON.parse(nextLaunch);
        var nextFiveArray = [jsLaunch.launches[0], jsLaunch.launches[1],
            jsLaunch.launches[2], jsLaunch.launches[3], jsLaunch.launches[4]
        ];
        document.getElementById('launchDisplay').innerHTML =
            `<section><h3>${nextFiveArray[0].net} 
        ${nextFiveArray[0].name}</h3></section>
        <section><h3>${nextFiveArray[1].net} 
        ${nextFiveArray[1].name}</h3></section>
        <section><h3>${nextFiveArray[2].net} 
        ${nextFiveArray[2].name}</h3></section>
        <section><h3>${nextFiveArray[3].net} 
        ${nextFiveArray[3].name}</h3></section>
        <section><h3>${nextFiveArray[4].net} 
        ${nextFiveArray[4].name}</h3></section>`;

    }
})

// // Set the date we're counting down to
// var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//   // Get today's date and time
//   var now = new Date().getTime();

//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;

//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Display the result in the element with id="demo"
//   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";

//   // If the count down is finished, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
// }, 1000);
window.onload = function() {
    if (launchesRequest.readyState == 4 && launchesRequest.status == 200) {
        var launches = launchesRequest.responseText;
        var jsLaunch = JSON.parse(launches);
        console.log(jsLaunch);
        var nextFiveArray = [jsLaunch.launches[0], jsLaunch.launches[1],
            jsLaunch.launches[2], jsLaunch.launches[3], jsLaunch.launches[4]
        ];
        var launcherOneFive = [jsLaunch.launches[2], jsLaunch.launches[12],
            jsLaunch.launches[22], jsLaunch.launches[53], jsLaunch.launches[106]
        ];
        var arianeFive = [jsLaunch.launches[10], jsLaunch.launches[15],
            jsLaunch.launches[18], jsLaunch.launches[44], jsLaunch.launches[49]
        ];
        var falconFive = [jsLaunch.launches[4], jsLaunch.launches[8],
            jsLaunch.launches[24], jsLaunch.launches[26], jsLaunch.launches[32]
        ];
        var launchDiv = document.getElementById('launchDisplay');
        if (launchDiv.innerHTML == `<section><h3>${nextFiveArray[0].net} 
    ${nextFiveArray[0].name}</h3></section>
    <section><h3>${nextFiveArray[1].net} 
    ${nextFiveArray[1].name}</h3></section>
    <section><h3>${nextFiveArray[2].net} 
    ${nextFiveArray[2].name}</h3></section>
    <section><h3>${nextFiveArray[3].net} 
    ${nextFiveArray[3].name}</h3></section>
    <section><h3>${nextFiveArray[4].net} 
    ${nextFiveArray[4].name}</h3></section>`) {
            var countDownToLaunch = new Date(nextFiveArray[0].net).getTime();
            return countDownToLaunch;
        } else if (launchDiv.innerHTML == `<section><h3>${falconFive[0].net} 
    ${falconFive[0].name}</h3></section>
    <section><h3>${falconFive[1].net} 
    ${falconFive[1].name}</h3></section>
    <section><h3>${falconFive[2].net} 
    ${falconFive[2].name}</h3></section>
    <section><h3>${falconFive[3].net} 
    ${falconFive[3].name}</h3></section>
    <section><h3>${falconFive[4].net} 
    ${falconFive[4].name}</h3></section>`) {
            var countDownToLaunch = new Date(falconFive[0].net).getTime();
            return countDownToLaunch;
        } else if (launchDiv.innerHTML == `<section><h3>${arianeFive[0].net} 
    ${arianeFive[0].name}</h3></section>
    <section><h3>${arianeFive[1].net} 
    ${arianeFive[1].name}</h3></section>
    <section><h3>${arianeFive[2].net} 
    ${arianeFive[2].name}</h3></section>
    <section><h3>${arianeFive[3].net} 
    ${arianeFive[3].name}</h3></section>
    <section><h3>${arianeFive[4].net} 
    ${arianeFive[4].name}</h3></section>`) {
            var countDownToLaunch = new Date(arianeFive[0].net).getTime();
            return countDownToLaunch;
        } else if (launchDiv.innerHTML == `<section><h3>${launcherOneFive[0].net} 
    ${launcherOneFive[0].name}</h3></section>
    <section><h3>${launcherOneFive[1].net} 
    ${launcherOneFive[1].name}</h3></section>
    <section><h3>${launcherOneFive[2].net} 
    ${launcherOneFive[2].name}</h3></section>
    <section><h3>${launcherOneFive[3].net} 
    ${launcherOneFive[3].name}</h3></section>
    <section><h3>${launcherOneFive[4].net} 
    ${launcherOneFive[4].name}</h3></section>`) {
            var countDownToLaunch = new Date(launcherOneFive[0].net).getTime();
            return countDownToLaunch;
        }
        var x = setInterval(function () {
            var now = new Date().getTime();
            var difference = countDownToLaunch - now;
            var days = Math.floor(difference / (1000 * 60 * 60 * 24));
            var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((difference % (1000 * 60)) / 1000);
            document.getElementById("timer").innerHTML = `<h2>Next Launch In ${days} Days ${hours} Hours
        ${minutes} Minutes ${seconds} Seconds</h2>`;
            if (difference < 0) {
                clearInterval(x);
            }


        }, 1000)
    }
}
