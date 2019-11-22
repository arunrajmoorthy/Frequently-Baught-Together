var baughtList;
var frequencyHolder = document.getElementById("frequencyHolder");

function addItem(){
    var ul = document.getElementById("dynamic-list");
    var candidate = document.getElementById("candidate");
    var li = document.createElement("li");
    li.setAttribute('id',candidate.value);
    li.appendChild(document.createTextNode(candidate.value));
    ul.appendChild(li);
    baughtList = candidate.value;
    frequentlyBaughtList(baughtList);
}

function removeItem(){
    var ul = document.getElementById("dynamic-list");
    var candidate = document.getElementById("candidate");
    var item = document.getElementById(candidate.value);
    ul.removeChild(item);
    frequencyHolder.innerHTML = '';
    frequencyHolder.value = '';
}

function frequentlyBaughtList(item) {

    
    var sug;
    let suggestedTest;

    frequencyHolder.innerHTML = '';

    var suggestArray = [
      {
        purcheItem: 'hamam',
        suggestion: [
          {
            name: 'Hamam'
          },
          {
            name: 'Surf'
          },
          {
            name: 'Lays'
          },
        ]
      },
      {
        purcheItem: 'Medimix',
        suggestion: [
          {
            name: 'Medimix'
          },
          {
            name: 'Arial'
          },
          {
            name: 'Kurkure'
          },
        ]
      },
      {
        purcheItem: 'Lux',
        suggestion: [
          {
            name: 'Lux'
          },
          {
            name: 'Tide'
          },
          {
            name: 'Cheetos'
          },
        ]
      }
    ]

    suggestArray.forEach((element) => {
        if (baughtList.toLowerCase() === element.purcheItem.toLowerCase()) {
            // var divElement = document.createElement('div');
            sug = element.suggestion;
          sug.forEach((subElement) => {
            frequencyHolder.innerHTML += `${subElement.name} + `;
          });
          frequencyHolder.innerHTML = frequencyHolder.innerHTML.split("+").reverse().slice(1).reverse().join(" + ");
        //    = suggestedTest;
        }
        console.log(frequencyHolder, 'Div Element');
    });

}