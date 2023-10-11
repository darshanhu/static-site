const birthInfo = {
    date: 11,
    month: 10
}

const date = new Date();
const today = date.getDate();
const currentMonth = date.getMonth() + 1;

window.addEventListener("load", () => {
    setTimeout(() => {
        console.log("From loadGuide.js")
        if( (today === birthInfo.date) && (currentMonth === birthInfo.month)) {
            pendo.showGuideById("ljF1w0DV486z1bp09uR0PWkpauI")
        }
    }, 3000);
})