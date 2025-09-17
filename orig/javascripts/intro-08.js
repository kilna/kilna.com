
/*global $:false */
/*global window: false */

(function(){
  "use strict";


$(function ($) {

   		if( !device.tablet() && !device.mobile() ) {

			/* plays the BG Youtube video if non-mobile device is detected*/ 
			$(".player").mb_YTPlayer({
				loop:true,
				showYTLogo:false,
				mute: false,
				realfullscreen :true,
		                    	showControls : false,
		                    	quality : "default", 
			});
						
		} else {
			
			/* displays a poster image if mobile device is detected*/ 
			$('.player').addClass('hide');
			$('#intro').addClass('video-poster-image');
			
		}

   
});
// $(function ($)  : ends

})();
//  JSHint wrapper $(function ($)  : ends







	

