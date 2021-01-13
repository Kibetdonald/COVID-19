async function getCovidApi()
{
    const jsonFormatData = await fetch("https://api.covid19api.com/summary");
    const jsFormatData = await jsonFormatData.json();
    
    const TotalglobalCase = jsFormatData.Global.TotalConfirmed;
     console.log("Total Global case:" +TotalglobalCase);

     const countryName = jsFormatData.Countries[0].Country;
     console.log("First Country Name:" +countryName);
     console.log(jsFormatData.Countries[87].Country)

     document.getElementById("i2").innerHTML = jsFormatData.Global.NewConfirmed;
     document.getElementById("i3").innerHTML = jsFormatData.Global.TotalConfirmed;
     document.getElementById("i4").innerHTML = jsFormatData.Global.NewDeaths;
     document.getElementById("i5").innerHTML = jsFormatData.Global.TotalDeaths;
     document.getElementById("i6").innerHTML = jsFormatData.Global.NewRecovered;
     document.getElementById("i7").innerHTML = jsFormatData.Global.TotalRecovered;
     document.getElementById("i8").innerHTML = jsFormatData.Countries[87].Date;


     
     document.getElementById("j2").innerHTML = jsFormatData.Countries[87].NewConfirmed;
     document.getElementById("j3").innerHTML = jsFormatData.Countries[87].TotalConfirmed;
     document.getElementById("j4").innerHTML = jsFormatData.Countries[87].NewDeaths;
     document.getElementById("j5").innerHTML = jsFormatData.Countries[87].TotalDeaths;
     document.getElementById("j6").innerHTML = jsFormatData.Countries[87].NewRecovered;
     document.getElementById("j7").innerHTML = jsFormatData.Countries[87].TotalRecovered;
     document.getElementById("j8").innerHTML = jsFormatData.Countries[87].Date;


}
getCovidApi();
