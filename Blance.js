
//withdraw & deposit btn

const depositBtn = document.querySelector('#deposit-btn');
const withdrawBtn = document.querySelector('#whitdraw-btn');

const depositFild = document.querySelector('#deposit-fild');
const withdrawFild = document.querySelector('#whitdraw-fild');

const depositAmount = document.getElementById('deposit-amo');
const blanceAmount = document.getElementById('Blance-amo');
const withdrawAmount = document.getElementById('whitdraw-amo');

// console.log(depositBtn, withdrawBtn, depositFild, withdrawFild, depositAmount, blanceAmount, withdrawAmount);

depositBtn.addEventListener('click',function(){

    const depositFildValue = depositFild.value;

    const depositConvertAmount = parseFloat(depositFildValue)

    const pastDeposit = depositAmount.innerText;

    const pastDepositConvert = parseFloat(pastDeposit);
    const pastBlance = blanceAmount.innerText;
    const pastBlanceConvert = parseFloat(pastBlance);

    const totalDeposit = depositConvertAmount + pastDepositConvert;
    const totalBlance = depositConvertAmount + pastBlanceConvert;

    depositAmount.innerText = totalDeposit;
    blanceAmount.innerText = totalBlance;

    depositFild.value = "";


})
withdrawBtn.addEventListener('click', function(){

    const withdrawFildValue = withdrawFild.value;
    const whitdrawConvertAmo = parseFloat(withdrawFildValue)
     const prsentWithdraw = withdrawAmount.innerText;
     const prsentWithdrawConvert = parseFloat(prsentWithdraw);
     const presentBlance = blanceAmount.innerText;
     const prsentBlanceConvert = parseFloat(presentBlance);
     const totalMony = whitdrawConvertAmo + prsentWithdrawConvert;
     const totalMonyConvert =  prsentBlanceConvert - totalMony ;

    withdrawAmount.innerText = totalMony;
    blanceAmount.innerText = totalMonyConvert;


    withdrawFild.value = "";
})
