$(document).ready(function(){
    $.ajax({url: 'https://api.covid19api.com/dayone/country/viet-nam', async: false, success: function(result){
        
        const rs = result[result.length-1]
        $('#country .card__value').text(rs.Country)
        $('#recovered .card__value').text(rs.Deaths)
        $('#confirmed .card__value').text(rs.Confirmed)
        $('#death .card__value').text(rs.Deaths)
        $('#active .card__value').text(rs.Active)
        $('#time .card__value').text(new Date(rs.Date).toDateString())
    }})
    
})