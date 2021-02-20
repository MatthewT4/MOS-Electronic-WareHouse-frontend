function GivingPos(){
    var checkbox = document.getElementsByClassName('checkbox');
    console.log(checkbox.length);
    var gotCheckBox = '{';
	var GivingFlag = false
    for (var index = 0; index < checkbox.length; index++){
			let chk = checkbox[index];
			console.log(chk.value);
        if (chk.checked){
            s = chk.value;
            s =  String(s);
			if (GivingFlag) {
				gotCheckBox += ', ';
			}
			else {
				GivingFlag = true;
			}
            gotCheckBox += ' " ' + s + ' " ';
        }
    }
    gotCheckBox += '}';
		console.log(gotCheckBox);
	$.ajax({
				type: "POST",
				url: "http://localhost/api/issue",
				headers: {
					"Accept":" application/json"
				},
				dataType:"json",
				data: gotCheckBox
				//data: '{"body": [{"Name": "'+ getValueTable("iname", j) +'","UUID": "'+ getValueTable("iuuid", j) +'","Height": '+ getValueTable("iheigth", j) +',"Width": '+ getValueTable("iwidth", j) +',"Depth": '+ getValueTable("ilength", j) +',"Weight": '+ getValueTable("iweigth", j) +'}]}',
				/*success: function(data){
					location.replace("#close_okno");
				}*/
			});
}

