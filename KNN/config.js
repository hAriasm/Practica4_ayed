function chartData() {
return {
datasets:
[
    {
        label: "Rain data chart",
        data: trainingSet.map((point)=> {
            return {x:point.humidity, y:point.pressure}
            } ) ,
        pointBackgroundColor: trainingSet.map((point)=> {
            return point.rain ? 'red' : 'blue' 
            } ) , 
        pointRadius: 5.5 ,
        showLine: false ,
        backgroundColor: 'purple' 
    }
                        
]

}

}