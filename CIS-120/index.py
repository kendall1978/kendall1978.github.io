#index

#Kendall Roberts

import random

#word = input("Enter a word: ")

#print("\nHere's each letter in your word:")
#for the letter in word:
    #print(letter)

#input("\n\nPress the enter key to exit.")

#message = input("Enter a message: ")

#print("\nThe length of your message is:", len(message))

#print("\nThe most common letter in the English language, 'e',")
#if "e" in message:
 #   print("is in your message.")
#else:
  #  print("is not in your message.")

word = "index"
print("The word is ", word, "\n")

high = len(word)
low = -len(word)

for i in range(10):
    position = random.randrange(low, high)
    print("word[", position "]\t", word[position])
    
