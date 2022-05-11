var likes = [9,12,9];
var userId = [
    document.querySelector("#user-1"),
    document.querySelector("#user-2"),
    document.querySelector("#user-3")
];

function addlike(Id) {
    likes[Id] ++;
    userId[Id].innerHTML = likes[Id] + " like(s)";
}