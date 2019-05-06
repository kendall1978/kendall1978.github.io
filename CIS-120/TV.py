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
    while vol == 0:
        try:
            userInput = int(input("Chose your volume  1: Increase Volume by 10  2:Increace by 5  0: keep volume at 0:  "))
            if userInput == 1:
                vol += 10
                totalVol= ("Volume is set to 10")
            elif userInput == 2:
                vol += 5
                totalVol =("Volume is set to  5")
            elif userInput == 0:
                totalVol = ("Volume is set to 10")
        except ValueError:
            print("Please type either 1, 2, or 0 to set the vol")
        return totalVol
def changeChannel():
    channel = 0
    while channel == 0:
        try:
            userInput = int(input("Press either 1 2 or 3 to choose a channel: "))
            if userInput == 1:
                response = ("This is your Local news:  on channel 10" )
                channel += 10
            elif userInput == 2:
                channel += 20
                response = ("Shark week is on from now until friday: on channel 21")
            elif userInput == 3:
                channel += 30
                response = ("Watch more Desperate Housewives this time everyday of the week: on channel 31")
        except ValueError:
            print("Please press one 2 or 3 to chose a channel")
        return response
        

def main():
    intro()
    print(volume())
    print(changeChannel())
main()
   





                

