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
        chart1.render();
      }
    }
  
    function nodark() {
      document.body.classList.remove("dark-mode");
      checkbox.checked = false;
      sessionStorage.setItem("mode", "light");
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
    }
  });