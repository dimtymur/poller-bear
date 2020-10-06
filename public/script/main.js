const LOVE_IMG = {
    "checked": "/img/icons/heart-checked-icon.png",
    "unchecked": "/img/icons/heart-icon.png"
};

const profileMenuNavItems = document.querySelectorAll(".profile-menu-nav-item");
if (profileMenuNavItems)
    for (let profileMenuNavItem of profileMenuNavItems)
        execUriParamMatch(
            "url",
            profileMenuNavItem.href,
            () => profileMenuNavItem.style.borderBottom = "2px var(--theme-color) solid"
        );

const medias = document.querySelectorAll(".media");
if (medias)
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
if (comments)
    for (let comment of comments) {
        let replyCont        = comment.querySelector(".reply-cont");
        let commentBarReply  = comment.querySelector(".comment-bar-reply");

        commentBarReply.addEventListener("mousedown", function() {
            displaySwitch(replyCont, "block", "none");
        });
    }

const pollConts = document.querySelectorAll(".poll-cont");
if (pollConts)
    for (pollCont of pollConts) {
        let pollBars = pollCont.querySelectorAll(".poll-bar");

        for (let pollBar of pollBars) {
            let pollVoted = pollBar.querySelector(".poll-voted");
            checkAction(
                pollBar,
                () => pollVoted.style.backgroundColor = "var(--theme-color-d)",
                () => pollVoted.style.backgroundColor = "var(--theme-color)"
            );
        }

        pollCont.addEventListener("click", function(event) {
            if (event.target.className != "poll-bar") return;
            for (let pollBar of pollBars) {
                if (event.target == pollBar) continue;
                let pollVoted = pollBar.querySelector(".poll-voted");
                pollBar.title = "unchecked";
                pollVoted.style.backgroundColor = "var(--theme-color)";
            }
            let pollVoted = event.target.querySelector(".poll-voted");
            checkSwitch(
                event.target,
                () => pollVoted.style.backgroundColor = "var(--theme-color-d)",
                () => pollVoted.style.backgroundColor = "var(--theme-color)"
            );
        });
    }
