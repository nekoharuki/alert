const button=document.querySelector('#put');
function timer(){
    const time=document.querySelector('#time').value;
    setTimeout(() => {
        document.body.style.backgroundColor='red';
        alert(`時間です${time}秒経ちました`);
    }, time*1000);
}
button.addEventListener('click',timer)