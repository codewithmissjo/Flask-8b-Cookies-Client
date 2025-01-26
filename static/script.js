function signIn() {
    // replace this line with code that creates a cookie with the name client-side with the Client's input value
    Cookies.set('client-side', $('#sign-in').val(), {path: '/', secure: true, sameSite: 'strict'});
    checkStatus();
}

function signOut() {
    // replace this line with code that removes THE client-side cookie
    Cookies.remove('name');
    checkStatus();
}

window.addEventListener('load', checkStatus);
function checkStatus() {
    // shows and hides html elements based on if the cookie exists or has value
    var value = Cookies.get('name');
    if (value) {
        // the user IS "signed in"
        // hide the client-no elements using jQuery
        // show the client-yes elements using jQuery
        // fill the html of #un with the cookie's value
    } else {
        // the user is NOT "signed in"
        // hide the client-yes elements using jQuery
        // show the client-no elements using jQuery
    }
}

function DontRunJustForExample() {

    // Setting or updating a cookie
    Cookies.set('name', 'value', {path: '/', secure: true, sameSite: 'strict'});

    // Getting a cookie
    Cookies.get('name');

    //Getting ALL cookies
    Cookies.get();

    // Deleting a cookie
    Cookies.remove('name');

    // getting an input's value
    $('#sign-in').val();
}