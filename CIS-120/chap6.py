#Chapter 6
# Kendall Roberts


def ask_number(question, low, high, step = 1):
    """Ask for a number within a range."""
    response = None
    while response not in ("y", "n"):
        response = input(question).lower()
    return response


num1 = ask_number("What is your number?: ", 0, 12, 2)

