

tipPrice15 = 0.15
tipPrice20 = 0.20
tipCostA = 0
tipCostB = 0
totalPriceA = 0
totalPriceB = 0
totalPrice = 0

totalPrice = float(input("What was the cost of the meal?"))
tipCostA = totalPrice * tipPrice15
tipCostB = totalPrice * tipPrice20
print("A 15% tip will be: $" + str(tipCostA))
print("A 20% tip will be: $" + str(tipCostB))
totalPriceA = tipCostA + totalPrice
totalPriceB = tipCostB + totalPrice
print("Cost including a 15% tip: $" + str(totalPriceA))
print("Cost including a 20% tip: $" + str(totalPriceB))
