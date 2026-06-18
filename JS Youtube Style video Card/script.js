function createCard(title, channel, views, monthsOld, duration, thumbnail) {

    let html = `
        <div class="video-card">

            <div class="thumbnail">
                <img src="${thumbnail}" alt="">
                <div class="duration">${duration}</div>
            </div>

            <div class="video-info">
                <div class="video-title">
                    ${title}
                </div>

                <div class="video-meta">
                    ${channel} • ${views} views • ${monthsOld} months ago
                </div>
            </div>

        </div>
    `;

    document.querySelector("#video-container").innerHTML += html;
}


createCard(
    "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1",
    "CodeWithHarry",
    "727K",
    "2",
    "31:20",
    "https://i.ytimg.com/vi/tVzUXW6siu0/maxresdefault.jpg"
);