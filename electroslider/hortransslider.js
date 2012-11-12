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
                 
jQuery.fn.ElectroSlider.HorTransSlider = function(usrConfig)
  {
  jQuery.fn.ElectroSlider.HorTransSlider.SuperClass.constructor.call(this, usrConfig);    
  }
  
/* Core methods starts here */

/**
 * Method that checks raw slides and their source.
 * 
 * Simple method that checks raw slides and their source.
 * 
 * @access public   
 * 
 * @param object usrSlides raw slides
 *                       
 */ 
  
jQuery.fn.ElectroSlider.HorTransSlider.prototype.CheckRawSlides = function(usrSlides)
  {  
  jQuery.fn.ElectroSlider.HorTransSlider.SuperClass.CheckRawSlides.call(this, usrSlides); 
  
  if (this.SlidesSource == 'container')
    {
    tmpChildren = this.Container.children();
    }
  else
    {
    throw "Unknown slides source";
    }

  if (tmpChildren.length <= 0)
    { 
    throw "Slider container contains no children elements";
    }   
    
  this.Slides = tmpChildren;   
  } 

/**
 * Method that prepares all the necessary markup for the slider.
 * 
 * Simple method that prepares all the necessary markup for the slider.
 * 
 * @access public   
 * 
 * @return true if the slider configured successfully
 *                        
 */ 

jQuery.fn.ElectroSlider.HorTransSlider.prototype.PrepareHTML = function()
  {
  jQuery.fn.ElectroSlider.HorTransSlider.SuperClass.PrepareHTML.call(this); 
  }

/**
 * Method that prepares panel container of the slider.
 * 
 * Simple method that prepares necessary HTML code for the panel container of the slider.
 * 
 * @access public   
 *                        
 */ 

jQuery.fn.ElectroSlider.HorTransSlider.prototype.PreparePanelContainer = function()
  {
  this.SliderPanelCont = this.jQuery('<div class="' + this.CSSPrefix + '_ElectroSlider_PanelCont"></div>'); 
  this.SliderPanelCont.css('overflow', 'auto'); 
  this.Container.append(this.SliderPanelCont); 
  
  /* Back button creation starts here */
    
  this.BackBtnCont = this.jQuery('<div class="' + this.CSSPrefix + '_ElectroSlider_BackBtnHor"><a href="#"><img src="'+this.ImagesFolder+'/back.png" border="0" title="Back button" alt="Back button"/></a></div>');
  this.SliderPanelCont.append(this.BackBtnCont);
       
  this.BackBtnCont.css('float', 'left');
  this.BackBtnCont.css('margin', '0px');
  this.BackBtnCont.css('padding', '0px');
    
  tmpElements = this.BackBtnCont.find('a');
  tmpElements.css('font-size', '1px');
  tmpElements.css('line-height', '1px');
    
  tmpElements = this.BackBtnCont.find('img');
  tmpElements.css('margin', '0px');
  tmpElements.css('padding', '0px');
  
  tmpElements.css('padding-right', '20px');
            
  /* Back button creation ends here */   
  
  /* Forward button creation starts here */
                 
  this.ForwardBtnCont = this.jQuery('<div class="' + this.CSSPrefix + '_ElectroSlider_ForwardBtnHor"><a href="#"><img src="'+this.ImagesFolder+'/forward.png" border="0" title="Forward button" alt="Forward button"/></a></div>');
    
  this.ForwardBtnCont.css('float', 'left');
  this.ForwardBtnCont.css('margin', '0px');
  this.ForwardBtnCont.css('padding', '0px');
    
  tmpElements = this.ForwardBtnCont.find('a');
  tmpElements.css('font-size', '1px');
  tmpElements.css('line-height', '1px');
    
  tmpElements = this.ForwardBtnCont.find('img');
  tmpElements.css('margin', '0px');
  tmpElements.css('padding', '0px'); 
  
  tmpElements.css('padding-left', '20px');
      
  this.SliderPanelCont.append(this.ForwardBtnCont);

  /* Forward button creation ends here */    
  }
  
