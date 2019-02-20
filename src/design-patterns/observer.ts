//incomplete

class Subject {
  private observerList: Observer[];
  private _state: number;

  public get state(): number {
    return this._state; 
  }
}

interface Observable {
  update();
}

class Observer implements Observable {

}