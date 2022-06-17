const fetchData = async () => {
    const response = await fetch("./data.json");
    const data = await response.json();
    return data;
};
const data = await fetchData();
const labels = data.map((e) => e.day);
const xData = data.map((e) => e.amount);
const ctx = document.getElementById("chart").getContext("2d");
const chart = new Chart(ctx, {
    type: "bar",
    data: {
        labels,
        datasets: [
            {
                label: "Amount spent",
                data: xData,
                backgroundColor: "hsl(10, 79%, 65%)",
                borderRadius: 6,
                hoverBackgroundColor: "hsl(186, 34%, 60%)",
            },
        ],
    },
    options: {
        responsive: true,
        scales: {
            y: {
                display: false,
            },
            x: {
                grid: {
                    display: false,
                    borderColor: "transparent",
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                backgroundColor: "hsl(25, 47%, 15%)",
                xAlign: "center",
                yAlign: "bottom",
                bodySpacing: 20,
                titleColor: "hsl(33, 100%, 98%)",
                displayColors: false,
                bodyAlign: "center",
                callbacks: {
                    label: function (context) {
                        return "$ " + context.formattedValue;
                    },
                    title: function (context) {
                        return "";
                    },
                },
                padding: 8,
            },
        },
    },
});
