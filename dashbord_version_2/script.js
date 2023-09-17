const cardCanvas = document.getElementById("cardCanvas");

const barChart = new Chart(cardCanvas, {
    type:"line",
    // Debut configuration des donnees 
    data:{
        labels:["", "", "", "", "", "", ""],
        datasets: [
            // deuxieme graphe 
            {
                label: "First graph",
                data: [30, 60, 50, 53, 80, 50,100, 0],
                backgroundColor: '#DECBAD',
                borderColor: '#3F3F2E',
                fill: true,
                usePointStyle: true,
                pointStyle: 'circle',
                pointRadius: 5,
                pointBorderColor: 'rgb(0, 0, 0)',
                pointBackgroundColor: '#FFFFFF'


            },

            // Premier graphe 
            {
                label: "Second graphe",
                data: [70, 110, 90,95, 140, 100, 160, 0],
                backgroundColor: '#FDE6C4',
                borderColor: '#E8BF7E',
                fill: true,
                usePointStyle: true,
                pointStyle: 'circle',
                pointRadius: 5,
                pointBorderColor: 'rgb(0, 0, 0)',
                pointBackgroundColor: '#FFFFFF'
            },

            
        ]
        

    },
    // Fin configuration des données 

    // Configuration des options 
    options: {
        responsive: true,

    }

    // Fin configuration des options 
})