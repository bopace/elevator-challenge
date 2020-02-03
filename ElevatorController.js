class ElevatorController {
  constructor(elevatorCount, floorCount) {
    this.elevatorCount = elevatorCount
    this.floorCount = floorCount

    this.state = {
      // to do...
      elevators: []
    }
  }

  // takes the floor elevator is needed, returns id of best elevator
  findBestElevator(floor) {
    // is there an unoccupied elevator on the floor? send it
    // is there a moving elevator that will pass this floor? send it
    // find closest unoccupied elevator
  }

  // add event listeners...
  // todo: pull in EventEmitter2
  listener.on('callElevator', function(passengerId, floor, direction) {
    
  })

  listener.on('moveFloor', function(elevatorId, startFloor, endFloor, direction) {
    
  })

  listener.on('openDoor', function(elevatorId, floor) {
    
  })

  listener.on('closeDoor', function(elevatorId, floor) {
    
  })

  listener.on('requestService', function(elevatorId, floor) {
    
  })
}