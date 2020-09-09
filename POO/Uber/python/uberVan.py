from car import Car

class UberVan(Car):
  type_car_accepted = []
  seats_material = []

  def __init__(self, licence, driver, type_car_accepted, seats_material):
    super().__init__(licence, driver)
    self.type_car_accepted = type_car_accepted
    self.seats_material = seats_material