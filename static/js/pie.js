const mongo_endpoint='mongo';

d3.json(mongo_endpoint).then(function(shootingData){
    let age = [];
    let sex = [];
    let race = [];
    // console.log("data:", shootingData);

    // Age pie chart
  let under18 = 0;
  let secondBin = 0;
  let thirdBin =0;
  let fourthBin = 0;
  let fifthBin = 0;
  let sixthBin= 0;
  let seventhBin = 0;

    for (let i = 1; i < shootingData.length; i++){
      age[i] = shootingData[i]['age']
      // console.log(age[i])
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
    console.log('Under18:', under18);
    console.log('18 - 24:', secondBin);
    console.log('25 - 34:', thirdBin);
    console.log('35 - 44:', fourthBin);
    console.log('45 - 54:', fifthBin);
    console.log('55 - 64:', sixthBin);
    console.log('65 and older:', seventhBin);

    const Agelabels = [
        'Younger than 18 years old',
        '18 - 24 years old',
        '25 - 34 years old',
        '35 - 44 years old',
        '45 - 54 years old',
        '55 - 64 years old',
        '65 and older',
      ];
      
      const Agedata = {
        labels: Agelabels,
        datasets: [{
          label: 'Age',
          backgroundColor: ['#1CDCE8',
          '#36CBE9',
          '#51BAEA',
          '#6CAAEB',
          '#8699EB',
          '#A188EC',
          '#BB77ED',
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

      const Ageconfig = {
        type: 'pie',
        data: Agedata,
        options: {
          plugins:{
            title: {
              display: true,
              text: "Age Distribution"
            }
          }
        }
      };


    const AgeChart = new Chart(document.getElementById("AgeChart"), Ageconfig);

  // Sex pie chart
  let maleCount = 0;
  let femaleCount = 0;

    for (let i = 1; i < shootingData.length; i++){
      sex[i] = [shootingData[i]['sex']]
        // console.log(sex[i])
      if (sex[i] == 'Male'){
        maleCount++;
      } 
      else {
        femaleCount++;
      }
    };

    console.log('Males:', maleCount);
    console.log('Females:', femaleCount);

    const SexLabels = [
      'Male',
      'Female',
    ];

    const SexData = {
      labels: SexLabels,
      datasets: [{
        label: 'Sex',
        backgroundColor: ['#51BAEA',
        '#BB77ED',
        ],
        borderColor: 'rgb(255, 255, 255)',
        data: [maleCount,
        femaleCount]
      }]
    };
    const Sexconfig = {
      type: 'pie',
      data: SexData,
      options: {
        plugins:{
          title:{
            display: true,
            text: "Sex Distribution"
          }
        }
      }
    };

    
    SexChart = new Chart(document.getElementById("SexChart"), Sexconfig);


// Race pie chart
  let whiteCount = 0;
  let blackCount = 0;
  let hispanicCount = 0;
  let asianCount = 0;
  let nativeAmericanCount = 0;
  let otherCount = 0;


    for (let i = 1; i < shootingData.length; i++){
      race[i] = [shootingData[i]['ethnicity']]
      // console.log(race[i])
      if (race[i] == 'White'){
        whiteCount++;
      } else if(race[i] == 'Black'){
        blackCount++;
      } else if(race[i] == 'Hispanic'){
        hispanicCount++;
      } else if(race[i] == 'Asian'){
        asianCount++;
      } else if(race[i] == 'Native American'){
        nativeAmericanCount++;
      } else {
        otherCount++;
      }
    };
    
    console.log('White:', whiteCount);
    console.log('Black:', blackCount);
    console.log('Hispanic:', hispanicCount);
    console.log('Asian:', asianCount);
    console.log('Native American:', nativeAmericanCount);
    console.log('Other:', otherCount);


    const raceLabels = [
      'White',
      'Black',
      'Hispanic',
      'Asian',
      'Native American',
      'Other',
    ];

    const raceData = {
      labels: raceLabels,
      datasets: [{
        label: 'Ethnicity',
        backgroundColor: ['#1CDCE8',
        '#36CBE9',
        '#51BAEA',
        '#6CAAEB',
        '#8699EB',
        '#A188EC',
        ],
        borderColor: 'rgb(255, 255, 255)',
        data: [whiteCount,
          blackCount,
          hispanicCount,
          asianCount,
          nativeAmericanCount,
          otherCount
        ]
      }]
    };
    const raceconfig = {
      type: 'pie',
      data: raceData,
      options: {
        plugins:{
          title: {
            display: true,
            text: "Race Distribution"
          }
        }
      }
    };

  
    RaceChart = new Chart(document.getElementById("RaceChart"), raceconfig);

})
