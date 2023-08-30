const redirectToHomePage = () => {
    const redirectButton = document.querySelector(".new-search__button");

    redirectButton.addEventListener("click", () => {
        location.replace("http://127.0.0.1:5500");
    });
}
redirectToHomePage();