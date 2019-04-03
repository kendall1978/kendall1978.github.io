# RPG Character build
#Kendall Roberts

pool = 30
strength = 0
health = 0
dexterity = 0
wisdom = 0
print("""          Build your character!
                Build a character with 30 usuable points!

            Categories include:
            Strength
            Health
            Wisdom
            Dexterity
                        """)


while pool > 0:
    choice = int(input("What atribute 1.Strength  2.Wisdom  3.Health  4.Dexterity"))




    if choice == 1:
        points = int(input("How many points?"))
        strength += points
        pool -= points
        print("Your Strength is: " + str(strength))
    elif choice == 2:
        points = int(input("How many points?"))
        wisdom += points
        pool -= points
        print("Your Wisdom is: " + str(wisdom))
    elif choice == 3:
        points = int(input("How many points?"))
        health += points
        pool -= points
        print("Your Health is: " + str(health))
    elif choice == 4:
        points = int(input("How many points?"))
        dexterity += points
        pool -= points
        print("Your Dexterity is: " + str(dexterity))
        
