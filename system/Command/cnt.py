
user_name = "admin"
def say(text):
    print(text)
def copyrightout():
    say('CNT of Server (aplcexenicesetrl.com), \nCopyright (C) 2024\nAPlcexenicesetrl CCNTSS Commmand')
def userout():
    print('\n',end="")
    say(user_name+'>')
    code=input()
    codes(code)
def codes(code):
    if(code=='cnt'):
        copyrightout()
    else:
        say('Error: \''+code+'\' is not executable Code or program. Please check that yours is correct.')
copyrightout()
while(True):
    userout()
