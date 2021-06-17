//binary clock

const binaryClock = () => {
    const date = new Date()
    const hrs = splitTime(date.getHours())
    const min = splitTime(date.getMinutes())
    const sec = splitTime(date.getSeconds())

//paint the clock

    paintClock(hrs.b0, 'b0', 'hours')
    paintClock(hrs.b1, 'b1', 'hours')
    paintClock(min.b0, 'b0', 'minutes')
    paintClock(min.b1, 'b1', 'minutes')
    paintClock(sec.b0, 'b0', 'seconds')
    paintClock(sec.b1, 'b1', 'seconds')
}

const toBinary = (number) => Number(number).toString(2)

const splitTime = (time) => {
    const no = time.toString().split("")
    if (no.length === 1) {
        no = [0,no[0]]
    }

    return {
        b0:toBinary(no[0]),
        b1: toBinary(no[1])

    }
}

const paintClock = (binTime,ninche,category) => {
    binTime.split("").reverse().forEach((bin,index) => {
        const dom = Array.from(document.querySelectorAll(`.${category} .bin span.${ninche}`)).reverse()
        console.log(dom)
        if(bin === 1) {
            const light = dom[index]
            light.classList += "light"
        }
    })
}

const clearClock = () => {
    document.querySelectorAll(" light").forEach(light => light.classList.remove("light"))
}
setInterval(() => {
    clearClock()
    binaryClock()
},100)

binaryClock()