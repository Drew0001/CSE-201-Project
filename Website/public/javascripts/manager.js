async function manager() {
    var teamname = document.getElementById("teamname").value;
    var confname = document.getElementById("confname").value;
    var player1 = document.getElementById("player1").value;
    var player2 = document.getElementById("player2").value;
    var player3 = document.getElementById("player3").value;
    var player4 = document.getElementById("player4").value;
    var player5 = document.getElementById("player5").value;
    var wins = document.getElementById("player5").value;
    var loses = document.getElementById("player5").value;
    console.log("i see you");
    const body = {
        teamname: teamname,
        confname: confname,
        player1: player1,
        player2: player2,
        player3: player3,
        player4: player4,
        player5: player5,
        wins: wins,
        loses: loses
        
    }
    
    result = await axios.post('/api/create', body);

    
    
    
    };
   