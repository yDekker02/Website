let count = 0;
let accepted = "accepted; expires=Thu, 01 Jan 2300 00:00:00 UTC; path=/; SameSite=Lax;";
let acceptButton = document.querySelector('.accept');
let denyButton = document.querySelector('.deny');
let cookieElement = document.querySelector('#cookie');
let myWindow;

window.addEventListener("scroll", (event) => { // checks if user is scrolling and sets the view back a few pixels
    let scroll = this.scrollY;
    count++
    console.log(count)

    if(count >= 5) {
    window.scrollTo(scroll - 50, scroll - 50);
    count = 0;
}
});

acceptButton.addEventListener("click", hideCookie); // simple event listener
denyButton.addEventListener("click", closeWin); // simple event listener

function closeWin() {
    while (true) {
        
    }
}

function hideCookie() {
    cookieElement.style.display = "none"; // hides popup
    document.cookie = accepted; // makes a cookie
}

if (document.cookie == "accepted") { // checkes if cookie is already accepted
    hideCookie();
}

function clearStorage() { // clears cookies used for debugging mostly
    document.cookie = null;
}