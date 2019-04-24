# Car Sales Application FINAL
# Kendall Roberts
#CIS-120


cost = 0

#Def functions
def intro():
    print("     Welcome to Kendall's Quick Car Buying Program")
    print(" Each different type of car is priced based on engine size and features.")
    print(" We only sell 2 engine sizes that being V6 and V8.")
    print(" Features include tire size, sunroof, seat type.")
    print("                                                 ")


def carType():
    cost = 0
    while cost == 0:
        try:
            userInput = int(input("What Type of Car Would you Like?  Car-1  Truck-2  SUV-3: "))
            if  userInput == 1:
                print('You have chosen the Car For $12,000')
                cost += 12000
            elif userInput == 2:
                print('You have chosen the Truck For $15,000')
                cost += 15000
            elif userInput == 3:
                print('You have chosen the SUV For $18,000')
                cost += 18000
        except ValueError:
            print('Please type either 1, 2 or 3 to pick a type of car')
        return cost

def engineType():
    engineCost = 0
    while engineCost == 0:
        try:
            userInput = int(input("What type of engine would you like?  1-V6  2-V8:   "))
            if  userInput == 1:
                print('You have choosen the V6 engine type')
                engineCost = 500
            elif userInput == 2:
                print('You have choosen the V8 engine type')
                engineCost = 750
        except ValueError:
            print('Please type either 1 or 2 to choose your type of engine')
        return engineCost






def main():
    intro()
    totalPrice = engineType() + carType()
    #Print conclusion and total price
    print("Your vehicle choices have made your total cost: "+ totalPrice)

#Call Main Function to run the Program
main()




