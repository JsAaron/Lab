#coding=utf8
#python 2.7
#auther StrayBugs

import urllib, re, os cStringIO
# need PIL & pywin32 installed
import Image
from ctypes import windll

BING_URL = 'http://cn.bing.com'
link_checker = re.compile(r"g_img=.*?\'(.*?)\'")

for c in range(10):
  try:
    pageData = urllib.urlopen(BING_URL).read()
    link = link_checker.search(pageData).group(1).replace('1920x1080', '1366x768')
    break
  except: continue
  else: exit(1)

picdata = cStringIO.StringIO(urllib.urlopen(link).read())

bmpPath = 'wallpaper12343544321.bmp'
Image.open(picdata).save(bmpPath, 'BMP')

windll.user32.SystemParametersInfoA(20, 0, bmpPath, 0)

os.remove(bmpPath)