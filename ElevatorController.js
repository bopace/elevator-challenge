class ElevatorController {
  constructor(elevatorCount = 1, floorCount = 1) {
    // todo: validate elevator and floor count values
    this.elevatorCount = elevatorCount
    this.floorCount = floorCount

    this.state = {
      elevators: this.initializeElevators(elevatorCount)
    }
  }

  initializeElevators(count) {
    let elevators = []
    for (let i = 1; i <= count; i++) {
      elevators.push(new Elevator(i, this.floorCount))
    }
    return elevators
  }

  handleCallElevator(passengerId, floor, direction) {
    // todo
  }

  handleMoveFloor(elevatorId, startFloor, endFloor, direction) {
    // todo
  }

  handleOpenDoor(elevatorId, floor) {
    // todo
  }

  handleCloseDoor(elevatorId, floor) {
    // todo
  }

  handleRequestService(elevatorId, floor) {
    // todo
  }

  initializeListeners() {
    // todo: pull in EventEmitter2
    listener.on('callElevator', this.handleCallElevator)
    listener.on('moveFloor', this.handleMoveFloor)
    listener.on('openDoor', this.handleOpenDoor)
    listener.on('closeDoor', this.handleCloseDoor)
    listener.on('requestService', this.handleRequestService)
  }

  // takes the floor elevator is needed, returns id of best elevator
  findBestElevator(floor) {
    // is there an unoccupied elevator on the floor? send it
    // is there a moving elevator that will pass this floor? send it
    // find closest unoccupied elevator
  }
}
