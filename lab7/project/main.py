from models import Animal, Dog, Cat


def main():
    dog = Dog("Gav", 3, 25, "Husky")
    cat = Cat("Tom", 2, 5, "Gray")
    animal = Animal("Generic", 5, 10)

    animals = [dog, cat, animal]

    for a in animals:
        print(a)
        print(a.eat())
        print(a.move())
        print(a.speak())
        print("-" * 30)


if __name__ == "__main__":
    main()