/**
 * Method that prepares outer container preloader.
 * 
 * Simple method that prepares necessary HTML code for the outer container preloader.
 * 
 * @access public   
 *                        
 */   
 
jQuery.fn.ElectroSlider.HorTransSlider.prototype.PreparePanelContainerPreloader = function()
  {	  
  var tmpSelf = this;
  var tmpImage = null;    
  var tmpImagePreload = new Image();
  
  var tmpWidth = this.BackBtnCont.width() + this.SliderPanelCont.width() + this.ForwardBtnCont.width();
  
  this.SliderPanelPreloader = this.jQuery('<div class="' + this.CSSPrefix + '_ElectroSlider_PanelContPreloader"><img src="' + this.ImagesFolder + '/preloader.png"/></div>');
  this.SliderPanelPreloader.css('display', 'none');
  this.SliderPanelPreloader.css('overflow', 'hidden');
  this.SliderPanelPreloader.css('position', 'absolute');
  this.SliderPanelPreloader.css('z-index', '3');
  this.SliderPanelPreloader.css('width', tmpWidth + 'px');
  this.SliderPanelPreloader.css('height', this.Height + 'px'); 
  this.SliderPanelPreloader.css('top', '-' + this.Height + 'px');
  this.SliderPanelPreloader.css('background-color', 'white');
    
  this.SliderPanelCont.append(this.SliderPanelPreloader);       
  }  
  
/**
 * Method that prepares outer container of the slider.
 * 
 * Simple method that prepares necessary HTML code for the outer container of the slider.
 * 
 * @access public   
 *                        
 */   
  
jQuery.fn.ElectroSlider.HorTransSlider.prototype.PrepareOuterContainer = function()
  {      
  this.SliderContOut = this.jQuery('<div class="' + this.CSSPrefix + '_ElectroSlider_ContOut"></div>');
  this.SliderContOut.css('overflow', 'hidden');
  this.SliderContOut.css('float', 'left');
  this.SliderContOut.css('width', this.Width + 'px');
  this.SliderContOut.css('height', this.Height + 'px');
  
  this.BackBtnCont.after(this.SliderContOut);
  } 
  
/**
 * Method that prepares outer container preloader.
 * 
 * Simple method that prepares necessary HTML code for the outer container preloader.
 * 
 * @access public   
 *                        
 */   
 
jQuery.fn.ElectroSlider.HorTransSlider.prototype.PrepareOuterContainerPreloader = function()
  {	
  var tmpSelf = this;
                                                                                                                                                                    
  this.SliderContOutPreloader = this.jQuery('<div class="' + this.CSSPrefix + '_ElectroSlider_ContOutPreloader"><img src="' + this.ImagesFolder + '/preloader.png"/></div>');
  this.SliderContOutPreloader.css('display', 'none');
  this.SliderContOutPreloader.css('overflow', 'hidden');
  this.SliderContOutPreloader.css('position', 'absolute');
  this.SliderContOutPreloader.css('z-index', '2');
  this.SliderContOutPreloader.css('width', this.Width + 'px');
  this.SliderContOutPreloader.css('height', this.Height + 'px'); 
  this.SliderContOutPreloader.css('top', '-' + this.Height + 'px');
    
  this.SliderContOut.append(this.SliderContOutPreloader);      
  }  
  
/**
 * Method that prepares inner container of the slider.
 * 
 * Simple method that prepares necessary HTML code for the inner container of the slider.
 * 
 * @access public   
 *                        
 */   
  
jQuery.fn.ElectroSlider.HorTransSlider.prototype.PrepareInnerContainer = function()
  {
  this.SliderContIn = this.jQuery('<div class="' + this.CSSPrefix + '_ElectroSlider_ContInHor"></div>');

  this.SliderContIn.css('position', 'relative');
  this.SliderContIn.css('z-index', '1');
  this.SliderContIn.css('width', this.SumSlidesWidth + 'px');
  this.SliderContIn.css('height', this.Height + 'px');
    
  this.SliderContOut.append(this.SliderContIn);   
  } 
  
/**
 * Method that prepares slides of the slider.
 * 
 * Simple method that prepares necessary HTML code for the slides of the slider.
 * 
 * @access public   
 *                        
 */ 
 
