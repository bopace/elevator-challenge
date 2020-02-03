const PASSENGER_STATUS = {
  WAITING: 1,
  RIDING: 2
}

class Passenger {
  constructor() {
    this.state = {
      location: 1,          // where the passenger currently is
      destination: 1,       // where the passenger wants to go
      status: PASSENGER_STATUS.WAITING
    }
  }
}