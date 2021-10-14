const setBgColor = (temperament, allTemperaments) =>  {
    for(let i = 0; i < allTemperaments.length; i++) {
      var hex = ""
      if(allTemperaments[i].name === temperament) return hex = allTemperaments[i].hex;
    }
    return hex;
  }

export default setBgColor
  