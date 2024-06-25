

d3.json('./Resources/json/dataset.json').then(data => {
    console.log(data)

    const xArray = Object.values(data["Age"])
    const yArray = Object.values(data["EstimatedSalary"])

    //lineargressionX = []
    //lineargressionY = []

    const traces = [{
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
        if (data["AgeCategories"][i] == "<20s") { less.push(data["CreditScore"][i]);}
        else if (data["AgeCategories"][i] == "20s") { twenties.push(data["CreditScore"][i]);}
        else if (data["AgeCategories"][i] == "30s") { thirties.push(data["CreditScore"][i]);}
        else if (data["AgeCategories"][i] == "40s") { fourties.push(data["CreditScore"][i]);}
        else if (data["AgeCategories"][i] == "50s") { fifties.push(data["CreditScore"][i]);}
        else if (data["AgeCategories"][i] == "60s") { sixties.push(data["CreditScore"][i]);}
        else if (data["AgeCategories"][i] == "70s") { seveties.push(data["CreditScore"][i]);}
        else if (data["AgeCategories"][i] == ">80s") { more.push(data["CreditScore"][i]);}
    }

    const score1 = groupAverage(less, less.length)
    const score2 = groupAverage(twenties, twenties.length)
    const barY = [groupAverage(less, less.length)[0], groupAverage(twenties, twenties.length)[0], groupAverage(thirties, thirties.length)[0], groupAverage(fourties, fourties.length)[0],
        groupAverage(fifties, fifties.length)[0], groupAverage(sixties, sixties.length)[0], groupAverage(seveties, seveties.length)[0], groupAverage(more, more.length)[0]]

    const bar_data = [{
        type: "bar",
        x : ["<20s", "20s", "30s", "40s", "50s", "60s", "70s", ">80s"],
        y : barY
    }]

    Plotly.newPlot("ScatterLine", traces);
    Plotly.newPlot("bar", bar_data)
    });

