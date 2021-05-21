// stream reads json from data file 
// processes the data to calculate BMI, Category, Health Risk
// Counts number of Overweight people
// writes data along with calculated fields to output.json
// logs number of overweight people to the console

let Patient = require("./bmiCalculator")
const StreamArray = require('stream-json/streamers/StreamArray');
var es = require('event-stream');
const fs = require('fs');
const filePath = './replicatedData.json'
const fileOutputPath = './output.json'

console.time("record")
const fileStream = fs.createReadStream(filePath);
const fileOutputStream = fs.createWriteStream(fileOutputPath)

let count = 0
let overweightPeople = 0

const process = async (dataObject) => {
    let patientData = dataObject.value
    let output = { ...patientData }

    output.bmi = await Patient.getBmi(patientData.WeightKg, patientData.HeightCm/100)
    let bmiDetails = await Patient.getBmiDetails(output.bmi)
    if (bmiDetails.bmiCategory == "Overweight") { overweightPeople++; }
    output = {  ...output, ...bmiDetails }
    // console.log("output - ", output);

    let result =  JSON.stringify(output) ;
    if (count === 0) {
        result = '[' + result
    } else {
        result = "," + result
    }
    count++;

    fileOutputStream.write(result);
}

const end = () => {
    const finish = ']'
    fileOutputStream.write(finish, () => {
        fileOutputStream.close()
    })
    console.log(`${count} objects are written to file`)
    console.log("The total number of overweight people - ", overweightPeople)
    console.timeEnd("record")
}

fileStream
    .pipe(StreamArray.withParser())
    .pipe(es.through(process, end))

