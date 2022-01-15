$.getJSON('sugakiya.json', (data) => {
    let arr = new Array()
    $.each(data, (key, val) => {
        arr.push([key, val])
    })
    let maxIdx = 0
    let total = 0
    while (maxIdx >= 0) {
        for (maxIdx = 0; maxIdx < arr.length; maxIdx++) {
            if (arr[maxIdx][1] > 1000 - total) {
                break
            }
        }
        maxIdx--
        if (maxIdx < 0) {
            break
        }
        var idx = Math.floor(Math.random() * maxIdx)
        document.write(arr[idx] + '<br>')
        total += arr[idx][1]
    }
    document.write(total)
})
