const redirectToHomePage = () => {
    const redirectButton = document.querySelector(".new-search__button");

    redirectButton.addEventListener("click", () => {
        location.replace("../../");
    });
}
redirectToHomePage();