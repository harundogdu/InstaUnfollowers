/* const */
var followersArray = [];
var followersNames = [];
var followingArray = [];
var followingNames = [];
var unFollowersArray = [];
var getUnFollowersBtn = document.createElement('button');
var header = document.querySelector("#react-root > section > main > div > header")

getUnFollowersBtn.setAttribute('id', 'getUnFollowersBtn');
getUnFollowersBtn.innerText = 'Get UnFollowers';
header.appendChild(getUnFollowersBtn);

var followersBtn = document.querySelector("#react-root > section > main > div > header > section > ul > li:nth-child(2) > a");
var followingBtn = document.querySelector("#react-root > section > main > div > header > section > ul > li:nth-child(3) > a")

function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}

async function handleFollowersBtnClick() {
    followersBtn.click();
    getUnFollowersBtn.remove();
    await sleep(1000)

    var scrollDiv = document.querySelector("body > div.RnEpo.Yx5HN > div > div > div.isgrP")

    let = scrollStart = 1;
    let = scrollLast = 0;

    while (scrollStart != scrollLast) {
        scrollLast = scrollStart;
        await sleep(2000);
        scrollDiv.scrollTo(0, scrollDiv.scrollHeight)
        scrollStart = scrollDiv.scrollHeight;
        followersArray = document.querySelectorAll('.FPmhX.notranslate._0imsa')
    }

}

async function handleFollowingBtnClick() {
    followingBtn.click();
    await sleep(1000)
    var scrollDiv = document.querySelector("body > div.RnEpo.Yx5HN > div > div > div.isgrP")

    let = scrollStart = 1;
    let = scrollLast = 0;

    while (scrollStart != scrollLast) {
        scrollLast = scrollStart;
        await sleep(2000);
        scrollDiv.scrollTo(0, scrollDiv.scrollHeight)
        scrollStart = scrollDiv.scrollHeight;
        followingArray = document.querySelectorAll('.FPmhX.notranslate._0imsa')
    }

    document.querySelector("body > div.RnEpo.Yx5HN > div > div > div:nth-child(1) > div > div:nth-child(3) > button").click();
}

getUnFollowersBtn.addEventListener('click', async () => {
    await handleFollowersBtnClick("followers")
    await followersArray.forEach(follower => {
        followersNames.push(follower.innerText)
    })
    await handleFollowingBtnClick("following")
    await followingArray.forEach(follower => {
        followingNames.push(follower.innerText)
    })

    await sleep(1000)

    unFollowersArray = followingNames.filter(follower => {
        return !followersNames.includes(follower)
    })

    var unFollowersDiv = document.createElement('div');
    unFollowersDiv.setAttribute('id', 'unFollowersDiv');

    unFollowersArray.forEach(follower => {
        unFollowersDiv.innerHTML += `<a href="https://www.instagram.com/${follower}/" target="_blank">${follower}</a>`;
    })

    var container = document.createElement('div');
    container.setAttribute('id', 'container');
    var title = document.createElement('h1');
    title.innerText = "UnFollowers";
    title.setAttribute('id', 'title');
    container.appendChild(title);
    container.appendChild(unFollowersDiv);

    document.querySelector("header").appendChild(container);

    await sleep(3000)
})