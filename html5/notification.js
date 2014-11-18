function showNotification() {
    var n;
    if (!("Notification" in window)) {
        alert("Your browser doesn't support desktop notifications");
        return;
    }
    if (Notification.permission === "granted") {
        n = new Notification("Title", {
            body: "description"
        });
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission(function(permission) {
            if (permission === "granted") {
                n = new Notification("Title", {
                    body: "description"
                });
                n.onclick = function() {
                    notificationClicked(n);
                };
            }
        });
    }
}


function notificationClicked(n) {
    var elem = document.getElementById("feedback");
    elem.innerHTML = "Thank you and goodbye!";
    if (n.cancel) {
        n.cancel();
    }
}
