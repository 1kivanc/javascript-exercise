function krediHesapla(){


    let anapara,vadesayisi;
    let aylıkodeme, toplamOdeme

    anapara = document.getElementById('krediTutarı').value;
    let liste = document.getElementById('vade');

    vadesayisi = liste.options[liste.selectedIndex].value;

    switch(vadesayisi){
        case "12":
            toplamOdeme = anapara*1.1;
            break;
        case "24":
            toplamOdeme = anapara*1.2;
            break;
        case "36": 
            toplamOdeme = anapara*1.3;
            break;
        case "48":
            toplamOdeme = anapara*1.4;
            break;            

        default:
            toplamOdeme = anapara*1.1;    
    }


    aylıkodeme = toplamOdeme/vadesayisi;

    
    let ftoplamOdeme =  paraFormatla(toplamOdeme);
    let faylikOdeme = paraFormatla(aylıkodeme);

 




    document.getElementById('sonuc').innerHTML = `<p> Toplam ödeme tutarı : ${ftoplamOdeme}</br> Aylık ödeme tutarı : ${faylikOdeme} </p>`
}

function paraFormatla(x){
    let formatted = new Intl.NumberFormat('tr-TR',{
        style:'currency',
        currency:'TRY'
    }).format(x);

    return formatted;
    
}