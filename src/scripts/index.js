const fetchUserData = () => {
    const inputText = document.querySelector(".index__input");
    const button = document.querySelector(".index__button");

    button.addEventListener("click", async () => {
        const request = await fetch(`https://api.github.com/users/${inputText.value}`)
        .then(async res => {
            
            if(res.ok) {
                const resConvert = await res.json();

                localStorage.setItem("@gitSearch:githubUserInfo", JSON.stringify(resConvert));
                location.replace("./src/pages/profile.html#");

                return resConvert;
            }else {
                location.replace("./src/pages/error.html");
            }
        });
        
    });
}
fetchUserData();