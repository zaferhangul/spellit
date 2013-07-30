# spellit 
spellit is a nonsensical spelling plugin.

## Example usages

  	// Sample 1
	$("#word").spellit();
	
	// Sample 2
	$("#word").spellit({effect:'rotate'});
	
	// Sample 3
	$("#word").spellit({effect:'scaleBig'});
	
	// Sample 4
	$("#word").spellit({effect:'scaleMin',timeout:25});
	
	// Sample 5
	$("#word").spellit({effect:'starWars'});
	
## Demo
http://www.zaferhangul.com/spellit

## Configuration Options
| Option           |  Default                             |  Description                                               |
|------------------|--------------------------------------|------------------------------------------------------------|
| timeout          | 40                                   | |
| effect           | ''                                   | scaleMin / scaleBig / starWars / rotate |
| loop             | 0                                    |  |
| element          | 'span'                               | span / em / i / b / ...  |
