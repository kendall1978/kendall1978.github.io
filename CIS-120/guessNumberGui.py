#Chapter 10 challenge
# Guess my number GUI
#Kendall Roberts


#Import 
import tkinter as tk
import random

#Seting Up the game itself
random_number = random.randint(1,100)

def ask_number():
    reply = int(txt_guess.get())
    try:
        if reply > random_number:
            msg = "Ya gotta go lower bruh"
        elif reply < random_number:
            msg = "Definantly Higher man"
        elif reply == random_number:
            msg = "Right number it is"
        else:
            msg = "Something went wrong, click reset to play again"
    except TypeError:
        msg = "Try typing a number between 1-100"
    
    #Show the result
    lbl_result["text"] = msg

def reset():
    global random_number
    random_number = random.randint(1,100)
    lbl_result["text"] = "Game Reset, Guess again!"


    






#Create root window
root = tk.Tk()

root.configure(bg="purple")
#Add Title
root.title("Guess Number Game")

#Creating widgets
lbl_title = tk.Label(root, text="Welcome to the Guess Number Game!", fg="white", bg="purple")
lbl_title.pack()

lbl_result = tk.Label(root, text="Guess a number between 1-100, Good Luck!", fg="white", bg="purple")
lbl_result.pack()

button_try = tk.Button(root, text="try", fg="purple", bg="white", width=10,height=7, command = ask_number)
button_try.pack(side = "left")

button_reset = tk.Button(root, text= "reset", fg="purple", bg="white", width=10,height=7, command = reset)
button_reset.pack(side = "right")

txt_guess = tk.Entry(root, width=7)
txt_guess.pack()


#Start the main loop
root.mainloop()
root.destroy()
