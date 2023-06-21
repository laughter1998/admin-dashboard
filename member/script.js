// 폼 미입력시 에러 메시지 출력
function setErrorFor(input, message) {
	if(input.type == "checkbox"){
		const formControl = input.closest(".form-float");
		formControl.classList.add('error');
		formControl.dataset.error = message;
	}
	const formControl = input.closest(".form-float");
	formControl.classList.add('error');
	formControl.dataset.error = message;
}

document.querySelectorAll('.form-float[data-error] input').forEach(inpEl => {
	
	const formGroup = inpEl.closest(".form-float");
	const formCheck = formGroup.classList.contains("form-check");
	if(formCheck){
	  inpEl.addEventListener('change', function(){
		  this.checked && formGroup.removeAttribute('data-error');
	  });
	  return;
	}
	  inpEl.addEventListener('input', function(){
		  inpEl.closest(".form-float").removeAttribute('data-error')
	  })
  })