// Base Class
class FormElement {
  validate() {
    throw new Error("Validate method must be implemented!");
  }
}

// Derived Classes
class TextInput extends FormElement {
  validate() {
    console.log("Validating text input...");
    // Perform text input validation logic
  }
}

class NumberInput extends FormElement {
  validate() {
    console.log("Validating number input...");
    // Perform number input validation logic
  }
}

class DateInput extends FormElement {
  validate() {
    console.log("Validating date input...");
    // Perform date input validation logic
  }
}

// Test Automation Function
function validateElements(elements) {
  elements.forEach((element) => element.validate());
}

// Instantiate objects
const elements = [
  new TextInput(),
  new NumberInput(),
  new DateInput(),
];

// Call the test function
validateElements(elements);

