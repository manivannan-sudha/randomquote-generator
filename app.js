quoteGenerator = ()=>{
    document.body.style.backgroundColor = 'rgb(' + Math.round(Math.random() *255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255);
    let randomIndex = Math.floor(Math.random()*15);
    console.log(randomIndex);
    
    
    fetch('https://type.fit/api/quotes').then( (data) => {
        return data.json();
    }).then( (data) => {
        document.getElementById('quote').innerText = data[randomIndex].text;
        document.getElementById('author').innerText = data[randomIndex].author;
    })
}

quoteGenerator();