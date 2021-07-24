let handleClick = (e) => {
    console.log(e.type)
     alert(e.type)
}

let handleBlur = (e) => {
    console.log('Blur')
    e.target.placeholder = "Blur"
    // console.log(e.type)
    //   alert(e.type)
}

let handleFocus = (e) => {
    console.log('Focus')
    e.target.placeholder = "Focus"
    // console.log(e.type)
     //alert(e.type)
}

// document.getElementsByClassName('input')[0].addEventListener('focus', handleFocus)
// document.getElementsByClassName('input')[0].addEventListener('blur', handleBlur)

let handleDBClick = (e) => {
    alert(e.type)
}

let handleOnchange = (e) => {
    document.getElementById('text').innerText= e.target.value;
}

let handleOninput = (e) => {
    document.getElementById('text').innerText= e.target.value;
}