function filterData() {
    let filterValue = document.getElementById('cityFilter').value;
    fetch('data/data.json')
        .then(response => response.json())
        .then(data => {
            let filteredData = data.filter(item => {
                return item.name.toLowerCase().includes(filterValue.toLowerCase()) ||
                    item.age.toString().includes(filterValue) ||
                    item.city.toLowerCase().includes(filterValue.toLowerCase());
            });
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
function addData() {
    let nameInput = document.getElementById('nameInput').value;
    let ageInput = document.getElementById('ageInput').value;
    let cityInput = document.getElementById('cityInput').value;
    let newData = { name: nameInput, age: ageInput, city: cityInput };
    fetch('data/data.json')
        .then(response => response.json())
        .then(data => {
            data.push(newData);
            return fetch('data/data.json', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
        })
        .then(() => {
            filterData();
            document.getElementById('nameInput').value = '';
            document.getElementById('ageInput').value = '';
            document.getElementById('cityInput').value = '';
        })
        .catch(error => {
            console.error('Error adding data:', error);
        });
}