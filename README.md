# Everlane Lookbook Prototyping Tool

Preview & review your Lookbook designs prior to development. Requires no coding or syntax editing. Adheres to the current Lookbook template standards. 

Designed to work with [Everlane Lookbook Template](https://www.dropbox.com/s/9sjwraqbs4jfmff/20161010_Everlane_Lookbook.sketch?dl=0). 

## Overview
1. Download and save [the Lookbook Prototyping Tool](https://github.com/wmanderson/lookbook_template/archive/master.zip) to your desktop (or wherever you save your working files).
2. Exporting your design into its `/img` folder.

## How-To

#### Step 1: Export from Sketch
Once you’re ready to review your design, you need to export it from your sketch file as PNGs. 

Rather than export the entire design, you’ll want to export it in slices. The template is designed to make this easy. It comes organized with the following Layer Groups (or folders) which you’ll use export you lookbook.

| Folder Name | Description |
| ------ | ----------- |
| hero   | Contains Lookbook title, hero image, and intro copy |
| block-1 | Contains Section-1 title, all section-1 copy, and all section-1 captions |
| block-2 | Contains Section-2 title, all section-2 copy, and all section-2 captions |
| block-3 | Contains Section-3 title, all section-3 copy, and all section-3 captions |
 
![folder structure](http://i.imgur.com/T9aYffS.png)

Each of the folders should contain all the creative for its corresponding section. For instance, the `hero` folder should container the cookbook’s intro title, hero image, and intro copy.  
![hero structure](http://i.imgur.com/emVjHiD.png)

### Export Setting
- Export each layer group as an individual png. To do so, just select the folders, and then click “export” on the bottom right of your screen.  
- *Important*: Do not rename the files. 
- Export the PNGs to the `lookbook.html/img` folder. If there are existing files there, you can overwrite them. 
![export settings](http://i.imgur.com/xKKhXdX.png)
![files](http://i.imgur.com/uXNE9BF.png)

## Step 2: Open in Browser
To preview the design, just open the `index.html` file. It should open in your default browser. 

If you receive an error message, try increasing the size of your browser—this template is designed to only preview desktop designs, not mobile or tablet. 

If you wish to update your designs, just re-export from sketch and overwrite the existing file(s). 
![preview](http://i.imgur.com/IoW9GML.png)

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

 