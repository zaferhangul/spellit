/*----------------------------------------------------
  Spellit v1.0 - 29/07/2013
	jQuery nonsensical spelling plugin
	Zafer Hangul - http://www.zaferhangul.com/spellit
-----------------------------------------------------*/
(function($){
 	$.fn.extend({ 
 		spellit: function(options) {

			var defaults = {
				timeout:40,
				effect: '', // scaleMin - scaleBig - starWars - rotate
				//loop: 0,
				element: 'em' 

			};
			
			var options = $.extend(defaults, options);
			
    		return this.each(function() {
			
			var obj = $(this);
			var str = obj.text().trim();
			//console.log(str);
			var firstLength = str.length;
			resultArray=[];
			var opener = "<"+defaults.element+" class='spellElem "+defaults.effect+"'>";
			var closer = "</"+defaults.element+">";
			
				for(var i=0;i<firstLength;i++){
					resultArray.push(opener);
					if(str[i]==" "){ 
						resultArray.push(str[i].replace(" ","&nbsp;"));
					} else {
						resultArray.push(str[i]);
						}
					resultArray.push(closer);
				}
				
				var result= resultArray.join("");
				obj.html(result);
				if(defaults.effect==''){
					obj.find(defaults.element).hide();
				}
				

				obj.find(defaults.element).each(function(){
					var i = $(this).index();
					var ms = i*defaults.timeout;
					var $this = $(this);
					setTimeout(function(){
						if(defaults.effect==''){
							$this.show();
						} else {
						$this.addClass("play");
						}
						//$this.addClass(effectClass);
						//console.log(ms);
					},ms);
					
					
				});
			
    		});
    	}
	});
})(jQuery);
