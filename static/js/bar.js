const mongo_endpoint='mongo';
 
d3.json(mongo_endpoint).then(function(shootingData){
    let armed = [];
    console.log("Raw data:", shootingData);
   
    let gun = 0;
    let knife = 0;
    let unarmed = 0;
    let toy_weapon = 0;
    let vehicle = 0;
    let other = 0;
   
    for (let i = 1; i < shootingData.length; i++){
        armed[i] = [shootingData[i]['armed']]
        //console.log(armed[i])
        if (armed[i] == 'gun'){
            gun++;
        } else if (armed[i] == 'knife'){
            knife++;
        } else if (armed[i] == 'unarmed'){
            unarmed++;
        } else if (armed[i] == 'toy weapon'){
            toy_weapon++;
        } else if (armed[i] == 'vehicle'){
            vehicle++;
        }
        else {
            other++;
        }
    };
    console.log("Gun:", gun);
    console.log("Knife:", knife);
    console.log("Unarmed:", unarmed);
    console.log("Toy Weapon:", toy_weapon);
    console.log("Vehicle:", vehicle);
    console.log("Other:", other);
   
    const WeaponLabels = [
        'Gun',
        'Knife',
        'Unarmed',
        'Toy Weapon',
        'Vehicle',
        'Other',
    ];
 
    const WeaponData = {
        labels: WeaponLabels,
        datasets: [{
            label: 'Weapons',
            backgroundColor: ['#1CDCE8',
            '#36CBE9',
            '#51BAEA',
            '#6CAAEB',
            '#8699EB',
            '#A188EC',
            '#BB77ED',
        ],
            borderColor: 'rgb(255, 255, 255)',
            data: [gun,
            knife,
            unarmed,
            toy_weapon,
            vehicle,
            other]
        }]
    };
 
    const Weaponconfig = {
        type: 'bar',
        data: WeaponData,
        options: {}
    };
   
    const WeaponChart = new Chart(document.getElementById("WeaponChart"), Weaponconfig);
})
