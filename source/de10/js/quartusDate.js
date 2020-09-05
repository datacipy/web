module.exports = () => {
    let d = new Date();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    //15:03:50 August 30, 2020
    return `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} ${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
}