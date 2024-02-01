const {Circle, Square, Triangle} = require("./shapes")
// Imports the Circle, Square, and Triangle shape classes from the 'shapes.js' module and defines a test suite for the shape class.  
// The test case checks whether "Cricle, Square, and Triangle" object can be rendered correctly by calling the render method and comparing the result to an expected SVG string.

//a testing suite for character check is created
  describe('CharacterCheck', () => {
    //A test is created to check that user cannot input no more than 3 chacters.
    it('should return false for user text input more than 3 characters long', () => {
      const shape = new Circle('Circle','blue','pmk2024','brown');
      const result = shape.chaRacterCheck(shape.text);
      expect(result).toEqual("Invalid input, please make sure your input is up to 3 characters\n"+false);
    });

    it('should return false for user text input more than 3 characters long', () => {
      const shape = new Square('Square','blue','pmk','brown');
      const result = shape.chaRacterCheck(shape.text);
      expect(result).toEqual(true);
    });

    it('should return false for user text input more than 3 characters long', () => {
      const shape = new Triangle('Triangle','blue','p','brown');
      const result = shape.chaRacterCheck(shape.text);
      expect(result).toEqual(true);
    });

  });



// Circle Shape
describe('Circle', () => {
    it('renders correctly', () => {
      const shape = new Circle('Circle','blue','pmk','brown');
      // this will compare that that template values and created values are matched
      expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="65" fill="blue" /><text x="150" y="130" font-size="60" text-anchor="middle" fill="brown">pmk</text></svg>`);
    });
  });


  describe('Square', () => {
    it('renders correctly', () => {
      const shape = new Square('Square','red','pmk','purple');
      // this will compare that that template values and created values are matched
      expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="50" height="200" width="200" fill="red" /><text x="150" y="130" font-size="60" text-anchor="middle" fill="purple">pmk</text></svg>`);
    });
  });


  describe('Triangle', () => {
    it('renders correctly', () => {
      const shape = new Triangle('Triangle','yellow','jes','cyan');
      // this will compare that that template values and created values are matched
      expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="yellow" /><text x="150" y="130" font-size="60" text-anchor="middle" fill="cyan">jes</text></svg>`);
    });
  });

 
