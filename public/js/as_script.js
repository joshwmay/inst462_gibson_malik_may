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

var pts_pts = [
    { label: "Magic Johnson", y: 19.5 },
    { label: "Tracy McGrady", y: 19.6 },
    { label: "Paul Pierce", y: 19.7 },
    { label: "Kiki Vandeweghe", y: 19.7 },
    { label: "Mike Mitchell", y: 19.8 },
    { label: "Mark Aguirre", y: 20 },
    { label: "Bob Lanier", y: 20.1 },
    { label: "George McGinnis", y: 20.2 },
    { label: "Bob Verga", y: 20.2 },
    { label: "World Free", y: 20.3 },
    { label: "Spencer Haywood", y: 20.3 },
    { label: "Moses Malone", y: 20.3 },
    { label: "Clyde Drexler", y: 20.4 },
    { label: "Gilbert Arenas", y: 20.7 },
    { label: "John Brisker", y: 20.7 },
    { label: "John Drew", y: 20.7 },
    { label: "Dirk Nowitzki", y: 20.7 },
    { label: "Glenn Robinson", y: 20.7 },
    { label: "Glenn Robinson III", y: 20.7 },
    { label: "Charlie Scott", y: 20.7 },
    { label: "Chris Webber", y: 20.7 },
    { label: "Patrick Ewing", y: 21 },
    { label: "Elvin Hayes", y: 21 },
    { label: "Mitch Richmond", y: 21 },
    { label: "David Robinson", y: 21.1 },
    { label: "DeMarcus Cousins", y: 21.2 },
    { label: "Billy Cunningham", y: 21.2 },
    { label: "Alex English", y: 21.5 },
    { label: "Hakeem Olajuwon", y: 21.8 },
    { label: "Willie Somerset", y: 21.9 },
    { label: "Dwyane Wade", y: 22 },
    { label: "Charles Barkley", y: 22.1 },
    { label: "Bob McAdoo", y: 22.1 },
    { label: "Bernard King", y: 22.5 },
    { label: "Dan Issel", y: 22.6 },
    { label: "David Thompson", y: 22.7 },
    { label: "Julius Erving", y: 24.2 },
    { label: "Pete Maravich", y: 24.2 },
    { label: "Peter Maravich", y: 24.2 },
    { label: "Larry Bird", y: 24.3 },
    { label: "Adrian Dantley", y: 24.3 },
    { label: "Kareem Abdul-Jabbar", y: 24.6 },
    { label: "Rick Barry", y: 24.8 },
    { label: "Dominique Wilkins", y: 24.8 },
    { label: "Kobe Bryant", y: 25 },
    { label: "Karl Malone", y: 25 },
    { label: "George Gervin", y: 25.1 },
    { label: "Allen Iverson", y: 26.7 },
    { label: "Kevin Durant", y: 27 },
    { label: "Michael Jordan", y: 30.1 }

]
var pts_rbs = [
    { label: "World Free", y: 20.3 },
    { label: "Kiki Vandeweghe", y: 19.7 },
    { label: "Allen Iverson", y: 26.7 },
    { label: "Bob Verga", y: 20.2 },
    { label: "Mitch Richmond", y: 21 },
    { label: "Gilbert Arenas", y: 20.7 },
    { label: "Charlie Scott", y: 20.7 },
    { label: "David Thompson", y: 22.7 },
    { label: "Pete Maravich", y: 24.2 },
    { label: "Peter Maravich", y: 24.2 },
    { label: "Willie Somerset", y: 21.9 },
    { label: "Dwyane Wade", y: 22 },
    { label: "Mark Aguirre", y: 20 },
    { label: "Kobe Bryant", y: 25 },
    { label: "George Gervin", y: 25.1 },
    { label: "Alex English", y: 21.5 },
    { label: "Mike Mitchell", y: 19.8 },
    { label: "Paul Pierce", y: 19.7 },
    { label: "Tracy McGrady", y: 19.6 },
    { label: "Adrian Dantley", y: 24.3 },
    { label: "Bernard King", y: 22.5 },
    { label: "Glenn Robinson", y: 20.7 },
    { label: "Glenn Robinson III", y: 20.7 },
    { label: "Clyde Drexler", y: 20.4 },
    { label: "Michael Jordan", y: 30.1 },
    { label: "John Brisker", y: 20.7 },
    { label: "Dominique Wilkins", y: 24.8 },
    { label: "Rick Barry", y: 24.8 },
    { label: "John Drew", y: 20.7 },
    { label: "Kevin Durant", y: 27 },
    { label: "Magic Johnson", y: 19.5 },
    { label: "Dirk Nowitzki", y: 20.7 },
    { label: "Julius Erving", y: 24.2 },
    { label: "Dan Issel", y: 22.6 },
    { label: "Bob McAdoo", y: 22.1 },
    { label: "Patrick Ewing", y: 21 },
    { label: "Chris Webber", y: 20.7 },
    { label: "Larry Bird", y: 24.3 },
    { label: "Bob Lanier", y: 20.1 },
    { label: "Karl Malone", y: 25 },
    { label: "Spencer Haywood", y: 20.3 },
    { label: "Billy Cunningham", y: 21.2 },
    { label: "David Robinson", y: 21.1 },
    { label: "DeMarcus Cousins", y: 21.2 },
    { label: "George McGinnis", y: 20.2 },
    { label: "Hakeem Olajuwon", y: 21.8 },
    { label: "Kareem Abdul-Jabbar", y: 24.6 },
    { label: "Charles Barkley", y: 22.1 },
    { label: "Moses Malone", y: 20.3 },
    { label: "Elvin Hayes", y: 21 }
]
var pts_ast = [
    { label: "Mike Mitchell", y: 19.8 },
    { label: "Moses Malone", y: 20.3 },
    { label: "John Drew", y: 20.7 },
    { label: "Spencer Haywood", y: 20.3 },
    { label: "Elvin Hayes", y: 21 },
    { label: "Patrick Ewing", y: 21 },
    { label: "Kiki Vandeweghe", y: 19.7 },
    { label: "Bob McAdoo", y: 22.1 },
    { label: "John Brisker", y: 20.7 },
    { label: "Dirk Nowitzki", y: 20.7 },
    { label: "Dan Issel", y: 22.6 },
    { label: "David Robinson", y: 21.1 },
    { label: "Hakeem Olajuwon", y: 21.8 },
    { label: "Dominique Wilkins", y: 24.8 },
    { label: "George Gervin", y: 25.1 },
    { label: "Glenn Robinson", y: 20.7 },
    { label: "Glenn Robinson III", y: 20.7 },
    { label: "Bob Verga", y: 20.2 },
    { label: "Adrian Dantley", y: 24.3 },
    { label: "Mark Aguirre", y: 20 },
    { label: "Bob Lanier", y: 20.1 },
    { label: "DeMarcus Cousins", y: 21.2 },
    { label: "Bernard King", y: 22.5 },
    { label: "David Thompson", y: 22.7 },
    { label: "Paul Pierce", y: 19.7 },
    { label: "Mitch Richmond", y: 21 },
    { label: "Alex English", y: 21.5 },
    { label: "Willie Somerset", y: 21.9 },
    { label: "Kareem Abdul-Jabbar", y: 24.6 },
    { label: "Karl Malone", y: 25 },
    { label: "George McGinnis", y: 20.2 },
    { label: "World Free", y: 20.3 },
    { label: "Charles Barkley", y: 22.1 },
    { label: "Kevin Durant", y: 27 },
    { label: "Chris Webber", y: 20.7 },
    { label: "Julius Erving", y: 24.2 },
    { label: "Billy Cunningham", y: 21.2 },
    { label: "Tracy McGrady", y: 19.6 },
    { label: "Kobe Bryant", y: 25 },
    { label: "Charlie Scott", y: 20.7 },
    { label: "Rick Barry", y: 24.8 },
    { label: "Gilbert Arenas", y: 20.7 },
    { label: "Michael Jordan", y: 30.1 },
    { label: "Dwyane Wade", y: 22 },
    { label: "Pete Maravich", y: 24.2 },
    { label: "Peter Maravich", y: 24.2 },
    { label: "Clyde Drexler", y: 20.4 },
    { label: "Allen Iverson", y: 26.7 },
    { label: "Larry Bird", y: 24.3 },
    { label: "Magic Johnson", y: 19.5 }
]
var ast_ast = [
    { label: "Mike Mitchell", y: 1.3 },
    { label: "Moses Malone", y: 1.3 },
    { label: "John Drew", y: 1.7 },
    { label: "Spencer Haywood", y: 1.8 },
    { label: "Elvin Hayes", y: 1.8 },
    { label: "Patrick Ewing", y: 1.9 },
    { label: "Kiki Vandeweghe", y: 2.1 },
    { label: "Bob McAdoo", y: 2.3 },
    { label: "John Brisker", y: 2.4 },
    { label: "Dirk Nowitzki", y: 2.4 },
    { label: "Dan Issel", y: 2.4 },
    { label: "Dominique Wilkins", y: 2.5 },
    { label: "David Robinson", y: 2.5 },
    { label: "Hakeem Olajuwon", y: 2.5 },
    { label: "George Gervin", y: 2.6 },
    { label: "Glenn Robinson", y: 2.7 },
    { label: "Glenn Robinson III", y: 2.7 },
    { label: "Bob Verga", y: 2.9 },
    { label: "Adrian Dantley", y: 3 },
    { label: "Mark Aguirre", y: 3.1 },
    { label: "Bob Lanier", y: 3.1 },
    { label: "DeMarcus Cousins", y: 3.2 },
    { label: "David Thompson", y: 3.3 },
    { label: "Bernard King", y: 3.3 },
    { label: "Mitch Richmond", y: 3.5 },
    { label: "Paul Pierce", y: 3.5 },
    { label: "Willie Somerset", y: 3.6 },
    { label: "Alex English", y: 3.6 },
    { label: "Karl Malone", y: 3.6 },
    { label: "Kareem Abdul-Jabbar", y: 3.6 },
    { label: "World Free", y: 3.7 },
    { label: "George McGinnis", y: 3.7 },
    { label: "Charles Barkley", y: 3.9 },
    { label: "Kevin Durant", y: 4.1 },
    { label: "Julius Erving", y: 4.2 },
    { label: "Chris Webber", y: 4.2 },
    { label: "Billy Cunningham", y: 4.3 },
    { label: "Tracy McGrady", y: 4.4 },
    { label: "Kobe Bryant", y: 4.7 },
    { label: "Charlie Scott", y: 4.9 },
    { label: "Rick Barry", y: 4.9 },
    { label: "Gilbert Arenas", y: 5.3 },
    { label: "Michael Jordan", y: 5.3 },
    { label: "Pete Maravich", y: 5.4 },
    { label: "Peter Maravich", y: 5.4 },
    { label: "Dwyane Wade", y: 5.4 },
    { label: "Clyde Drexler", y: 5.6 },
    { label: "Allen Iverson", y: 6.2 },
    { label: "Larry Bird", y: 6.3 },
    { label: "Magic Johnson", y: 11.2 }
]
var ast_rbs = [
    { label: "World Free", y: 3.7 },
    { label: "Kiki Vandeweghe", y: 2.1 },
    { label: "Allen Iverson", y: 6.2 },
    { label: "Bob Verga", y: 2.9 },
    { label: "Gilbert Arenas", y: 5.3 },
    { label: "Mitch Richmond", y: 3.5 },
    { label: "Charlie Scott", y: 4.9 },
    { label: "David Thompson", y: 3.3 },
    { label: "Pete Maravich", y: 5.4 },
    { label: "Peter Maravich", y: 5.4 },
    { label: "Willie Somerset", y: 3.6 },
    { label: "Dwyane Wade", y: 5.4 },
    { label: "Mark Aguirre", y: 3.1 },
    { label: "Kobe Bryant", y: 4.7 },
    { label: "George Gervin", y: 2.6 },
    { label: "Alex English", y: 3.6 },
    { label: "Tracy McGrady", y: 4.4 },
    { label: "Paul Pierce", y: 3.5 },
    { label: "Mike Mitchell", y: 1.3 },
    { label: "Adrian Dantley", y: 3 },
    { label: "Bernard King", y: 3.3 },
    { label: "Clyde Drexler", y: 5.6 },
    { label: "Glenn Robinson", y: 2.7 },
    { label: "Glenn Robinson III", y: 2.7 },
    { label: "Michael Jordan", y: 5.3 },
    { label: "John Brisker", y: 2.4 },
    { label: "Dominique Wilkins", y: 2.5 },
    { label: "Rick Barry", y: 4.9 },
    { label: "John Drew", y: 1.7 },
    { label: "Kevin Durant", y: 4.1 },
    { label: "Magic Johnson", y: 11.2 },
    { label: "Dirk Nowitzki", y: 2.4 },
    { label: "Julius Erving", y: 4.2 },
    { label: "Dan Issel", y: 2.4 },
    { label: "Bob McAdoo", y: 2.3 },
    { label: "Chris Webber", y: 4.2 },
    { label: "Patrick Ewing", y: 1.9 },
    { label: "Larry Bird", y: 6.3 },
    { label: "Bob Lanier", y: 3.1 },
    { label: "Karl Malone", y: 3.6 },
    { label: "Spencer Haywood", y: 1.8 },
    { label: "Billy Cunningham", y: 4.3 },
    { label: "David Robinson", y: 2.5 },
    { label: "DeMarcus Cousins", y: 3.2 },
    { label: "George McGinnis", y: 3.7 },
    { label: "Hakeem Olajuwon", y: 2.5 },
    { label: "Kareem Abdul-Jabbar", y: 3.6 },
    { label: "Charles Barkley", y: 3.9 },
    { label: "Moses Malone", y: 1.3 },
    { label: "Elvin Hayes", y: 1.8 }

]
var ast_pts = [
    { label: "Magic Johnson", y: 11.2 },
    { label: "Tracy McGrady", y: 4.4 },
    { label: "Kiki Vandeweghe", y: 2.1 },
    { label: "Paul Pierce", y: 3.5 },
    { label: "Mike Mitchell", y: 1.3 },
    { label: "Mark Aguirre", y: 3.1 },
    { label: "Bob Lanier", y: 3.1 },
    { label: "Bob Verga", y: 2.9 },
    { label: "George McGinnis", y: 3.7 },
    { label: "Moses Malone", y: 1.3 },
    { label: "Spencer Haywood", y: 1.8 },
    { label: "World Free", y: 3.7 },
    { label: "Clyde Drexler", y: 5.6 },
    { label: "John Drew", y: 1.7 },
    { label: "John Brisker", y: 2.4 },
    { label: "Dirk Nowitzki", y: 2.4 },
    { label: "Glenn Robinson", y: 2.7 },
    { label: "Glenn Robinson III", y: 2.7 },
    { label: "Chris Webber", y: 4.2 },
    { label: "Charlie Scott", y: 4.9 },
    { label: "Gilbert Arenas", y: 5.3 },
    { label: "Elvin Hayes", y: 1.8 },
    { label: "Patrick Ewing", y: 1.9 },
    { label: "Mitch Richmond", y: 3.5 },
    { label: "David Robinson", y: 2.5 },
    { label: "DeMarcus Cousins", y: 3.2 },
    { label: "Billy Cunningham", y: 4.3 },
    { label: "Alex English", y: 3.6 },
    { label: "Hakeem Olajuwon", y: 2.5 },
    { label: "Willie Somerset", y: 3.6 },
    { label: "Dwyane Wade", y: 5.4 },
    { label: "Bob McAdoo", y: 2.3 },
    { label: "Charles Barkley", y: 3.9 },
    { label: "Bernard King", y: 3.3 },
    { label: "Dan Issel", y: 2.4 },
    { label: "David Thompson", y: 3.3 },
    { label: "Julius Erving", y: 4.2 },
    { label: "Pete Maravich", y: 5.4 },
    { label: "Peter Maravich", y: 5.4 },
    { label: "Adrian Dantley", y: 3 },
    { label: "Larry Bird", y: 6.3 },
    { label: "Kareem Abdul-Jabbar", y: 3.6 },
    { label: "Dominique Wilkins", y: 2.5 },
    { label: "Rick Barry", y: 4.9 },
    { label: "Karl Malone", y: 3.6 },
    { label: "Kobe Bryant", y: 4.7 },
    { label: "George Gervin", y: 2.6 },
    { label: "Allen Iverson", y: 6.2 },
    { label: "Kevin Durant", y: 4.1 },
    { label: "Michael Jordan", y: 5.3 }
]
var rbs_pts = [
    { label: "Magic Johnson", y: 7.2 },
    { label: "Tracy McGrady", y: 5.6 },
    { label: "Kiki Vandeweghe", y: 3.4 },
    { label: "Paul Pierce", y: 5.6 },
    { label: "Mike Mitchell", y: 5.6 },
    { label: "Mark Aguirre", y: 5 },
    { label: "Bob Lanier", y: 10.1 },
    { label: "Bob Verga", y: 3.9 },
    { label: "George McGinnis", y: 11 },
    { label: "World Free", y: 2.7 },
    { label: "Spencer Haywood", y: 10.3 },
    { label: "Moses Malone", y: 12.3 },
    { label: "Clyde Drexler", y: 6.1 },
    { label: "Gilbert Arenas", y: 3.9 },
    { label: "Charlie Scott", y: 4 },
    { label: "Glenn Robinson", y: 6.1 },
    { label: "Glenn Robinson III", y: 6.1 },
    { label: "John Brisker", y: 6.5 },
    { label: "John Drew", y: 6.9 },
    { label: "Dirk Nowitzki", y: 7.5 },
    { label: "Chris Webber", y: 9.8 },
    { label: "Mitch Richmond", y: 3.9 },
    { label: "Patrick Ewing", y: 9.8 },
    { label: "Elvin Hayes", y: 12.5 },
    { label: "David Robinson", y: 10.6 },
    { label: "Billy Cunningham", y: 10.4 },
    { label: "DeMarcus Cousins", y: 10.9 },
    { label: "Alex English", y: 5.5 },
    { label: "Hakeem Olajuwon", y: 11.1 },
    { label: "Willie Somerset", y: 4.6 },
    { label: "Dwyane Wade", y: 4.7 },
    { label: "Bob McAdoo", y: 9.4 },
    { label: "Charles Barkley", y: 11.7 },
    { label: "Bernard King", y: 5.8 },
    { label: "Dan Issel", y: 9.1 },
    { label: "David Thompson", y: 4.1 },
    { label: "Pete Maravich", y: 4.2 },
    { label: "Peter Maravich", y: 4.2 },
    { label: "Julius Erving", y: 8.5 },
    { label: "Adrian Dantley", y: 5.7 },
    { label: "Larry Bird", y: 10 },
    { label: "Kareem Abdul-Jabbar", y: 11.2 },
    { label: "Dominique Wilkins", y: 6.7 },
    { label: "Rick Barry", y: 6.7 },
    { label: "Kobe Bryant", y: 5.2 },
    { label: "Karl Malone", y: 10.1 },
    { label: "George Gervin", y: 5.3 },
    { label: "Allen Iverson", y: 3.7 },
    { label: "Kevin Durant", y: 7.1 },
    { label: "Michael Jordan", y: 6.2 }
]
var rbs_rbs = [
    { label: "World Free", y: 2.7 },
    { label: "Kiki Vandeweghe", y: 3.4 },
    { label: "Allen Iverson", y: 3.7 },
    { label: "Bob Verga", y: 3.9 },
    { label: "Mitch Richmond", y: 3.9 },
    { label: "Gilbert Arenas", y: 3.9 },
    { label: "Charlie Scott", y: 4 },
    { label: "David Thompson", y: 4.1 },
    { label: "Pete Maravich", y: 4.2 },
    { label: "Peter Maravich", y: 4.2 },
    { label: "Willie Somerset", y: 4.6 },
    { label: "Dwyane Wade", y: 4.7 },
    { label: "Mark Aguirre", y: 5 },
    { label: "Kobe Bryant", y: 5.2 },
    { label: "George Gervin", y: 5.3 },
    { label: "Alex English", y: 5.5 },
    { label: "Mike Mitchell", y: 5.6 },
    { label: "Paul Pierce", y: 5.6 },
    { label: "Tracy McGrady", y: 5.6 },
    { label: "Adrian Dantley", y: 5.7 },
    { label: "Bernard King", y: 5.8 },
    { label: "Glenn Robinson", y: 6.1 },
    { label: "Glenn Robinson III", y: 6.1 },
    { label: "Clyde Drexler", y: 6.1 },
    { label: "Michael Jordan", y: 6.2 },
    { label: "John Brisker", y: 6.5 },
    { label: "Dominique Wilkins", y: 6.7 },
    { label: "Rick Barry", y: 6.7 },
    { label: "John Drew", y: 6.9 },
    { label: "Kevin Durant", y: 7.1 },
    { label: "Magic Johnson", y: 7.2 },
    { label: "Dirk Nowitzki", y: 7.5 },
    { label: "Julius Erving", y: 8.5 },
    { label: "Dan Issel", y: 9.1 },
    { label: "Bob McAdoo", y: 9.4 },
    { label: "Patrick Ewing", y: 9.8 },
    { label: "Chris Webber", y: 9.8 },
    { label: "Larry Bird", y: 10 },
    { label: "Bob Lanier", y: 10.1 },
    { label: "Karl Malone", y: 10.1 },
    { label: "Spencer Haywood", y: 10.3 },
    { label: "Billy Cunningham", y: 10.4 },
    { label: "David Robinson", y: 10.6 },
    { label: "DeMarcus Cousins", y: 10.9 },
    { label: "George McGinnis", y: 11 },
    { label: "Hakeem Olajuwon", y: 11.1 },
    { label: "Kareem Abdul-Jabbar", y: 11.2 },
    { label: "Charles Barkley", y: 11.7 },
    { label: "Moses Malone", y: 12.3 },
    { label: "Elvin Hayes", y: 12.5 }
]
var rbs_ast = [
    { label: "Mike Mitchell", y: 5.6 },
    { label: "Moses Malone", y: 12.3 },
    { label: "John Drew", y: 6.9 },
    { label: "Spencer Haywood", y: 10.3 },
    { label: "Elvin Hayes", y: 12.5 },
    { label: "Patrick Ewing", y: 9.8 },
    { label: "Kiki Vandeweghe", y: 3.4 },
    { label: "Bob McAdoo", y: 9.4 },
    { label: "John Brisker", y: 6.5 },
    { label: "Dirk Nowitzki", y: 7.5 },
    { label: "Dan Issel", y: 9.1 },
    { label: "David Robinson", y: 10.6 },
    { label: "Hakeem Olajuwon", y: 11.1 },
    { label: "Dominique Wilkins", y: 6.7 },
    { label: "George Gervin", y: 5.3 },
    { label: "Glenn Robinson", y: 6.1 },
    { label: "Glenn Robinson III", y: 6.1 },
    { label: "Bob Verga", y: 3.9 },
    { label: "Adrian Dantley", y: 5.7 },
    { label: "Mark Aguirre", y: 5 },
    { label: "Bob Lanier", y: 10.1 },
    { label: "DeMarcus Cousins", y: 10.9 },
    { label: "Bernard King", y: 5.8 },
    { label: "David Thompson", y: 4.1 },
    { label: "Paul Pierce", y: 5.6 },
    { label: "Mitch Richmond", y: 3.9 },
    { label: "Alex English", y: 5.5 },
    { label: "Willie Somerset", y: 4.6 },
    { label: "Kareem Abdul-Jabbar", y: 11.2 },
    { label: "Karl Malone", y: 10.1 },
    { label: "George McGinnis", y: 11 },
    { label: "World Free", y: 2.7 },
    { label: "Charles Barkley", y: 11.7 },
    { label: "Kevin Durant", y: 7.1 },
    { label: "Chris Webber", y: 9.8 },
    { label: "Julius Erving", y: 8.5 },
    { label: "Billy Cunningham", y: 10.4 },
    { label: "Tracy McGrady", y: 5.6 },
    { label: "Kobe Bryant", y: 5.2 },
    { label: "Charlie Scott", y: 4 },
    { label: "Rick Barry", y: 6.7 },
    { label: "Gilbert Arenas", y: 3.9 },
    { label: "Michael Jordan", y: 6.2 },
    { label: "Dwyane Wade", y: 4.7 },
    { label: "Pete Maravich", y: 4.2 },
    { label: "Peter Maravich", y: 4.2 },
    { label: "Clyde Drexler", y: 6.1 },
    { label: "Allen Iverson", y: 3.7 },
    { label: "Larry Bird", y: 10 },
    { label: "Magic Johnson", y: 7.2 }
]
var ast50 = [
    { label: "Jose Calderon", y: 5.8 },
    { label: "Ray Williams", y: 5.8 },
    { label: "Sherman Douglas", y: 5.9 },
    { label: "John Bagley", y: 6 },
    { label: "Sam Cassell", y: 6 },
    { label: "Ty Lawson", y: 6 },
    { label: "Steve Francis", y: 6 },
    { label: "Kenny Anderson", y: 6.1 },
    { label: "Terrell Brandon", y: 6.1 },
    { label: "Walt Frazier", y: 6.1 },
    { label: "Brandin Knight", y: 6.1 },
    { label: "Brandon Knight", y: 6.1 },
    { label: "Brevin Knight", y: 6.1 },
    { label: "Nate McMillan", y: 6.1 },
    { label: "Damon Stoudamire", y: 6.1 },
    { label: "Jamaal Tinsley", y: 6.1 },
    { label: "Allen Iverson", y: 6.2 },
    { label: "Reggie Theus", y: 6.3 },
    { label: "Larry Bird", y: 6.3 },
    { label: "Michael Adams", y: 6.4 },
    { label: "Phil Ford", y: 6.4 },
    { label: "Pooh Richardson", y: 6.5 },
    { label: "Scott Skiles", y: 6.5 },
    { label: "Mark Price", y: 6.7 },
    { label: "Mookie Blaylock", y: 6.7 },
    { label: "Gary Payton II", y: 6.7 },
    { label: "Gary Payton", y: 6.7 },
    { label: "Maurice Cheeks", y: 6.7 },
    { label: "John Lucas III", y: 7 },
    { label: "John Lucas", y: 7 },
    { label: "Micheal Ray Richardson", y: 7 },
    { label: "Baron Davis", y: 7.2 },
    { label: "Johnny Moore", y: 7.4 },
    { label: "Stephon Marbury", y: 7.6 },
    { label: "Muggsy Bogues", y: 7.6 },
    { label: "Marc Jackson", y: 8 },
    { label: "Mark Jackson", y: 8 },
    { label: "Deron Williams", y: 8.1 },
    { label: "Derrick Williams", y: 8.1 },
    { label: "Kevin Porter Jr.", y: 8.1 },
    { label: "Kevin Porter", y: 8.1 },
    { label: "Tim Hardaway Jr.", y: 8.2 },
    { label: "Tim Hardaway", y: 8.2 },
    { label: "Norm Nixon", y: 8.3 },
    { label: "Steve Nash", y: 8.5 },
    { label: "Jason Kidd", y: 8.7 },
    { label: "John Wall", y: 9.2 },
    { label: "Isaiah Thomas", y: 9.3 },
    { label: "John Stockton", y: 10.5 },
    { label: "Magic Johnson", y: 11.2 }
]
window.addEventListener("load", () => {
    var trig = 0;
    var x = 0;
    const cont2 = document.querySelector("#chart2");
    const cont5 = document.querySelector("#chart5");
    const checkbox = document.querySelector("#dark");
    const start = document.querySelector("#start");
    const butt1 = document.querySelector("#pts");
    const butt2 = document.querySelector("#rbs");
    const butt3 = document.querySelector("#ast");

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
            butt1.style.color = "white";
            butt2.style.color = "white";
            butt3.style.color = "white";
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
            butt1.style.color = "white";
            butt2.style.color = "white";
            butt3.style.color = "white";
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
            butt1.style.color = "white";
            butt2.style.color = "white";
            butt3.style.color = "white";
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
            toolTip: {
                enabled: true, //disable here
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
        CanvasJS.addColorSet("greenShades", [ //colorSet Array        
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
            data: [{
                type: "column",
                toolTipContent: 'Name: {label} <br>Assist Avg Per Game: {y}',
                dataPoints: ast50
            }, ]
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