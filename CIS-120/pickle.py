#CIS -120
#Kendall Roberts
#Working With Binary Files
# RB- Reading Binary WB- Write Binary AB- Append Binary
import pickle, shelve

print("Pickling Lists")
"""
variety = ["sweet", "hot", "dill"]
shape = ["whole", "spear", "chip"]
brand = ["Claussen", "Heinz", "Vlassic"]

f = open("pickles1.dat", "wb") 
pickle.dump(variety,f)
pickle.dump(shape,f)
pickle.dump(brand,f)
f.close()
"""
f = open("pickles1.dat", "rb")
variety = pickle.load(f)
test2 = pickle.load(f)
test3 = pickle.load(f)
test4 = pickle.load(f)
print(variety)
print(test2)
print(test3)
print(test4)

print("\nShelving")


s["variety"] = ["sweet", "hot", "dill"]
s["shape"] = ["whole", "spear", "chip"]
s["brand"] = ["Claussen", "Heinz", "Vlassic"]
s = shelve.open("pickles2.dat") 
s.sync()

print("\n Getting data form the shelf")
print("brands -", s["brand"][0])
s.close()