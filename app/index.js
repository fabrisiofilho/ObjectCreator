const submit = document.getElementById('formObject');
const arrayObject = [];

submit.addEventListener('submit', (event)=>{
    event.preventDefault();
    event.stopPropagation();
    arrayObject.push(factoryObject(event.target));
    submit.reset();
    console.log(arrayObject);
});

function moreAttributes(){
    let newDiv = document.createElement("div");
    newDiv.setAttribute('id', 'newAttributes')
    newDiv.setAttribute('class', 'my')
    newDiv.insertAdjacentHTML('beforeend', '<div class="my"><input type="text" name="AttributeName" placeholder="Attribute Name"></div><div class="my"><input type="text" name="AttributeValue" placeholder="Attribute Value"></div>');
    let divAtual = document.getElementById("attributes");
    divAtual.appendChild(newDiv);
}


function factoryObject(eventObject){

    let Object = {
        "Name":eventObject.Name.value
    };

    let arrayAttributeName = eventObject.AttributeName;
    let arrayAttributeValue = eventObject.AttributeValue;

    if(arrayAttributeName.length>0){
        for(let i=0; i<arrayAttributeName.length; i++){
            Object[arrayAttributeName[i].value] = arrayAttributeValue[i].value;
        }
    }else{
        Object[arrayAttributeName.value] = arrayAttributeValue.value;
    }
    return Object;
}