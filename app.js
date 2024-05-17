let ovqatlar = [];

function Ovqat(name, count, price, t) {
    this.nomi = name;
    this.count = count;
    this.price = price;
    this.time = t;
}


const newfood = function () {
    let name = prompt("Qaysi ovqatni qo'shmoqchisiz?");
    let count = +prompt("Qancha ovqat qo'shmoqchisiz?");
    let price = +prompt("Qancha ovqat narxini kiritmoqchisiz?");
    let time = new Date().toLocaleTimeString();
    
    let ovqat = new Ovqat(name, count, price, time);

    ovqatlar.push(ovqat);
    
    localStorage.setItem('ovqatlar', JSON.stringify(ovqatlar));
}
  


newfood();

function ovqatQidir() {
    let qidiruvNomi = prompt("Qaysi ovqatni qidirmoqchisiz?").toLowerCase();
    let ovqatlar = JSON.parse(localStorage.getItem('ovqatlar')) || [];
    
    let qidirishNatijasi = ovqatlar.filter(ovqat => ovqat.nomi.toLowerCase().includes(qidiruvNomi));
    
    console.log(qidirishNatijasi);
    
    return qidirishNatijasi;
}




function narxdanNarxgachaFilter() {
    let minPrice = +prompt("Minimal narxni kiriting:");
    let maxPrice = +prompt("Maksimal narxni kiriting:");
    let ovqatlar = JSON.parse(localStorage.getItem('ovqatlar')) || [];
    
    let narxFilterNatijasi = ovqatlar.filter(ovqat => ovqat.price >= minPrice && ovqat.price <= maxPrice);
    
    console.log(narxFilterNatijasi);
    
    return narxFilterNatijasi;
}


function sortByPrice() {
    let ovqatlar = JSON.parse(localStorage.getItem('ovqatlar')) || [];
    
    ovqatlar.sort((a, b) => a.price - b.price);
    
    console.log(ovqatlar);
    
    return ovqatlar;
}





