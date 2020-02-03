const ELEVATOR_STATUS = {
  STANDBY: 1,
  MOVING_UP: 2,
  MOVING_DOWN: 3,
  DOORS_OPEN: 4,
  DOORS_CLOSED: 5,
  NEEDS_SERVICE: 6
}

class Elevator {
  constructor(id) {
    this.id = id

    this.state = {
      tripCount: 0,
      floorsPassed: 0,
      currentFloor: 1,
      passengerCount: 0,
      destinations: [],     // what stops does the elevator still need to make?
      status: PASSENGER_STATUS.STANDBY
    }
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