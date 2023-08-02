#import cv2
import win32gui as win32
import ctypes


#win32.SetParent(img, worker)

progman = win32.FindWindow("Progman", None)
#win32.SetForegroundWindow(progman)
#win32.DestroyWindow(progman)
ok = win32.SendMessageTimeout(progman,
0x052C,
0,
0,
0,
1000)

def append(img, worker, hwnd):
    print(hwnd)
    #win32.SetWindowLong(hwnd, win32con.GWL_STYLE, win32con.WS_POPUP);
    ctypes.windll.shcore.SetProcessDpiAwareness(1)
    #print(img, worker)
    #win32.SetWindowPos(worker, None, 0, 0, 1920, 1080, 0)
    win32.SetWindowPos(img, None, -15, -15, 1960, 1120, 0)
    win32.SetParent(img, worker)
    win32.SetForegroundWindow(img)

image = 0
workerW = 0

def getShell():   
    def findit(hwnd,ctx):
        global image
        global workerW
        if win32.GetWindowText(hwnd) == "Image":
            print(hwnd)
            image = hwnd

        p = win32.FindWindowEx(hwnd, 0 , "SHELLDLL_DefView", None)
        #print(p)
        if p != 0:
            f = open("hwnd", "w")
            f.write(str(hwnd))
            f.close()

            print(p, hwnd)
            workerW = win32.FindWindowEx(None, hwnd,"WorkerW",None)
            append(image, workerW, hwnd)
    


    win32.EnumWindows(findit,None)

#720p
#video_path = r"C:\Users\ms_al\Downloads\GHIBLI.mp4"
#
#cap = cv2.VideoCapture(video_path)
#amiok = 0
#while(cap.isOpened()):
#    
#    ret, frame = cap.read() 
#    frame = cv2.resize(frame, (1920,1080))
#    
#    if ret:
#        cv2.namedWindow('Image', cv2.WND_PROP_FULLSCREEN)
#        cv2.setWindowProperty('Image', cv2.WND_PROP_FULLSCREEN, cv2.WINDOW_FULLSCREEN)
#        cv2.imshow("Image", frame)
#    else:
#       print('no video')
#       cap.set(cv2.CAP_PROP_POS_FRAMES, 0)
#       continue
#    
#    if cv2.waitKey(24) & 0xFF == ord('q'):
#        break
#    if amiok == 0:
#        getShell()
#        amiok = 1
#
#cv2.destroyAllWindows()

