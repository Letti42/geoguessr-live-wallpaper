from PyQt5.QtWidgets import *
from PyQt5.QtGui import *
from PyQt5.QtCore import *
from PyQt5.QtWebEngineWidgets import *

import time
import mouse
import win32gui as win32
from pynput import mouse as MMFOOD
from multiprocessing import Process
from wallpaper import getShell
from multiprocessing import set_start_method
from bytesp import saveBytesToCode


mousedown = False
mouseDragX = 0
mouseDragY = 0
numMouseDrag = 0
mx = 0
my = 0
checking = 0
browser = None

class MouseMovement:
    def __init__(self, x, y):
        self.x = x
        self.y = y



def hi(s):
    try:
        global desktop
        global checking

        checking+=1
        if checking > 15:
            f = open("hwnd", "r")
            desktop = int(f.read())


        if win32.GetForegroundWindow() == desktop:
            global mousedown
            if hasattr(s, "event_type"):
                if s.event_type == "down" or s.event_type == "double":
                    mousedown = True
                if s.event_type == "up":
                    mousedown = False
                    global mx
                    global my
                    mx = 0
                    my = 0
            if hasattr(s, "x") and mousedown:
                movethething(s)
    except:
        print("Variable not defined yet")


def sendMessage(cx, cy):
    #thing.browser.page().runJavaScript("window.alert('i want to run window.movealittlebitsomewhere("+str(cx)+", "+str(cy)+")')")
    global browser
    if browser != None:
        browser.page().runJavaScript("window.movealittlebitsomewhere("+str(cx)+", "+str(cy)+")")

def sendIWANTTOSCROLLLL(dy):
    global browser
    browser.page().runJavaScript("window.LEMMESCROLLLLLLL("+str(dy)+")")

def on_scroll(x, y, dx, dy):
    #print(dy)
    if dy != 0 and win32.GetForegroundWindow() == desktop and browser!= None:
        sendIWANTTOSCROLLLL(dy)

def start_scroll_listener():
    listener = MMFOOD.Listener(
        on_scroll=on_scroll)
    listener.start()


def movethething(s):
    global my
    global mx
    x = getattr(s, "x")
    y = getattr(s, "y")
    if mx == 0 or my == 0:
        mx = x
        my = y

    cx = x - mx
    cy = y - my
    sendMessage(cx, cy)

    mx = x
    my = y

    
    

class MyWebBrowser(QMainWindow):
    def  __init__(self, *args, **kwargs):
        super(MyWebBrowser, self).__init__(*args, **kwargs)
        self.window = QWidget()
        self.window.setWindowTitle("Image")
        self.window.setWindowFlag(Qt.FramelessWindowHint)

        self.layout = QVBoxLayout()

        self.browser = QWebEngineView()

        self.layout.addWidget(self.browser)

        self.browser.setUrl(QUrl("file:///C:/Users/ms_al/actual%20project/photosphere%20panorama%20street%20view%20360/web/index.html"))


        self.window.setLayout(self.layout)
        self.window.show()

        start_scroll_listener()
        mouse.hook(hi)
        self.browser.page().runJavaScript("window.alert('hi plonkit')")


    def browser_self(self):
        return self.browser

    



def startWebBroswer():
    global browser
    app = QApplication([])
    window = MyWebBrowser()
    browser = window.browser_self()
    app.exec_()

def sendWindowDesktop():
    time.sleep(2)
    getShell()


    

#startWebBroswer()

if __name__ == "__main__":
    bytes_path = "web/bytes.js"
    pano_path = "web/guyinhouselmao.jpg"

    saveBytesToCode(bytes_path, pano_path)

    set_start_method('spawn')

    desktop = 0

    p_wb = Process(target=startWebBroswer)
    p_window = Process(target=sendWindowDesktop)

    p_wb.start()
    p_window.start()

    p_wb.join()
    p_window.join()