jQuery.fn.ElectroSlider.HorTransSlider.prototype.PrepareSlides = function()
  {
  var tmpSelf = this;  
  var tmpCustFunc = null;

  this.Slides.each(function(tmpIndex, tmpSlide) 
    {            
    tmpSlideContOut = tmpSelf.jQuery('<div class="' + tmpSelf.CSSPrefix + '_ElectroSlider_SlidContOut"></div>');
    tmpSlideContIn = tmpSelf.jQuery('<div class="' + tmpSelf.CSSPrefix + '_ElectroSlider_SlidContIn"></div>');
      
    tmpSlideContIn.append(tmpSlide);
    tmpSlideContOut.append(tmpSlideContIn);
    tmpSelf.SliderContIn.append(tmpSlideContOut);  
    
    // Slide general values set
    tmpSlideContOut.css('overflow', 'auto');
    tmpSlideContOut.css('float', 'left');
    });    
    
  this.Slides = this.SliderContIn.children('.' + tmpSelf.CSSPrefix + '_ElectroSlider_SlidContOut');
  } 
  
/**
 * Method that is executed before any image preloading methods.
 * 
 * Simple method that is executed before any image preloading methods.
 * 
 * @access public   
 *                        
 */  
 
jQuery.fn.ElectroSlider.HorTransSlider.prototype.BeforeImagePreload = function()
  {
  jQuery.fn.ElectroSlider.HorTransSlider.SuperClass.BeforeImagePreload.call(this); 
  this.ShowPanelContainerPreloader();
  }  
  
  
/**
 * The purpose of this method is to preload slider controls.
 * 
 * Simple method that preloads slider controls.
 * 
 * @access public   
 *                        
 */ 

jQuery.fn.ElectroSlider.HorTransSlider.prototype.PreloadControls = function()
  {
  var tmpSelf = this;

  var tmpImgArr = new Array(this.ImagesFolder + '/back.png', this.ImagesFolder + '/forward.png');
  var tmpFunc = function() {tmpSelf.onResize();}

  this.ImagePrelode(tmpImgArr, tmpFunc);
  } 
  
/**
 * The purpose of this method is to preload slider preloader resources.
 * 
 * Simple method that preloads slider preloader resources.
 * 
 * @access public   
 *                        
 */ 
  
jQuery.fn.ElectroSlider.HorTransSlider.prototype.PreloadPreloader = function()
  {
  var tmpSelf = this;
  
  var tmpImgArr = new Array(this.ImagesFolder + '/preloader.png');
  var tmpFunc = function() 
    {
    var tmpSelect = tmpSelf.jQuery('div.' + tmpSelf.CSSPrefix + '_ElectroSlider_PanelContPreloader img').add('div.' + tmpSelf.CSSPrefix + '_ElectroSlider_ContOutPreloader img');                  

    tmpSelect.css('margin-top', ((tmpSelf.Height / 2) - (tmpSelf.jQuery(tmpSelect[0]).height() / 2)) + 'px');
    tmpSelect.css('margin-left', ((tmpSelf.Width / 2)  - (tmpSelf.jQuery(tmpSelect[0]).width() / 2)) + 'px'); 
    }

  this.ImagePrelode(tmpImgArr, tmpFunc);     
  } 
  
/**
 * The purpose of this method is to preload images that will be used in slides.
 * 
 * Simple method that preloads images that will be used in slides.
 * 
 * @access public   
 *                        
 */   
  
jQuery.fn.ElectroSlider.HorTransSlider.prototype.PreloadUserImages = function()
  {
  var tmpSelf = this;
  var tmpElements = this.Container.find('img');
  var tmpImgArr = new Array();
  
  var tmpFunc = function() 
    {
    tmpSelf.IsLoaded = true;
    tmpSelf.onSlidesChange();
    tmpSelf.SelectItemInstant(1);
    tmpSelf.onLoad();
    
    tmpSelf.HidePanelContainerPreloader();      
    }
  
  tmpElements.each(function(usrIndex, usrSlide)
    {
    var tmpElement = tmpSelf.jQuery(usrSlide);
    var tmpSrc = tmpElement.attr('src');
                                             
    if (typeof tmpSrc == 'string') {tmpImgArr.push(tmpSrc);}
    });  
    
  this.ImagePrelode(tmpImgArr, tmpFunc)  
  }         
   
