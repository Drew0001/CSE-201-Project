async function manager() {
    var website = document.getElementById("website").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    console.log(website);
    const body = {
        website: website,
        username: username,
        password: password
    }
    
    result = await axios.post('/api/create', body);

    
    
    
    };
   