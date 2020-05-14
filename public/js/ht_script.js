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

window.addEventListener('online', (event) => {
	console.log("You are now connected to the network.");
});



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
							label: x[i],
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
							label: x[i],
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
							label: x[i],
							y: y[i]
						});
					}
				})
		});
    const cont4 = document.querySelector("#chart4");
    const cont5 = document.querySelector("#chart5");
	const checkbox = document.querySelector("#dark");
    const start = document.querySelector("#start");
    if (x === 0) {
        start.style.fontSize = "xx-large"
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
			darkmode();

		} else {
			nodark();
			start.innerHTML = "Darkmode";
            start.style.fontSize = "medium";
            start.style.justifycontent = "center";

		}
	});

	function darkmode() {
		document.body.classList.add("dark-mode");
		checkbox.checked = true;
		sessionStorage.setItem("mode", "dark");
		if (cont4) {
			var chart4 = new CanvasJS.Chart(cont4, {
				backgroundColor: null,
				animationEnabled: true,
				colorSet: "greenShades",
				title: {
					text: "Player Height Distribution All-Time",
					fontColor: "white",
				},
				legend: {
					fontColor: "white"
				},
				axisX: {
					labelFontColor: "none",
					title: "Height in Inches",
					gridThickness: 0,
					tickLength: 1,
					labelAngle: -20,
					interval: 1,
				},
				axisY: {
					labelFontColor: "white",
					title: "Occurrences",
					gridThickness: 0,
					tickLength: 1,
					interval: 50,
					maximum: 300,
					labelWrap: true,
					labelFontColor: "white"
				},
				data: [{
					type: "column",
					showInLegend: true,
					color: "gold",
					fontColor: "white",
					legendText: "All time heights",
					toolTipContent: 'Height: {label} <br>Instances: {y}',
					dataPoints: height
				}, {
					type: "column",
					showInLegend: true,
					color: "red",
					fontColor: "white",
					legendText: "Assist leaders(450)",
					toolTipContent: 'Height: {label} <br>Instances: {y}',
					dataPoints: ast_ht
				}, {
					type: "column",
					showInLegend: true,
					toolTipContent: 'Height: {x} <br>Instances: {y}',
					color: "green",
					fontColor: "white",
					legendText: "Rebound Leaders(450)",
					dataPoints: trb_ht
				}]
			});
        chart4.render()
        }
        if (cont5) {
			var chart5 = new CanvasJS.Chart(cont5, {
				backgroundColor: null,
				animationEnabled: true,
				colorSet: "greenShades",
				title: {
                    text: "Top 450 Players by Assists and Rebounds Height Distribution",
                    wrap: true,
                    horizontalAlign: "center",
                    fontColor: "white",
				},
				legend: {
					fontColor: "white"
				},
				axisX: {
					labelFontColor: "none",
					title: "Height in Inches",
					gridThickness: 0,
					tickLength: 1,
					labelAngle: -20,
					interval: 1,
				},
				axisY: {
					labelFontColor: "white",
					title: "Occurrences",
					gridThickness: 0,
					tickLength: 1,
					interval: 50,
					maximum: 100,
					labelWrap: true,
					labelFontColor: "white"
				},
				data: [{
					type: "column",
					showInLegend: true,
					color: "red",
					fontColor: "white",
					legendText: "Assist leaders(450)",
					toolTipContent: 'Height: {label} <br>Instances: {y}',
					dataPoints: ast_ht
				}, {
					type: "column",
					showInLegend: true,
					toolTipContent: 'Height: {x} <br>Instances: {y}',
					color: "green",
					fontColor: "white",
					legendText: "Rebound Leaders(450)",
					dataPoints: trb_ht
				}]
			});
        chart5.render()
        }
		
	}

	function nodark() {
		document.body.classList.remove("dark-mode");
		checkbox.checked = false;
		sessionStorage.setItem("mode", "light");
		if (cont4) {
			var chart4 = new CanvasJS.Chart(cont4, {
				backgroundColor: null,
				animationEnabled: true,
				colorSet: "greenShades",
				title: {
					text: "Player Height Distribution All-Time",
				},
				axisX: {
					labelFontColor: "none",
					title: "Height in Inches",
					gridThickness: 0,
					tickLength: 1,
					labelAngle: -20,
					interval: 1,
				},
				legend: {
					fontColor: "black"
				},
				axisY: {
					title: "Occurrences",
					gridThickness: 0,
					tickLength: 1,
					interval: 50,
					maximum: 300,
					labelWrap: true,
				},
				data: [{
					type: "column",
					showInLegend: true,
					color: "gold",
					legendText: "All time heights",
					toolTipContent: 'Height: {label} <br>Instances: {y}',
					dataPoints: height
				}, {
					type: "column",
					showInLegend: true,
					color: "red",
					legendText: "Assist Leaders(450)",
					toolTipContent: 'Height: {label} <br>Instances: {y}',
					dataPoints: ast_ht
				}, {
					type: "column",
					showInLegend: true,
					toolTipContent: 'Height: {x} <br>Instances: {y}',
					color: "green",
					fontColor: "white",
					legendText: "Rebound Leaders(450)",
					dataPoints: trb_ht
				}]
			});
            chart4.render()
        }
		if (cont5) {
			var chart5 = new CanvasJS.Chart(cont5, {
				backgroundColor: null,
				animationEnabled: true,
				colorSet: "greenShades",
				title: {
                    text: "Top 450 Players by Assists and Rebounds Height Distribution",
                    wrap: true,
                    horizontalAlign: "center",
				},
				axisX: {
					labelFontColor: "none",
					title: "Height in Inches",
					gridThickness: 0,
					tickLength: 1,
					labelAngle: -20,
					interval: 1,
				},
				legend: {
					fontColor: "black"
				},
				axisY: {
					title: "Occurrences",
					gridThickness: 0,
					tickLength: 1,
					interval: 50,
					maximum: 100,
					labelWrap: true,
				},
				data: [{
					type: "column",
					showInLegend: true,
					color: "red",
					legendText: "Assist Leaders(450)",
					toolTipContent: 'Height: {label} <br>Instances: {y}',
					dataPoints: ast_ht
				}, {
					type: "column",
					showInLegend: true,
					toolTipContent: 'Height: {x} <br>Instances: {y}',
					color: "green",
					fontColor: "white",
					legendText: "Rebound Leaders(450)",
					dataPoints: trb_ht
				}]
			});
            chart5.render()
        }
	}
});