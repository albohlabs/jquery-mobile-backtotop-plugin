# jQuery Mobile Back to top Plugin

This plugin will enhance a users' experience of your jQuery Mobile app by adding a 'Back to top' button to a page.

This will save them from having to continuously scroll to get back to the top of a page. 

![Alt text](https://lh3.googleusercontent.com/-DwGd1ULbDXg/Tx3mfLmtqEI/AAAAAAAAAIA/bZwPN9GBoHM/s743/backToTop_iPhone_4_screenshot.png)

## Supported Browsers

This plugin has been tested on iOS and Android devices.

## Requirements

The plugin requires [jQuery Mobile 1.0](http://jquerymobile.com/download/) or greater.

## Usage

This plugin binds to the document pageinit event.

``` js
$(document).bind("pageinit", function() {
    $(document).backToTop();
});
```

This means it will work with both single and multiple pages within the same document.

## Config Options 

You can specify the following options:
	
**id** *(default:'backToTop')* - the id of the back to top button element.

**text** *(default:'Back to top')* - the text shown in the back to top button.

**theme** *(default:'a')* - the theme you want to use for the button.  

**position** *(default:'topleft')* - where the button should appear.  Other position values are 'topright','bottomleft' and 'bottomright.	

### Example
	
``` js
$(document).bind("pageinit", function() {
    $(document).backToTop({
        id: 'backToTopPlugin',
        text: 'Back to top',
        theme: 'b',
        position: 'bottomright'
    });
});
``` 	
	 
## Learn

Read [the blog post about how this plugin was created](http://operationmobile.com/how-to-create-a-jquery-mobile-plugin).

This uses the a jQuery Mobile boilerplate created by [Addy Osmani](http://twitter.com/addyosmani). 

See this article more information [Essential jQuery Plugin Patterns](http://coding.smashingmagazine.com/2011/10/11/essential-jquery-plugin-patterns/).

## Let me know what you think

Contact me on [Twitter](http://twitter.com/operationmobile)