import logo from './logo.svg';
import './App.css';
import { Button, MenuItem, Select } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

function App() {

   const { t, i18n } = useTranslation();
   const handleClick = (la) => {
      i18n.changeLanguage(la);
   };

   return (
      <div className="App">
         <nav style={{ width: "100%", padding: "2rem 0", backgroundColor: "gray" }}>

            {/* <Select
               labelId="demo-simple-select-label"
               id="demo-simple-select"
               onChange={(e) => handleClick(e.target.value)}
            >
               <MenuItem value={"en"}>English</MenuItem>
               <MenuItem value={"th"}>Thai</MenuItem>
            </Select> */}
            <Button variant="contained" color="primary" onClick={() => handleClick("en")}>English</Button>
            <Button variant="contained" color="secondary" onClick={() => handleClick("th")}>Thai</Button>
         </nav>
         <p>{t("Hello")}</p>
         <p>{t("Goobye")}</p>

      </div>
   );
}

export default App;
