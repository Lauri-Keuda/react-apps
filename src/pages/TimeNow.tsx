import { useRef, useState } from "react"

const TimeNow = () => {
  const dropdownRef = useRef<HTMLSelectElement>(null)
  const [time, setTime] = useState("--:--")

  async function handleChange() {
    if(dropdownRef.current?.value === "--:--") {
      setTime("--:--");
      return
    }

    fetch("https://worldtimeapi.org/api/timezone/" + dropdownRef.current?.value)
      .then(res => res.json())
      .then(data => {
        setTime(data.datetime.slice(11, 16))
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="timeNow-container">
      <h2 className="timeNow-header">Time in capital cities</h2>
      <h3 className="timeNow-time">{time}</h3>
      <div className="timeNow-city">
        <p>Select city:</p>
        <select id="timeNow-dropdown" ref={dropdownRef} onChange={handleChange} name="timeNowDropdown" title="Select city">
          <option value="--:--">Select city</option>
          <option value="--:--">------Europe------</option>
          <option value="Europe/Amsterdam">Amsterdam</option>
          <option value="Europe/Andorra">Andorra la Vella</option>
          <option value="Europe/Istanbul">Ankara</option>
          <option value="Europe/Athens">Athens</option>
          <option value="Europe/Belgrade">Belgrade</option>
          <option value="Europe/Berlin">Berlin</option>
          <option value="Europe/Zurich">Bern</option>
          <option value="Europe/Bratislava">Bratislava</option>
          <option value="Europe/Brussels">Brussels</option>
          <option value="Europe/Bucharest">Bucharest</option>
          <option value="Europe/Budapest">Budapest</option>
          <option value="Europe/Chisinau">Chisinau</option>
          <option value="Europe/Copenhagen">Copenhagen</option>
          <option value="Europe/Dublin">Dublin</option>
          <option value="Europe/Athens">Athens</option>
          <option value="Europe/Helsinki">Helsinki</option>
          <option value="Europe/Kiev">Kyiv</option>
          <option value="Europe/Lisbon">Lisbon</option>
          <option value="Europe/Riga">Riga</option>
          <option value="Europe/Rome">Rome</option>
          <option value="Europe/San_Marino">San Marino</option>
          <option value="Europe/Sarajevo">Sarajevo</option>
          <option value="Europe/Skopje">Skopje</option>
          <option value="Europe/Sofia">Sofia</option>
          <option value="Europe/Tallinn">Tallinn</option>
          <option value="Europe/Chisinau">Tiraspol</option>
          <option value="Europe/Vaduz">Vaduz</option>
          <option value="Europe/Malta">Valletta</option>
          <option value="Europe/Vatican">Vatican City</option>
          <option value="Europe/Vienna">Vienna</option>
          <option value="Europe/Vilnius">Vilnius</option>
          <option value="Europe/Warsaw">Warsaw</option>
          <option value="Europe/Zagreb">Zagreb</option>

          <option value="--:--">------Asia------</option>
          <option value="Asia/Amman">Amman</option>
          <option value="Indian/Antananarivo">Antananarivo</option>
          <option value="Asia/Ashgabat">Ashgabat</option>
          <option value="Asia/Almaty">Astana</option>
          <option value="Asia/Baghdad">Baghdad</option>
          <option value="Asia/Baku">Baku</option>
          <option value="Asia/Brunei">Bandar Seri Begawan</option>
          <option value="Asia/Bangkok">Bangkok</option>
          <option value="Asia/Shanghai">Beijing</option>
          <option value="Asia/Beirut">Beirut</option>
          <option value="Asia/Bishkek">Bishkek</option>
          <option value="Asia/Colombo">Colombo</option>
          <option value="Asia/Damascus">Damascus</option>
          <option value="Asia/Dhaka">Dhaka</option>
          <option value="Asia/Dili">Dili</option>
          <option value="Asia/Qatar">Doha</option>
          <option value="Asia/Dubai">Dubai</option>
          <option value="Asia/Dushanbe">Dushanbe</option>
          <option value="Asia/Ho_Chi_Minh">Hanoi</option>
          <option value="Asia/Karachi">Islamabad</option>
          <option value="Asia/Jakarta">Jakarta</option>
          <option value="Asia/Kabul">Kabul</option>
          <option value="Asia/Kathmandu">Kathmandu</option>
          <option value="Asia/Kuala_Lumpur">Kuala Lumpur</option>
          <option value="Asia/Kuwait">Kuwait City</option>
          <option value="Asia/Riyadh">Riyadh</option>
          <option value="Indian/Reunion">Saint-Denis</option>
          <option value="Asia/Aden">Sana'a</option>
          <option value="Asia/Seoul">Seoul</option>
          <option value="Asia/Singapore">Singapore</option>
          <option value="Asia/Colombo">Sri Jayawardenepura Kotte</option>
          <option value="Asia/Taipei">Taipei</option>
          <option value="Asia/Tashkent">Tashkent</option>
          <option value="Asia/Tbilisi">Tbilisi</option>
          <option value="Asia/Tehran">Tehran</option>
          <option value="Asia/Thimphu">Thimphu</option>
          <option value="Asia/Tokyo">Tokyo</option>
          <option value="Asia/Ulaanbaatar">Ulaanbaatar</option>
          <option value="Indian/Mahe">Victoria</option>
          <option value="Asia/Vientiane">Vientiane</option>
          <option value="Asia/Yerevan">Yerevan</option>

          <option value="--:--">------America------</option>
          <option value="America/St_Kitts">Basseterre</option>
          <option value="America/Belize">Belmopan</option>
          <option value="America/Bogota">Bogotá</option>
          <option value="America/Sao_Paulo">Brasília</option>
          <option value="America/Barbados">Bridgetown</option>
          <option value="America/Argentina/Buenos_Aires">Buenos Aires</option>
          <option value="America/Caracas">Caracas</option>
          <option value="America/St_Lucia">Castries</option>
          <option value="America/Guyana">Georgetown</option>
          <option value="America/Havana">Havana</option>
          <option value="America/St_Vincent">Kingstown</option>
          <option value="America/Jamaica">Kingston</option>
          <option value="America/La_Paz">La Paz</option>
          <option value="America/Lima">Lima</option>
          <option value="America/Dominica">Roseau</option>
          <option value="America/Grenada">Saint George's</option>
          <option value="America/Antigua">Saint John's</option>
          <option value="America/Miquelon">Saint-Pierre</option>
          <option value="America/Costa_Rica">San José</option>
          <option value="America/El_Salvador">San Salvador</option>
          <option value="America/Santo_Domingo">Santo Domingo</option>
          <option value="Chile/Santiago">Santiago</option>
          <option value="America/Grenada">St. George's</option>
          <option value="America/Tegucigalpa">Tegucigalpa</option>
          <option value="America/New_York">Washington, D.C.</option>

          <option value="--:--">------Africa------</option>
          <option value="Africa/Abuja">Abuja</option>
          <option value="Africa/Accra">Accra</option>
          <option value="Africa/Addis_Ababa">Addis Ababa</option>
          <option value="Africa/Algiers">Algiers</option>
          <option value="Africa/Asmara">Asmara</option>
          <option value="Africa/Bamako">Bamako</option>
          <option value="Africa/Bangui">Bangui</option>
          <option value="Africa/Banjul">Banjul</option>
          <option value="Africa/Brazzaville">Brazzaville</option>
          <option value="Africa/Bujumbura">Bujumbura</option>
          <option value="Africa/Cairo">Cairo</option>
          <option value="Africa/Conakry">Conakry</option>
          <option value="Africa/Dakar">Dakar</option>
          <option value="Africa/Djibouti">Djibouti</option>
          <option value="Africa/Dodoma">Dodoma</option>
          <option value="Africa/Gaborone">Gaborone</option>
          <option value="Africa/Harare">Harare</option>
          <option value="Africa/Juba">Juba</option>
          <option value="Africa/Kampala">Kampala</option>
          <option value="Africa/Khartoum">Khartoum</option>
          <option value="Africa/Kigali">Kigali</option>
          <option value="Africa/Kinshasa">Kinshasa</option>
          <option value="Africa/Libreville">Libreville</option>
          <option value="Africa/Lilongwe">Lilongwe</option>
          <option value="Africa/Sao_Tome">São Tomé</option>
          <option value="Africa/Tripoli">Tripoli</option>
          <option value="Africa/Tunis">Tunis</option>
          <option value="Africa/Windhoek">Windhoek</option>
          <option value="Africa/Douala">Yaoundé</option>

          <option value="--:--">------Oceania------</option>
          <option value="Pacific/Apia">Apia</option>
          <option value="Australia/Sydney">Canberra</option>
          <option value="Pacific/Funafuti">Funafuti</option>
          <option value="Pacific/Guadalcanal">Honiara</option>
          <option value="Pacific/Auckland">Suva</option>
          <option value="Pacific/Auckland">Wellington</option>
        </select>
      </div>
    </div>
  )
}

export default TimeNow