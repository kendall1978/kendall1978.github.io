# Each card has a suite and number
# MAKE sure there are only 4 of each card
# Each player is dealt cards at random
# highest card wins
# tie breaker - 3 face down, 1 up, winner takes all
# 52 cards total
# objective is to get all cards
# winner is determined who gets all cards

#build and shuffle deck--build_deck, shuffle_deck
# create players--create_p, player_listd
# deal cards--deal_cards
# play the game--main function

def create_players(numberOfPlayers = 2):
    players = []
    for person in range(numberOfPlayers):
        players.append("Player " + str(person))
    return players

def build_deck():
    deck = {}
    suits = ["Hearts", "Clubs", "Spades", "Diamonds"]
    for suite in suits:
        numbers = []
        for n in range(13):
            numbers.append(n+1)
        deck[suite] = numbers
        print(deck[suite])
    return deck


players = create_players()
print(players)
deck = build_deck()
print(deck)
deck = {"heart1":1, "heart2":2, "heart1":1, "heart1":1}

