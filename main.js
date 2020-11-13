
// NO Game Over
var originalGameOver = Runner.prototype.gameOver;
Runner.prototype.gameOver = () => {}

// keeps game working while not on focus
Runner.prototype.onVisibilityChange = () => {}

// Inverts Color
Runner.prototype.invert()

// make player slow again when he hits obstacle
Runner.prototype.gameOver = function (){
    Runner.instance_.distanceRan = 0
    let currentSpeed = Runner.instance_.currentSpeed
    if(currentSpeed >= 6){
        Runner.instance_.setSpeed(currentSpeed* 0.95)
    }
}

document.addEventListener('keydown', (e) =>{
    // reduce acceleration
    if(e.key == 'ArrowLeft'){
        Runner.instance_.setSpeed(Runner.instance_.currentSpeed * 0.95)
    }
    if(e.key == 'ArrowRight'){
        Runner.instance_.setSpeed(Runner.instance_.currentSpeed * 1.1)
    }
})
// Monitor distance ran
// setInterval(function(){console.log(Runner.instance_.horizon.obstacles)},500)


function watchSpeed() {
    let currentDistance = Runner.instance_.distanceRan
    console.log('Current Distance: ' + currentDistance);
    if(Math.floor(currentDistance) % 3 == 0){
        Runner.prototype.invert()
    }
}

// function getScore (distance){
//     distance = Runner.instance_.distanceMeter.getActualDistance(distance);
//     var highScoreStr = (Runner.instance_.distanceMeter.defaultString +
//         distance).substr(-Runner.instance_.distanceMeter.maxScoreUnits);

//     return ['10', '11', ''].concat(highScoreStr.split(''));
// }

setInterval(function () {
    console.log(Runner.instance_.distanceMeter.getActualDistance(Runner.instance_.distanceRan))
},500)



setInterval(watchSpeed,3000)

// // testing obstacles

// function messUpObstacles(){

// }