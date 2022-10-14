const labels = ["Here", "Are", "A", "Set", "Of", "June"];


const data = {
    labels: labels,
    datasets: [
    {
        label: "My First dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [
        {
            x: 5,
            y: 3,
            r: 19,
        },
        {
            x: 8,
            y: 2,
            r: 80,
        },
        {
            x: 6.5,
            y: 2.5,
            r: 46,
        },
        ],
    },   
    ],
};
const config = {
type: "bubble",
data: data,
options: {},
};

     
const myChart = new Chart(document.getElementById("myChart"), config);
  