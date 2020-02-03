class ElevatorController {
  constructor(elevatorCount = 1, floorCount = 1) {
    // todo: validate elevator and floor count values
    this.elevatorCount = elevatorCount
    this.floorCount = floorCount

    this.emitter // todo: initialize emitter
    this.listener // todo: initialize listener

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

  handleCallElevator(floor, targetFloor) {
    const bestElevator = findBestElevator(floor)
    this.emitter.emit('addDestination', bestElevator, targetFloor)
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
    this.listener.on('callElevator', this.handleCallElevator)
    this.listener.on('moveFloor', this.handleMoveFloor)
    this.listener.on('openDoor', this.handleOpenDoor)
    this.listener.on('closeDoor', this.handleCloseDoor)
    this.listener.on('requestService', this.handleRequestService)
  }

  // takes the floor elevator is needed, returns id of best elevator
  findBestElevator(floor) {
    // is there an unoccupied elevator on the floor? send it
    // is there a moving elevator that will pass this floor? send it
    // find closest unoccupied elevator
  }
}
