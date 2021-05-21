const bmiCalculator = require("./bmiCalculator")

test("calculates bmi when WeightKg is 96 and HeightInMetres is 1.71 to equal 32.83", () => {
    expect(bmiCalculator.getBmi(96, 1.71)).toBe(32.83);
})

test("determines category as Moderately obese when BMI is 32.83", () => {
    expect(bmiCalculator.getBmiDetails(32.83).bmiCategory).toBe("Moderately obese")
})

test("determines health risk as Medium risk when BMI is 32.83", () => {
    expect(bmiCalculator.getBmiDetails(32.83).healthRisk).toBe("Medium risk")
})


test("determines category as Underweight when BMI is 17", () => {
    expect(bmiCalculator.getBmiDetails(17).bmiCategory).toBe("Underweight")
})

test("determines health risk as Malnutrition risk when BMI is 17", () => {
    expect(bmiCalculator.getBmiDetails(17).healthRisk).toBe("Malnutrition risk")
})

test("determines category as Normal weight when BMI is 20", () => {
    expect(bmiCalculator.getBmiDetails(20).bmiCategory).toBe("Normal weight")
})

test("determines health risk as Low risk when BMI is 20", () => {
    expect(bmiCalculator.getBmiDetails(20).healthRisk).toBe("Low risk")
})

test("determines category as Overweight when BMI is 26", () => {
    expect(bmiCalculator.getBmiDetails(26).bmiCategory).toBe("Overweight")
})

test("determines health risk as Enhanced risk when BMI is 26", () => {
    expect(bmiCalculator.getBmiDetails(26).healthRisk).toBe("Enhanced risk")
})

test("determines category as Severely obese when BMI is 36", () => {
    expect(bmiCalculator.getBmiDetails(36).bmiCategory).toBe("Severely obese")
})

test("determines health risk as High risk when BMI is 36", () => {
    expect(bmiCalculator.getBmiDetails(36).healthRisk).toBe("High risk")
})

test("determines category as Very severely obese when BMI is 41", () => {
    expect(bmiCalculator.getBmiDetails(41).bmiCategory).toBe("Very severely obese")
})

test("determines health risk as Very high risk when BMI is 41", () => {
    expect(bmiCalculator.getBmiDetails(41).healthRisk).toBe("Very high risk")
})