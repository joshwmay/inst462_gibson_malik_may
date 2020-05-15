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
  var trig = 0;
  var x = 0;
  var pts_pts = [];
    fetch("/pts_pts")
      .then(res => res.json())
      .then(res => res.data.map(c => c.label))
      .then(label => {
        fetch("/pts_pts")
        .then(res => res.json())
        .then(res => res.data.map(c => c.y))
        .then(y => {
          for(let i = 0; i < y.length; i+=1) {            
              pts_pts.push( { label: label[i], y: y[i]});
            }
          })
      }); 
      var pts_rbs = [];
    fetch("/pts_rbs")
      .then(res => res.json())
      .then(res => res.data.map(c => c.label))
      .then(label => {
        fetch("/pts_rbs")
        .then(res => res.json())
        .then(res => res.data.map(c => c.y))
        .then(y => {
          for(let i = 0; i < y.length; i+=1) {            
              pts_rbs.push( { label: label[i], y: y[i]});
            }
          })
      }); 
      var pts_ast = [];
    fetch("/pts_ast")
      .then(res => res.json())
      .then(res => res.data.map(c => c.label))
      .then(label => {
        fetch("/pts_ast")
        .then(res => res.json())
        .then(res => res.data.map(c => c.y))
        .then(y => {
          for(let i = 0; i < y.length; i+=1) {            
              pts_ast.push( { label: label[i], y: y[i]});
            }
          })
      }); 
      var ast_ast = [];
      fetch("/ast_ast")
        .then(res => res.json())
        .then(res => res.data.map(c => c.label))
        .then(label => {
          fetch("/ast_ast")
          .then(res => res.json())
          .then(res => res.data.map(c => c.y))
          .then(y => {
            for(let i = 0; i < y.length; i+=1) {            
                ast_ast.push( { label: label[i], y: y[i]});
              }
            })
        }); 
        var ast_rbs = [];
      fetch("/ast_rbs")
        .then(res => res.json())
        .then(res => res.data.map(c => c.label))
        .then(label => {
          fetch("/ast_rbs")
          .then(res => res.json())
          .then(res => res.data.map(c => c.y))
          .then(y => {
            for(let i = 0; i < y.length; i+=1) {            
                ast_rbs.push( { label: label[i], y: y[i]});
              }
            })
        }); 
        var ast_pts = [];
      fetch("/ast_pts")
        .then(res => res.json())
        .then(res => res.data.map(c => c.label))
        .then(label => {
          fetch("/ast_pts")
          .then(res => res.json())
          .then(res => res.data.map(c => c.y))
          .then(y => {
            for(let i = 0; i < y.length; i+=1) {            
                ast_pts.push( { label: label[i], y: y[i]});
              }
            })
        }); 
        var rbs_pts = [];
        fetch("/rbs_pts")
          .then(res => res.json())
          .then(res => res.data.map(c => c.label))
          .then(label => {
            fetch("/rbs_pts")
            .then(res => res.json())
            .then(res => res.data.map(c => c.y))
            .then(y => {
              for(let i = 0; i < y.length; i+=1) {            
                  rbs_pts.push( { label: label[i], y: y[i]});
                }
              })
          }); 
          var rbs_rbs = [];
        fetch("/rbs_rbs")
          .then(res => res.json())
          .then(res => res.data.map(c => c.label))
          .then(label => {
            fetch("/rbs_rbs")
            .then(res => res.json())
            .then(res => res.data.map(c => c.y))
            .then(y => {
              for(let i = 0; i < y.length; i+=1) {            
                  rbs_rbs.push( { label: label[i], y: y[i]});
                }
              })
          }); 
          var rbs_ast = [];
        fetch("/rbs_ast")
          .then(res => res.json())
          .then(res => res.data.map(c => c.label))
          .then(label => {
            fetch("/rbs_ast")
            .then(res => res.json())
            .then(res => res.data.map(c => c.y))
            .then(y => {
              for(let i = 0; i < y.length; i+=1) {            
                  rbs_ast.push( { label: label[i], y: y[i]});
                }
              })
          }); 
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
    const butt1 = document.querySelector("#pts");    
    const butt2 = document.querySelector("#rbs");
    const butt3 = document.querySelector("#ast");
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
              start.style.color = "white";
              darkmode("0");
  
          } else {
              nodark("0");
              start.innerHTML = "Darkmode";
              start.style.fontSize = "medium";
              start.style.justifycontent = "center";
  
          }
      });
      butt1.addEventListener("click", function() {
        if (checkbox.checked) {
            if (x > 0) {
                start.innerHTML = "Darkmode";
                start.style.fontSize = "medium";
                start.style.justifycontent = "center";
            
            }
            start.style.color = "white";
            darkmode("0");

        } else {
            nodark("0");
            start.innerHTML = "Darkmode";
            start.style.fontSize = "medium";
            start.style.justifycontent = "center";

        }
    });
    butt2.addEventListener("click", function() {
        if (checkbox.checked) {
            if (x > 0) {
                start.innerHTML = "Darkmode";
                start.style.fontSize = "medium";
                start.style.justifycontent = "center";
            
            }
            start.style.color = "white";
            darkmode("1");

        } else {
            nodark("1");
            start.innerHTML = "Darkmode";
            start.style.fontSize = "medium";
            start.style.justifycontent = "center";
        }
    });
    butt3.addEventListener("click", function() {
        if (checkbox.checked) {
            if (x > 0) {
                start.innerHTML = "Darkmode";
                start.style.fontSize = "medium";
                start.style.justifycontent = "center";
            
            }
            start.style.color = "white";
            darkmode("2");

        } else {
            nodark("2");
            start.innerHTML = "Darkmode";
            start.style.fontSize = "medium";
            start.style.justifycontent = "center";
        }
    });
    function chart2(str, str2) {
        if (str2 === "0") {
          var data1 = pts_pts;
          var data2 = ast_pts;
          var data3 = rbs_pts;
        } else if (str2 === "1") {
          var data1 = pts_ast;
          var data2 = ast_ast;
          var data3 = rbs_ast;
        } else {
          var data1 = pts_rbs;
          var data2 = ast_rbs;
          var data3 = rbs_rbs;
        }
      var chart2 = new CanvasJS.Chart(cont2, {
        backgroundColor: null,
        animationEnabled: true,
        title: {
            text: "Top 50 Scorers with Rebounds and Assists",
            fontColor: str
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
            fontColor: str
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
            dataPoints: data1
        },
        {
         name: "Assists",
         showInLegend: true,
         legendMarkerType: "square",
         type: "area",
         color: "blue",
         markerSize: 0,
         dataPoints: data2
        },
        {
            name: "Rebounds",
            showInLegend: true,
            legendMarkerType: "square",
            type: "area",
            color: "#EB7226",
            markerSize: 0,
            dataPoints: data3
        },
    ]            
    });        
    return chart2.render();
  
    }
    function chart5(str) {
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
        fontColor: str,
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
        labelFontColor: str,
        title: "Assists",
        gridThickness: 0,
        tickLength: 1,
        interval: 1,          
        maximum: 15,
        labelWrap: true,
        labelFontColor: str
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
      return chart5.render();
    
    }
    function darkmode(str) {
      document.body.classList.add("dark-mode");
      checkbox.checked = true;
      sessionStorage.setItem("mode", "dark");
      var fill = "white";
      if (cont2) {
        chart2(fill, str)
      } 
      if (cont5) {
        chart5(fill)
      }
    }  
    
    function nodark(str) {
      document.body.classList.remove("dark-mode");
      checkbox.checked = false;
      sessionStorage.setItem("mode", "light");

      if (cont2) {
        chart2("black", str);
      } 
  
      if (cont5) {
        chart5("black")
       }
    }
  });