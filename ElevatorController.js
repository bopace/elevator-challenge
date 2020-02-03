export default class ElevatorController {
  constructor(elevatorCount, floorCount) {
    this.elevatorCount = elevatorCount
    this.floorCount = floorCount

    this.state = {
      // to do...
      elevators: []
    }
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
