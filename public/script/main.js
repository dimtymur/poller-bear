const LOVE_IMG = {
    "checked": "/img/icons/heart-checked-icon.png",
    "unchecked": "/img/icons/heart-icon.png"
};

const medias = document.querySelectorAll(".media");
for (let media of medias) {
    let likeItem = media.querySelector(".media-bar-like");
    let likeIcon = media.querySelector(".media-bar-icon");

    checkAction(
        likeIcon,
        () => likeIcon["src"] = LOVE_IMG["checked"],
        () => likeIcon["src"] = LOVE_IMG["unchecked"]
    );

    likeItem.addEventListener("click", function() {
        checkSwitch(
            likeIcon,
            () => likeIcon["src"] = LOVE_IMG["checked"],
            () => likeIcon["src"] = LOVE_IMG["unchecked"]
        );
    });
}

const comments = document.querySelectorAll(".comment");
for (let comment of comments) {
    let replyCont        = comment.querySelector(".reply-cont");
    let commentBarReply  = comment.querySelector(".comment-bar-reply");

    commentBarReply.addEventListener("mousedown", function() {
        displaySwitch(replyCont, "block", "none");
    });
}

const pollConts = document.querySelectorAll(".poll-cont");
for (pollCont of pollConts) {
    let pollBars = pollCont.querySelectorAll(".poll-bar");

    for (let pollBar of pollBars)
        checkAction(
            pollBar,
            () => pollBar.style.border = "1px white solid",
            () => pollBar.style.border = "1px var(--theme-color-d) solid"
        );

    pollCont.addEventListener("click", function(event) {
        if (event.target.className != "poll-bar") return;
        for (let pollBar of pollBars)
            pollBar.style.border = "1px var(--theme-color-d) solid";
        checkSwitch(
            event.target,
            () => event.target.style.border = "1px white solid",
            () => event.target.style.border = "1px var(--theme-color-d) solid"
        );
    });
}
