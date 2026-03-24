//adat forrás

const apiUrl = 'https://nettuts.hu/jms/Toki-coder/users';
const table = document.querySelector('.table');

// A függvény lekéri az adatokat
const getData = (url = '') => {
return fetch(url).then(
    response => response.json()
)
};

//tábla megjeleneítés

const generateTable = (data = []) =>{
//thead elem létrehozása és táblába beszúrása
const thead = document.createElement('thead');
table.appendChild(thead);

//fejléc sor hozzáadása
const tr = document.createElement('tr');
thead.append(tr);

//fejléc cellék hozzádása a kulcsok alapján = ['id', 'name', ...]
const keys = Object.keys( data[0] );
keys.forEach( key => {
    const td = document.createElement('td');
    td.textContent = key;
    tr.appendChild(td);
});

//tbody hozzáadása a táblához
const tbody = document.createElement('tbody');
table.appendChild(tbody);

//tbody feltöltése adatokkal
data.forEach( row => {
const tr = document.createElement('tr');
tbody.appendChild(tr);

keys.forEach( key => {
    const td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = row[key]; //változóban lévő szöveget így lehet megetetni.
});
});
};

getData(apiUrl).then(
    data => generateTable(data)
);

