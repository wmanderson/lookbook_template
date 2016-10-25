# Everlane Lookbook Prototyping Tool

Preview & review your Lookbook designs prior to development. Requires no coding or syntax editing. Adheres to the current Lookbook template standards. 

Designed to work with [Everlane Lookbook Template](https://www.dropbox.com/s/9sjwraqbs4jfmff/20161010_Everlane_Lookbook.sketch?dl=0). 

## Overview
1. Download and save this zip file to your desktop (or wherever you save your working files).
2. Exporting your design into the `/img` folder.

## Exporting Your Design

In order to accurately preview your design, you need to follow a few, simple steps when exporting your design. 

#### Choosing which folders to export
The sketch Lookbook template is organized with preexisting folders—these are the folders you’ll want to export. The default folders are:
```
site-header
hero
block-1
block-2
block-3
```

The `hero` folder should container all text and images from the intro section of the look book. The `block-1` folder should contain all text and images from the first section. And so on. If you need to add a section, you can duplicate (`⌘ + D`) folders and rename them accordingly. 
![folder structure](http://i.imgur.com/xavLmX6.png)

### Export Setting
- Each folder should be exported as an individual 1x .png file. 
- *Important*: Do not rename the files. 
- Export PNGs to the `lookbook.html/img` folder. If there are existing files there, you can overwrite them. 
![export settings](http://i.imgur.com/xKKhXdX.png)
![files](http://imgur.com/bPD9tnX)

## Previewing Your Design
To preview the design, just open the `index.html` file. It should open in your default browser. 

If you receive an error message, try increasing the size of your browser—this template is designed to only preview desktop designs, not mobile or tablet. 

If you wish to update your designs, just re-export from sketch and overwrite the existing file(s). 
![preview](http://imgur.com/IoW9GML)

### Customizing the template
	1. The only time you may want to edit the template is to change the background color. To do so, open the `css/style.css` file in any text editor (e.g. Text Edit)
	2. On line 24, you will see a CSS class for background color. 
```
/*********** Change the background color of your lookbook below/***********/

body {
  background-color: #f8f8f8;
}
```
	Change the hex value, and save the css file. Reload the `index.html` file to see the change. 


### Helpful Resources 
- [Window Resizer](https://chrome.google.com/webstore/detail/window-resizer/kkelicaakdanhinjdeammmilcgefonfh) 
- [Atom.io](https://atom.io/)

 