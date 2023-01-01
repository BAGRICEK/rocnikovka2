 var zadani1 = '';  // proměnná držící hodnotu prvního zadaného čísla v binární soustavě
 var zadani2 = '';  // proměnná držící hodnotu druhého zadaného čísla v binární soustavě
 var hodnota1 = 0;  // proměnná držící hodnotu prvního zadaného čísla v dekadické soustavě
 var hodnota2 = 0;  // proměnná držící hodnotu druhého zadaného čísla v dekadické soustavě        
 var hodnota_vysledku = 0;  //proměnná která drží správnou hodnotu výsledku v dekadické soustavě
 var vysledek_bin = '';     // proměnná držící správnou výslednou hodnotu výsledku v binární soustavě
 var j = 7; //pomocná proměnná pro převod na dekadické číslo (prvního čísla)
 var x = 7; //pomocná proměnná pro převod na dekadické číslo (druhého čísla)
 var y = 0;
 var vysledek_zapis_pom = '';
 const btn_zacatek = document.getElementById('btn');
 const detaily = document.getElementById('detaily');
 const priklad = document.getElementById('priklad');
 const moznosti = document.getElementById('moznosti');
 const btn_moznost1 = document.getElementById('moznost1');
 const btn_moznost2 = document.getElementById('moznost2');
 const priklad1 = document.getElementById('priklad1');
 const priklad2 = document.getElementById('priklad2');
 const vysledek = document.getElementById('vysledek');
 var spravne = 0;
 var spatne = 0;
 var delka = 1;

//ZAČÁTEK FUNKCÍ PRO ZOBRAZENÍ PŘÍKLADU

btn.addEventListener('click', function() {  //funkce po kliknutí na button "začít kvíz"
    zapis();
    funkce_prevod1(); //!!!!!!! provizorni
    funkce_prevod2(); //!!!!!! provizorni
    vypocet_vysledku(); //!!!!!! provizorni
    btn.style.display = 'none';
    detaily.style.display = 'flex';
    priklad.style.display = 'flex';
    moznosti.style.display = 'flex';
    document.getElementById('form_vyber').style.display = 'none';
    });
function funkce_0nebo1() {   //funkce na vytvoření náhodného čísla od 0 do 1
    return Math.round(Math.random()); 
};
function vytvoreni_zadani1() {  //funkce pro vytvoření prvního zadaného čísla
    for (let index = 0; index < 8; index++) {
        zadani1 += funkce_0nebo1();
        
    }
};
function vytvoreni_zadani2() {  //funkce pro vytvoření druhého zadaného čísla
    for (let index = 0; index < 8; index++) {
        zadani2 += funkce_0nebo1();
        
    }
};
function zapis() {      //funkce na zápis vytvořených čísel do html
    vytvoreni_zadani1();
    vytvoreni_zadani2();
    priklad1.textContent=zadani1;
    priklad2.textContent=zadani2;
};
//KONEC FUNKCÍ PRO ZOBRAZENÍ PŘÍKLADU

//FUNKCE PRO PSANÍ 1 A 0
btn_moznost1.addEventListener('click', function() {
    vysledek.textContent+='1';
    if (delka !=vysledek_bin.length) {
        if (vysledek.textContent.charAt(y)=='1') {
            spravne++;
            document.getElementById('spravne').textContent=spravne;
            y++;
            delka++;
        
        } else {
            spatne++;
            document.getElementById('spatne').textContent=spatne;
            y++;
            delka++;
        }
    } else {
        vysledek.style.color = 'green';
        spravne++;
        document.getElementById('spravne').textContent=spravne;
    }
})

btn_moznost2.addEventListener('click', function() {
    //vysledek_zapis_pom=vysledek_zapis_pom.padStart(delka,'0')
    //vysledek.textContent=vysledek_zapis_pom;
    vysledek.textContent+='0';
    if (delka !=vysledek_bin.length) {
        if (vysledek.textContent.charAt(y)=='0') {
            spravne++;
            document.getElementById('spravne').textContent=spravne;
            y++;
            delka++;
        
        } else {
            spatne++;
            document.getElementById('spatne').textContent=spatne;
            y++;
            delka++;
        }
    } else {
        vysledek.style.color = 'green';
        spravne++;
        document.getElementById('spravne').textContent=spravne;
}
})
//KONEC FUNKCE PRO PSANÍ 1 A 0


function funkce_prevod1() {         //funkce na převod z binárního čísla na dekadické pro druhé zadané číslo
    for (let i = 0; i < zadani1.length; i++) {
            hodnota1+=(zadani1.charAt(j)*Math.pow(2,i));
            j--;
    }
}

function funkce_prevod2() {         //funkce na převod z binárního čísla na dekadické pro druhé zadané číslo
    for (let i = 0; i < zadani2.length; i++) {
            hodnota2+=(zadani2.charAt(x)*Math.pow(2,i));
            x--;
    }
}

function vypocet_vysledku() {   //funkce na výpočet výsledku v dekadické soustavě a následně převedení na binární
    hodnota_vysledku=hodnota1+hodnota2;
    vysledek_bin=hodnota_vysledku.toString(2);  //příkaz na převod do binární soustavy
    document.getElementById('testvysledek').textContent=vysledek_bin;
}
