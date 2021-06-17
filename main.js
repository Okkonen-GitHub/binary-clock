//binary clock

const binaryClock = () => {
    const date = new Date()
    const hrs = splitDec(date.getHours())
    const mins = splitDec(date.getMinutes())
    const secs = splitDec(date.getSeconds())

    paintClock(hrs[0], 'b0', 'hours')
    paintClock(hrs[1], 'b1', 'hours')
    paintClock(mins[0], 'b0', 'minutes')
    paintClock(mins[1], 'b1', 'minutes')
    paintClock(secs[0], 'b0', 'seconds')
    paintClock(secs[1], 'b1', 'seconds')
}

const paintClock = (binary, ninche, category) => {
    binary.split("").reverse().forEach((bin, index) => {
        const dom = Array.from(document.querySelectorAll(`.${category} .bin span.${ninche}`)).reverse()
        if (bin === "1") {
            const light = dom[index]
            light.classList += " light"
        }
    });
}

const clearClock = () => {
    document.querySelectorAll('.light').forEach(light => light.classList.remove('light'))
}

const toBin = (number) => {
    return Number(number).toString(2)
}

const splitDec = (number) => {
    let no = number.toString().split("")
    if (no.length === 1) no = [0, no[0]]
    return {
        0: toBin(no[0]),
        1: toBin(no[1])
    }
}

// const run = async () => {
setInterval(() => {
    clearClock()
    binaryClock()
}, 1000)
// }