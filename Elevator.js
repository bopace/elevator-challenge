const ELEVATOR_STATUS = {
  STANDBY: 1,
  MOVING_UP: 2,
  MOVING_DOWN: 3,
  DOORS_OPEN: 4,
  DOORS_CLOSED: 5,
  NEEDS_SERVICE: 6
}

class Elevator {
  constructor() {
    this.state = {
      tripCount: 0,
      floorsPassed: 0,
      currentFloor: 1,
      passengerCount: 0,
      destinations: [],     // what stops does the elevator still need to make?
      status: PASSENGER_STATUS.STANDBY
    }
  }
}