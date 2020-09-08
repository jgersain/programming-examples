from car import Car
from account import Account

if __name__ == "__main__":
  print('Uber')

  car = Car("XWLZ5", Account("John Cena", "CURP"))

  print(vars(car))