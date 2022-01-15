$.getJSON('sugakiya.json', (data) => {
    let arr = new Array()
    $.each(data, (key, val) => {
        arr.push([key, val])
    })
    let maxIdx = 0
    let total = 0
    let i = 1
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
        $('table>tbody').append('<tr><th scope="row">' + i + '</th><td>' + arr[idx][0] + '</td><td>¥' + arr[idx][1] + '</td></tr>')
        total += arr[idx][1]
        i++
    }
    $('table>tbody').append('<tr><th scope="row">合計</th><td></td><td>¥' + total + '</td></tr>')
})
