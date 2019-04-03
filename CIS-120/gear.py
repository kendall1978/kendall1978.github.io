#Lists
#Kendall Roberts CIS-120

import random

gear = ["potion", "dagger", "broadsword", "mage staff", "helmet", "elixer"]
gear2 = []
print("   These are some items that you might see in any Final Fantasy game!")

while len(gear) > 0:
    rand = random.choice(gear)
    gear2.append(rand)
    gear.remove(rand)

print(gear2)


input("\nPress the enter key to exit")





