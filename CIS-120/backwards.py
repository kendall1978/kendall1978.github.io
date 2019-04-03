#Word Jumble
#Kendall Roberts

import random

words = ('python', 'jumble', 'easy', 'difficult', 'answer', 'xylophone')
word = random.choice(words)
correct = word

jumble = ""
jumWord = ""

for i in range(10):
    position = random.randrange(len(word))
    jumble += word[position]
    jumWord = word[:position] + word[(position + 1):]

print(
    '''
            Welcome to Word Jumble!

        Unscramble the letters to make a word.
        (Press the enter key at promt to quit.)
    ''')
print("The jumble is: ", jumble)

guess = input("\nYour Guess: ")

while guess != correct and guess != " ":
    print("Sorry , thats not it.")
    
    while word == 'python':
        print("For a hint press 2 ")
        guess = input("Your Guess: ")
        if guess == '2':
            print("The word stars with PY")
        elif guess == word:
            break
            
            
    while word == 'jumble':
        print("For a hint press 2 ")
        guess = input("Your Guess: ")
        if guess == '2':
            print("The word stars with JU")
        elif guess == word:
            break

    while word == 'easy':
        print("For a hint press 2 ")
        guess = input("Your Guess: ")
        if guess == '2':
            print("The word stars with E")
        elif guess == word:
            break

    while word == 'difficult':
        print("For a hint press 2 ")
        guess = input("Your Guess: ")
        if guess == '2':
            print("The word stars with DI")
        elif guess == word:
            break
    while word == 'answer':
        print("For a hint press 2 ")
        guess = input("Your Guess: ")
        if guess == '2':
            print("The word stars with AN")
        elif guess == word:
            break

    while word == 'xylophone':
        print("For a hint press 2 ")
        guess = input("Your Guess: ")
        if guess == '2':
            print("The word stars with X")
        elif guess == word:
            break

if guess == correct:
    print("Great Job!!!")

print("Thanks for playing.")

input("Press the enter key to exit")


