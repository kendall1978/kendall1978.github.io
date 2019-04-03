#fortune teller
#Kendall Roberts


import random

theNumber = random.randint(1,7)

print("Welcome to Kendalls Fortune cookie program. Your fortune today is: ")
if theNumber == 1 :
    print("The early patch blocks the worm says the cookie")
elif theNumber == 2 :
    print("Your network will have no down time this year says the cookie")
elif theNumber == 3 :
    print("A lengthy journey down the internet rabbit hole begins with a single click says the cookie")
elif theNumber == 4 :
    print("Oh yes, there will be bacon says the cookie")
elif theNumber == 5 :
    print("He who backs up the drive is wise says the cookie")
elif theNumber == 6 :
    print("Your next program will compile and execute without error says the cookie")
else :
    print("Confucius says, Person who has time to write fortunes, has time to get work done.")
