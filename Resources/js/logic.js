

d3.json('./Resources/json/dataset.json').then(data => {
    console.log(data)

          // Build the metadata panel
        function Metadata() {
            d3.json("./Resources/json/dataset.json").then((data) => {
      
          // get the metadata field
            const saysSimon = [
                "CustomerID:15634602", 
                "CreditScore:619", 
                "Geography:France", 
                "Gender:Female", 
                "Age:42"
            ]
      
          // Filter the metadata for the object with the desired sample number
            let sampleNum = saysSimon
      
          // Use d3 to select the panel with id of `#sample-metadata`
            let panel = d3.select(`#sample-metadata`)
      
          // Use `.html("") to clear any existing metadata
            panel.html("")
      
          // Inside a loop, you will need to use d3 to append new
          // tags for each key-value in the filtered metadata.
            sampleNum.forEach(element => {
                Object.entries(element).forEach(([key, value]) => {
                    panel.append("p")
                    .text(`${key.toUpperCase()}: ${value}`)
                    .style('opacity', 0)
                    .transition()
                    .duration(500)
                    .style("opacity", 1)
                });
            });
            });
            }
            Metadata()
        const xArray = Object.values(data["Age"])
        const yArray = Object.values(data["CreditScore"])
    
        //lineargressionX = []
        //lineargressionY = []
        let tracesChart = {
            title: "Comparing Age to Credit Score",
            margin: {t:30, l:150},
            hovermode: 'closest',
            xaxis: {title: 'Age'},
            yaxis: {title: 'Credit Score'}
        };
        let tracesData = [{
            type: "scatter",
            mode: "markers",
            x: xArray,
            y: yArray

            //}, {
            //type: "line"
            //x: regressionX
            //y: regressionY
        }]
    
    //group average function found online
    function groupAverage (a, n) {
        var result = [];
      
        for (let i = 0; i < a.length; i =i+n) {
         var batch = a.slice(i, i + n);
         var avg = batch.reduce((sum, b) => sum + b, 0) / batch.length;
         result.push(avg);
        }
    return result
    }
    const less = []
    const twenties = []
    const thirties = []
    const fourties = []
    const fifties = []
    const sixties = []
    const seveties = []
    const more = []
    for (let i = 0; i < Object.keys(data["AgeCategories"]).length; i++ ) {
        if (data["AgeCategories"][i] == "<20s") { less.push(data["EstimatedSalary"][i]);}
        else if (data["AgeCategories"][i] == "20s") { twenties.push(data["EstimatedSalary"][i]);}
        else if (data["AgeCategories"][i] == "30s") { thirties.push(data["EstimatedSalary"][i]);}
        else if (data["AgeCategories"][i] == "40s") { fourties.push(data["EstimatedSalary"][i]);}
        else if (data["AgeCategories"][i] == "50s") { fifties.push(data["EstimatedSalary"][i]);}
        else if (data["AgeCategories"][i] == "60s") { sixties.push(data["EstimatedSalary"][i]);}
        else if (data["AgeCategories"][i] == "70s") { seveties.push(data["EstimatedSalary"][i]);}
        else if (data["AgeCategories"][i] == ">80s") { more.push(data["EstimatedSalary"][i]);}
    }

    const score1 = groupAverage(less, less.length)
    const score2 = groupAverage(twenties, twenties.length)
    const barY = [groupAverage(less, less.length)[0], groupAverage(twenties, twenties.length)[0], groupAverage(thirties, thirties.length)[0], groupAverage(fourties, fourties.length)[0],
        groupAverage(fifties, fifties.length)[0], groupAverage(sixties, sixties.length)[0], groupAverage(seveties, seveties.length)[0], groupAverage(more, more.length)[0]]

    let barChart = {
        title: "Salary to Age",
        margin: {t:30, l:150},
        hovermode: 'closest',
        xaxis: {title: 'Age (By Grouping)'},
        yaxis: {title: 'Estimated Salary'}
    }

    let barData = [{
        type: "bar",
        x : ["<20s", "20s", "30s", "40s", "50s", "60s", "70s", ">80s"],
        y : barY
    }]

    Plotly.newPlot("ScatterLine", tracesData, tracesChart);
    Plotly.newPlot("bar", barData, barChart)
    });


    function init() {
        d3.json("./Resources/json/dataset.json").then((data) => {
        
        const whoSays = ["France", "Germany", "Spain"]
          let sampleName = whoSays;
      
          let selector = d3.select("#selDataset");
      
          for(let i = 0; i < sampleName.length; i++) {
            selector.append("option")
            .text(sampleName[i])
            .property('value', sampleName[i]);
          };
      
          let sampleFirst = sampleName[0];
          (sampleFirst)

        });
      }
      init()
      
      function init2() {
        d3.json("./Resources/json/dataset.json").then((data) => {
        
        const simonsays = ["DIAMOND", "PLATINUM", "SILVER", "GOLD"]
          let sampleName = simonsays;
      
          let selector = d3.select("#selDataset2");

          for(let i = 0; i < sampleName.length; i++) {
            selector.append("option")
            .text(sampleName[i])
            .property('value', sampleName[i]);
          };

          let sampleFirst = sampleName[0];
          (sampleFirst)

        });
      }
      
      function optionChanged(sampleNew) {
      
        buildCharts(sampleNew)
        buildMetadata(sampleNew)
      }
      init2();

      function Metadata() {
        d3.json("./Resources/json/dataset.json").then((data) => {
        
            const saysSimon = [
                "ID:15634602", 
                "CreditScore:619", 
                "Geography:France", 
                "Gender:Female", 
                "Age:42"
            ]
          let sampleName = saysSimon;
      
          let selector = d3.select("#sample-metadata");

          for(let i = 0; i < sampleName.length; i++) {
            selector.append("option")
            .text(sampleName[i])
            .property('value', sampleName[i]);
          };

          let sampleFirst = sampleName[0];
          (sampleFirst)

        });
      }
      
      function optionChanged(sampleNew) {
      
        buildCharts(sampleNew)
        buildMetadata(sampleNew)
      }
      Metadata();


