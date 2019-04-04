#Improved Guess My Number Game 
#Using ask_number() and main() functions
#Kendall Roberts

import random


def intro():
    print("\tWelcome to 'Guess My Number'!")
    print("I am thinking of a number between 1 and 100. ")
    print("Try to guess it in as few attempts as possible. \n")

random_number = random.randint(1,100)
tries = 0 

def ask_number(random_number):
    random_number = random.randint(1,100)
    reply = int(input("Take a guess!: "))
    while reply != random_number:
        try:
            while reply != random_number:
                if reply > random_number:
                    print("Its Lower bro..")
                elif reply < random_number:
                    print("Definantly Higher man")
                else:
                    print("Great job you guessed correct!!")
                reply = int(input("Take a guess!: "))
        except ValueError:
            print("Pick a number between 1-100")
    return reply
    

def main():
    intro()
    ask_number(random_number)


main()