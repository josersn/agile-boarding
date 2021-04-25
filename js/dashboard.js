window.onload = function() {
        
    const newCustomer = document.getElementById('novoClientes').getContext('2d');
    var myChart = new Chart(newCustomer, {
        type: 'line',
        data: {
            labels: ['26/04', '27/04', '28/04', '29/04', '30/04', '01/05'],
            datasets: [{
                label: 'Novos Cliente',
                data: [8, 4, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const fineshedCustomer = document.getElementById('clientesValidacao').getContext('2d');
    var myChart = new Chart(fineshedCustomer, {
        type: 'line',
        data: {
            labels: ['26/04', '27/04', '28/04', '29/04', '30/04', '01/05'],
            datasets: [{
                label: 'Clientes Pendente',
                data: [4, 2, 1, 2, 1, 1],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
};
