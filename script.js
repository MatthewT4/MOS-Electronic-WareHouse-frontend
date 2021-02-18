        var requestURL = 'http://localhost/data';
        var request = new XMLHttpRequest();
        request.open('GET', requestURL);
        request.responseType = 'json';
        request.send();
        request.onload = function() {
            var parsle = request.response;
            console.log(parsle);
            console.log(parsle['status'])
            var mass = parsle["body"];
            console.log(mass);
            var tables_html = `
            <table cellspacing="0" id='tablo'>
            <tr>  

            <th class="checkbox"> &#9898; </th> <!-- ChekBox -->
            <th >Наименнование</th>
            <th >Местоположение</th>
            <th class="weight">Размер(В*Ш*Г)</th>
            <th class="weight">Вес</th>
            <th class="Comment">Комментарий</th>
            <th >UUID</th>

            </tr>`;
            for (let index = 0; index < mass.length; index++) {
                const element = mass[index];
				var Comm = element["Comments"];
				if (Comm == 'NULL') {
					Comm = '';
				}
                tables_html+=`
                <tr>
                <td class="checkbox"> <input type="checkbox" name="a" value="${element["UUID"]}" > </td>
                <td >`+element["Name"]+`</td>
                <td >`+element["PositionCell"]+`</td>
                <td class="weight">`+element["Height"] + '*' + element["Width"] + '*' + element["Depth"]+`</td>
                <td class="weight">`+element["Weight"]+`</td>
                <td class="Comment">`+Comm+`</td>
                <td >`+element["UUID"]+`</td>

                </tr>
                `;
            }
            tables_html+='</table>';
            console.log(tables_html);
            document.getElementsByClassName('right')[0].innerHTML = tables_html;
            
            var chekcboxes  = `

            `

///populateHeader(parsle);
///showParsle(parsle);
if (parsle ['status'] == 200) console.log('ошибка!');
}
    let i = 1;
    let values = [
            "iname",
            "ilength",
            "iwidth",
            "iheigth",
            "iweigth",
            "iuuid",
            "icomment"
        ]
    function checkValues() {
        for(j = 0; j <= values.length - 1; j++) {
            if(document.getElementById(values[j]).value == "") {
                return false;
            }
        }
        return true;
    }

    function pasteValues(data) {
        for(k = 0; k <= values.length - 1; k++) {
            document.getElementById(`${values[k]}-set-${data}`).innerHTML = document.getElementById(values[k]).value;
            document.getElementById(values[k]).value = "";
        }
    }

    function save2() {
        if(!checkValues()) {
            alert("заполните все строки");
            return;
        }

        // **** ДЛЯ ВСТАВКИ **** \\
        let tr = document.createElement('tr'); 
        let parent = document.querySelector('#add-tables');
        // ********************** \\

    
        pasteValues(i);
        
        
        i++;
        tr.innerHTML = `<td class="checkbox"> &#10006; </td>

                            <th class="Name" id="iname-set-${i}"></th>
                            <th class="weight" id="ilength-set-${i}"></th>
                            <th class="weight" id="iwidth-set-${i}"></th>
                            <th class="weight" id="iheigth-set-${i}"></th>
                            <th class="weight" id="iweigth-set-${i}"></th>
                            <th class="weight" id="iuuid-set-${i}"></th>
                            <th class="Comment" id="icomment-set-${i}"></th>`;
        parent.appendChild(tr);
        
        return location.replace("#zatemnenie");
    }

    function getValueTable(data, number) {
        return document.getElementById(`${data}-set-${number}`).innerHTML;
    }

    function sendValues() {
		let OutData = '{"body": [';
		let FlagBool = false;
        for(j = 1; j < i; j++) {
			if (FlagBool) {
				OutData += ', ';
			}
			else {
				FlagBool = true;
			}
			OutData += '{"Name": "'+ getValueTable("iname", j) +'","UUID": "'+ getValueTable("iuuid", j) +'","Height": '+ getValueTable("iheigth", j) +',"Width": '+ getValueTable("iwidth", j) +',"Depth": '+ getValueTable("ilength", j) +',"Weight": '+ getValueTable("iweigth", j) +'}';
		}
		OutData += ']}';
		$.ajax({
				type: "POST",
				url: "http://localhost/api/add",
				headers: {
					"Accept":" application/json"
				},
				dataType:"json",
				data: OutData,
				//data: '{"body": [{"Name": "'+ getValueTable("iname", j) +'","UUID": "'+ getValueTable("iuuid", j) +'","Height": '+ getValueTable("iheigth", j) +',"Width": '+ getValueTable("iwidth", j) +',"Depth": '+ getValueTable("ilength", j) +',"Weight": '+ getValueTable("iweigth", j) +'}]}',
				success: function(data){
					location.replace("#close_okno");
				}
		});
    }