{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;\red255\green255\blue255;\red0\green0\blue194;
\red252\green61\blue7;\red146\green26\blue32;\red251\green0\blue7;\red15\green112\blue1;\red0\green0\blue194;
\red15\green112\blue1;\red252\green61\blue7;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;\cssrgb\c100000\c100000\c100000;\cssrgb\c0\c0\c80392;
\cssrgb\c100000\c33333\c0;\cssrgb\c64706\c16471\c16471;\cssrgb\c100000\c0\c0;\cssrgb\c0\c50196\c0;\cssrgb\c0\c0\c80392;
\cssrgb\c0\c50196\c0;\cssrgb\c100000\c33333\c0;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs24 \cf2 \cb3 \expnd0\expndtw0\kerning0
function\'a0magnify(imgID, zoom) \{\
\'a0\'a0var\'a0img, glass, w, h, bw;\
\'a0\'a0img = document.getElementById(imgID);\
\
\'a0\'a0/* Create magnifier glass: */\
\'a0\'a0glass = document.createElement("DIV");\
\'a0 glass.setAttribute("class",\'a0"img-magnifier-glass");\
\
\'a0\'a0/* Insert magnifier glass: */\
\'a0 img.parentElement.insertBefore(glass,\'a0img);\
\
\'a0\'a0/* Set background properties for the magnifier glass: */\
\'a0\'a0glass.style.backgroundImage\'a0=\'a0"url('"\'a0+ img.src\'a0+\'a0"')";\
\'a0\'a0glass.style.backgroundRepeat\'a0=\'a0"no-repeat";\
\'a0\'a0glass.style.backgroundSize\'a0= (img.width\'a0* zoom) +\'a0"px "\'a0+ (img.height\'a0* zoom)\'a0+\'a0"px";\
\'a0 bw =\'a03;\
\'a0 w = glass.offsetWidth\'a0/\'a02;\
\'a0 h =\'a0glass.offsetHeight\'a0/\'a02;\
\
\'a0\'a0/* Execute a function when someone moves the magnifier glass over the image: */\
\'a0 glass.addEventListener("mousemove",\'a0moveMagnifier);\
\'a0 img.addEventListener("mousemove", moveMagnifier);\
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \outl0\strokewidth0 \strokec9 function\strokec2 \'a0getCursorPos(e) \{\
\'a0\'a0\'a0\'a0\strokec9 var\strokec2 \'a0a, x =\'a0\strokec7 0\strokec2 , y =\'a0\strokec7 0\strokec2 ;\
\'a0\'a0\'a0\'a0e = e || window.\strokec9 event\strokec2 ;\
\'a0\'a0\'a0\'a0\strokec10 /* Get the x and y positions of the image: */\strokec2 \
\'a0\'a0\'a0 a = img.getBoundingClientRect();\
\'a0\'a0\'a0\'a0\strokec11 /* Calculate the cursor's x and y coordinates, relative to the image: */\strokec2 \
\'a0\'a0\'a0\'a0x = e.pageX\'a0- a.left;\
\'a0\'a0\'a0 y = e.pageY\'a0- a.top;\
\'a0\'a0\'a0\'a0\strokec11 /* Consider any page scrolling: */\strokec2 \
\'a0\'a0\'a0 x = x -\'a0window.pageXOffset;\
\'a0\'a0\'a0 y = y - window.pageYOffset;\
\'a0\'a0\'a0\'a0\strokec9 return\strokec2 \'a0\{x : x, y : y\};\
\'a0 \}\
\}}