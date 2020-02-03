const PASSENGER_STATUS = {
  WAITING: 1,
  RIDING: 2
}

class Passenger {
  constructor(id) {
    this.id = id

    this.emitter // todo: initialize emitter
    this.listener // todo: initialize listener

    this.state = {
      location: 1,          // where the passenger currently is
      destination: 1,       // where the passenger wants to go
      status: PASSENGER_STATUS.WAITING
    }
  }

  callElevator(desiredFloor) {
    this.emitter.emit('callElevator', this.state.location, desiredFloor)
  }

  handleOpenDoors(elevatorId, floor) {
    // todo
  }

  initializeListeners() {
    // todo: pull in EventEmitter2
    this.listener.on('openDoors', this.handleOpenDoors)
  }
}