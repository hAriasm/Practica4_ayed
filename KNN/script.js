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

       // https://www.youtube.com/watch?v=dT4SrxoQS-4  -----link referencia


    })


)


}



)