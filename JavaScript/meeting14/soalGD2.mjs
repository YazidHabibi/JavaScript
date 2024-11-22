let a = 10;

let b = 2;

async function calculateDivision() {
  if (b > 0) {
    return a / b;
  } else {
    throw "Cannot divide by zero!";
  }
}

const runCalculation = async () => {
  try {
    const result = await calculateDivision();

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

runCalculation();