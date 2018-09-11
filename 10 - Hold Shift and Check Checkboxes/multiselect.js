const checkboxes = Array.from(document.querySelectorAll('input[type=checkbox]'));
console.log(checkboxes);

let checked;

function checkboxChange(e) {
  // for (let i = 0; i < checkboxes.length; i++) {
  //   checkboxes[i].checked = !checkboxes[i].checked;
  // }

  let alsoCheck = false;
  if (e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      if(checkbox.checked) alsoCheck = !alsoCheck;
      if (alsoCheck) checkbox.checked = true;
    })
  }
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', checkboxChange))