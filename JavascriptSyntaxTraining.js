const greeting = 'Hello';

function CreateNewHuman(HumanAttributes) {
    return {
        FirstName: function() { return HumanAttributes[0]; },
        LastName: function() { return HumanAttributes[1]; },
        DateOfBirth: function() { return new Date(HumanAttributes[2]); },
        CreateGreeting: function() {
            return greeting + " " + this.FirstName() + " " + this.LastName() + ". Today is " + this.DateOfBirth();
        }
    };
}

const HumanOneAttributes = ['Josh', 'Butler', '2025-12-12'];
const HumanOne = CreateNewHuman(HumanOneAttributes);
console.log(HumanOne.CreateGreeting());

//Arrow Funtions

var Square = (Square,Rectangle) => Square * Square * Rectangle;
console.log(Square(2,2))

var aretheyequal = (A,B) => {
    if(A==B) {
        return "Equal"
    } else {
        return "Not Equal"
    }
}
console.log(aretheyequal(1,2))
console.log(aretheyequal(1,1))

const {FirstName,LastName} = HumanOne
console.log(FirstName)

const TemplateLiteral = `Hello this is ${FirstName()}`
console.log(TemplateLiteral)