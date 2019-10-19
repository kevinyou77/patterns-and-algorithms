interface Subject {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(): void
}

class Citizen implements Subject {
  private _isCriminal: boolean = false;
  private _observers: Observer[] = [];

  public attach(observer: any): void {
    this._observers.push(observer);
  }
  
  public detach(observer: any): void {
    const observerIndex = this._observers.indexOf(observer);
    this._observers.splice(observerIndex, 1);
  }

  public notify(): void {
    for(const observer of this._observers) {
      observer.update(this);
    }
  }

  public breakIntoStore(): void {
    this._isCriminal = true;
    this.notify();
  }

  public isCriminal(): boolean {
    return this._isCriminal;
  }
}

interface Observer {
  update(subject: Subject): void;
}

class Police implements Observer {
  private _wanted: Citizen[] = []; 

  public update(subject: Subject): void {
    if(subject instanceof Citizen) {
      if(subject.isCriminal()) {
        this._wanted.push(subject);
      }
    }
  }
}
