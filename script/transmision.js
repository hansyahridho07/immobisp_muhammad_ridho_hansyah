var ctx = document.getElementById("transmisionChart").getContext("2d");
var target = (49 + 49 + 49 + 49) / 4;
var achievment = (83 + 58 + 39 + 67) / 4;
var delta = target - achievment;
if (delta < 0) {
  delta = delta * -1;
}
var myChart = new Chart(ctx, {
  //chart akan ditampilkan sebagai bar chart
  type: "bar",
  data: {
    //membuat label chart
    labels: ["Target", "Delta", "Achievment"],
    datasets: [
      {
        label: "Transmission Expenses",
        //isi chart
        data: [target, delta, achievment],
        //membuat warna pada bar chart
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});
