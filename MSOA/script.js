areaCases("E02001098","98I");
areaTotalCases("E02001098","98T");
areaCases("E02001099","99I");
areaTotalCases("E02001099","99T");
let endings = ["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","21","23","24","25","26","27","28","29","30","31"];
for(var i = 0;i<30;i++){
    areaCases(`E020011${endings[i]}`,`${endings[i]}I`);
    areaTotalCases(`E020011${endings[i]}`,`${endings[i]}T`);
}
areaCases("E02006860","60I");
areaTotalCases("E02006860","60T");

function areaCases(code,elementID){
    $.getJSON('https://c19downloads.azureedge.net/downloads/msoa_data/MSOAs_latest.json', function(data) {
        var fullMSOA = data.data;
        for(var i = 0;i < fullMSOA.length; i++){
            if(fullMSOA[i].msoa11_cd==code){
                let localData = fullMSOA[i].msoa_data;
                let ldL = localData.length;
                let j = ldL - 1;
                let val = localData[j].value;
                if(val===null){
                    let final = (`No Cases`);
                    document.getElementById(elementID).innerHTML = final;
                } else {
                    let final = (`${val} Cases`);
                    document.getElementById(elementID).innerHTML = final;
                }
                return;
            }
        }
    });
}
function areaTotalCases(code,elementID){
    $.getJSON('https://c19downloads.azureedge.net/downloads/msoa_data/MSOAs_latest.json', function(data) {
        var fullMSOA = data.data;
        for(var i = 0;i < fullMSOA.length; i++){
            if(fullMSOA[i].msoa11_cd==code){
                let localData = fullMSOA[i].msoa_data;
                var count = 0;
                for(var j = 0;j < localData.length; j++){
                    let newer = localData[j].value;
                    count += newer;
                }
                if(count===null){
                    let final = (`No Cases`);
                    document.getElementById(elementID).innerHTML = final;
                } else {
                    let final = (`${count} Cases`);
                    document.getElementById(elementID).innerHTML = final;
                }
                return;
            }
        }
    });
}