/**
 * Method that is called when the slider needs to be resized.
 * 
 * Simple method that resizes slider.
 * 
 * @access public   
 *                        
 */   
  
jQuery.fn.ElectroSlider.HorTransSlider.prototype.ResizeSlider = function()
  {
  var tmpWidth = 0;
    
  jQuery.fn.ElectroSlider.HorTransSlider.SuperClass.ResizeSlider.call(this);  
    
  this.SliderContIn.css('width', this.SumSlidesWidth);
  this.SliderContIn.css('height', this.Height);
                     
  tmpPadding = (Number(this.Height) / 2) - (Number(this.BackBtnCont.height()) / 2);  
  this.BackBtnCont.css('padding', tmpPadding + 'px 5px 0px 5px');

  tmpPadding = (Number(this.Height) / 2) - (Number(this.ForwardBtnCont.height()) / 2);
  this.ForwardBtnCont.css('padding', tmpPadding + 'px 5px 0px 5px');
  
  /* Preloaders resizing starts here */
  
  tmpWidth = this.BackBtnCont.width() + this.SliderPanelCont.width() + this.ForwardBtnCont.width();

  this.SliderPanelPreloader.css('width', tmpWidth + 'px');
  this.SliderPanelPreloader.css('height', '100%');  
  
  tmpImage = this.SliderPanelPreloader.find('img:first-child');
  tmpImage.css('margin-top', ((this.Height / 2) - (tmpImage.height() / 2)) + 'px');
  tmpImage.css('margin-left', ((tmpWidth / 2)  - (tmpImage.width() / 2)) + 'px');  
  
  this.SliderContOutPreloader.css('width', this.Width);
  this.SliderContOutPreloader.css('height', this.Height);  
  
  tmpImage = this.SliderContOutPreloader.find('img:first-child');
  tmpImage.css('margin-top', ((this.Height / 2) - (tmpImage.height() / 2)) + 'px');
  tmpImage.css('margin-left', ((this.Width / 2)  - (tmpImage.width() / 2)) + 'px');  
  
  /* Preloaders resizing ends here */  
  } 
  
/**
 * Method that is called when the slider needs to be aligned.
 * 
 * Simple method that aligns slider.
 * 
 * @access public   
 *                        
 */ 

jQuery.fn.ElectroSlider.HorTransSlider.prototype.AlignSlider = function()
  {
  var tmpContHeight = this.Container.outerHeight(false);
  var tmpCurHight = this.SliderContOut.outerHeight(true);
  var tmpVIndent = 0;

  var tmpBackBtnWidth = (this.BackBtnCont.css('display') == 'none') ? 0 : this.BackBtnCont.outerWidth(true);
  var tmpForwardBtnWidth = (this.ForwardBtnCont.css('display') == 'none') ? 0 : this.ForwardBtnCont.outerWidth(true);

  if (this.IsHorCentered == true)
    {                  
    this.SliderPanelCont.css('width', (tmpBackBtnWidth + this.SliderContOut.outerWidth(true) + tmpForwardBtnWidth + 'px'));         
    this.SliderPanelCont.css('margin', '0px auto');
    }
  
  if (this.IsVertCentered == true)
    {
    if (tmpContHeight == tmpCurHight) {tmpVIndent = 0;}
    else if (tmpContHeight > tmpCurHight) {tmpVIndent = (tmpContHeight - tmpCurHight) / 2;}
    else if (tmpContHeight < tmpCurHight) {tmpVIndent = 0;}
        
    this.SliderPanelCont.css('margin-top', tmpVIndent + 'px')                   
    }        
  }   
    
/**
 * Method that is called when the slider needs align its slides.
 * 
 * Simple method that aligns slides.
 * 
 * @access public   
 *                        
 */   
  
