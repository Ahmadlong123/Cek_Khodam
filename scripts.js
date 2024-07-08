document.getElementById('cekButton').addEventListener('click', function() {
    cekKhodam();
});

function cekKhodam() {
    const name = document.getElementById('nameInput').value.trim();
    const resultDiv = document.getElementById('result');

    if (name === "") {
        resultDiv.innerHTML = "<p style='color: red;'>Nama tidak boleh kosong!</p>";
        return;
    }

    const khodamData = [
        { name: "khodam serigala" },
        { name: "khodam setengah siluman"},
        { name: "khodam harimau putih"},
        { name: "khodam kucing"},
        { name: "khodam tikus"},
        { name: "khodam siliwangi"},
        { name: "khodam galon"},
        { name: "khodam nurdin"},
    ];

    const khodamPresent = Math.random() > 0.5;

    if (khodamPresent) {
        const khodam = khodamData[Math.floor(Math.random() * khodamData.length)];
        resultDiv.innerHTML = `<p style='color: green;'>${name}, anda memiliki ${khodam.name} yang melindungi anda</p>`;
                              
    } else {
        resultDiv.innerHTML = `<p style='color: red;'>${name}, maaf anda tidak memiliki khodam</p>`;
    }
}
