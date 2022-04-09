$(document).ready(function(){
    let rs

    $.ajax({url: 'https://api.covid19api.com/dayone/country/viet-nam', async: false, success: function(result){
        rs = result[result.length-1]
        $('#country .card__value').text(rs.Country)
        $('#time .card__value').text(new Date(rs.Date).toDateString())
    }})
    
    let recoveredTimers = setInterval(()=>increment($('#recovered .card__value'), rs.Recovered, recoveredTimers))
    let deathTimers = setInterval(()=>increment($('#death .card__value'), rs.Deaths, deathTimers))
    let confirmedTimers = setInterval(()=>increment($('#confirmed .card__value'), rs.Confirmed, confirmedTimers))
    let activeTimers = setInterval(()=>increment($('#active .card__value'), rs.Active, activeTimers))


    function increment (elem, prop, timers) {
        const step = Math.round(prop / 1000)    
        let value = elem.text()
        elem.text(- -value  + step)
        value >= prop && clearInterval(timers)
    }
})