/*
==========================================
Marsh's Home
Homepage Controller
Version 1.0
==========================================
*/


/*
Update the welcome message.
*/

function updateWelcome(){

    const welcome =
    document.getElementById("welcomeText");


    if(!welcome){

        return;

    }


    if(isLoggedIn()){

        welcome.innerHTML =

        "Welcome back, <b>" +

        getCurrentUser() +

        "</b> 👋<br><br>" +

        "Pick a world and continue your adventure.";

    }

    else{

        welcome.innerHTML =

        "Welcome.<br><br>" +

        "Pick a world and enjoy your adventure.";

    }

}


/*
Create account buttons.
*/

function createAccountButtons(){

    const bar =
    document.getElementById("accountBar");


    if(!bar){

        return;

    }


    if(isLoggedIn()){

        bar.innerHTML = `

        <a href="account/profile.html"
        class="accountButton">

        Profile

        </a>


        <a href="#"
        id="logoutButton"
        class="accountButton">

        Logout

        </a>

        `;

    }

    else{

        bar.innerHTML = `

        <a href="account/login.html"
        class="accountButton">

        Login

        </a>


        <a href="account/create-account.html"
        class="accountButton">

        Create Account

        </a>

        `;

    }

}


/*
Start homepage.
*/

document.addEventListener(
"DOMContentLoaded",
function(){

    updateWelcome();

    createAccountButtons();

});
/*
==========================================
Account button styling
==========================================
*/

function addAccountStyles(){

    const style =
    document.createElement("style");


    style.textContent = `

    #accountBar{

        margin-top:25px;

        display:flex;

        gap:15px;

        flex-wrap:wrap;

    }


    .accountButton{

        display:inline-block;

        padding:12px 22px;

        border-radius:50px;

        background:rgba(0,0,0,.55);

        border:1px solid rgba(255,255,255,.15);

        color:white;

        text-decoration:none;

        font-size:.9rem;

        font-weight:600;

        transition:.25s;

        backdrop-filter:blur(10px);

    }


    .accountButton:hover{

        transform:translateY(-3px);

        background:#4db1ff;

        color:#071220;

    }

    `;


    document.head.appendChild(style);

}


/*
==========================================
Logout button
==========================================
*/

function setupLogout(){

    const button =
    document.getElementById("logoutButton");


    if(!button){

        return;

    }


    button.addEventListener(
    "click",
    function(e){

        e.preventDefault();


        logout();


        window.location.reload();

    });

}


/*
==========================================
Load Continue Watching
==========================================
*/

function loadContinueWatching(){

    const section =
    document.getElementById(
        "continueWatchingSection"
    );


    if(!section){

        return;

    }


    if(!isLoggedIn()){

        section.innerHTML="";

        return;

    }


    section.innerHTML = `

    <h2>

    Continue Watching

    </h2>


    <div id="continueWatching"></div>

    `;


    renderContinueWatching(
        "continueWatching"
    );

}


/*
==========================================
Homepage startup
==========================================
*/

document.addEventListener(
"DOMContentLoaded",
function(){

    addAccountStyles();

    updateWelcome();

    createAccountButtons();

    setupLogout();

    loadContinueWatching();

});