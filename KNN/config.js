function chartData() {
return {
datasets:
[
    {
        label: "Rain data chart",
         
        data: trainingSet().map((point)=> {
            return {x:point.humidity, y:point.pressure}
            } ) ,
        pointBackgroundColor: trainingSet().map((point)=> {
            return point.rain ? 'red' : 'blue' 
            } ) , 
        pointRadius: 4 ,
        backgroundColor: 'orange',
        showLine: true
        }                 
]
}
}
function chartOptions() {
return {
       maintainAspectRatio: false ,
        legend:
        {
           labels: 
           {
            fontSize: 10
           }     
        },
        responsive: true,
        scales:
        {
            xAxes:
            [
                {
                    display: true ,
                    scaleLabel:
                    {
                        display: true,
                        labelString: 'Humidity' ,
                        fontSize: 20,
                        fontColor: 'green'
                        
                    } ,
                    ticks:
                    {
                        fontSize: 20,
                        max: 10,
                        min: 0
                    }
                }
                
            ],
            yAxes: 
            [
                {
                    display: true ,
                    scaleLabel:
                    {
                        display: true,
                        labelString: 'Pressure' ,
                        fontSize: 20
                    } ,
                    ticks:
                    {
                        fontSize: 20,
                        max: 10,
                        min: 0
                    }
                }
                
            ]

        }
}
}