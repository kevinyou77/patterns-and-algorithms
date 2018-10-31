interface MovementStrategy {
  move(): void;
}

class Ghost {
  public movementStrategy: MovementStrategy;
  public isScared: boolean;

  public Ghost(movementStrategy: MovementStrategy) {
    this.movementStrategy = movementStrategy;
  }

  public move(): void {
    this.movementStrategy.move();
  }
}

class RunAwayMovement implements MovementStrategy {
  public move() {
    console.log("PANICC!!");
  }
}

class ClydeMovement implements MovementStrategy {
  public move(): void  {
    console.log("Clyde moved");
  }
}

class PinkyMovement implements MovementStrategy {
  public move(): void  {
    console.log("Pinky moved");
  }
}

class InkyMovement implements MovementStrategy {
  public move(): void  {
    console.log("Inky moved");
  }
}

class BlinkyMovement implements MovementStrategy {
  public move(): void  {
    console.log("Blinky moved");
  }
}