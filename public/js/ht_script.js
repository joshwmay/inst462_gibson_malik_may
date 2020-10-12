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
    var height = [];
	fetch("/height")
		.then(res => res.json())
		.then(res => res.data.map(c => c.x))
		.then(x => {
			fetch("/height")
				.then(res => res.json())
				.then(res => res.data.map(c => c.y))
				.then(y => {
					for (let i = 0; i < y.length; i += 1) {
						height.push({
							x: x[i],
							y: y[i]
						});
					}
				})
		});

	var ast_ht = [];
	fetch("/ast_ht")
		.then(res => res.json())
		.then(res => res.data.map(c => c.x))
		.then(x => {
			fetch("/ast_ht")
				.then(res => res.json())
				.then(res => res.data.map(c => c.y))
				.then(y => {
					for (let i = 0; i < y.length; i += 1) {
						ast_ht.push({
							x: x[i],
							y: y[i]
						});
					}
				})
		});
	var trb_ht = [];
	fetch("/trb_ht")
		.then(res => res.json())
		.then(res => res.data.map(c => c.x))
		.then(x => {
			fetch("/trb_ht")
				.then(res => res.json())
				.then(res => res.data.map(c => c.y))
				.then(y => {
					for (let i = 0; i < y.length; i += 1) {
						trb_ht.push({
							x: x[i],
							y: y[i]
						});
					}
				})
        });
    var ws_ht = [];
    fetch("/ws_ht")
	.then(res => res.json())
	.then(res => res.data.map(c => c.x))
	.then(x => {
		fetch("/ws_ht")
			.then(res => res.json())
			.then(res => res.data.map(c => c.y))
			.then(y => {
				for (let i = 0; i < y.length; i += 1) {
					ws_ht.push({
						x: x[i],
						y: y[i]
					});
				}
			})
	});
	var ht_summ = [];
	fetch("/ht_summ")
	.then(res => res.json())
	.then(res => res.data.map(c => c.x))
	.then(x => {
		fetch("/ht_summ")
	      .then(res => res.json())
	      .then(res => res.data.map(c => c.y))
	      .then(y => {
				for (let i = 0; i < y.length; i += 1) {
					ht_summ.push({
						x: x[i],
						y: y[i]
					});
				}
			});
	});
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
		if(str === "white") {
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
		if(str === "white") {
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
			title:{
				text: "Average Points by Height(inches)",
				wrap: true,
				horizontalAlign: "center",
				fontColor: str,
			},
			legend:{
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
				dataPoints: ht_summ
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
	}

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
