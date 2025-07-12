const form=document.querySelector("form")

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const result=document.querySelector('#results')
    if(height ==''|| height<0 || isNaN(height)){
        console.log(`Please give valid height ${height}`)
        result.innerHTML=`Please give valid height ${height}`
    }
    else if(weight ==''|| weight<0 || isNaN(weight)){
        console.log(`Please give valid weight ${weight}`)
        result.innerHTML=(`Please give valid weight ${weight}`)
    }
    else{
       const bmi=(weight/((height*height)/10000)).toFixed(2)
       
    if(bmi <18.6 ){
        result.innerHTML=`<span>bmi is ${bmi} under weight </span>`

    }
    else if(bmi >=18.6  & bmi <24.9){
        result.innerHTML=`<span>bmi is ${bmi} normal range </span>`

    }
    else if (bmi >=24.9)
        result.innerHTML=`<span>bmi is ${bmi} over weight </span>`

    }


})  