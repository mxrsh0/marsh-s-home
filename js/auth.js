/*
==========================================
Marsh's Home
Authentication Engine
Version 1.0
==========================================
*/

/*
Check if a user is logged in.
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
Return the account object.
*/

function getCurrentAccount(){

    const data = getStorage();

    if(!data.account){

        return null;

    }

    return data.account;

}

/*
Require a login before viewing a page.
*/

function requireLogin(){

    if(!isLoggedIn()){

        window.location.href="login.html";

    }

}
/*
==========================================
Log the current user out.
==========================================
*/

function logout(){

    localStorage.removeItem("marsh_logged_in");

    localStorage.removeItem("marsh_current_user");

    window.location.href="account/login.html";

}

/*
==========================================
Display username inside an element.
==========================================
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
==========================================
Return user's statistics.
==========================================
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
==========================================
Update statistics.
==========================================
*/

function saveStats(stats){

    const data =
    getStorage();

    if(!data.account){

        return;

    }

    data.account.stats = stats;

    saveStorage(data);

}