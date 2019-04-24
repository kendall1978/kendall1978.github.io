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

import cards
import math

class War_Card(cards.Card):
    """A War Card Aces High"""
    @property
    def value(self):
        if self.is_face_up:
            if self.rank == "J":
                v = 11
            elif self.rank == "Q":
                v = 12
            elif self.rank == "K":
                v = 13
            elif self.rank == "A":
                v = 14
            else:
                v = War_Card.RANKS.index(self.rank)+ 1
        else:
            v = None
        return v

class War_Deck(cards.Deck):
    """A war Deck"""
    def populate(self):
        for suit in War_Card.SUITS:
            for rank in War_Card.RANKS:
                self.add(War_Card(rank,suit))

card1 = War_Card("A", "s")
print(card1)
print(card1.value)

card2 = War_Card("3", "c")
print(card2)
print(card2.value)
'''

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

'''

deck = War_Deck()
deck.populate()
deck.shuffle()

def create_players(numberOfPlayers = 2):
    players = []
    for person in range(numberOfPlayers):
        player = cards.Hand()
        players.append(player)
    return players

players = create_players()
cardsPerPlayer = math.trunc(52 / len(players))
deck.deal(players, per_hand = cardsPerPlayer)

for player in players:
    for card in player.cards:
        print("Player", player.index())
        print(card.value)