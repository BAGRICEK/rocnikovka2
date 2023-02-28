 var zadani1 = '';  // proměnná držící hodnotu prvního zadaného čísla v binární soustavě
 var zadani2 = '';  // proměnná držící hodnotu druhého zadaného čísla v binární soustavě
 var hodnota1 = 0;  // proměnná držící hodnotu prvního zadaného čísla v dekadické soustavě
 var hodnota2 = 0;  // proměnná držící hodnotu druhého zadaného čísla v dekadické soustavě        
 var hodnota_vysledku = 0;  //proměnná která drží správnou hodnotu výsledku v dekadické soustavě
 var vysledek_bin = '';     // proměnná držící správnou výslednou hodnotu výsledku v binární soustavě
 var j = 7; //pomocná proměnná pro převod na dekadické číslo (prvního čísla)
 var x = 7; //pomocná proměnná pro převod na dekadické číslo (druhého čísla)
 var y = -1; //pomocná proměnná pro kontrolu 1 nebo 0 na "y" pozici "vysledek_bin"
 var vysledek_zapis_pom = '';
 var test_operace = 0; //testovací proměnná na výpis znaménka k výsledku
 const btn_zacatek = document.getElementById('btn');
 const detaily = document.getElementById('detaily');
 const priklad = document.getElementById('priklad');
 const moznosti = document.getElementById('moznosti');
 const btn_moznost1 = document.getElementById('moznost1');
 const btn_moznost2 = document.getElementById('moznost2');
 const priklad1 = document.getElementById('priklad1');
 const priklad2 = document.getElementById('priklad2');
 const vysledek = document.getElementById('vysledek');
 const op_scitani = document.getElementById('scitani');
 const op_odcitani = document.getElementById('odcitani');
 const op_deleni = document.getElementById('deleni');
 const op_nasobeni = document.getElementById('nasobeni');
 var spravne = 0;
 var spatne = 0;
 var delka = 1;

//ZAČÁTEK FUNKCÍ PRO ZOBRAZENÍ PŘÍKLADU

btn.addEventListener('click', function zacatek() {  //funkce po kliknutí na button "začít kvíz"
    vytvoreni_zadani();
    operace();
    vypocet_vysledku(); 
    y += vysledek_bin.length;       //nastaví y na hodnotu délky výsledku (-1 + "vysledek_bin.legth") (-1 kvůli pozici 0 stringu)
    btn.style.display = 'none';
    detaily.style.display = 'flex';
    priklad.style.display = 'flex';
    moznosti.style.display = 'flex';
    document.getElementById('form_vyber').style.display = 'none';
    });
function funkce_0nebo1() {   //funkce na vytvoření náhodného čísla od 0 do 1
    return Math.round(Math.random()); 
};

function vytvoreni_zadani() {

    while ((hodnota2 > hodnota1) || (hodnota1==0) || (hodnota2==0)) {          // while loop pro kontrolu, aby 2. číslo nebylo větší než 1. nebo aby se číslo nerovnalo 0
        hodnota1=0;
        hodnota2=0;
        zadani1='';
        zadani2='';
        j=7;
        x=7;
        for (let index = 0; index < 8; index++) {   // generace prvního zadaného čísla
            zadani1 += funkce_0nebo1();   
        }

        for (let index = 0; index < 8; index++) {   // generace druhého zadaného čísla
            zadani2 += funkce_0nebo1();   
        }

        for (let i = 0; i < zadani1.length; i++) {  // převod 1. čísla na dekadické
            hodnota1+=(zadani1.charAt(j)*Math.pow(2,i));
            j--;
        } 

        for (let i = 0; i < zadani2.length; i++) {  // převod 2. čísla na dekadické
            hodnota2+=(zadani2.charAt(x)*Math.pow(2,i));
            x--;
        }
    } 
    priklad1.textContent=zadani1;
    priklad2.textContent= zadani2;
}

//KONEC FUNKCÍ PRO ZOBRAZENÍ PŘÍKLADU

//FUNKCE PRO PSANÍ 1 A 0
btn_moznost1.addEventListener('click', function() {
    vysledek.textContent='1' + vysledek.textContent;      //podmínka pro kontrolu zadávaného čísla
    if (delka !=vysledek_bin.length) {
        if (vysledek_bin.charAt(y)=='1') {
            spravne++;
            document.getElementById('spravne').textContent=spravne;
            y--;
            delka++;
        
        } else {
            spatne++;
            document.getElementById('spatne').textContent=spatne;
            y--;
            delka++;
        }
    } else {
        vysledek.style.color = 'green';
        spravne++;
        document.getElementById('spravne').textContent=spravne;
    }
})

btn_moznost2.addEventListener('click', function() {
    vysledek.textContent='0' + vysledek.textContent;      
    if (delka !=vysledek_bin.length) {          //podmínka pro kontrolu zadávaného čísla
        if (vysledek_bin.charAt(y)=='0') {
            spravne++;
            document.getElementById('spravne').textContent=spravne;
            y--;
            delka++;
        
        } else {
            spatne++;
            document.getElementById('spatne').textContent=spatne;
            y--;
            delka++;
        }
    } else {                                //vyřešit situaci zadání špatného čísla (zatím to zapíše správně)
        vysledek.style.color = 'green';
        spravne++;
        document.getElementById('spravne').textContent=spravne;
}
})
//KONEC FUNKCE PRO PSANÍ 1 A 0

function vypocet_vysledku() {   //funkce na výpočet výsledku v binární soustavě
    //hodnota_vysledku=hodnota1+hodnota2;
    vysledek_bin=hodnota_vysledku.toString(2);  //příkaz na převod do binární soustavy
    document.getElementById('testvysledek').textContent=hodnota1 + ' ' + test_operace + ' ' + hodnota2 + ' =' + hodnota_vysledku;
}



//FUNKCE NA ŘEŠENÍ ZDA CHCE UŽIVATEL DĚLENÍ, NÁSOBENÍ... !!!!!!!!!!!!!FUNKČNÍ!!!!!!!!! (ale výsledek násobení často moc velký, nějak omezit)


function operace() {
    if (op_nasobeni.checked) {
        hodnota_vysledku=hodnota1*hodnota2;
        test_operace=1;
    } 
    if (op_deleni.checked) {
        hodnota_vysledku=Math.floor(hodnota1/hodnota2);
        test_operace=2;
    }
    if (op_scitani.checked) {
        hodnota_vysledku=hodnota1+hodnota2;
        test_operace=3;
    }
    if (op_odcitani.checked) {
        hodnota_vysledku=hodnota1-hodnota2;
        test_operace=4;
    }}
