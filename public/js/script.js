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
}

window.addEventListener("load", () => {
var x = 0;
var ws = [];
fetch("/ws")
  .then(res => res.json())
  .then(res => res.data.map(c => c.x))
  .then(x => {
    fetch("/ws")
    .then(res => res.json())
    .then(res => res.data.map(c => c.y))
    .then(y => {
      for(let i = 0; i < y.length; i+=1) {            
          ws.push( { x: new Date(x[i],1,1), y: y[i]});
        }
      })
  });
  var ppg = [];
  fetch("/ppg")
    .then(res => res.json())
    .then(res => res.data.map(c => c.x))
    .then(x => {
      fetch("/ppg")
      .then(res => res.json())
      .then(res => res.data.map(c => c.y))
      .then(y => {
        for(let i = 0; i < y.length; i+=1) {            
            ppg.push( { x: new Date(x[i],1,1), y: y[i]});
          }
        })
    });
  var gp = [];
  fetch("/gp")
    .then(res => res.json())
    .then(res => res.data.map(c => c.label))
    .then(label => {
      fetch("/gp")
      .then(res => res.json())
      .then(res => res.data.map(c => c.y))
      .then(y => {
        for(let i = 0; i < y.length; i+=1) {            
            gp.push( { label: label[i], y: y[i]});
          }
        })
    });
  var ppgi = [];
  fetch("/ppgi")
    .then(res => res.json())
    .then(res => res.data.map(c => c.label))
    .then(label => {
      fetch("/ppgi")
      .then(res => res.json())
      .then(res => res.data.map(c => c.y))
      .then(y => {
        for(let i = 0; i < y.length; i+=1) {            
            ppgi.push( { label: label[i], y: y[i]});
          }
        })
    });  
  var rbs = [];
  fetch("/rbs")
  .then(res => res.json())
  .then(res => res.data.map(c => c.label))
  .then(label => {
    fetch("/rbs")
    .then(res => res.json())
    .then(res => res.data.map(c => c.y))
    .then(y => {
      for(let i = 0; i < y.length; i+=1) {            
          rbs.push( { label: label[i], y: y[i]});
        }
      })
  });  
  var ast = [];
  fetch("/ast")
  .then(res => res.json())
  .then(res => res.data.map(c => c.label))
  .then(label => {
    fetch("/ast")
    .then(res => res.json())
    .then(res => res.data.map(c => c.y))
    .then(y => {
      for(let i = 0; i < y.length; i+=1) {            
          ast.push( { label: label[i], y: y[i]});
        }
      })
  });  
  var trb_ht = [];
  
  var ast50 = [];
  fetch("/ast50")
  .then(res => res.json())
  .then(res => res.data.map(c => c.label))
  .then(label => {
    fetch("/ast50")
    .then(res => res.json())
    .then(res => res.data.map(c => c.y))
    .then(y => {
      for(let i = 0; i < y.length; i+=1) {            
          ast50.push( { label: label[i], y: y[i]});
        }
      })
  });  
  const cont1 = document.querySelector("#chart1");
  const cont2 = document.querySelector("#chart2");
  const cont3 = document.querySelector("#chart3");
  const cont5 = document.querySelector("#chart5");
  const checkbox = document.querySelector("#dark");
  const start = document.querySelector("#start");
  if (x === 0) {
    start.style.fontSize = "x-large"
  } 
  if (sessionStorage.getItem("mode") == "dark") {
    darkmode();
  } 
  else {
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
    if (cont1) {
      CanvasJS.addColorSet("greenShades",
      [//colorSet Array        
      "#008080",              
      ]);
      var chart1 = new CanvasJS.Chart(cont1, {
      backgroundColor: null,
      animationEnabled: true,
      colorSet: "greenShades",
      title: {
        text: "Top 50 Players by Games Played",
        fontColor: "white",
      },
      axisX: {
        labelFontColor: "none",
        title: "",
        gridThickness: 0,
        tickLength: 1,
        labelAngle: -20,
        interval: 1,
      },
      axisY: {
        labelFontColor: "white",
        title: "Number of Games",
        gridThickness: 0,
        tickLength: 1,
        interval: 200,
        labelWrap: true,
        labelFontColor: "white"
      },
      data: [
        {
          type: "column",
          toolTipContent:
            'Name: {label} <br>Games Played: {y}',
            dataPoints: gp
        },
      ]
      });
      chart1.render();
    
      var chart3 = new CanvasJS.Chart(cont3, {
        backgroundColor: null,
        title: {
            text: "League Averages by Debut Year",
            fontColor: "white"
        },
        axisX: {
            valueFormatString: "YYYY",
            gridThickness: 0,
      tickLength: 0,
        },
        axisY2: {
            title: "",
            gridThickness: 0,
            tickLength: 0,
            maximum: 50,
            labelFontColor: "white"
        },
        toolTip: {
            shared: true
        },
        legend: {
            cursor: "pointer",
            fontColor: "white",
            verticalAlign: "top",
            horizontalAlign: "center",
            dockInsidePlotArea: true,
            itemclick: toogleDataSeries
        },
        data: [
            {
                type:"line",
                axisYType: "secondary",
                name: "Wins Contributed",
                showInLegend: true,
                markerSize: 0,
                dataPoints: ws
            },{
            type:"line",
            axisYType: "secondary",                
            name: "Points Per Game",
            showInLegend: true,
            markerSize: 0,
            dataPoints: ppg
        }]            
    })
    
    function toogleDataSeries(e){
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        } else{
            e.dataSeries.visible = true;
        }            
    }
    chart3.render();
  
    CanvasJS.addColorSet("greenShades",
    [//colorSet Array        
    "#008080",              
    ]);
   
    }
    if (cont2) {
      var chart2 = new CanvasJS.Chart(cont2, {
          backgroundColor: null,
          animationEnabled: true,
          title: {
              text: "Top 50 Scorers with Rebounds and Assists",
              fontColor: "white"
          },
          axisX: {
              labelFontColor: "",
              interval: 1,
              gridThickness: 0,
              tickLength: 0,
            },
          axisY: {
              title: "Avg Per Game",
              maximum: 35,
              gridThickness: 0,
              tickLength: 1,
          },
          legend: {
              verticalAlign: "top",
              horizontalAlign: "right",
              dockInsidePlotArea: true,
              fontColor: "white"
          },
          toolTip:{
              enabled: true,       //disable here
              animationEnabled: true, //disable here
              shared: true
            },
          data: [{
              name: "Points",
              showInLegend: true,
              legendMarkerType: "square",
              type: "area",
              color: "rgba(40,175,101,0.6)",
              markerSize: 0,
              dataPoints: ppgi
          },
          {
           name: "Assists",
           showInLegend: true,
           legendMarkerType: "square",
           type: "area",
           color: "blue",
           markerSize: 0,
           dataPoints: ast
          },
          {
              name: "Rebounds",
              showInLegend: true,
              legendMarkerType: "square",
              type: "area",
              color: "#EB7226",
              markerSize: 0,
              dataPoints: rbs
          },
      ]            
      });        
      chart2.render();
    } 
    if (cont5) {
      CanvasJS.addColorSet("greenShades",
      [//colorSet Array        
      "#008080",              
      ]);
      var chart5 = new CanvasJS.Chart(cont5, {
      backgroundColor: null,
      animationEnabled: true,
      colorSet: "greenShades",
      title: {
        text: "Top 50 Players by Assists",
        fontColor: "white",
      },
      axisX: {
        labelFontColor: "none",
        title: "",
        gridThickness: 0,
        tickLength: 1,
        labelAngle: -20,
        interval: 1,
      },
      axisY: {
        labelFontColor: "white",
        title: "Assists",
        gridThickness: 0,
        tickLength: 1,
        interval: 1,          
        maximum: 15,
        labelWrap: true,
        labelFontColor: "white"
      },
      data: [
        {
          type: "column",
          toolTipContent:
            'Name: {label} <br>Assist Avg Per Game: {y}',
            dataPoints: ast50
        },
      ]
      });
      chart5.render();
    }
  }  
  
  function nodark() {
    document.body.classList.remove("dark-mode");
    checkbox.checked = false;
    sessionStorage.setItem("mode", "light");
    if (cont1) {
      CanvasJS.addColorSet("greenShades",
      [//colorSet Array
      "#E65440",
      "#BF4636",
      "#802E24",
      "#401712"                
      ]);
      var chart1 = new CanvasJS.Chart(cont1, {
      backgroundColor: null,
      animationEnabled: true,
      colorSet: "greenShades",
      title: {
        text: "Top 50 Players by Games Played",
      },
      toolTip:{
          enabled: true,       //disable here
          animationEnabled: true //disable here
        },
      axisX: {
        labelFontColor: "none",
        gridThickness: 0,
        tickLength: 0,
        title: "",
        labelAngle: -20,
        interval: 1,
        labelWrap: true,
      },
      axisY: {
        title: "Number of Games",
        
        gridThickness: 0.5,
        tickLength: 1,
        interval: 200,
        labelWrap: true
      },
      data: [
        {
          type: "column",
          toolTipContent:
            'Name: {label} <br>Games Played: {y}',
          dataPoints: gp
        },
      ]
      });
      chart1.render();
    }
    if (cont2) {
      var chart2 = new CanvasJS.Chart(cont2, {
          backgroundColor: null,
          animationEnabled: true,
          title: {
              text: "Top 50 Scorers with Rebounds and Assists",
          },
          axisX: {
              labelFontColor: "",
              interval: 1,
            },
          axisY: {
              title: "Avg Per Game",
              maximum: 35
          },
          legend: {
              verticalAlign: "top",
              horizontalAlign: "right",
              dockInsidePlotArea: true,
          },
          toolTip:{
              enabled: true,       //disable here
              animationEnabled: true, //disable here
              shared: true
            },
          data: [{
              name: "Points",
              showInLegend: true,
              legendMarkerType: "square",
              type: "area",
              color: "rgba(40,175,101,0.6)",
              markerSize: 0,
              dataPoints: ppgi
          },
          {
           name: "Assists",
           showInLegend: true,
           legendMarkerType: "square",
           type: "area",
           color: "blue",
           markerSize: 0,
           dataPoints: ast
          },
          {
              name: "Rebounds",
              showInLegend: true,
              legendMarkerType: "square",
              type: "area",
              color: "#ffff99",
              markerSize: 0,
              dataPoints: rbs
          },
      ]            
      });     
      chart2.render();
    } 
    if(cont3){
      var chart3 = new CanvasJS.Chart(cont3, {
        backgroundColor: null,
        title: {
            text: "League Averages by Debut Year"
        },
        axisX: {
            valueFormatString: "YYYY",                
        },
        axisY2: {
            title: "",
            maximum: 50,
            gridThickness: 0,
            tickLength: 1,
        },
        toolTip: {
            shared: true
        },
        legend: {
            cursor: "pointer",
            verticalAlign: "top",
            horizontalAlign: "center",
            dockInsidePlotArea: true,
            itemclick: toogleDataSeries
        },
        data: [
            {
                type:"area",
                axisYType: "secondary",
                name: "Wins Contributed",
                showInLegend: true,
                markerSize: 0,
                dataPoints: ws
            },{
            type:"area",
            axisYType: "secondary",
            name: "Points Per Game",
            showInLegend: true,
            markerSize: 0,
            dataPoints: ppg
        }]            
    })        
    function toogleDataSeries(e){
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        } else{
            e.dataSeries.visible = true;
        }            
    }
    chart3.render();
    }

    if (cont5) {
      CanvasJS.addColorSet("greenShades",
      [//colorSet Array        
      "#008080",              
      ]);
      var chart5 = new CanvasJS.Chart(cont5, {
      backgroundColor: null,
      animationEnabled: true,
      colorSet: "greenShades",
      title: {
        text: "Top 50 Players by Assists",
      },
      axisX: {
        title: "",
        gridThickness: 0,
        tickLength: 1,
        labelAngle: -20,
        interval: 1,
        labelFontColor: "none",
      },
      axisY: {
        title: "Assists",
        gridThickness: 0,
        tickLength: 1,
        interval: 1,
        maximum: 15,
        labelWrap: true,
      },
      data: [
        {
          type: "column",
          toolTipContent:
            'Name: {label} <br>Assist Avg Per Game: {y}',
            dataPoints: ast50
        },
      ]
      });
      chart5.render();
    }
  }
});