#Chapter 8 Challenge 
#Television
#Kendall Roberts
# 4/24/2019




def intro():
    print("Programing your TV")
    print("First we will set your Volume!")
    print("Then we will choose your channel")
    print("""Raise the volume by five by pressing the 5 key,
Lower the volume by five by pressing the 4 key
To keep the volume where it is press 0""")
def volume():
    vol = 0
    while vol == 10:
        try:
            userInput = int(input("Chose your volume  4:Down five  5:Up five  0: keep volume at 0:  "))
            if userInput == 5:
                vol += 5
                print("Volume is set to 15")
            elif userInput == 4:
                vol -= 5
                print("Volume is set to  5")
            elif userInput == 0:
                print("Volume is set to 10")
        except ValueError:
            print("Please type either 5, 4, or 0 to set the vol")
        return vol
def channel():
    channel = 1
    while channel == 1:
        try:
            userInput = int(input("Press either 1 2 or 3 to choose a channel"))
            if userInput == 1:
                print("This is your Local news:  on channel 1" )
            elif userInput == 2:
                channel += 20
                print("Shark week is on from now until friday: on channel 21")
            elif userInput == 3:
                channel += 30
                print("Watch more Desperate Housewives this time everyday of the week: on channel 31")
        except ValueError:
            print("Please press one 2 or 3 to chose a channel")
        return channel

def main():
    intro()
    channel()
    volume()
main()

print("Your channel is: "+channel())




                

