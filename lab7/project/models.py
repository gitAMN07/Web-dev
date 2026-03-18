class Animal:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def eat(self):
        return f"{self.name} is eating"

    def move(self):
        return f"{self.name} is moving"

    def speak(self):
        return "Some sound"

    def __str__(self):
        return f"Animal(name={self.name}, age={self.age}, weight={self.weight})"


class Dog(Animal):
    def __init__(self, name, age, weight, breed):
        super().__init__(name, age, weight)
        self.breed = breed

    def speak(self):
        return f"{self.name} says Woof"

    def fetch(self):
        return f"{self.name} is fetching a ball"

    def __str__(self):
        return f"Dog(name={self.name}, age={self.age}, weight={self.weight}, breed={self.breed})"


class Cat(Animal):
    def __init__(self, name, age, weight, color):
        super().__init__(name, age, weight)
        self.color = color

    def speak(self):
        return f"{self.name} says Meow"

    def scratch(self):
        return f"{self.name} is scratching"

    def __str__(self):
        return f"Cat(name={self.name}, age={self.age}, weight={self.weight}, color={self.color})"