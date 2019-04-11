#Exception Handling
#Kendall Roberts
#CIS- 120

num = 1
try:
    print("Number: " + str(num))
except TypeError as e:
    print("types dont match")
    print(e)
except ValueError as e:
    print("Some Value Error")
else:
    print("all is well")

try:
    f = open("idk", "r")
except IOError as e:
    print("Not there")
    print(e)