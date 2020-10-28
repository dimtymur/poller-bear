let mainTheme = localStorage.getItem("main-theme");
if (mainTheme) MAIN_THEME[mainTheme]();

let colorTheme = localStorage.getItem("color-theme");
if (colorTheme) COLOR_THEME[colorTheme]();

const selects = document.querySelectorAll(".select");
if (selects)
    for (let select of selects) {
        let selectChecked = select.querySelector(".select-checked");
        let selectItems = select.querySelectorAll(".select-item");

        for (let selectItem of selectItems)
            if (isChecked(selectItem)) {
                selectChecked.innerText = selectItem.innerText;
                selectItem.style.display = "none";
                break;
            }

        select.addEventListener("click", (event) => {
            if (event.target.className.indexOf("select-item") == -1) return;
            for (let selectItem of selectItems) {
                selectItem.className = setClassPairValue(selectItem.className, "check", "off");
                selectItem.style.display = "block";
            }

            useClassPair(SELECT_LIB, event.target.className, "select");

            checkSwitch(
                event.target,
                () => {
                    selectChecked.innerText = event.target.innerText;
                    event.target.style.display = "none";
                },
                () => {
                    selectChecked.innerText = event.target.innerText;
                    event.target.style.display = "none";
                }
            );
        });
    }

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

        likeItem.addEventListener("click", () => {
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
        let replyCont = comment.querySelector(".reply-cont");
        let commentBarReply = comment.querySelector(".comment-bar-reply");

        commentBarReply.addEventListener("mousedown", () => {
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

        pollCont.addEventListener("click", (event) => {
            if (event.target.className.indexOf("poll-bar") == -1) return;
            let pollBarCheckValue = parseClassPair(getClassPair(event.target.className, "check"))[1];

            for (let pollBar of pollBars) {
                pollBar.querySelector(".poll-voted").style.backgroundColor = "var(--theme-color)";
                pollBar.className = setClassPairValue(pollBar.className, "check", "off");
            }

            event.target.className = setClassPairValue(event.target.className, "check", pollBarCheckValue);
            let pollVoted = event.target.querySelector(".poll-voted");
            checkSwitch(
                event.target,
                () => pollVoted.style.backgroundColor = "var(--theme-color-d)",
                () => pollVoted.style.backgroundColor = "var(--theme-color)"
            );
        });
    }
