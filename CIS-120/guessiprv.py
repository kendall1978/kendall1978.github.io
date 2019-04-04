#Guess my number game
#Kendall Roberts

import random
from time import sleep

def intro():
    print("\tWelcome to 'Guess My Number'!")
    print("I am thinking of a number between 1 and 100. ")
    print("Try to guess it in as few attempts as possible. \n")



def gen_number():
    random_number = random.randint(1,100)
    return number

def ask_number(question, number):
    reply = None
    while reply != number:
        try:
            reply = int(input("Take your Guess"))
            tries = 0
            if reply > random_number:
                print("Lower")
                tries += 1
            elif reply < random_number:
                print("Higher")
                tries += 1
            elif tries == 7:
                print("Too many Guesses, Restart to play again")
                break
            else:
                correct = reply
                print("Great job you guessed correct!!")
        except ValueError:
            print("Enter a number between 1-100")
    return reply



def human_guess():
    print("Ok Human! Let's begin... ")
    sleep(1)
    random_number = gen_number() # Named the variable random_number, the same as the variable in gen_number(). Is this good practise?
    guess = ask_number("Guess the number: ", random_number)

def congrat_winner(correct, random_number):
    if correct == random_number:
        print()
        print("Calculating results...")
        sleep(1)
        print()
        print("WELL DONE!")
        print("The answer was indeed,", str(correct) + "!")

def replay_game():
    replay_question = None
    while replay_question != 'y' or 'n':
        replay_question = input("Would you like to play again (y/n)? ").lower()
        if replay_question == 'y':
            print()
            print("Rebuilding game... ")
            main()
        elif replay_question == 'n':
            print("Goodbye!")
            exit()
        else:
            print("please enter either 'y' or 'n'... ")

def main():
    intro()
    human_guess()
    replay_game()


main()
"""            
print("You guessed correctly!! ")
print("It took you ", tries, "tries!\n")




import randint


def gen_number():
    random_number = randint(0, 101)
    return random_number

def intro():
    print("Welcome to, Guess My Number!")
    print("Simply guess the number between 1-100 that the Computer is 'thinking' of!")
    print()

def ask_number(question, random_number):
    response = None
    while response != random_number:
        try:
            response = int(input(question))
            if response > random_number:
                print("Lower... ")
            elif response < random_number:
                print("Higher... ")
            else:
                correct = response
                congrat_winner(correct, random_number)
        except ValueError:
                print("Invalid. Enter a number between 1-100 ")
    return response



"""