jQuery.fn.ElectroSlider.HorTransSlider.prototype.AlignSlides = function()
  {
  var tmpSelf = this;

  // Slides traversing
  this.Slides.each(function(usrIndex, usrSlide)
    {
    var tmpSlide = tmpSelf.jQuery(usrSlide);

    var tmpWidth = tmpSlide.outerWidth(true);
    var tmpHeight = tmpSlide.outerHeight(true);

    var tmpMargin = 0;

    // Vertical align
    switch(tmpSelf.SlideVAlign)
      {
      case 'top':
      break;

      case 'center':


	//tmpChild.OriginalOffsetHeight = tmpChildDOM.offsetHeight;
	//tmpChild.OriginalOffsetWidth = tmpChildDOM.offsetWidth;

	//tmpChild.OriginalOffsetLeft = tmpChildDOM.offsetLeft;
	//tmpChild.OriginalOffsetTop = tmpChildDOM.offsetTop;


      tmpMargin = ((tmpSelf.Height - tmpHeight) / 2);

      if (tmpHeight < tmpSelf.Height)
	{
	//tmpSlide.css('margin-top', );
	}

      //alert(tmpSelf.Width);
      break;

      case 'bottom':
      break;
      }

    });    
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

jQuery.fn.ElectroSlider.HorTransSlider.prototype.SelectItemInstant = function(usrItem)
  { 
  var tmpSlider = this;
  var tmpResult = jQuery.fn.ElectroSlider.HorTransSlider.SuperClass.SelectItemInstant.call(this, usrItem);

  var tmpWidth = 0;
  var tmpHeight = 0;

  var Counter1 = 0;    

  if (tmpResult == false) {return false;}
  
  this.SliderContIn.css('left', 0);
  this.SliderContIn.css('top', 0);

  /* Width/Height calculation starts here */

  this.Slides.each(function()
    {
    var tmpChild = tmpSlider.jQuery(this);

    Counter1 += 1;
    if (Counter1 >= usrItem) {return true;}

    tmpWidth += tmpChild.outerWidth(true);
    tmpHeight += tmpChild.outerHeight(true);

    return true;
    }); 

  /* Width/Height calculation ends here */

  this.SliderContIn.css('left', 0 - tmpWidth);

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

jQuery.fn.ElectroSlider.HorTransSlider.prototype.SelectItem = function(usrStartItem, usrEndItem)
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

  if (this.SelectItemInstant(usrStartItem) == false) {return false;}

  /* Width/Height calculation starts here */

  if (usrStartItem > usrEndItem) 
    {     
    for (Counter1 = (usrStartItem - 2); Counter1 >= (usrEndItem - 1); Counter1--)
      {
      tmpAnimeWidth = this.jQuery(this.Slides[Counter1]).outerWidth(true);
      tmpAnimeHeight = this.jQuery(this.Slides[Counter1]).outerHeight(true);
      }
    }
  else 
    {
    for (Counter1 = (usrStartItem - 1); Counter1 < (usrEndItem - 1); Counter1++)
      {
      tmpAnimeWidth = this.jQuery(this.Slides[Counter1]).outerWidth(true);
      tmpAnimeHeight = this.jQuery(this.Slides[Counter1]).outerHeight(true);
      }
    }

  /* Width/Height calculation ends here */

  if (usrStartItem > usrEndItem) {tmpAnimObj.left = '+=' + tmpAnimeWidth;}
  else {tmpAnimObj.left = '-=' + tmpAnimeWidth;}

  if (usrStartItem > usrEndItem) {tmpDelay = tmpDelay / (usrStartItem - usrEndItem);}
  else {tmpDelay = tmpDelay / (usrEndItem - usrStartItem);}

  this.CurSlideIndex = usrEndItem;
  this.SliderContIn.animate(tmpAnimObj, tmpDelay);
  this.onResize();   
  return true;
  }   

/* Core methods ends here */

/* Class extension and other actions starts here */

jQuery.fn.ElectroSlider.ExtendClassAfter(jQuery.fn.ElectroSlider.HorTransSlider, jQuery.fn.ElectroSlider.Slider);
jQuery.fn.ElectroSlider.onClassLoad('hortransslider');

/* Class extension and other actions ends here */