window.onload = () => {
    $("abbr").attr("data-toggle", "tooltip");
    $("[data-toggle='tooltip']").tooltip();

    document.getElementById("COPYRIGHT_YEAR").innerText = new Date().getUTCFullYear().toString();

    const navbarMenuDropdown = document.getElementById("navbarMenuDropdown");
    const navbarMenuButton = document.getElementById("navbarMenuButton");
    const navbarMenuButtonIcon = document.getElementById("navbarMenuButtonIcon");
    const navbarMenuButtonText = document.getElementById("navbarMenuButtonText");

    navbarMenuButtonIcon.classList.add("fa-bars");
    navbarMenuButtonText.innerText = "Menu";

    navbarMenuButton.onclick = () => {
        if (navbarMenuDropdown.classList.contains("collapsing")) return;

        if (navbarMenuButtonIcon.classList.contains("fa-bars")) {
            navbarMenuButtonIcon.classList.remove("fa-bars");
            navbarMenuButtonIcon.classList.add("fa-times");
        } else if (navbarMenuButtonIcon.classList.contains("fa-times")) {
            navbarMenuButtonIcon.classList.remove("fa-times");
            navbarMenuButtonIcon.classList.add("fa-bars");
        }

        if (navbarMenuButtonText.innerText === "Menu") navbarMenuButtonText.innerText = "Close";
        else if (navbarMenuButtonText.innerText === "Close") navbarMenuButtonText.innerText = "Menu";
    };
};
