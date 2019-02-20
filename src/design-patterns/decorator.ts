interface ICostume {
  getCostumeInfo(): void;
}

class GhostEnemy {
  private costume: ICostume;

  constructor(costume: ICostume) {
    this.costume = costume;
  }
}

class Costume implements ICostume {
  protected _costumeName?: string;

  constructor(costume: Costume = {} as Costume) {
    let { 
      costumeName = ""
    } = costume;

    this.costumeName = costumeName;
  }

  public getCostumeInfo() {
    return this.costumeName + " ";
  }

  public get costumeName(): string {
    return this._costumeName;
  }

  public set costumeName(name: string) {
    this._costumeName = name;
  }
}

abstract class CostumeDecorator implements ICostume {
  protected costume: ICostume;

  constructor(costume: ICostume) {
    this.costume = costume;
  }

  public getCostumeInfo(): void {
    console.log(this.costume.getCostumeInfo());
  }
}

class Garment extends CostumeDecorator {
  constructor(costume: ICostume) {
    super(costume);
  }

  public getCostumeInfo(): void {
    console.log(this.costume.getCostumeInfo() + " wears garment");
  }
}

class Accesories extends CostumeDecorator {
  constructor(costume: ICostume) {
    super(costume);
  }

  public getCostumeInfo(): void {
    console.log(this.costume.getCostumeInfo() + " wears accesories");
  }
}

class Headgear extends CostumeDecorator {
  constructor(costume: ICostume) {
    super(costume);
  }
  
  public getCostumeInfo(): void {
    console.log(this.costume.getCostumeInfo() + " wears headgear");
  }
}

class DecoratorMain {
  constructor() {
    let costume: ICostume = new Headgear(new Costume());
    let ghost: GhostEnemy = new GhostEnemy(costume);
  }
}

new DecoratorMain();

