function problem6(forms) {
  var answer;

  const singleNickNameDeleter = forms => {

    const noSingleNickNameForms = [];

    forms.map(form => {
      if(form[1].length !== 1){
        noSingleNickNameForms.push(form)
      }
    })
    return noSingleNickNameForms;
  };

  const duplicateCollector = forms => {

    const duplicateFormsBasket = {};

    for(let i=0 ; i < forms.length ; i++){

      const stringArr = forms[i][1].split("");

      for(let j=0 ; j < stringArr.length-1 ; j++){

        string = stringArr[j] + stringArr[j+1];

        if(!(duplicateFormsBasket[string])){
          const duplicateForms = []; 
        
          for(let k=i ; k < forms.length ; k++){
            if(forms[k][1].indexOf(string) !== -1) {
              duplicateForms.push(forms[k][0]);
            }
          }
          if(duplicateForms.length !== 1) {
            duplicateFormsBasket[string] = duplicateForms.sort();
          }
        }
      }
    }

    return duplicateFormsBasket;
  };

  const filteredForms = singleNickNameDeleter(forms);
  const duplicateForms = duplicateCollector(filteredForms);

  answer = Object.keys(duplicateForms).length === 1 ? duplicateForms[Object.keys(duplicateForms)[0]] : duplicateForms;

  return answer;
}

module.exports = problem6;


