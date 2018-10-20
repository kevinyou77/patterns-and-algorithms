class Employee {
  protected name: string;
  protected parent: Employee;

  constructor(name: string) {
    this.setName(name);
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getParent(): Employee {
    return this.parent;
  }

  public setParent(parent: Employee): void {
    this.parent = parent;
  }
}

class Manager extends Employee {
  protected staffList: Employee[];

  constructor(name: string) {
    super(name);
    this.staffList = new Array();
  }

  public add(e: Employee): void {
    e.setParent(this);
    this.staffList.push(e);
  }

  public getChild(): void {
    this.staffList.forEach(element => {
      console.log(element.getName());
    });
  }
}

class Developer extends Employee {
  protected staffList: Employee[];

  constructor(name: string) {
    super(name);
    this.staffList = new Array();
  }

  public add(e: Employee): void {
    if (this.getParent() instanceof Developer) {
      throw new Error("You cannot add staffs because ur lead is a dev")
    }

    console.log(e);
    console.log(e.getParent());
    
    e.setParent(this);
    this.staffList.push(e);
  }

  public getChild(): void {
    this.staffList.forEach(element => {
      console.log(element.getName());
    });
  }
}

class CompositeMain {
  constructor() {
    let dev: Developer = new Developer("Kevin Developer");
    let dev1: Developer = new Developer("Kevin1 Developer");
    let man: Manager = new Manager("Kevin Manager");
    let dev2: Developer = new Developer("Dev2");
    let dev3: Developer = new Developer("Dev3");
    
    
    man.add(dev);
    man.add(dev1);
    dev1.add(dev2);
    dev2.add(dev3);
  }
}

new CompositeMain();