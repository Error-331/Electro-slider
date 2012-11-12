/**
 * Main constructor function of the class.
 * 
 * Function that creates slider.
 * 
 * @access public   
 *
 * @param object usrConfig object that contains configuration options for the slider
 *                        
 */ 

jQuery.fn.ElectroSlider.HorFadeSlider = function(usrConfig)
  {
  jQuery.fn.ElectroSlider.HorFadeSlider.SuperClass.constructor.call(this, usrConfig); 
  }
  
/* Core methods starts here */

/**
 * Method that prepares slides of the slider.
 * 
 * Simple method that prepares necessary HTML code for the slides of the slider.
 * 
 * @access public   
 *                        
 */     

jQuery.fn.ElectroSlider.HorFadeSlider.prototype.PrepareSlides = function()
  {
  jQuery.fn.ElectroSlider.HorFadeSlider.SuperClass.PrepareSlides.call(this);  
  this.jQuery('.' + this.CSSPrefix + '_ElectroSlider_SlidContOut').css('position', 'absolute');
  } 
          
/**
 * Method that selects slider item without any animation.
 * 
 * Simple method that selects slider item without any animation.
 * 
 * @access public   
 * 
 * @param int usrItem item to select
 *       
 * @return bool true if item was selected successfully and false if not
 *	    
 */ 

jQuery.fn.ElectroSlider.HorFadeSlider.prototype.SelectItemInstant = function(usrItem)
  { 
  var tmpSelf = this;  
  var tmpResult = jQuery.fn.ElectroSlider.HorTransSlider.SuperClass.SelectItemInstant.call(this, usrItem);

  var tmpWidth = 0;
  var tmpHeight = 0;

  var Counter1 = 0;    
  
  if (tmpResult == false) {return false;}
                             
  this.jQuery(tmpSelf.Slides).stop();     
  this.jQuery(tmpSelf.Slides).css('opacity', 'inherit'); 

  this.Slides.fadeOut(0);     
                   
  this.jQuery(tmpSelf.Slides[usrItem - 1]).fadeIn(0);
 
  this.CurSlideIndex = usrItem; 
  this.onResize();    
  return true;
  }

/**
 * Method that selects slider item utilising animation.
 * 
 * Simple method that selects slider item utilising animation.
 * 
 * @access public   
 * 
 * @param int usrStartItem item which will be used as animation start point
 * @param int usrEndItem item which will be used as animation end point  
 *       
 * @return bool true if item was selected successfully and false if not
 *	    
 */ 

jQuery.fn.ElectroSlider.HorFadeSlider.prototype.SelectItem = function(usrStartItem, usrEndItem)
  {
  var tmpSelf = this;      
  var tmpResult = jQuery.fn.ElectroSlider.HorTransSlider.SuperClass.SelectItem.call(this, usrStartItem, usrEndItem);
  
  if (tmpResult == false) {return false;}
  
  if (typeof usrStartItem != 'number' || usrStartItem <= 0 ||  usrStartItem > this.Slides.length) {return false;}
  if (typeof usrEndItem != 'number') 
    {
    if (typeof usrEndItem == 'undefined')
      {
      if (usrStartItem == 1) {return false;}
  
      usrEndItem = usrStartItem;
      usrStartItem = 1;
      }
    else {return false;}
    }
  else if (typeof usrEndItem == 'number' && (usrEndItem <= 0 || usrEndItem > this.Slides.length || usrEndItem == usrStartItem)) {return false;}

  /* Initial values check ends here */

  var tmpAnimObj = {};
  var tmpDelay = this.Delay;
  var Counter1 = 0;

  var tmpAnimeWidth = 0;
  var tmpAnimeHeight = 0;
  
  this.jQuery(tmpSelf.Slides).stop();
  this.jQuery(tmpSelf.Slides).css('opacity', 'inherit');
  this.jQuery(tmpSelf.Slides).fadeOut(0);
  
  this.jQuery(tmpSelf.Slides[usrStartItem - 1]).fadeIn(0);
  
  this.jQuery(tmpSelf.Slides[usrStartItem - 1]).fadeOut(tmpDelay);
  this.jQuery(tmpSelf.Slides[usrEndItem - 1]).fadeIn(tmpDelay);   
  
  this.CurSlideIndex = usrEndItem;
  this.onResize();     
  return true;
  }   

/* Core methods ends here */

/* Class extension and other actions starts here */

if (jQuery.fn.ElectroSlider.CheckIsClassLoaded('hortransslider', function()
      {
      jQuery.fn.ElectroSlider.ExtendClassAfter(jQuery.fn.ElectroSlider.HorFadeSlider, jQuery.fn.ElectroSlider.HorTransSlider);
      jQuery.fn.ElectroSlider.onClassLoad('horfadeslider');  
      }) == true)
    {
    jQuery.fn.ElectroSlider.ExtendClassAfter(jQuery.fn.ElectroSlider.HorFadeSlider, jQuery.fn.ElectroSlider.HorTransSlider);
    jQuery.fn.ElectroSlider.onClassLoad('horfadeslider');
  }

/* Class extension and other actions ends here */  