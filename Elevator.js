const ELEVATOR_STATUS = {
  STANDBY: 'STANDBY',
  MOVING_UP: 'MOVING_UP',
  MOVING_DOWN: 'MOVING_DOWN',
  DOORS_OPEN: 'DOORS_OPEN',
  DOORS_CLOSED: 'DOORS_CLOSED',
  NEEDS_SERVICE: 'NEEDS_SERVICE'
}

const ELEVATOR_DIRECTION = {
  UP: 'UP',
  DOWN: 'DOWN'
}

class Elevator {
  constructor(id, maxFloor) {
    this.id = id
    this.maxFloor = maxFloor

    this.emitter // todo: initialize emitter

    this.state = {
      tripCount: 0,
      floorsPassed: 0,
      currentFloor: 1,
      passengerCount: 0,
      destinations: [],     // what stops does the elevator still need to make?
      status: PASSENGER_STATUS.MOVING_UP
    }
  }

  moveToFloor(floor) {
    if (floor < 1 || floor > this.maxFloor) throw `Elevator ${this.id} is trying to move to an invalid floor.`
    
    // if our target floor is above us, start moving that way
    while (floor > this.state.currentFloor) {
      this.state.status = ELEVATOR_STATUS.MOVING_UP
      this.moveUp()
      if (this.state.destinations.includes(this.state.currentFloor)) {
        this.openDoor()
        // remove from destinations
      }
    }

    // otherwise, make our way down
    while (floor < this.state.currentFloor) {
      this.state.status = ELEVATOR_STATUS.MOVING_DOWN
      this.moveDown()
      if (this.state.destinations.includes(this.state.currentFloor)) {
        this.openDoor()
        // remove from destinations
      }
    }
  }

  moveUp() {
    emitter.emit(
      'moveFloor',
      this.id,
      this.state.currentFloor,
      this.state.currentFloor + 1,
      ELEVATOR_DIRECTION.UP
    )
    this.state.currentFloor += 1
  }

  moveDown() {
    emitter.emit(
      'moveFloor',
      this.id,
      this.state.currentFloor,
      this.state.currentFloor - 1,
      ELEVATOR_DIRECTION.DOWN
    )
    this.state.currentFloor -= 1
  }

  openDoor() {
    emitter.emit('openDoors', this.id, this.state.currentFloor)
  }

  handleAddPassenger(elevatorId, passengerId) {
    // todo
  }
  
  handleAddDestination(elevatorId, floor) {
    // todo
  }

  handleServiceElevator(elevatorId) {
    // todo
  }

  initializeListeners() {
    // todo: pull in EventEmitter2
    listener.on('addPassenger', this.handleAddPassenger)
    listener.on('addDestination', this.handleAddDestination)
    listener.on('serviceElevator', this.handleServiceElevator)
  }
}