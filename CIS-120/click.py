#Click Counter 
#Kendall Roberts
#CIS-120

from tkinter import *

class Application(Frame):
    """GUI Application that counts button clicks"""
    def __init__(self,master):
        """initialize the frame"""
        super(Application, self).__init__(master)
        self.grid()
        self.bttn_clicks = 0
        self.create_widgets()

    def create_widgets(self):
        """ Create button"""
        self.bttn = Button(self, command = self.update_count)
        self.bttn["text"] = "Total Clicks: 0"
        self.bttn["command"] = self.update_count
        self.bttn.grid() 

    def update_count(self):
        """Increase click count"""
        self.bttn_clicks += 1
        self.bttn["text"] = "Total CLicks: " + str(self.bttn_clicks)













root = Tk()
root.title("Click Counter")
root.geometry("200x50")

app = Application(root)

root.mainloop()