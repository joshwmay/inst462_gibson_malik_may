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
  
  window.addEventListener("load", () => {
    const cont1 = document.querySelector("#chart1");
    const cont2 = document.querySelector("#chart2");
    const cont3 = document.querySelector("#chart3");
    const checkbox = document.querySelector("#dark");
    //console.log(sessionStorage.getItem("actors"));
  
  
    if (sessionStorage.getItem("mode") == "dark") {
      darkmode();
    } else {
      nodark();
    }
  
    checkbox.addEventListener("change", function() {
      if (checkbox.checked) {
        darkmode();
      } else {
        nodark();
      }
    });
  
    function darkmode() {
      document.body.classList.add("dark-mode");
      checkbox.checked = true;
      sessionStorage.setItem("mode", "dark");
      if (cont1) {
        CanvasJS.addColorSet("greenShades",
        [//colorSet Array
        "#2F4F4F",
        "#008080",
        "#2E8B57",
        "#3CB371",
        "#90EE90"                
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
          labelAngle: -20,
          interval: 1,
        },
        axisY: {
          labelFontColor: "white",
          title: "Number of Games",
          interval: 200,
          labelWrap: true,
          labelFontColor: "white"
        },
        data: [
          {
            type: "column",
            toolTipContent:
              'Name: {label} <br>Games Played: {y}',
              dataPoints: [
                {label:"Jerome Kersey",y:1153},
                {label:"Tree Rollins",y:1156},
                {label:"Johnny Newman",y:1159},
                {label:"Shawn Marion",y:1163},
                {label:"Horace Grant",y:1165},
                {label:"James Edwards",y:1168},
                {label:"Jay Edwards",y:1168},
                {label:"Scottie Pippen",y:1178},
                {label:"Richard Jefferson",y:1181},
                {label:"Terry Cummings",y:1183},
                {label:"Patrick Ewing",y:1183},
                {label:"Patrick Ewing",y:1183},
                {label:"Alex English",y:1193},
                {label:"Dikembe Mutombo",y:1196},
                {label:"Derek Harper",y:1199},
                {label:"Juwan Howard",y:1208},
                {label:"Dale Ellis",y:1209},
                {label:"Steve Nash",y:1217},
                {label:"Dan Issel",y:1218},
                {label:"Pau Gasol",y:1226},
                {label:"Hakeem Olajuwon",y:1238},
                {label:"Julius Erving",y:1243},
                {label:"Tony Parker",y:1254},
                {label:"Paul Silas",y:1254},
                {label:"Otis Thorpe",y:1257},
                {label:"Terry Porter",y:1274},
                {label:"Charles Oakley",y:1282},
                {label:"Sam Perkins",y:1286},
                {label:"Derek Fisher",y:1287},
                {label:"Marc Jackson",y:1296},
                {label:"Mark Jackson",y:1296},
                {label:"Caldwell Jones",y:1299},
                {label:"Elvin Hayes",y:1303},
                {label:"Buck Williams",y:1307},
                {label:"Jamal Crawford",y:1326},
                {label:"Artis Gilmore",y:1329},
                {label:"Gary Payton II",y:1335},
                {label:"Gary Payton",y:1335},
                {label:"Paul Pierce",y:1343},
                {label:"Kobe Bryant",y:1346},
                {label:"Reggie Miller",y:1389},
                {label:"Jason Kidd",y:1391},
                {label:"Tim Duncan",y:1392},
                {label:"Jason Terry",y:1410},
                {label:"Moses Malone",y:1455},
                {label:"Kevin Garnett",y:1462},
                {label:"Karl Malone",y:1476},
                {label:"John Stockton",y:1504},
                {label:"Dirk Nowitzki",y:1522},
                {label:"Kareem Abdul-Jabbar",y:1560},
                {label:"Robert Parish",y:1611}
            ]
          },
        ]
        });
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
              },
            axisY: {
                title: "Avg Per Game",
                maximum: 35
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
                dataPoints: [
                    {label:"Klay Thompson",y:19.5},
                    {label:"Tracy McGrady",y:19.6},
                    {label:"Paul Pierce",y:19.7},
                    {label:"Kiki Vandeweghe",y:19.7},
                    {label:"Mike Mitchell",y:19.8},
                    {label:"Mark Aguirre",y:20},
                    {label:"Bob Lanier",y:20.1},
                    {label:"Magic Johnson",y:20.1},
                    {label:"Marques Johnson",y:20.1},
                    {label:"George McGinnis",y:20.2},
                    {label:"Bob Verga",y:20.2},
                    {label:"Moses Malone",y:20.3},
                    {label:"World Free",y:20.3},
                    {label:"Spencer Haywood",y:20.3},
                    {label:"Clyde Drexler",y:20.4},
                    {label:"Dirk Nowitzki",y:20.7},
                    {label:"Chris Webber",y:20.7},
                    {label:"John Drew",y:20.7},
                    {label:"Charlie Scott",y:20.7},
                    {label:"Glenn Robinson III",y:20.7},
                    {label:"Gilbert Arenas",y:20.7},
                    {label:"John Brisker",y:20.7},
                    {label:"Elvin Hayes",y:21},
                    {label:"Patrick Ewing",y:21},
                    {label:"Mitch Richmond",y:21},
                    {label:"David Robinson",y:21.1},
                    {label:"Billy Cunningham",y:21.2},
                    {label:"DeMarcus Cousins",y:21.2},
                    {label:"Alex English",y:21.5},
                    {label:"Hakeem Olajuwon",y:21.8},
                    {label:"Willie Somerset",y:21.9},
                    {label:"Dwyane Wade",y:22},
                    {label:"Charles Barkley",y:22.1},
                    {label:"Bob McAdoo",y:22.1},
                    {label:"Bernard King",y:22.5},
                    {label:"Dan Issel",y:22.6},
                    {label:"David Thompson",y:22.7},
                    {label:"Julius Erving",y:24.2},
                    {label:"Peter Maravich",y:24.2},
                    {label:"Adrian Dantley",y:24.3},
                    {label:"Larry Bird",y:24.3},
                    {label:"Kareem Abdul-Jabbar",y:24.6},
                    {label:"Dominique Wilkins",y:24.8},
                    {label:"Rick Barry",y:24.8},
                    {label:"Karl Malone",y:25},
                    {label:"Kobe Bryant",y:25},
                    {label:"George Gervin",y:25.1},
                    {label:"Allen Iverson",y:26.7},
                    {label:"Kevin Durant",y:27},
                    {label:"Michael Jordan",y:30.1}
                    
                ]
            },
            {
             name: "Assists",
             showInLegend: true,
             legendMarkerType: "square",
             type: "area",
             color: "blue",
             markerSize: 0,
             dataPoints: [
                {label:"Klay Thompson",y:2.3},
                {label:"Tracy McGrady",y:4.4},
                {label:"Paul Pierce",y:3.5},
                {label:"Kiki Vandeweghe",y:2.1},
                {label:"Mike Mitchell",y:1.3},
                {label:"Mark Aguirre",y:3.1},
                {label:"Bob Lanier",y:3.1},
                {label:"Magic Johnson",y:3.6},
                {label:"Marques Johnson",y:3.6},
                {label:"George McGinnis",y:3.7},
                {label:"Bob Verga",y:2.9},
                {label:"Moses Malone",y:1.3},
                {label:"World Free",y:3.7},
                {label:"Spencer Haywood",y:1.8},
                {label:"Clyde Drexler",y:5.6},
                {label:"Dirk Nowitzki",y:2.4},
                {label:"Chris Webber",y:4.2},
                {label:"John Drew",y:1.7},
                {label:"Charlie Scott",y:4.9},
                {label:"Glenn Robinson III",y:2.7},
                {label:"Gilbert Arenas",y:5.3},
                {label:"John Brisker",y:2.4},
                {label:"Elvin Hayes",y:1.8},
                {label:"Patrick Ewing",y:1.9},
                {label:"Mitch Richmond",y:3.5},
                {label:"David Robinson",y:2.5},
                {label:"Billy Cunningham",y:4.3},
                {label:"DeMarcus Cousins",y:3.2},
                {label:"Alex English",y:3.6},
                {label:"Hakeem Olajuwon",y:2.5},
                {label:"Willie Somerset",y:3.6},
                {label:"Dwyane Wade",y:5.4},
                {label:"Charles Barkley",y:3.9},
                {label:"Bob McAdoo",y:2.3},
                {label:"Bernard King",y:3.3},
                {label:"Dan Issel",y:2.4},
                {label:"David Thompson",y:3.3},
                {label:"Julius Erving",y:4.2},
                {label:"Peter Maravich",y:5.4},
                {label:"Adrian Dantley",y:3},
                {label:"Larry Bird",y:6.3},
                {label:"Kareem Abdul-Jabbar",y:3.6},
                {label:"Dominique Wilkins",y:2.5},
                {label:"Rick Barry",y:4.9},
                {label:"Karl Malone",y:3.6},
                {label:"Kobe Bryant",y:4.7},
                {label:"George Gervin",y:2.6},
                {label:"Allen Iverson",y:6.2},
                {label:"Kevin Durant",y:4.1},
                {label:"Michael Jordan",y:5.3}


             ]
            },
            {
                name: "Rebounds",
                showInLegend: true,
                legendMarkerType: "square",
                type: "area",
                color: "#ffff99",
                markerSize: 0,
                dataPoints: [
                    {label:"Klay Thompson",y:3.5},
                    {label:"Tracy McGrady",y:5.6},
                    {label:"Paul Pierce",y:5.6},
                    {label:"Kiki Vandeweghe",y:3.4},
                    {label:"Mike Mitchell",y:5.6},
                    {label:"Mark Aguirre",y:5},
                    {label:"Bob Lanier",y:10.1},
                    {label:"Magic Johnson",y:7},
                    {label:"Marques Johnson",y:7},
                    {label:"George McGinnis",y:11},
                    {label:"Bob Verga",y:3.9},
                    {label:"Moses Malone",y:12.3},
                    {label:"World Free",y:2.7},
                    {label:"Spencer Haywood",y:10.3},
                    {label:"Clyde Drexler",y:6.1},
                    {label:"Dirk Nowitzki",y:7.5},
                    {label:"Chris Webber",y:9.8},
                    {label:"John Drew",y:6.9},
                    {label:"Charlie Scott",y:4},
                    {label:"Glenn Robinson III",y:6.1},
                    {label:"Gilbert Arenas",y:3.9},
                    {label:"John Brisker",y:6.5},
                    {label:"Elvin Hayes",y:12.5},
                    {label:"Patrick Ewing",y:9.8},
                    {label:"Mitch Richmond",y:3.9},
                    {label:"David Robinson",y:10.6},
                    {label:"Billy Cunningham",y:10.4},
                    {label:"DeMarcus Cousins",y:10.9},
                    {label:"Alex English",y:5.5},
                    {label:"Hakeem Olajuwon",y:11.1},
                    {label:"Willie Somerset",y:4.6},
                    {label:"Dwyane Wade",y:4.7},
                    {label:"Charles Barkley",y:11.7},
                    {label:"Bob McAdoo",y:9.4},
                    {label:"Bernard King",y:5.8},
                    {label:"Dan Issel",y:9.1},
                    {label:"David Thompson",y:4.1},
                    {label:"Julius Erving",y:8.5},
                    {label:"Peter Maravich",y:4.2},
                    {label:"Adrian Dantley",y:5.7},
                    {label:"Larry Bird",y:10},
                    {label:"Kareem Abdul-Jabbar",y:11.2},
                    {label:"Dominique Wilkins",y:6.7},
                    {label:"Rick Barry",y:6.7},
                    {label:"Karl Malone",y:10.1},
                    {label:"Kobe Bryant",y:5.2},
                    {label:"George Gervin",y:5.3},
                    {label:"Allen Iverson",y:3.7},
                    {label:"Kevin Durant",y:7.1},
                    {label:"Michael Jordan",y:6.2}                  
                ]
            },
        ]
            
        });        
      }
      if (cont3) {
        var chart3 = new CanvasJS.Chart(cont3, {
            backgroundColor: null,
            title: {
                text: "League Averages by Debut Year",
                fontColor: "white"
            },
            axisX: {
                valueFormatString: "YYYY"
            },
            axisY2: {
                title: "",
                maximum: 100,
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
                    dataPoints: [		
                        { x: new Date(1967,1,1),y:23.1},
                        { x: new Date(1968,1,1),y:19.7},
                        { x: new Date(1969,1,1),y:24.2},
                        { x: new Date(1970,1,1),y:39.4},
                        { x: new Date(1971,1,1),y:28.1},
                        { x: new Date(1972,1,1),y:26.3},
                        { x: new Date(1973,1,1),y:26.6},
                        { x: new Date(1974,1,1),y:32.9},
                        { x: new Date(1975,1,1),y:24.9},
                        { x: new Date(1976,1,1),y:34.4},
                        { x: new Date(1977,1,1),y:32.6},
                        { x: new Date(1978,1,1),y:19.5},
                        { x: new Date(1979,1,1),y:17.6},
                        { x: new Date(1980,1,1),y:14.4},
                        { x: new Date(1981,1,1),y:22.6},
                        { x: new Date(1982,1,1),y:14.7},
                        { x: new Date(1983,1,1),y:18.5},
                        { x: new Date(1984,1,1),y:29.3},
                        { x: new Date(1985,1,1),y:28.3},
                        { x: new Date(1986,1,1),y:16.1},
                        { x: new Date(1987,1,1),y:20.3},
                        { x: new Date(1988,1,1),y:15.2},
                        { x: new Date(1989,1,1),y:14.1},
                        { x: new Date(1990,1,1),y:17.1},
                        { x: new Date(1991,1,1),y:16.7},
                        { x: new Date(1992,1,1),y:12.2},
                        { x: new Date(1993,1,1),y:18.2},
                        { x: new Date(1994,1,1),y:15},
                        { x: new Date(1995,1,1),y:19.6},
                        { x: new Date(1996,1,1),y:19.9},
                        { x: new Date(1997,1,1),y:15.5},
                        { x: new Date(1998,1,1),y:0},
                        { x: new Date(1999,1,1),y:21.4},
                        { x: new Date(2000,1,1),y:14.5},
                        { x: new Date(2001,1,1),y:20.2},
                        { x: new Date(2002,1,1),y:14},
                        { x: new Date(2003,1,1),y:18.1},
                        { x: new Date(2004,1,1),y:14.2},
                        { x: new Date(2005,1,1),y:11.7},
                        { x: new Date(2006,1,1),y:6.1},
                        { x: new Date(2007,1,1),y:6.8},
                        { x: new Date(2008,1,1),y:9.6},
                        { x: new Date(2009,1,1),y:9.6},
                        { x: new Date(2010,1,1),y:7.8},
                        { x: new Date(2011,1,1),y:3.1},
                        { x: new Date(2012,1,1),y:2.6},
                        { x: new Date(2013,1,1),y:1.5},
                        { x: new Date(2014,1,1),y:1.2},
                        { x: new Date(2015,1,1),y:1},
                        { x: new Date(2016,1,1),y:0.5},
                        { x: new Date(2017,1,1),y:0.4},
                        { x: new Date(2018,1,1),y:0},
                        { x: new Date(2019,1,1),y:0}    
                    ]
                },{
                type:"line",
                axisYType: "secondary",
                name: "Points Per Game",
                showInLegend: true,
                markerSize: 0,
                dataPoints: [		
                    { x: new Date(1967,1,1),y:11.6},
                    { x: new Date(1968,1,1),y:8.5},
                    { x: new Date(1969,1,1),y:9.6},
                    { x: new Date(1970,1,1),y:12.2},
                    { x: new Date(1971,1,1),y:9},
                    { x: new Date(1972,1,1),y:9.7},
                    { x: new Date(1973,1,1),y:11.1},
                    { x: new Date(1974,1,1),y:10.1},
                    { x: new Date(1975,1,1),y:9.2},
                    { x: new Date(1976,1,1),y:9.9},
                    { x: new Date(1977,1,1),y:9.7},
                    { x: new Date(1978,1,1),y:8.5},
                    { x: new Date(1979,1,1),y:7.3},
                    { x: new Date(1980,1,1),y:6.6},
                    { x: new Date(1981,1,1),y:7.8},
                    { x: new Date(1982,1,1),y:6.1},
                    { x: new Date(1983,1,1),y:6.7},
                    { x: new Date(1984,1,1),y:6.9},
                    { x: new Date(1985,1,1),y:7.1},
                    { x: new Date(1986,1,1),y:6.5},
                    { x: new Date(1987,1,1),y:6.1},
                    { x: new Date(1988,1,1),y:6.2},
                    { x: new Date(1989,1,1),y:5.6},
                    { x: new Date(1990,1,1),y:6.2},
                    { x: new Date(1991,1,1),y:6},
                    { x: new Date(1992,1,1),y:5.8},
                    { x: new Date(1993,1,1),y:6.8},
                    { x: new Date(1994,1,1),y:5.9},
                    { x: new Date(1995,1,1),y:6},
                    { x: new Date(1996,1,1),y:6.1},
                    { x: new Date(1997,1,1),y:5.3},
                    { x: new Date(1998,1,1),y:1.2},
                    { x: new Date(1999,1,1),y:6.6},
                    { x: new Date(2000,1,1),y:5.9},
                    { x: new Date(2001,1,1),y:6.3},
                    { x: new Date(2002,1,1),y:5.7},
                    { x: new Date(2003,1,1),y:6.5},
                    { x: new Date(2004,1,1),y:5.3},
                    { x: new Date(2005,1,1),y:5.5},
                    { x: new Date(2006,1,1),y:4.4},
                    { x: new Date(2007,1,1),y:4.7},
                    { x: new Date(2008,1,1),y:5.6},
                    { x: new Date(2009,1,1),y:6.2},
                    { x: new Date(2010,1,1),y:5.3},
                    { x: new Date(2011,1,1),y:3.9},
                    { x: new Date(2012,1,1),y:3.9},
                    { x: new Date(2013,1,1),y:3.8},
                    { x: new Date(2014,1,1),y:3.1},
                    { x: new Date(2015,1,1),y:3.5},
                    { x: new Date(2016,1,1),y:3.5},
                    { x: new Date(2017,1,1),y:3.2},
                    { x: new Date(2018,1,1),y:3.3},
                    { x: new Date(2019,1,1),y:3}

                ]
            },
            {
                type: "line",
                axisYType: "secondary",
                name: "Height(In Inches)",
                showInLegend: true,
                markerSize: 0,
                dataPoints: [
                    { x: new Date(1967,1,1),y:77.9},
                    { x: new Date(1968,1,1),y:78.2},
                    { x: new Date(1969,1,1),y:77.2},
                    { x: new Date(1970,1,1),y:78.6},
                    { x: new Date(1971,1,1),y:79},
                    { x: new Date(1972,1,1),y:77.2},
                    { x: new Date(1973,1,1),y:78.5},
                    { x: new Date(1974,1,1),y:78.4},
                    { x: new Date(1975,1,1),y:78.4},
                    { x: new Date(1976,1,1),y:78.1},
                    { x: new Date(1977,1,1),y:77.7},
                    { x: new Date(1978,1,1),y:78.2},
                    { x: new Date(1979,1,1),y:78.4},
                    { x: new Date(1980,1,1),y:78.1},
                    { x: new Date(1981,1,1),y:78.4},
                    { x: new Date(1982,1,1),y:79.1},
                    { x: new Date(1983,1,1),y:78.9},
                    { x: new Date(1984,1,1),y:79},
                    { x: new Date(1985,1,1),y:78.7},
                    { x: new Date(1986,1,1),y:79.2},
                    { x: new Date(1987,1,1),y:78.6},
                    { x: new Date(1988,1,1),y:78.5},
                    { x: new Date(1989,1,1),y:78.3},
                    { x: new Date(1990,1,1),y:78.7},
                    { x: new Date(1991,1,1),y:78.7},
                    { x: new Date(1992,1,1),y:78.1},
                    { x: new Date(1993,1,1),y:79.5},
                    { x: new Date(1994,1,1),y:79.1},
                    { x: new Date(1995,1,1),y:77.9},
                    { x: new Date(1996,1,1),y:78.4},
                    { x: new Date(1997,1,1),y:78.6},
                    { x: new Date(1998,1,1),y:79.5},
                    { x: new Date(1999,1,1),y:78.4},
                    { x: new Date(2000,1,1),y:79.9},
                    { x: new Date(2001,1,1),y:79.2},
                    { x: new Date(2002,1,1),y:79.8},
                    { x: new Date(2003,1,1),y:78.7},
                    { x: new Date(2004,1,1),y:78.9},
                    { x: new Date(2005,1,1),y:78.3},
                    { x: new Date(2006,1,1),y:79.2},
                    { x: new Date(2007,1,1),y:79.7},
                    { x: new Date(2008,1,1),y:79.8},
                    { x: new Date(2009,1,1),y:78.5},
                    { x: new Date(2010,1,1),y:79.4},
                    { x: new Date(2011,1,1),y:78.1},
                    { x: new Date(2012,1,1),y:78.8},
                    { x: new Date(2013,1,1),y:78.5},
                    { x: new Date(2014,1,1),y:79},
                    { x: new Date(2015,1,1),y:79},
                    { x: new Date(2016,1,1),y:78.1},
                    { x: new Date(2017,1,1),y:78.3},
                    { x: new Date(2018,1,1),y:77.8},
                    { x: new Date(2019,1,1),y:78.3}
                ]
            }]
            
        })
        
        function toogleDataSeries(e){
            if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                e.dataSeries.visible = false;
            } else{
                e.dataSeries.visible = true;
            }
            
        }
      }
      chart1.render();
      chart2.render();
      chart3.render();
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
          title: "",
          labelAngle: -20,
          interval: 1,
          labelWrap: true,
        },
        axisY: {
          title: "Number of Games",
          interval: 200,
          labelWrap: true
        },
        data: [
          {
            type: "column",
            toolTipContent:
              'Name: {label} <br>Games Played: {y}',
            dataPoints: [
              {label:"Jerome Kersey",y:1153},
              {label:"Tree Rollins",y:1156},
              {label:"Johnny Newman",y:1159},
              {label:"Shawn Marion",y:1163},
              {label:"Horace Grant",y:1165},
              {label:"James Edwards",y:1168},
              {label:"Jay Edwards",y:1168},
              {label:"Scottie Pippen",y:1178},
              {label:"Richard Jefferson",y:1181},
              {label:"Terry Cummings",y:1183},
              {label:"Patrick Ewing",y:1183},
              {label:"Patrick Ewing",y:1183},
              {label:"Alex English",y:1193},
              {label:"Dikembe Mutombo",y:1196},
              {label:"Derek Harper",y:1199},
              {label:"Juwan Howard",y:1208},
              {label:"Dale Ellis",y:1209},
              {label:"Steve Nash",y:1217},
              {label:"Dan Issel",y:1218},
              {label:"Pau Gasol",y:1226},
              {label:"Hakeem Olajuwon",y:1238},
              {label:"Julius Erving",y:1243},
              {label:"Tony Parker",y:1254},
              {label:"Paul Silas",y:1254},
              {label:"Otis Thorpe",y:1257},
              {label:"Terry Porter",y:1274},
              {label:"Charles Oakley",y:1282},
              {label:"Sam Perkins",y:1286},
              {label:"Derek Fisher",y:1287},
              {label:"Marc Jackson",y:1296},
              {label:"Mark Jackson",y:1296},
              {label:"Caldwell Jones",y:1299},
              {label:"Elvin Hayes",y:1303},
              {label:"Buck Williams",y:1307},
              {label:"Jamal Crawford",y:1326},
              {label:"Artis Gilmore",y:1329},
              {label:"Gary Payton II",y:1335},
              {label:"Gary Payton",y:1335},
              {label:"Paul Pierce",y:1343},
              {label:"Kobe Bryant",y:1346},
              {label:"Reggie Miller",y:1389},
              {label:"Jason Kidd",y:1391},
              {label:"Tim Duncan",y:1392},
              {label:"Jason Terry",y:1410},
              {label:"Moses Malone",y:1455},
              {label:"Kevin Garnett",y:1462},
              {label:"Karl Malone",y:1476},
              {label:"John Stockton",y:1504},
              {label:"Dirk Nowitzki",y:1522},
              {label:"Kareem Abdul-Jabbar",y:1560},
              {label:"Robert Parish",y:1611}
                                               
            ]
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
                dataPoints: [
                    {label:"Klay Thompson",y:19.5},
                    {label:"Tracy McGrady",y:19.6},
                    {label:"Paul Pierce",y:19.7},
                    {label:"Kiki Vandeweghe",y:19.7},
                    {label:"Mike Mitchell",y:19.8},
                    {label:"Mark Aguirre",y:20},
                    {label:"Bob Lanier",y:20.1},
                    {label:"Magic Johnson",y:20.1},
                    {label:"Marques Johnson",y:20.1},
                    {label:"George McGinnis",y:20.2},
                    {label:"Bob Verga",y:20.2},
                    {label:"Moses Malone",y:20.3},
                    {label:"World Free",y:20.3},
                    {label:"Spencer Haywood",y:20.3},
                    {label:"Clyde Drexler",y:20.4},
                    {label:"Dirk Nowitzki",y:20.7},
                    {label:"Chris Webber",y:20.7},
                    {label:"John Drew",y:20.7},
                    {label:"Charlie Scott",y:20.7},
                    {label:"Glenn Robinson III",y:20.7},
                    {label:"Gilbert Arenas",y:20.7},
                    {label:"John Brisker",y:20.7},
                    {label:"Elvin Hayes",y:21},
                    {label:"Patrick Ewing",y:21},
                    {label:"Mitch Richmond",y:21},
                    {label:"David Robinson",y:21.1},
                    {label:"Billy Cunningham",y:21.2},
                    {label:"DeMarcus Cousins",y:21.2},
                    {label:"Alex English",y:21.5},
                    {label:"Hakeem Olajuwon",y:21.8},
                    {label:"Willie Somerset",y:21.9},
                    {label:"Dwyane Wade",y:22},
                    {label:"Charles Barkley",y:22.1},
                    {label:"Bob McAdoo",y:22.1},
                    {label:"Bernard King",y:22.5},
                    {label:"Dan Issel",y:22.6},
                    {label:"David Thompson",y:22.7},
                    {label:"Julius Erving",y:24.2},
                    {label:"Peter Maravich",y:24.2},
                    {label:"Adrian Dantley",y:24.3},
                    {label:"Larry Bird",y:24.3},
                    {label:"Kareem Abdul-Jabbar",y:24.6},
                    {label:"Dominique Wilkins",y:24.8},
                    {label:"Rick Barry",y:24.8},
                    {label:"Karl Malone",y:25},
                    {label:"Kobe Bryant",y:25},
                    {label:"George Gervin",y:25.1},
                    {label:"Allen Iverson",y:26.7},
                    {label:"Kevin Durant",y:27},
                    {label:"Michael Jordan",y:30.1}
                    
                ]
            },
            {
             name: "Assists",
             showInLegend: true,
             legendMarkerType: "square",
             type: "area",
             color: "blue",
             markerSize: 0,
             dataPoints: [
                {label:"Klay Thompson",y:2.3},
                {label:"Tracy McGrady",y:4.4},
                {label:"Paul Pierce",y:3.5},
                {label:"Kiki Vandeweghe",y:2.1},
                {label:"Mike Mitchell",y:1.3},
                {label:"Mark Aguirre",y:3.1},
                {label:"Bob Lanier",y:3.1},
                {label:"Magic Johnson",y:3.6},
                {label:"Marques Johnson",y:3.6},
                {label:"George McGinnis",y:3.7},
                {label:"Bob Verga",y:2.9},
                {label:"Moses Malone",y:1.3},
                {label:"World Free",y:3.7},
                {label:"Spencer Haywood",y:1.8},
                {label:"Clyde Drexler",y:5.6},
                {label:"Dirk Nowitzki",y:2.4},
                {label:"Chris Webber",y:4.2},
                {label:"John Drew",y:1.7},
                {label:"Charlie Scott",y:4.9},
                {label:"Glenn Robinson III",y:2.7},
                {label:"Gilbert Arenas",y:5.3},
                {label:"John Brisker",y:2.4},
                {label:"Elvin Hayes",y:1.8},
                {label:"Patrick Ewing",y:1.9},
                {label:"Mitch Richmond",y:3.5},
                {label:"David Robinson",y:2.5},
                {label:"Billy Cunningham",y:4.3},
                {label:"DeMarcus Cousins",y:3.2},
                {label:"Alex English",y:3.6},
                {label:"Hakeem Olajuwon",y:2.5},
                {label:"Willie Somerset",y:3.6},
                {label:"Dwyane Wade",y:5.4},
                {label:"Charles Barkley",y:3.9},
                {label:"Bob McAdoo",y:2.3},
                {label:"Bernard King",y:3.3},
                {label:"Dan Issel",y:2.4},
                {label:"David Thompson",y:3.3},
                {label:"Julius Erving",y:4.2},
                {label:"Peter Maravich",y:5.4},
                {label:"Adrian Dantley",y:3},
                {label:"Larry Bird",y:6.3},
                {label:"Kareem Abdul-Jabbar",y:3.6},
                {label:"Dominique Wilkins",y:2.5},
                {label:"Rick Barry",y:4.9},
                {label:"Karl Malone",y:3.6},
                {label:"Kobe Bryant",y:4.7},
                {label:"George Gervin",y:2.6},
                {label:"Allen Iverson",y:6.2},
                {label:"Kevin Durant",y:4.1},
                {label:"Michael Jordan",y:5.3}


             ]
            },
            {
                name: "Rebounds",
                showInLegend: true,
                legendMarkerType: "square",
                type: "area",
                color: "#ffff99",
                markerSize: 0,
                dataPoints: [
                    {label:"Klay Thompson",y:3.5},
                    {label:"Tracy McGrady",y:5.6},
                    {label:"Paul Pierce",y:5.6},
                    {label:"Kiki Vandeweghe",y:3.4},
                    {label:"Mike Mitchell",y:5.6},
                    {label:"Mark Aguirre",y:5},
                    {label:"Bob Lanier",y:10.1},
                    {label:"Magic Johnson",y:7},
                    {label:"Marques Johnson",y:7},
                    {label:"George McGinnis",y:11},
                    {label:"Bob Verga",y:3.9},
                    {label:"Moses Malone",y:12.3},
                    {label:"World Free",y:2.7},
                    {label:"Spencer Haywood",y:10.3},
                    {label:"Clyde Drexler",y:6.1},
                    {label:"Dirk Nowitzki",y:7.5},
                    {label:"Chris Webber",y:9.8},
                    {label:"John Drew",y:6.9},
                    {label:"Charlie Scott",y:4},
                    {label:"Glenn Robinson III",y:6.1},
                    {label:"Gilbert Arenas",y:3.9},
                    {label:"John Brisker",y:6.5},
                    {label:"Elvin Hayes",y:12.5},
                    {label:"Patrick Ewing",y:9.8},
                    {label:"Mitch Richmond",y:3.9},
                    {label:"David Robinson",y:10.6},
                    {label:"Billy Cunningham",y:10.4},
                    {label:"DeMarcus Cousins",y:10.9},
                    {label:"Alex English",y:5.5},
                    {label:"Hakeem Olajuwon",y:11.1},
                    {label:"Willie Somerset",y:4.6},
                    {label:"Dwyane Wade",y:4.7},
                    {label:"Charles Barkley",y:11.7},
                    {label:"Bob McAdoo",y:9.4},
                    {label:"Bernard King",y:5.8},
                    {label:"Dan Issel",y:9.1},
                    {label:"David Thompson",y:4.1},
                    {label:"Julius Erving",y:8.5},
                    {label:"Peter Maravich",y:4.2},
                    {label:"Adrian Dantley",y:5.7},
                    {label:"Larry Bird",y:10},
                    {label:"Kareem Abdul-Jabbar",y:11.2},
                    {label:"Dominique Wilkins",y:6.7},
                    {label:"Rick Barry",y:6.7},
                    {label:"Karl Malone",y:10.1},
                    {label:"Kobe Bryant",y:5.2},
                    {label:"George Gervin",y:5.3},
                    {label:"Allen Iverson",y:3.7},
                    {label:"Kevin Durant",y:7.1},
                    {label:"Michael Jordan",y:6.2}                  
                ]
            },
        ]
            
        });
        
        
      }
      if (cont3) {
        var chart3 = new CanvasJS.Chart(cont3, {
            backgroundColor: null,
            title: {
                text: "League Averages by Debut Year"
            },
            axisX: {
                valueFormatString: "YYYY"
            },
            axisY2: {
                title: "",
                maximum: 100,
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
                    type:"line",
                    axisYType: "secondary",
                    name: "Wins Contributed",
                    showInLegend: true,
                    markerSize: 0,
                    dataPoints: [		
                        { x: new Date(1967,1,1),y:23.1},
                        { x: new Date(1968,1,1),y:19.7},
                        { x: new Date(1969,1,1),y:24.2},
                        { x: new Date(1970,1,1),y:39.4},
                        { x: new Date(1971,1,1),y:28.1},
                        { x: new Date(1972,1,1),y:26.3},
                        { x: new Date(1973,1,1),y:26.6},
                        { x: new Date(1974,1,1),y:32.9},
                        { x: new Date(1975,1,1),y:24.9},
                        { x: new Date(1976,1,1),y:34.4},
                        { x: new Date(1977,1,1),y:32.6},
                        { x: new Date(1978,1,1),y:19.5},
                        { x: new Date(1979,1,1),y:17.6},
                        { x: new Date(1980,1,1),y:14.4},
                        { x: new Date(1981,1,1),y:22.6},
                        { x: new Date(1982,1,1),y:14.7},
                        { x: new Date(1983,1,1),y:18.5},
                        { x: new Date(1984,1,1),y:29.3},
                        { x: new Date(1985,1,1),y:28.3},
                        { x: new Date(1986,1,1),y:16.1},
                        { x: new Date(1987,1,1),y:20.3},
                        { x: new Date(1988,1,1),y:15.2},
                        { x: new Date(1989,1,1),y:14.1},
                        { x: new Date(1990,1,1),y:17.1},
                        { x: new Date(1991,1,1),y:16.7},
                        { x: new Date(1992,1,1),y:12.2},
                        { x: new Date(1993,1,1),y:18.2},
                        { x: new Date(1994,1,1),y:15},
                        { x: new Date(1995,1,1),y:19.6},
                        { x: new Date(1996,1,1),y:19.9},
                        { x: new Date(1997,1,1),y:15.5},
                        { x: new Date(1998,1,1),y:0},
                        { x: new Date(1999,1,1),y:21.4},
                        { x: new Date(2000,1,1),y:14.5},
                        { x: new Date(2001,1,1),y:20.2},
                        { x: new Date(2002,1,1),y:14},
                        { x: new Date(2003,1,1),y:18.1},
                        { x: new Date(2004,1,1),y:14.2},
                        { x: new Date(2005,1,1),y:11.7},
                        { x: new Date(2006,1,1),y:6.1},
                        { x: new Date(2007,1,1),y:6.8},
                        { x: new Date(2008,1,1),y:9.6},
                        { x: new Date(2009,1,1),y:9.6},
                        { x: new Date(2010,1,1),y:7.8},
                        { x: new Date(2011,1,1),y:3.1},
                        { x: new Date(2012,1,1),y:2.6},
                        { x: new Date(2013,1,1),y:1.5},
                        { x: new Date(2014,1,1),y:1.2},
                        { x: new Date(2015,1,1),y:1},
                        { x: new Date(2016,1,1),y:0.5},
                        { x: new Date(2017,1,1),y:0.4},
                        { x: new Date(2018,1,1),y:0},
                        { x: new Date(2019,1,1),y:0}    
                    ]
                },{
                type:"line",
                axisYType: "secondary",
                name: "Points Per Game",
                showInLegend: true,
                markerSize: 0,
                dataPoints: [		
                    { x: new Date(1967,1,1),y:11.6},
                    { x: new Date(1968,1,1),y:8.5},
                    { x: new Date(1969,1,1),y:9.6},
                    { x: new Date(1970,1,1),y:12.2},
                    { x: new Date(1971,1,1),y:9},
                    { x: new Date(1972,1,1),y:9.7},
                    { x: new Date(1973,1,1),y:11.1},
                    { x: new Date(1974,1,1),y:10.1},
                    { x: new Date(1975,1,1),y:9.2},
                    { x: new Date(1976,1,1),y:9.9},
                    { x: new Date(1977,1,1),y:9.7},
                    { x: new Date(1978,1,1),y:8.5},
                    { x: new Date(1979,1,1),y:7.3},
                    { x: new Date(1980,1,1),y:6.6},
                    { x: new Date(1981,1,1),y:7.8},
                    { x: new Date(1982,1,1),y:6.1},
                    { x: new Date(1983,1,1),y:6.7},
                    { x: new Date(1984,1,1),y:6.9},
                    { x: new Date(1985,1,1),y:7.1},
                    { x: new Date(1986,1,1),y:6.5},
                    { x: new Date(1987,1,1),y:6.1},
                    { x: new Date(1988,1,1),y:6.2},
                    { x: new Date(1989,1,1),y:5.6},
                    { x: new Date(1990,1,1),y:6.2},
                    { x: new Date(1991,1,1),y:6},
                    { x: new Date(1992,1,1),y:5.8},
                    { x: new Date(1993,1,1),y:6.8},
                    { x: new Date(1994,1,1),y:5.9},
                    { x: new Date(1995,1,1),y:6},
                    { x: new Date(1996,1,1),y:6.1},
                    { x: new Date(1997,1,1),y:5.3},
                    { x: new Date(1998,1,1),y:1.2},
                    { x: new Date(1999,1,1),y:6.6},
                    { x: new Date(2000,1,1),y:5.9},
                    { x: new Date(2001,1,1),y:6.3},
                    { x: new Date(2002,1,1),y:5.7},
                    { x: new Date(2003,1,1),y:6.5},
                    { x: new Date(2004,1,1),y:5.3},
                    { x: new Date(2005,1,1),y:5.5},
                    { x: new Date(2006,1,1),y:4.4},
                    { x: new Date(2007,1,1),y:4.7},
                    { x: new Date(2008,1,1),y:5.6},
                    { x: new Date(2009,1,1),y:6.2},
                    { x: new Date(2010,1,1),y:5.3},
                    { x: new Date(2011,1,1),y:3.9},
                    { x: new Date(2012,1,1),y:3.9},
                    { x: new Date(2013,1,1),y:3.8},
                    { x: new Date(2014,1,1),y:3.1},
                    { x: new Date(2015,1,1),y:3.5},
                    { x: new Date(2016,1,1),y:3.5},
                    { x: new Date(2017,1,1),y:3.2},
                    { x: new Date(2018,1,1),y:3.3},
                    { x: new Date(2019,1,1),y:3}

                ]
            },
            {
                type: "line",
                axisYType: "secondary",
                name: "Height(In Inches)",
                showInLegend: true,
                markerSize: 0,
                dataPoints: [
                    { x: new Date(1967,1,1),y:77.9},
                    { x: new Date(1968,1,1),y:78.2},
                    { x: new Date(1969,1,1),y:77.2},
                    { x: new Date(1970,1,1),y:78.6},
                    { x: new Date(1971,1,1),y:79},
                    { x: new Date(1972,1,1),y:77.2},
                    { x: new Date(1973,1,1),y:78.5},
                    { x: new Date(1974,1,1),y:78.4},
                    { x: new Date(1975,1,1),y:78.4},
                    { x: new Date(1976,1,1),y:78.1},
                    { x: new Date(1977,1,1),y:77.7},
                    { x: new Date(1978,1,1),y:78.2},
                    { x: new Date(1979,1,1),y:78.4},
                    { x: new Date(1980,1,1),y:78.1},
                    { x: new Date(1981,1,1),y:78.4},
                    { x: new Date(1982,1,1),y:79.1},
                    { x: new Date(1983,1,1),y:78.9},
                    { x: new Date(1984,1,1),y:79},
                    { x: new Date(1985,1,1),y:78.7},
                    { x: new Date(1986,1,1),y:79.2},
                    { x: new Date(1987,1,1),y:78.6},
                    { x: new Date(1988,1,1),y:78.5},
                    { x: new Date(1989,1,1),y:78.3},
                    { x: new Date(1990,1,1),y:78.7},
                    { x: new Date(1991,1,1),y:78.7},
                    { x: new Date(1992,1,1),y:78.1},
                    { x: new Date(1993,1,1),y:79.5},
                    { x: new Date(1994,1,1),y:79.1},
                    { x: new Date(1995,1,1),y:77.9},
                    { x: new Date(1996,1,1),y:78.4},
                    { x: new Date(1997,1,1),y:78.6},
                    { x: new Date(1998,1,1),y:79.5},
                    { x: new Date(1999,1,1),y:78.4},
                    { x: new Date(2000,1,1),y:79.9},
                    { x: new Date(2001,1,1),y:79.2},
                    { x: new Date(2002,1,1),y:79.8},
                    { x: new Date(2003,1,1),y:78.7},
                    { x: new Date(2004,1,1),y:78.9},
                    { x: new Date(2005,1,1),y:78.3},
                    { x: new Date(2006,1,1),y:79.2},
                    { x: new Date(2007,1,1),y:79.7},
                    { x: new Date(2008,1,1),y:79.8},
                    { x: new Date(2009,1,1),y:78.5},
                    { x: new Date(2010,1,1),y:79.4},
                    { x: new Date(2011,1,1),y:78.1},
                    { x: new Date(2012,1,1),y:78.8},
                    { x: new Date(2013,1,1),y:78.5},
                    { x: new Date(2014,1,1),y:79},
                    { x: new Date(2015,1,1),y:79},
                    { x: new Date(2016,1,1),y:78.1},
                    { x: new Date(2017,1,1),y:78.3},
                    { x: new Date(2018,1,1),y:77.8},
                    { x: new Date(2019,1,1),y:78.3}
                ]
            }]
            
        })
        
        function toogleDataSeries(e){
            if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                e.dataSeries.visible = false;
            } else{
                e.dataSeries.visible = true;
            }
            
        }
      }
      chart1.render();
      chart2.render();
      chart3.render();
    }
  });