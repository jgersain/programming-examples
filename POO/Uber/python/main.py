from car import Car
from account import Account
from uberX import UberX

if __name__ == "__main__":
  print('Uber')

  car = Car("XWLZ5", Account("John Cena", "CURP"))
  uber_x = UberX("WSDFGT", Account("John Connor", "CURP0987"), "Chevrolet", "Attitude")
  uber_black = UberX("ABG67GF", Account("John Travolta", "RFC0987"), ["Chevy"], ["Lana"])

  print(vars(uber_x))
  print(vars(uber_black))