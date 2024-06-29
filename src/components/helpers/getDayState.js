export function getDayState() {
    const hour = new Date().getHours();
    let state = "";
    if (hour >= 5 && hour < 12) {
        state = "Good Morning";
    } else if (hour >= 12 && hour < 16) {
        state = "Good Afternoon"
    } else if (hour >= 4 && hour < 23) {
        state = "Good Evening"
    } else {
        state = "Please Sleep"
    }
    return state;
}