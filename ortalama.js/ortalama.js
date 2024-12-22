function notOrtalama(grades) {
    
    let toplam = 0;
    for (let i = 0; i < grades.length; i++) {
        toplam += grades[i];
    }
    
    
    const ortalama = toplam / grades.length;
    
    
    let harfNotu;
    if (ortalama >= 90) {
        harfNotu = 'A';
    } else if (ortalama >= 80) {
        harfNotu = 'B';
    } else if (ortalama >= 70) {
        harfNotu = 'C';
    } else if (ortalama >= 60) {
        harfNotu = 'D';
    } else {
        harfNotu = 'F';
    }
    
    
    return { ortalama, harfNotu };
}


const userInput = prompt("Notları girin (aralarına virgül koyarak):");


const notlar = userInput.split(',').map(Number);

const { ortalama, harfNotu } = notOrtalama(notlar);
alert(`Ortalama: ${ortalama}, Harf Notu: ${harfNotu}`);
