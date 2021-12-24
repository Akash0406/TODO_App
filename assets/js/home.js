// alert("it's Connected");
// To Change The Color According to Category
const test = document.getElementsByClassName("category-item");
for (const element of test) {
    const category = element.innerHTML;
    if (category == "Cleaning") {
        element.style.backgroundColor = "#064635";
    } else if (category == "Work") {
        element.style.backgroundColor = "#4C0070";
    } else if (category == "Personal") {
        element.style.backgroundColor = "#0F4C75";
    } else if (category == "School") {
        element.style.backgroundColor = "#52616B";
    } else if (category == "Other") {
        element.style.backgroundColor = "#8E806A";
    }
};



// Clock
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let todayDate = today.getDate();
    let month = today.getMonth();
    let Year = today.getFullYear;
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML = todayDate + "/" + month + "  " + h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}