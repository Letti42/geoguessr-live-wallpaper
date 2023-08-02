#import codecs

def imgToBytes(path):
    with open(path, "rb") as image:
        f = image.read()
        #hex_bytes = codecs.encode(f, 'hex')
        #print(str(hex_bytes))
        #return str(hex_bytes)
        b = bytearray(f)
        return str(list(b)).replace(" ", "")
    
def saveBytesToCode(bytes_p, pano_p):
    by = imgToBytes(pano_p)
    code = "var bytes = "
    code += by

    f = open(bytes_p, "w")
    f.write(code)
    f.close()


#saveBytesToCode("web/bytes.js", "web/pixel.jpg")

