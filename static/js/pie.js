const mongo_endpoint='mongo';

d3.json(mongo_endpoint).then(function(shootingData){
    let age = [];
    console.log("data:", shootingData);

  let under18 = 0;
  let secondBin = 0;
  let thirdBin =0;
  let fourthBin = 0;
  let fifthBin = 0;
  let sixthBin= 0;
  let seventhBin = 0;

    for (let i = 1; i < shootingData.length; i++){
      age[i] = shootingData[i]['age']
      console.log(age[i])
      if (age[i] < 18){
        under18++;
      } else if(age[i] < 25){
        secondBin++;
      } else if(age[i] < 35){
        thirdBin++;
      } else if(age[i] < 45){
        fourthBin++;
      } else if(age[i] < 55){
        fifthBin++;
      } else if(age[i] < 65){
        sixthBin++;
      } 
      else {
        seventhBin++;
      }
    };
    console.log(under18);
    console.log(secondBin);
    console.log(thirdBin);
    console.log(fourthBin);
    console.log(fifthBin);
    console.log(sixthBin);
    console.log(seventhBin);

    const labels = [
        'Younger than 18 years old',
        '18 - 24 years old',
        '25 - 34 years old',
        '35 - 44 years old',
        '45 - 54 years old',
        '55 - 64 years old',
        '65 and older',
      ];
      
      const data = {
        labels: labels,
        datasets: [{
          label: 'Age',
          backgroundColor: ['rgb(255, 99, 132)',
          'rgb(203, 106, 252)',
          'rgb(7, 155, 7)',
          'rgb(33, 34, 35)',
          'rgb(239, 187, 110)',
          'rgb(136, 66, 98)',
          'rgb(126, 86, 18)',
        ],
          borderColor: 'rgb(255, 255, 255)',
          data: [under18,
            secondBin,
            thirdBin,
            fourthBin,
            fifthBin,
            sixthBin,
            seventhBin]
        }]
      };

      const config = {
        type: 'pie',
        data: data,
        options: {}
      };

  const myChart = new Chart(document.getElementById("myChart"), config);
})
