/*
==========================================
Marsh's Home
Continue Watching Engine
Version 1.0
==========================================
*/

/*
Update the Continue Watching list.
*/

function updateContinueWatching(item){

    const loggedIn =
    localStorage.getItem("marsh_logged_in");

    if(loggedIn !== "true"){

        return;

    }

    const data = getStorage();

    /*
    Remove existing entry if it already exists.
    */

    data.account.continueWatching =
    data.account.continueWatching.filter(

        watch => watch.page !== item.page

    );

    /*
    Add newest item to the beginning.
    */

    data.account.continueWatching.unshift({

        title:item.title,

        page:item.page,

        type:item.type,

        updated:new Date().toLocaleString()

    });

    /*
    Keep only the latest 12 items.
    */

    if(data.account.continueWatching.length>12){

        data.account.continueWatching.length=12;

    }

    saveStorage(data);

}

/*
Return Continue Watching list.
*/

function getContinueWatching(){

    const data = getStorage();

    if(!data.account){

        return [];

    }

    return data.account.continueWatching;

}
/*
==========================================
Create Continue Watching HTML
==========================================
*/

function renderContinueWatching(containerId){

    const container =
    document.getElementById(containerId);

    if(!container){

        return;

    }

    const items =
    getContinueWatching();

    if(items.length===0){

        container.innerHTML=`

        <p class="placeholder">

        Nothing here yet...

        Start watching something and it'll appear here.

        </p>

        `;

        return;

    }

    let html="";

    items.forEach(item=>{

        html+=`

        <div class="continueCard">

            <h3>${item.title}</h3>

            <small>

            ${item.type}

            </small>

            <br><br>

            <a href="${item.page}">

            Continue →

            </a>

        </div>

        `;

    });

    container.innerHTML=html;

}

/*
==========================================
Clear Continue Watching
==========================================
*/

function clearContinueWatching(){

    const data =
    getStorage();

    if(!data.account){

        return;

    }

    data.account.continueWatching=[];

    saveStorage(data);

}