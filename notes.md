# elevator challenge
use event-driven system (todo: define events needed, what parts listen for what events)

## elevator controller
### events to listen for
- `callElevator(passengerId, floor, targetFloor)`
  - determine which elevator should be sent
  - emit an `addDestination` event to an elevator (`addDestination(elevatorId, floor)`)
- `moveFloor(elevatorId, startFloor, endFloor, direction)`
  - update internal state (which elevator is where)
  - print notice ('Elevator {elevatorId} has moved from floor {startFloor} to floor {endFloor} (moving {direction})')
- `openDoor(elevatorId, floor)`
  - print notice ('Elevator {elevatorId} has opened its doors on floor {floor}')
- `closeDoor(elevatorId, floor)`
  - print notice ('Elevator {elevatorId} has closed its doors on floor {floor}')
- `requestService(elevatorId, floor)`
  - print notice ('Elevator {elevatorId} needs service on floor {floor}')
  - emit an event stating the elevator has been serviced (`serviceElevator(elevatorId)`)
  - print notice ('Elevator {elevatorId} has been serviced')
### data
- number of elevators
- number of floors
### state
- keep track of where the elevators are, if they need service, etc
### functions
- receives calls from elevator passengers (up or down)
- determines which elevator will pick up the passenger
  - priority:
      - an unoccupied elevator is on the level with the passenger
      - an occupied elevator in motion that will pass that floor on its way
      - the closest unoccupied elevator
  - service an elevator

## elevator
### events to listen for
- `addDestination(elevatorId, floor)`
  - if the elevator is moving, simply add the destination to the list of destinations. if the elevator is on standby, start moving towards the destination
- `serviceElevator(elevatorId)`
  - switch status from NEEDS_SERVICE to STANDBY
- `addPassenger(elevatorId, passengerId)`
  - increment passenger count
### state
- number of trips taken (what is a trip?)
- number of floors passed
- current floor
- number of passengers
- destinations
- status (MOVING_UP, MOVING_DOWN, STANDBY, NEEDS_SERVICE, DOORS_OPEN, DOORS_CLOSED)
### functions
- move up one floor
  - emit `moveFloor(elevatorId, startFloor, endFloor, direction)`
- move down one floor
  - emit `moveFloor(elevatorId, startFloor, endFloor, direction)`
- open doors
  - emit `openDoors(elevatorId, floor)`
- close doors
  - emit `closeDoors(elevatorId, floor)`

## passenger
### events to listen for
- `openDoors(elevatorId, floor)`
  - if the passenger is WAITING and is on the floor in question, board the elevator of id elevatorId
    - emit `addPassenger(elevatorId, passengerId)` event
    - emit `addDestination(elevatorId, floor)` event 
  - if the passenger is RIDING and is on the elevator in question, and floor is the destination, exit the elevator
    - emit `removePassenger(elevatorId, passengerId)` event
### state
- location (what floor are you on)
- destination (what floor do you want to go to)
- status (WAITING, RIDING)
### functions
- call elevator (up or down)
- choose floor
