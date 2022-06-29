alert('welcome to my website! i am fatma and i will calculate your grade')
let grade = prompt('insert your grade')
console.log(grade)

if (grade>=90 && grade<=100){
    console.log('%c لقد حصلت على امتياز', 'color: #219ebc;');

} else if(grade>=80 && grade<=89){
    console.log('%c لقد حصلت على جيد جدا','color: #219ebc;');

}else if(grade>=70 && grade<=79){
    console.log('%c لقد حصلت على جيد','color: #219ebc;');

 }else if(grade>=60 && grade<=69){
    console.log('%c لقد حصلت على مقبول', 'color: #219ebc;');

 }else if(grade>=50 && grade<=59){
    console.log('%c لقد حصلت على ضعيف','color: #219ebc;');
 }else{
    console.log('%c راسب', 'color: #219ebc;')
 }
//   جافاسكريبت ليست جافا
