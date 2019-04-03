#Guess my number game
#Kendall Roberts

import random
print("\tWelcome to 'Guess My Number'!")
print("I am thinking of a number between 1 and 100. ")
print("Try to guess it in as few attempts as possible. \n")
#set values
the_number = random.randint(1, 100)
guess = int(input("Take a Guess: "))
tries = 1

while guess != the_number:
    if guess > the_number:
        print("Lower")
    else:
        print("Higher")

    guess = int(input("Take a guess: "))
    tries += 1

print("You guessed correctly!! ")
print("It took you ", tries, "tries!\n")
