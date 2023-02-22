import {useCallback} from "react";
import {StylesManager, Model} from "survey-core";
import {Survey} from "survey-react-ui";
import "survey-core/defaultV2.css";
import {json} from "./json.js"
import {createSurveyRequest} from "../api/survey.api.js";


StylesManager.applyTheme("defaultV2");
function SurveyComponent() {
  const survey = new Model(json);
  const alertResults = useCallback(async (sender) => {

      setTimeout(() => {
        const results = JSON.stringify(sender.data);
        console.log(results);
      }, 10000)
      
      try {
        const response = await createSurveyRequest(results);
        console.log(response);
          console.log('especando');
       
      } catch (error) {
          console.error(error);
      }
    },
    [],
  )

  

    survey.onComplete.add(alertResults);
    return (<Survey model={survey}/>);

  
}
export default SurveyComponent;