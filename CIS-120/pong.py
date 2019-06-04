# Pong 
#Kendall Roberts
#5/23/2019

import turtle

win = turtle.Screen()
win.title("Pong")
win.bgcolor("black")
win.setup(width = 800, height = 600)
win.tracer(0)

#Paddle A 
 
paddle_A = turtle.Turtle()
paddle_A.speed(0)
paddle_A.shape("square")
paddle_A.shapesize(stretch_wid=5, stretch_len=1)
paddle_A.color("white")
paddle_A.penup()
paddle_A.goto(-350, 0)
#Paddle B 
paddle_B = turtle.Turtle()
paddle_B.speed(0)
paddle_B.shape("square")
paddle_B.shapesize(stretch_wid=5, stretch_len=1)
paddle_B.color("white")
paddle_B.penup()
paddle_B.goto(350, 0)



#Ball 
ball = turtle.Turtle()
ball.speed(0)
ball.shape("square")
ball.color("purple")
ball.penup()
ball.goto(0,0)
ball.dx = .4
ball.dy = .4
#functions

def paddle_A_up():
    y = paddle_A.ycor()
    y +=20
    paddle_A.sety(y)

def paddle_A_down():
    y = paddle_A.ycor()
    y -=20
    paddle_A.sety(y)

def paddle_B_up():
    y = paddle_B.ycor()
    y +=20
    paddle_B.sety(y)

def paddle_B_down():
    y = paddle_B.ycor()
    y -=20
    paddle_B.sety(y)


#Keyboard Binding
win.listen()
win.onkeypress(paddle_A_up, "w")
win.onkeypress(paddle_A_down, "s")
win.onkeypress(paddle_B_up, "Up")
win.onkeypress(paddle_B_down, "Down")



#Main Game Loop

while True:
    win.update()

    #Move Ball 
    ball.setx(ball.xcor() + ball.dx)
    ball.sety(ball.ycor() + ball.dy)
    #Border Bounce
    if ball.ycor() > 290:
        ball.sety(290)
        ball.dy *=-1
    
    if ball.ycor() < -290:
        ball.sety(-290)
        ball.dy *=-1

    if ball.xcor() > 390:
        ball.goto(0, 0)
        ball.dx *=-1 
    
    if ball.xcor() < -390:
        ball.goto(0, 0)
        ball.dx *=-1 
    #paddle and ball colisions

    if ball.xcor() > 340 and ball.xcor() < 350 and (ball.ycor() < paddle_B.ycor() + 40 and ball.ycor() > paddle_B.ycor() -40):
        ball.setx(340)
        ball.dx *= -1
    if ball.xcor() < -340 and ball.xcor() > -350 and (ball.ycor() < paddle_A.ycor() + 40 and ball.ycor() > paddle_A.ycor() -40):
        ball.setx(-340)
        ball.dx *= -1