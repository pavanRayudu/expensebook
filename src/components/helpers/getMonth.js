export const month = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
];

export function getMonth(date) {
    const m = month[new Date(date).getUTCMonth()];
    // console.log(m)
    return m;
}