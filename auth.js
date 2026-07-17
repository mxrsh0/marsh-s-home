/*
==========================================
Marsh's Home
Authentication Engine
Version 2.0
==========================================
*/

/*
Return true if a user is logged in.
*/

function isLoggedIn(){

    return localStorage.getItem("marsh_logged_in")==="true";

}

/*
Return the current username.
*/

function getCurrentUser(){

    return localStorage.getItem("marsh_current_user");

}

/*
Return the current account.
*/

function getCurrentAccount(){

    const data = getStorage();

    if(!data.account){

        return null;

    }

    return data.account;

}

/*
Protect a page.
*/

function requireLogin(){

    if(!isLoggedIn()){

        window.location.href="login.html";

    }

}

/*
Create an account.
*/

function createAccount(username,password){

    const data = getStorage();

    if(data.account){

        return{

            success:false,

            message:"An account already exists on this device."

        };

    }

    data.account={

        username:username,

        password:password,

        created:new Date().toLocaleDateString(),

        profile:{

            avatar:"default"

        },

        continueWatching:[],

        favourites:[],

        history:[],

        achievements:[],

        stats:{

            minutesWatched:0,

            moviesCompleted:0,

            episodesCompleted:0

        }

    };

    saveStorage(data);

    return{

        success:true,

        message:"Account created."

    };

}

/*
PART 2 STARTS BELOW
*/
/*
Login.
*/

function login(username,password){

    const data = getStorage();

    if(!data.account){

        return{

            success:false,

            message:"No account exists on this device."

        };

    }

    if(data.account.username!==username){

        return{

            success:false,

            message:"Incorrect username."

        };

    }

    if(data.account.password!==password){

        return{

            success:false,

            message:"Incorrect password."

        };

    }

    localStorage.setItem(
        "marsh_logged_in",
        "true"
    );

    localStorage.setItem(
        "marsh_current_user",
        username
    );

    return{

        success:true,

        message:"Welcome back!"

    };

}

/*
Logout.
*/

function logout(){

    localStorage.removeItem(
        "marsh_logged_in"
    );

    localStorage.removeItem(
        "marsh_current_user"
    );

}

/*
Display username.
*/

function displayUsername(elementId){

    const element =
    document.getElementById(elementId);

    if(!element){

        return;

    }

    const account =
    getCurrentAccount();

    if(!account){

        return;

    }

    element.textContent =
    account.username;

}

/*
Return stats.
*/

function getStats(){

    const account =
    getCurrentAccount();

    if(!account){

        return null;

    }

    return account.stats;

}

/*
Save stats.
*/

function saveStats(stats){

    const data =
    getStorage();

    if(!data.account){

        return;

    }

    data.account.stats =
    stats;

    saveStorage(data);

}