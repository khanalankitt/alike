function getCompatibility(sign1, sign2) {
  const compatibility = {
      Aries: { Aries: 80, Taurus: 60, Gemini: 90, Cancer: 50, Leo: 95, Virgo: 70, Libra: 85, Scorpio: 75, Sagittarius: 90, Capricorn: 65, Aquarius: 85, Pisces: 60 },
      Taurus: { Aries: 60, Taurus: 85, Gemini: 50, Cancer: 95, Leo: 65, Virgo: 90, Libra: 70, Scorpio: 80, Sagittarius: 55, Capricorn: 90, Aquarius: 60, Pisces: 95 },
      Gemini: { Aries: 90, Taurus: 50, Gemini: 85, Cancer: 60, Leo: 85, Virgo: 75, Libra: 95, Scorpio: 70, Sagittarius: 95, Capricorn: 55, Aquarius: 90, Pisces: 50 },
      Cancer: { Aries: 50, Taurus: 95, Gemini: 60, Cancer: 85, Leo: 70, Virgo: 80, Libra: 75, Scorpio: 90, Sagittarius: 60, Capricorn: 85, Aquarius: 55, Pisces: 95 },
      Leo: { Aries: 95, Taurus: 65, Gemini: 85, Cancer: 70, Leo: 90, Virgo: 75, Libra: 85, Scorpio: 70, Sagittarius: 95, Capricorn: 60, Aquarius: 85, Pisces: 65 },
      Virgo: { Aries: 70, Taurus: 90, Gemini: 75, Cancer: 80, Leo: 75, Virgo: 85, Libra: 70, Scorpio: 85, Sagittarius: 65, Capricorn: 95, Aquarius: 60, Pisces: 80 },
      Libra: { Aries: 85, Taurus: 70, Gemini: 95, Cancer: 75, Leo: 85, Virgo: 70, Libra: 90, Scorpio: 75, Sagittarius: 85, Capricorn: 70, Aquarius: 95, Pisces: 65 },
      Scorpio: { Aries: 75, Taurus: 80, Gemini: 70, Cancer: 90, Leo: 70, Virgo: 85, Libra: 75, Scorpio: 85, Sagittarius: 70, Capricorn: 90, Aquarius: 65, Pisces: 90 },
      Sagittarius: { Aries: 90, Taurus: 55, Gemini: 95, Cancer: 60, Leo: 95, Virgo: 65, Libra: 85, Scorpio: 70, Sagittarius: 90, Capricorn: 60, Aquarius: 95, Pisces: 70 },
      Capricorn: { Aries: 65, Taurus: 90, Gemini: 55, Cancer: 85, Leo: 60, Virgo: 95, Libra: 70, Scorpio: 90, Sagittarius: 60, Capricorn: 85, Aquarius: 70, Pisces: 80 },
      Aquarius: { Aries: 85, Taurus: 60, Gemini: 90, Cancer: 55, Leo: 85, Virgo: 60, Libra: 95, Scorpio: 65, Sagittarius: 95, Capricorn: 70, Aquarius: 90, Pisces: 75 },
      Pisces: { Aries: 60, Taurus: 95, Gemini: 50, Cancer: 95, Leo: 65, Virgo: 80, Libra: 65, Scorpio: 90, Sagittarius: 70, Capricorn: 80, Aquarius: 75, Pisces: 85 }
    };
  if (compatibility[sign1] && compatibility[sign1][sign2]) {
    return compatibility[sign1][sign2];
  } else {
    return 'Invalid zodiac signs';
  }
}   

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { male, female } = req.body;  
    try {
      const maleZodiac = getZodiacSign(male);  
      const femaleZodiac = getZodiacSign(female);
     const compatibilityPercentage = getCompatibility(maleZodiac, femaleZodiac); 
      
      res.status(200).json({ maleZodiac, femaleZodiac , compatibilityPercentage});
    } catch (error) {
      res.status(500).json({ error: "Failed to determine zodiac signs" });  
    }  
  } else {
    res.status(405).json({ message: "Method Not Allowed" });  
  }  
}  

function getZodiacSign(dob) {
  const date = new Date(dob);  
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
    return "Aquarius";  
  } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
    return "Pisces";  
  } else if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
    return "Aries";  
  } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
    return "Taurus";  
  } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
    return "Gemini";  
  } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
    return "Cancer";  
  } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
    return "Leo";  
  } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
    return "Virgo";  
  } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
    return "Libra";  
  } else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
    return "Scorpio";  
  } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
    return "Sagittarius";  
  } else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
    return "Capricorn";  
  }  
}  


  