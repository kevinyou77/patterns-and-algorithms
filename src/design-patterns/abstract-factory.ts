interface Weapon {
  drawWeapon(): void;
  getWeapon(): void;
}

class Sword implements Weapon {
  drawWeapon(): void {
    console.log("Sword drawed");
  }

  getWeapon(): void {
    console.log("Sword get weapon");
  }
}

class Wand implements Weapon {
  drawWeapon(): void {
    console.log("Wand drawed");
  }

  getWeapon(): void {
    console.log("Wand get weapon");
  }
}

class Shield implements Weapon {
  drawWeapon(): void {
    console.log("Shield drawed");
  }

  getWeapon(): void {
    console.log("Get weapon");
  }
}


interface Job {
  pickWeapon():void;
  printWeapons(): void;
}

class Swordsman implements Job {
  protected weaponList: Weapon[];

  constructor() {
    this.weaponList = new Array();
    this.pickWeapon();
  }

  pickWeapon(): void {
    const factory: WeaponFactory = FactoryProducer.getFactory("weapon");  
    const leftWeapon: Weapon = factory.getWeapon("sword");
    const rightWeapon: Weapon = factory.getWeapon("shield");
    this.weaponList.push(leftWeapon);
    this.weaponList.push(rightWeapon);
  }

  printWeapons(): void {
    this.weaponList.map(item => {
      item.drawWeapon();
    });
  }
}

class Mage implements Job {
  protected weaponList: Weapon[];

  pickWeapon(): void {
    const factory: WeaponFactory = FactoryProducer.getFactory("weapon");
    const leftWeapon: Weapon = factory.getWeapon("wand");

    this.weaponList.push(leftWeapon);
  }

  printWeapons(): void {
    this.weaponList.map(item => {
      item.drawWeapon();
    });
  }
}

class Cleric implements Job {
  protected weaponList: Weapon[];
  pickWeapon(): void {
    
  }

  printWeapons(): void {
    this.weaponList.map(item => {
      item.drawWeapon();
    });
  }
}

abstract class AbstractFactory {
  public abstract getWeapon(weapon: string): Weapon;
  public abstract getJob(job: string): Job;
}

class WeaponFactory extends AbstractFactory {
  getJob(job: string): Job {
    return null;
  }

  getWeapon(weapon: string): Weapon {
    switch(weapon) {
      case 'wand':
        return new Wand();
        
      case 'shield':
        return new Shield();

      case 'sword':
        return new Sword();
    }

    return null;
  }
}

class JobFactory extends AbstractFactory {
  getJob(job: string): Job {
    switch(job) {
      case 'swordsman':
        return new Swordsman();
        
      case 'mage':
        return new Mage();

      case 'cleric':
        return new Cleric();
    }

    return null;
  }

  getWeapon(weapon: string): Weapon {
    return null;
  }
}

class FactoryProducer {
  public static getFactory(type: string): AbstractFactory {
    let factory: AbstractFactory = null;
    switch(type) {
      case 'weapon':
        factory = new WeaponFactory();
        break;

      case 'job':
        factory = new JobFactory(); 
        break;
    }

    return factory;
  }
}

class Main {
  constructor() {
    let jobFactory: AbstractFactory = FactoryProducer.getFactory("job");
    let swordsman: Job = jobFactory.getJob("swordsman");
    swordsman.printWeapons();
  }
}

new Main();