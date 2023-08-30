const getUserFromLocalStorage = () => {
    const gettingUser = JSON.parse(localStorage.getItem("@gitSearch:githubUserInfo"));

    renderUserInfo(gettingUser);
}
getUserFromLocalStorage();


function renderUserInfo(userInfo) {
    const imgUser = document.querySelector(".profile__image");
    const loginUsername = document.querySelector(".profile__username");
    const changeUser = document.querySelector(".profile__change-user--button");

    imgUser.src = userInfo.avatar_url;
    loginUsername.innerText = userInfo.login;

    changeUser.addEventListener("click", () => {
        location.replace("http://127.0.0.1:5500");
        localStorage.removeItem("@gitSearch:githubUserInfo");
    });
}


async function renderUserRepos() {
    const gettingUser = JSON.parse(localStorage.getItem("@gitSearch:githubUserInfo"));

    const userRepos = await fetch(`https://api.github.com/users/${gettingUser.login}/repos`);
    const repos = await userRepos.json();

    const ul = document.querySelector(".profile__ul");
    
    ul.innerHTML = "";

    repos.forEach(repo => {
        const li = document.createElement("li");
        const h4 = document.createElement("h4");
        const p = document.createElement("p");
        const a = document.createElement("a");

        h4.innerText = repo.name;

        if(repo.description === null) {
            p.innerText = "Repositório sem descrição";
        }else {
            p.innerText = repo.description;
        }

        a.innerText = "Repositório";
        a.href = repo.html_url;
        a.target = "_blank";

        li.append(h4, p, a);
        ul.appendChild(li);
    
    });
}
renderUserRepos();