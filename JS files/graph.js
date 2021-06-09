var ctx = document.getElementById("myChart").getContext("2d");

ctx.canvas.width = 300;
ctx.canvas.height = 300;

var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021"],
    datasets: [
      {
        label: "Growth of E-commerce",
        data: [1.3, 1.5, 1.8, 2.3, 2.8, 3.5, 4.1, 4.9],
        backgroundColor: "#0099a6",
        borderWidth: 1,
        borderColor: "#0099a6",
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        labels: {
          // This more specific font property overrides the global property
          font: {
            size: 15,
          },
        },
      },
    },
  },
});
