const PASSENGER_STATUS = {
  WAITING: 1,
  RIDING: 2
}

class Passenger {
  constructor(id) {
    this.id = id

    this.state = {
      location: 1,          // where the passenger currently is
      destination: 1,       // where the passenger wants to go
      status: PASSENGER_STATUS.WAITING
    }
  }

  handleOpenDoors(elevatorId, floor) {
    // todo
  }

  initializeListeners() {
    // todo: pull in EventEmitter2
    listener.on('openDoors', this.handleOpenDoors)
  }
}