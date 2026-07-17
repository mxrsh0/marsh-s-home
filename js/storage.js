/*
==========================================
Marsh's Home Storage Engine
Version 1.0
==========================================
*/

const STORAGE_KEY = "marsh_home";

/*
Create default storage if it doesn't exist.
*/

function initialiseStorage() {

    if (!localStorage.getItem(STORAGE_KEY)) {

        const data = {

            account: null,

            continueWatching: [],

            favourites: [],

            stats: {

                hoursWatched: 0,
                moviesWatched: 0,
                episodesWatched: 0

            }

        };

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(data)
        );

    }

}

/*
Return the entire Marsh database.
*/

function getStorage() {

    initialiseStorage();

    return JSON.parse(
        localStorage.getItem(STORAGE_KEY)
    );

}

/*
Save the Marsh database.
*/

function saveStorage(data) {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(data)
    );

}

/*
Run automatically.
*/

initialiseStorage();