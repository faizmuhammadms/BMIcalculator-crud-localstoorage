const onCalculateBtnClick = () => {
  try {

    let weight = document.getElementById("weightinput").value;
    let height = document.getElementById("heightinput").value;

    weight = Number(weight);
    height = Number(height);

    // Convert cm to meter
    height = height / 100;

    // BMI formula
    let bmi = weight / (height * height);

    bmi = bmi.toFixed(2);

    let status;

    if (bmi < 18.5) {
      status = "Underweight";
    } else if (bmi < 25) {
      status = "Normal weight";
    } else if (bmi < 30) {
      status = "Overweight";
    } else {
      status = "Obese";
    }

    document.getElementsByTagName("h2")[0].innerText =
      "BMI: " + bmi;

    document.getElementsByTagName("h3")[0].innerText =
      "Status: " + status;

  } catch (error) {

    console.log(error);
    alert("Error occurred while calculating");

  }
};