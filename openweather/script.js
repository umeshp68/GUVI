document.getElementById("weather1").addEventListener("click", ()=>{
    const country1="Albania"
    const api1="21d8c6a45a51b35cc03a8d2e29ad7307"

    fetch(`https://api.domainsdb.info/v1/domains/search?domain={querry}`)
    .then((response)=>response.json())
    .then((data)=>{
        

        return fetch(`https://api.domainsdb.info/v1/domains/search?domain={querry}`)
    })
    .then((response)=>response.json())
    .then((data)=>{
        document.getElementById("result").innerText=`Weather in ${data.name} : ${data.weather[0].main}, Temp: ${data.main.temp}`
    })
})

document.getElementById("weather2").addEventListener("click", ()=>{
    const country2="china"
    const api2="21d8c6a45a51b35cc03a8d2e29ad7307"

    fetch(`https://restcountries.com/v3.1/name/${country2}`)
    .then((response)=>response.json())
    .then((data)=>{
        const capital2=data[1].capital[0]

        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${capital2}&appid=${api2}`)
    })
    .then((response)=>response.json())
    .then((data)=>{
        document.getElementById("result").innerText=`Weather in ${data.name} : ${data.weather[0].main}, Temp: ${data.main.temp}`
    })
})

document.getElementById("weather3").addEventListener("click", ()=>{
    const country3="France"
    const api3="21d8c6a45a51b35cc03a8d2e29ad7307"

    fetch(`https://restcountries.com/v3.1/name/${country3}`)
    .then((response)=>response.json())
    .then((data)=>{
        const capital3=data[0].capital[0]

        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${capital3}&appid=${api3}`)
    })
    .then((response)=>response.json())
    .then((data)=>{
        document.getElementById("result").innerText=`Weather in ${data.name} : ${data.weather[0].main}, Temp: ${data.main.temp}`
    })
})