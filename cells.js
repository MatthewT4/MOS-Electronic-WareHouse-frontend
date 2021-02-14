function GetJson(){
    var requestURL = 'http://localhost/data';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
         var parsle = request.response;
         populateHeader(parsle);
         showParsle(parsle);
   }
}
obj = JSON.parse(parsle);
if (obj ['status'] !== 200){
    console.log('Не удалось получить данные');
}
else{
    table = document.getElementById('tablo');
    $("td : second").after(obj[1]);

}


