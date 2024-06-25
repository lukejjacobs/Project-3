

d3.json('./Resources/json/dataset.json').then(data => {
    console.log(data)


    const xArray = Object.values(data["Age"])
    const yArray = Object.values(data["EstimatedSalary"])

    const traces = [{
        type: 'scatter',
        mode: "markers",
        x: xArray,
        y: yArray
        }]

    Plotly.newPlot("ScatterLine", traces);
    });

  