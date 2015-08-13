Addressing the following Requirement:

o   Multiple bars: - This is achieved by having the Ractive object initialize an array of "bars" which has the property like color , name etc.
	- the width of the bars were used to control the style of the div - leading to the color change.

o   One set of controls that can control each bar on the fly : - To achieve this , Events were used -like on-click and on-tap and the event handler captures the "bar" that needs to be controlled. This is followed by the action of the plus and minus sign to control the progress.

o   Can't go under 0: - Numeric manipulations were used to achieve this.

o   Can go over 100, but limit the bar itself and change its colour : Numeric manipulations.

o   Display usage amount, centered: - Since the width was increasing , the text displaying the content also kept moving. To ensure that the text stays in the center , padding-right attribute was introduced and a brief calculation helped it to stay in the center.
