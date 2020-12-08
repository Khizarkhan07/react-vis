import React, {useEffect, useMemo, useState} from 'react';
import './App.css';
import Chart from "./components/chart";
import {Language, LanguageWrapper} from './styles';
const API_URL = "https://nataliia-radina.github.io/react-vis-example/";
export type ResultObj = {
  [key: string]: string
}

const App = () => {
  const [results, setResults] = useState<ResultObj[]>()
  useEffect(()=> {
    fetch(API_URL).then(response => {
      if(response.ok){
        return response.json();
      }
      else {
        console.log('error occurred')
      }
    }).then(response => {setResults(response.results)})

  },[])

  const header = useMemo(()=> {
      return (
          <div className={"header mb-3 mt-2"}>
            <h4>React-Vis</h4>
          </div>
      )
  },[true])

  const languages = useMemo(()=> {
      return(
          <LanguageWrapper >
            <label htmlFor="">JavaScript</label>
            <Language color={'Violet'} />

            <label htmlFor="">Python</label>
            <Language color={'Green'} />

            <label htmlFor="">Ruby</label>
            <Language color={'Red'} />

            <label htmlFor="">Java</label>
            <Language color={'Blue'} />

          </LanguageWrapper>
      )
  },[true])

  return (
    <div className="container mt-5">

      {header}
      {languages}
      {results && (
          <Chart data={results}/>
      )}
    </div>
  );
}

export default App;
