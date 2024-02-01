class Shape //this is main class
{

    constructor(shapeColor,text,textColor) //constructor that takes in 3 parameter
    {
        this.shapeColor=shapeColor;
        this.text=text;
        this.textColor=textColor
    }

      Stringrender()  // this function will return a string
      {
        var stringTemPlate ='<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
       return stringTemPlate;
    }

}


//prototype function that will return validation of user input, it ensures user can only enter up to 3 characters
Shape.prototype.chaRacterCheck = (character) => {
    // TODO: Write code that checks if the password is less than 8 characters and returns false if so.
    // if (character.length > 3) {
    //     console.log("Invalid input, please make sure your input is up to 3 characters")
    //     return false;
    // }
    // else
    // return true;
    return (character.length > 3) ? "Invalid input, please make sure your input is up to 3 characters\n"+false : true;


};  


//this class will inherit features from the main class
class Circle extends Shape {
    constructor(shapeType,shapeColor,text,textColor) //constructor that takes in 4 parameter
    {
    super(shapeColor,text,textColor)  // since this class inheriting from the main class, we only need to do the shapeType
    this.shapeType=shapeType;
 
}
//
render() //function to generate details of shape
{
    return`${this.Stringrender()}<${this.shapeType.toLowerCase()} cx="150" cy="100" r="65" fill="${this.shapeColor}" /><text x="150" y="130" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
}

}
//-----------------------------------------------------------------------------------------------------------
class Square extends Shape {
        constructor(shapeType,shapeColor,text,textColor) {
        super(shapeColor,text,textColor) 
        this.shapeType=shapeType;
        
}

render()
{
    return`${this.Stringrender()}<${this.shapeType='rect'} x="50" height="200" width="200" fill="${this.shapeColor}" /><text x="150" y="130" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
}

}
//-----------------------------------------------------------------------------------------------------------
class Triangle extends Shape {
        constructor(shapeType,shapeColor,text,textColor) {
        super(shapeColor,text,textColor) 
        this.shapeType=shapeType;
}


render()
{
    return`${this.Stringrender()}<${this.shapeType='polygon'} points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" /><text x="150" y="130" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
}

}

//   const testShape = new Square('Square','yellow','jes','cyan');
//   console.log(testShape.render());
  

module.exports ={Circle,Square,Triangle};



