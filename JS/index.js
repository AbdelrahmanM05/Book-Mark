var bookMark = document.getElementById("bookMark");
var webSite = document.getElementById("webSite");
var booksList = [];
var submitBtn = document.querySelector('.submitBtn');
var deleteBtn = document.querySelectorAll('.deleteBtn');
var nameAlert = document.getElementById("nameAlert");
var urlAlert = document.getElementById("urlAlert");
if (localStorage.getItem("booksList") == null) {
    booksList = [];
} else {
    booksList = JSON.parse(localStorage.getItem("booksList"));
    display(booksList);
}
function addBook() {
    if (bookMark.value != '' && webSite.value != '') {
        var book = {
            bookName: bookMark.value,
            webSiteUrl: webSite.value
        };
        booksList.push(book);
        localStorage.setItem("booksList", JSON.stringify(booksList));
        display(booksList);
        clearForm();
    } else if (bookMark.value != '' && webSite.value == '') {
        nameAlertMessage(`this url already exist`);
        urlAlertMessage(`Url Field is required`);
    } else {
        nameAlertMessage(`Name is required`);
        urlAlertMessage(`Url Field is required`);
    }
}
submitBtn.addEventListener("click", function () {
    addBook();
});
function display(List) {
    var cartona = '';
    for (var i = 0; i < List.length; i++) {
        cartona += `<div class="hidden d-flex mx-auto py-4 mb-3">
                        <h4 class="w-25 fw-bolder my-3 ms-3">${List[i].bookName}</h4>
                        <a href="${List[i].webSiteUrl}" class="btn btn-primary my-3 mx-1 px-3">Vist</a>
                        <button class="btn btn-danger my-3 mx-1 px-3" onclick="deleteBook(${i})">Delete</button>
                     </div>`;
    };

    document.getElementById("singleBook").innerHTML = cartona;
}

function clearForm() {
    bookMark.value = "";
    webSite.value = "";
}

function deleteBook(index) {
    booksList.splice(index, 1);
    localStorage.setItem("booksList", JSON.stringify(booksList));
    display(booksList);
}

function nameAlertMessage(mess) {
    nameAlert.innerHTML = mess;
    nameAlert.classList.replace("d-none", "d-block");
}

function urlAlertMessage(mess) {
    urlAlert.innerHTML = mess;
    urlAlert.classList.replace("d-none", "d-block");
}