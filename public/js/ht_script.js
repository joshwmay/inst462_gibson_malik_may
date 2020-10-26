function openNav() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
    document.getElementById("topBar").style.display = "none";
}

function closeNav() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
    document.getElementById("topBar").style.display = "block";
}

function openDesc(int) {
    var str = "open";
    var str2 = "butt";
    str += int;
    str2 += int;
    document.getElementById(str).style.display = "block";
    document.getElementById(str2).style.display = "none";
}

function closeDesc(int) {
    var str = "open";
    var str2 = "butt";
    str += int;
    str2 += int;
    document.getElementById(str).style.display = "none";
    document.getElementById(str2).style.display = "block";
    document.getElementById(str2).style.display = "flex";
    document.getElementById(str2).style.justifyContent = "center";
}

window.addEventListener("load", () => {
    var x = 0;
    var height = [
        { "x": 64, "y": 1 },
        { "x": 65, "y": 1 },
        { "x": 66, "y": 1 },
        { "x": 67, "y": 3 },
        { "x": 68, "y": 2 },
        { "x": 69, "y": 4 },
        { "x": 70, "y": 18 },
        { "x": 71, "y": 28 },
        { "x": 72, "y": 4 },
        { "x": 73, "y": 97 },
        { "x": 74, "y": 130 },
        { "x": 75, "y": 186 },
        { "x": 76, "y": 181 },
        { "x": 77, "y": 225 },
        { "x": 78, "y": 222 },
        { "x": 79, "y": 273 },
        { "x": 80, "y": 256 },
        { "x": 81, "y": 297 },
        { "x": 82, "y": 239 },
        { "x": 83, "y": 170 },
        { "x": 84, "y": 29 },
        { "x": 85, "y": 39 },
        { "x": 86, "y": 26 },
        { "x": 87, "y": 8 },
        { "x": 88, "y": 4 },
        { "x": 89, "y": 4 },
        { "x": 90, "y": 1 },
        { "x": 91, "y": 2 }
    ];
    var ast_ht = [
        { "x": 64, "y": 1 },
        { "x": 65, "y": 1 },
        { "x": 66, "y": 1 },
        { "x": 67, "y": 2 },
        { "x": 68, "y": 2 },
        { "x": 69, "y": 2 },
        { "x": 70, "y": 9 },
        { "x": 71, "y": 15 },
        { "x": 72, "y": 2 },
        { "x": 73, "y": 58 },
        { "x": 74, "y": 49 },
        { "x": 75, "y": 89 },
        { "x": 76, "y": 50 },
        { "x": 77, "y": 38 },
        { "x": 78, "y": 43 },
        { "x": 79, "y": 33 },
        { "x": 80, "y": 18 },
        { "x": 81, "y": 18 },
        { "x": 82, "y": 14 },
        { "x": 83, "y": 5 },
        { "x": 84, "y": 0 },
        { "x": 85, "y": 0 },
        { "x": 86, "y": 0 },
        { "x": 87, "y": 0 },
        { "x": 88, "y": 0 },
        { "x": 89, "y": 0 },
        { "x": 90, "y": 0 },
        { "x": 91, "y": 0 }
    ];
    var trb_ht = [{ "x": 64, "y": 0 },
        { "x": 65, "y": 0 },
        { "x": 66, "y": 0 },
        { "x": 67, "y": 0 },
        { "x": 68, "y": 1 },
        { "x": 69, "y": 0 },
        { "x": 70, "y": 0 },
        { "x": 71, "y": 0 },
        { "x": 72, "y": 0 },
        { "x": 73, "y": 0 },
        { "x": 74, "y": 1 },
        { "x": 75, "y": 3 },
        { "x": 76, "y": 7 },
        { "x": 77, "y": 10 },
        { "x": 78, "y": 28 },
        { "x": 79, "y": 50 },
        { "x": 80, "y": 56 },
        { "x": 81, "y": 92 },
        { "x": 82, "y": 70 },
        { "x": 83, "y": 58 },
        { "x": 84, "y": 9 },
        { "x": 85, "y": 9 },
        { "x": 86, "y": 5 },
        { "x": 87, "y": 2 },
        { "x": 88, "y": 3 },
        { "x": 89, "y": 0 },
        { "x": 90, "y": 1 },
        { "x": 91, "y": 1 }
    ];
    var ws_ht = [
        { "x": 64, "y": 1 },
        { "x": 65, "y": 0 },
        { "x": 66, "y": 1 },
        { "x": 67, "y": 0 },
        { "x": 68, "y": 0 },
        { "x": 69, "y": 1 },
        { "x": 70, "y": 4 },
        { "x": 71, "y": 4 },
        { "x": 72, "y": 1 },
        { "x": 73, "y": 20 },
        { "x": 74, "y": 19 },
        { "x": 75, "y": 43 },
        { "x": 76, "y": 30 },
        { "x": 77, "y": 37 },
        { "x": 78, "y": 42 },
        { "x": 79, "y": 52 },
        { "x": 80, "y": 44 },
        { "x": 81, "y": 64 },
        { "x": 82, "y": 46 },
        { "x": 83, "y": 41 },
        { "x": 84, "y": 0 },
        { "x": 85, "y": 0 },
        { "x": 86, "y": 0 },
        { "x": 87, "y": 0 },
        { "x": 88, "y": 0 },
        { "x": 89, "y": 0 },
        { "x": 90, "y": 0 },
        { "x": 91, "y": 0 }
    ];

    const cont4 = document.querySelector("#chart4");
    const cont5 = document.querySelector("#chart5");
    const cont6 = document.querySelector("#chart6");
    const checkbox = document.querySelector("#dark");
    const start = document.querySelector("#start");
    if (x === 0) {
        start.style.fontSize = "x-large";
    }
    if (sessionStorage.getItem("mode") == "dark") {
        darkmode();

    } else {
        nodark();
    }
    checkbox.addEventListener("change", function() {
        x++
        if (checkbox.checked) {
            if (x > 0) {
                start.innerHTML = "Darkmode";
                start.style.fontSize = "medium";
                start.style.justifycontent = "center";

            }
            start.style.color = "white";
            darkmode();

        } else {
            nodark();
            start.innerHTML = "Darkmode";
            start.style.fontSize = "medium";
            start.style.justifycontent = "center";

        }
    });

    function chart4(str) {
        if (str === "white") {
            var sub = "gold";
        } else {
            var sub = "purple";
        }
        var chart4 = new CanvasJS.Chart(cont4, {
            backgroundColor: null,
            animationEnabled: true,
            title: {
                text: "Player Height Distribution All-Time",
                wrap: true,
                horizontalAlign: "center",
                fontColor: str,
            },
            toolTip: {
                shared: true
            },
            legend: {
                fontColor: str,
            },
            axisX: {
                labelFontColor: "none",
                titleFontColor: str,
                title: "Height in Inches",
                gridThickness: 0,
                tickLength: 1,
                labelAngle: -20,
                interval: 1,
            },
            axisY: {
                labelFontColor: str,
                titleFontColor: str,
                title: "Occurrences",
                gridThickness: 0,
                tickLength: 1,
                interval: 50,
                maximum: 300,
                labelWrap: true,
                labelFontColor: str
            },
            data: [{
                type: "column",
                showInLegend: true,
                color: sub,
                fontColor: str,
                legendText: "All time heights",
                toolTipContent: 'height: {x} <br>Instances: {y}',
                dataPoints: height
            }]
        });
        return chart4.render()

    }

    function chart5(str) {
        if (str === "white") {
            var sub = "gold";
        } else {
            var sub = "purple";
        }
        var chart5 = new CanvasJS.Chart(cont5, {
            backgroundColor: null,
            animationEnabled: true,
            colorSet: "greenShades",
            title: {
                text: "Stat Leader Height Distributions",
                wrap: true,
                horizontalAlign: "center",
                fontColor: str,
            },
            legend: {
                fontColor: str
            },
            toolTip: {
                shared: true
            },
            axisX: {
                labelFontColor: "none",
                title: "Height in Inches",
                titleFontColor: str,
                gridThickness: 0,
                tickLength: 1,
                labelAngle: -20,
                interval: 1,
            },
            axisY: {
                labelFontColor: str,
                title: "Occurrences",
                titleFontColor: str,
                gridThickness: 0,
                tickLength: 1,
                interval: 50,
                maximum: 100,
                labelWrap: true,
                labelFontColor: str
            },
            data: [{
                type: "column",
                showInLegend: true,
                color: "red",
                legendText: "Assist leaders(450)",
                toolTipContent: 'Height: {x} <br>Assist Leaders: {y}',
                dataPoints: ast_ht
            }, {
                type: "column",
                showInLegend: true,
                toolTipContent: 'Rebound Leaders: {y}',
                color: "green",
                legendText: "Rebound Leaders(450)",
                dataPoints: trb_ht
            }, {
                type: "area",
                showInLegend: true,
                toolTipContent: 'Wins Contributed Leaders: {y}',
                color: sub,
                legendText: "Win Contribution Leaders(450)",
                dataPoints: ws_ht
            }]
        });
        chart5.render()

    }

    function chart6(str) {
        var chart6 = new CanvasJS.Chart(cont6, {
            animationEnabled: true,
            backgroundColor: null,
            title: {
                text: "Average Points by Height(inches)",
                wrap: true,
                horizontalAlign: "center",
                fontColor: str,
            },
            legend: {
                fontColor: str,
            },
            toolTip: {
                shared: true
            },
            axisX: {
                labelFontColor: str,
                title: "Average Points",
                titleFontColor: str,
                interval: 1,
                minimum: 64,
                maximum: 92,
            },
            axisY: {
                labelFontColor: str,
                title: "Average Points",
                titleFontColor: str,
                interval: 5,
                maximum: 35,
            },
            data: [{
                type: "boxAndWhisker",
                upperBoxColor: "#68FF5A",
                lowerBoxColor: "#6A57FF",
                color: str,
                yValueFormatString: "##.,##",
                dataPoints: [
                    { x: 64, y: [8, 8, 8, 8, 8] },
                    { x: 65, y: [9, 9, 9, 9, 9] },
                    { x: 66, y: [10, 10, 10, 10, 10] },
                    { x: 67, y: [3, 3, 5, 7, 3] },
                    { x: 68, y: [9, 12, 19, 22, 15] },
                    { x: 69, y: [2, 5, 13, 18, 7] },
                    { x: 70, y: [2, 3, 10, 15, 5] },
                    { x: 71, y: [1, 2, 9, 14, 4] },
                    { x: 72, y: [2, 5, 12, 18, 7] },
                    { x: 73, y: [1, 4, 13, 20, 7] },
                    { x: 74, y: [0, 3, 13, 20, 6] },
                    { x: 75, y: [0, 3, 13, 21, 6] },
                    { x: 76, y: [1, 3, 14, 23, 5] },
                    { x: 77, y: [1, 3, 15, 24, 5] },
                    { x: 78, y: [0, 3, 18, 30, 6] },
                    { x: 79, y: [0, 3, 15, 25, 5] },
                    { x: 80, y: [1, 3, 15, 25, 5] },
                    { x: 81, y: [1, 3, 15, 25, 5] },
                    { x: 82, y: [0, 2, 16, 27, 4] },
                    { x: 83, y: [0, 2, 12, 20, 4] },
                    { x: 84, y: [1, 3, 13, 21, 5] },
                    { x: 85, y: [0, 1, 12, 21, 3] },
                    { x: 86, y: [1, 2, 14, 25, 3] },
                    { x: 87, y: [2, 2, 8, 13, 3] },
                    { x: 88, y: [3, 7, 13, 15, 10] },
                    { x: 89, y: [1, 1, 1, 2, 1] },
                    { x: 90, y: [8, 8, 8, 8, 8] },
                    { x: 91, y: [3, 4, 8, 10, 6] }
                ]
            }]
        });
        return chart6.render();

    }

    function darkmode() {
        document.body.classList.add("dark-mode");
        checkbox.checked = true;
        sessionStorage.setItem("mode", "dark");
        if (cont4) {
            chart4("white");
        }
        if (cont5) {
            chart5("white")
        }
        if (cont6) {
            chart6("white")
        }
    };

    function nodark() {
        document.body.classList.remove("dark-mode");
        checkbox.checked = false;
        sessionStorage.setItem("mode", "light");
        if (cont4) {
            chart4("black");
        }
        if (cont5) {
            chart5("black");
        }
        if (cont6) {
            chart6("black")
        }
    }
});