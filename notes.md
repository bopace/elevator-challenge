# elevator challenge

## elevator controller
### data
- number of elevators
- number of floors
### functions
- receives calls from elevator passengers (up or down)
- determines which elevator will pick up the passenger
  - priority:
      - an unoccupied elevator is on the level with the passenger
      - an occupied elevator in motion that will pass that floor on its way
      - the closest unoccupied elevator
  - service an elevator

## elevator
### state
- number of trips taken (what is a trip?)
- number of floors passed
- current floor
- number of passengers
- destinations
- status (MOVING_UP, MOVING_DOWN, STANDBY, NEEDS_SERVICE, OPENING_DOORS, DOORS_OPEN, DOORS_CLOSED)
### functions
- move up one floor
- move down one floor
- open doors
- close doors

## passenger
### state
- location (what floor are you on)
- destination (what floor do you want to go to)
- status (WAITING, RIDING)
### functions
- call elevator (up or down)
- choose floor
