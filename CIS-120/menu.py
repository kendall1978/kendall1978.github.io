#menu
#Kendall Roberts

menuItems = []
userExit = False
while (userExit == False):
    item = input("What would you like to add to the menu?")
    menuItems.append(item)
    userInput = input("Would you like anything else?")
    if (userInput == "no" or userInput == "n"):
        userExit = True

print(menuItems)
