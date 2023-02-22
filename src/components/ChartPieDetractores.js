
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import Card from 'react-bootstrap/Card';
import {useState, useEffect } from 'react';
import { getNPS } from '../api/survey.api.js';


ChartJS.register(ArcElement, Tooltip, Legend);
   

export default function ChartPieDetractores() {

  const [NpsPie, SetNpsPie] = useState([])

  useEffect(() => {

  let interval = setInterval(() => {

      async function npsTotal() {
      const respuesta = await getNPS();
  
      // console.log(respuesta.data);
      SetNpsPie(respuesta.data)

    }

    npsTotal()
  }, 2000) 
}, [])


var i = 0;
var playas=0;
var tribu=0;
var gale=0;
var baños=0;
var verdes=0;
var otros=0; 


for(i=0;i<NpsPie.length;i++){
    
    if(NpsPie[i].disapFeature.includes('Playas de estacionamiento')){
      playas++;
    } 
    
    if (NpsPie[i].disapFeature.includes('Tribunas')){
      tribu++;
    } 
    
    if (NpsPie[i].disapFeature.includes('Galerías')){
      gale++;}

    if (NpsPie[i].disapFeature.includes('Baños')){
      baños++;}

    if (NpsPie[i].disapFeature.includes('Espacios verdes')){
      verdes++;}

    if (NpsPie[i].disapFeature.includes('Otros')){
      otros++;}
}


  return (

    <Card className='npsCard' bg={'light'} style={{ margin:'20px auto', textAlign:'center', color:'black', fontSize:'30px'  }}>
      <Card.Header>Valoraciones Detractores</Card.Header>
      <Card.Body>
      <Card.Title style={{fontSize:'15px'}}>Cantidad de valoraciones por Detractores</Card.Title>
        <Card.Text>
        <Pie data={{
          labels: ['layas de estacionamiento', 'Tribunas', 'Galerías', 'Baños', 'Espacios verdes', 'Otros'],
          datasets: [
            {
              label: 'Cantidad votos Detractores',
              data: [playas, tribu, gale, baños, verdes, otros],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        }} />
        </Card.Text>
      </Card.Body>
    </Card>
 
  )}




