let getBmi = (massInKg, heightInMetres) => {
    try {
        // console.log("massInKg, height - ", massInKg, heightInMetres);
        let heightSquared = Math.pow(heightInMetres, 2)
        // console.log("heightSquared - ", heightSquared);
        let bmi = massInKg / heightSquared
        bmi = Number(bmi.toFixed(2))
        return bmi
    } catch (error) {
        console.error(error);
        throw error;
    }
}

let getBmiDetails = (bmi) => {
    let bmiCategory, healthRisk
    if (bmi <= 18.4) {
        bmiCategory = "Underweight"
        healthRisk = "Malnutrition risk"
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        bmiCategory = "Normal weight"
        healthRisk = "Low risk"
    } else if (bmi >= 25 && bmi <= 29.9) {
        bmiCategory = "Overweight"
        healthRisk = "Enhanced risk"
    } else if (bmi >= 30 && bmi <= 34.9) {
        bmiCategory = "Moderately obese"
        healthRisk = "Medium risk"
    } else if (bmi >= 35 && bmi <= 39.9) {
        bmiCategory = "Severely obese"
        healthRisk = "High risk"
    } else if (bmi >= 40) {
        bmiCategory = "Very severely obese"
        healthRisk = "Very high risk"
    }

    return {
        bmiCategory,
        healthRisk
    }
}



module.exports = {
    getBmi,
    getBmiDetails
}




