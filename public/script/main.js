const replyConts             = document.querySelectorAll(".reply-cont");
const commentBarItemReplies  = document.querySelectorAll(".comment-bar-item-reply");

for (let i = 0; i < commentBarItemReplies.length; i++)
    commentBarItemReplies[i].addEventListener("mousedown", function() {
        replyContDisplay = window.getComputedStyle(replyConts[i])["display"];
        replyContDisplay = replyContDisplay == "block" ? "none" : "block";
        replyConts[i].style.display = replyContDisplay;
    });
