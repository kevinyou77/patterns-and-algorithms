class Pizza {
  protected dough: string;
  protected sauce: string;
  protected topping: string;

  public setDough(dough: string) {
    this.dough = dough;
  }

  public setSauce(sauce: string) {
    this.sauce = sauce;
  }

  public setTopping(topping: string) {
    this.topping = topping;
  }
}

abstract class PizzaBuilder {
  protected pizza: Pizza;

  public createNewPizzaProduct():void {
    this.pizza = new Pizza();
  } 

  public getPizza(): Pizza {
    return this.pizza;
  }

  public abstract buildDough();
  public abstract buildTopping();
  public abstract buildSauce();
}

class HawaiianPizzaBuilder extends PizzaBuilder {
  public buildDough() {
    this.pizza.setDough("hawaii dough");
  }

  public buildTopping() {
    this.pizza.setTopping("hawai topping");
  }

  public buildSauce() {
    this.pizza.setSauce("hawai saucee");
  }
}

class Waiter {
  private pizzaBuilder: PizzaBuilder;

  public setPizzaBuilder(pizzaBuilder: PizzaBuilder): void {
    this.pizzaBuilder = pizzaBuilder;
  }

  public getPizza(): Pizza {
    return this.pizzaBuilder.getPizza();
  }

  public constructPizza(): void {
    this.pizzaBuilder.createNewPizzaProduct();
    this.pizzaBuilder.buildDough();
    this.pizzaBuilder.buildSauce();
    this.pizzaBuilder.buildTopping();
  }
}

class BuilderMain {
  constructor() {
    let hawaiianPizzaBuilder: HawaiianPizzaBuilder = new HawaiianPizzaBuilder();
    let waiter: Waiter = new Waiter();
    waiter.setPizzaBuilder(hawaiianPizzaBuilder);
    waiter.constructPizza();

    let pizza: Pizza = waiter.getPizza();
  }
}