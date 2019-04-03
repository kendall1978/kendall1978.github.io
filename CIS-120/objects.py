#Obects and Classes
#Kendall Roberts-Cis-120

class Car:
    def __init__(self,carColor,carType,engineSize):
        self.carColor = carColor
        self.carType = carType
        self.engineSize = engineSize
    
    def revEngine (self):
        if (self.engineSize == "v6"):
            return "zoom zoom"
        elif (self.engineSize == "v8"):
            return "vroom vroom"



c1 = Car("blue", "coupe", "v6")

print(c1.carColor)
print(c1.engineSize)
print(c1.revEngine)

c2 = Car("red", "truck", "v8")

print(c2.carColor)
print(c2.engineSize)
print(c2.revEngine)