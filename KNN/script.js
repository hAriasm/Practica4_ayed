let chart = new Chart(document.querySelector('#chart'), {
type: 'scatter',
data: CharacterData() , 
options: charOptions()
})

document.querySelector('#plot').addEventListener('click', ()=> {
chart.data.datasets[0].data.push({
x: Number(document.querySelector('#humidity').value) ,
y: Number(document.querySelector('#pressure').value)
}
)
document.querySelector('#predict').addEventListener('click', () =>{
    const x = chart.data.datasets[0].data[chart.data.datasets[0].data.length-1].x 
    const y = chart.data.datasets[0].data[chart.data.datasets[0].data.length-1].y
    let distances = []

    trainingSet().forEach((point)=> {

        distances.push(Math.sqrt(((x-point.humidity)**2)+((y-point.pressure)**2)))
    }
    )
    let redNeighbors = 0
    let blueNeighbors = 0

       // https://www.youtube.com/watch?v=dT4SrxoQS-4  -----link referencia
    })

    for(let k=1; k<=5; k++) {
        const minDistance = Math.min.apply(Math, distances)
        const index = distances.indexOf(minDistance)
        chart.data.datasets[0].pointBackgroundColor[index] == 'red' ? redNeighbors++ : blueNeighbors++
        distances[index] = +Infinity
    }
if(redNeighbors>blueNeighbors) {
documen



}









    }






