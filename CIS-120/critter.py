#critter

class Critter(object):
	"""A vitual pet"""
	__total = 0
	
	@staticmethod
	def status():
		print("\nThe total amount of critters is: " + str(Critter.__total))
		
	@property
	def name(self):
		return self.__name
		
	@property
	def mood(self):
		return self.__mood
		
	@mood.setter
	def mood(self, newMood):
		if (newMood == "Happy" or newMood == "Sad" or newMood == "Grumpy"):
			self.__mood = newMood
			print("Succesfully updated mood")
		else:
			print ("incorrect value for mood")
	
	def __private_method(self):
		print("This message is private")
		
	def public_method(self):
		print("This is a public method.")
		self.__private_method()
	
	def __init__(self, name, mood):
		print("A new crtter is born.")
		self.__name = name
		self.__mood = mood
		Critter.__total += 1
		
	def talk(self):
		print("Hi I am a critter.")
		
		
critter1 = Critter("Billy", "Happy")
critter1.talk()
print(critter1.name)


Critter.status()
critter1.public_method()

print(critter1.mood)
critter1.mood = "Angry"
print(critter1.mood)
critter1.mood = "Grumpy"
print(critter1.mood)