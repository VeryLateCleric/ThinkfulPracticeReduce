
// accumulator pattern 

const areas = [7, 10, 4];

let result = 0
for (let i = 0; i< areas.length; i++) {
    result += areas[i];
}
console.log(result)

//reduce() method
const areas2 = [7, 10, 4, 4, 15];
       //callback to run for each , initial value 
let result2 = areas2.reduce((total, area) => total + area);
console.log(result2);          // functions to add area as the first value to add tp the total 
                            // total begins at 0 and will add each number in areas2 to total 40
const parks = [
    { name: "Acadia", areaInSquareKm: 198.6 },
    { name: "Crater Lake", areaInSquareKm: 741.5 },
    { name: "Kenai Fjords", areaInSquareKm: 2710},
    { name: "Zion", areaInSquareKm: 595.9},
];
const parksToAreasObject = parks.reduce((result, park) => {
    result[park.name] = park.areaInSquareKm;
    return result;
}, {})

console.log(parksToAreasObject)

