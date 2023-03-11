// fetch('data/data.json')
//     .then(response => response.json())
//     .then(data => {
//         // hämta referens till elementet där du vill visa datan
//         let output = document.getElementById('output');

//         // loopa igenom datan och rendera den på sidan
//         data.forEach(item => {
//             let li = document.createElement('li');
//             li.innerText = `${item.name}, ${item.age}, ${item.city}`;
//             output.appendChild(li);
//         });
//     })
//     .catch(error => {
//         console.error('Error fetching data:', error);
//     });


function filterData() {
    let filterValue = document.getElementById('cityFilter').value;
    fetch('data/data.json')
        .then(response => response.json())
        .then(data => {
            let filteredData = data.filter(item => item.city.includes(filterValue));
            let output = document.getElementById('output');
            output.innerHTML = '';
            filteredData.forEach(item => {
                let li = document.createElement('li');
                li.innerText = `${item.name}, ${item.age}, ${item.city}`;
                output.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}



