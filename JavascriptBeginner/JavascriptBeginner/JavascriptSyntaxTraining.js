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

const HumanOneAttributes = ['Nuski', 'Nawfer', '2001-01-01'];
const HumanOne = CreateNewHuman(HumanOneAttributes);
console.log(HumanOne.CreateGreeting());
