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
                
jQuery.fn.ElectroSlider.Slider = function(usrConfig)
  {
  this.jQuery = jQuery;

  if (typeof usrConfig == 'object') {this.ConfigureSlider(usrConfig);}
  this.CSSPrefix = this.GenRandString(5);
  
  this.PrepareHTML();
  }
  
/* Utility properties starts here */ 

/**
 * @access public
 * @var object jQuery 
 */

jQuery.fn.ElectroSlider.Slider.prototype.jQuery = null;

/**
 * @access public
 * @var bool indicates whether slider was loaded or not
 */

jQuery.fn.ElectroSlider.Slider.prototype.IsLoaded = false;

/**
 * @access public
 * @var string CSS class prefix
 */

jQuery.fn.ElectroSlider.Slider.prototype.CSSPrefix = null;

/**
 * @access public
 * @var array allowed viewport types 
 */

jQuery.fn.ElectroSlider.Slider.prototype.AllowedViewPortTypes = new Array('fitcontainer', 'fitslides', 'fitlargestslide', 'fitsmallestslide');

/**
 * @access public
 * @var array allowed slide vertical align 
 */

jQuery.fn.ElectroSlider.Slider.prototype.AllowedSlideVAlign = new Array('top', 'center', 'bottom');

/**
 * @access public
 * @var array allowed slide horizontal align 
 */

jQuery.fn.ElectroSlider.Slider.prototype.AllowedSlideHAlign = new Array('left', 'center', 'right');

/**
 * @access public
 * @var array allowed slides sources
 */

jQuery.fn.ElectroSlider.Slider.prototype.AllowedSlidesSources = new Array('container', 'array');

/**
 * @access public
 * @var int current slide index 
 */

jQuery.fn.ElectroSlider.Slider.prototype.CurSlideIndex = 1;

/**
 * @access public
 * @var int width of widest slide in the set
 */

jQuery.fn.ElectroSlider.Slider.prototype.MaxSlideWidth = 0;

/**
 * @access public
 * @var int height of highest slide in the set
 */

jQuery.fn.ElectroSlider.Slider.prototype.MaxSlideHeight = 0;

/**
 * @access public
 * @var int width of narrow slide in the set
 */

jQuery.fn.ElectroSlider.Slider.prototype.MinSlideWidth = 0;

/**
 * @access public
 * @var int height of lowest slide in the set
 */

jQuery.fn.ElectroSlider.Slider.prototype.MinSlideHeight = 0;

/**
 * @access public
 * @var int sum width of all slides
 */

jQuery.fn.ElectroSlider.Slider.prototype.SumSlidesWidth = 0;

/**
 * @access public
 * @var int sum height of all slides
 */

jQuery.fn.ElectroSlider.Slider.prototype.SumSlidesHeight = 0;

/**
 * @access public
 * @var int slide scale factor
 */

jQuery.fn.ElectroSlider.Slider.prototype.SlideScaleFactor = 1;

/**
 * @access public
 * @var float slide width scale factor
 */

jQuery.fn.ElectroSlider.Slider.prototype.SlideWidthScaleFactor = 1;

/**
 * @access public
 * @var float slide height scale factor
 */

jQuery.fn.ElectroSlider.Slider.prototype.SlideHeightScaleFactor = 1;

/**
 * @access public
 * @var float slide width to height ration
 */

jQuery.fn.ElectroSlider.Slider.prototype.SlideWidthToHeightRation = 1;

/**
 * @access public
 * @var array tasks that must be performed after the slider is loaded
 */

jQuery.fn.ElectroSlider.Slider.prototype.TaskStack = new Array();

/* Utility properties ends here */  

/* Properties containing document nodes starts here */

/**
 * @access public
 * @var object slider panel container
 */

jQuery.fn.ElectroSlider.Slider.prototype.SliderPanelCont = null;

/**
 * @access public
 * @var object back button container
 */

jQuery.fn.ElectroSlider.Slider.prototype.BackBtnCont = null;

/**
 * @access public
 * @var object forward button container
 */

jQuery.fn.ElectroSlider.Slider.prototype.ForwardBtnCont = null;

/**
 * @access public
 * @var object outer container of the slider
 */
                                                  
jQuery.fn.ElectroSlider.Slider.prototype.SliderContOut = null;

/**
 * @access public
 * @var object preloader container of the panel container
 */

jQuery.fn.ElectroSlider.Slider.prototype.SliderPanelPreloader = null;

/**
 * @access public
 * @var object preloader container of the outer container
 */

jQuery.fn.ElectroSlider.Slider.prototype.SliderContOutPreloader = null;

/**
 * @access public
 * @var object inner container of the slider
 */

jQuery.fn.ElectroSlider.Slider.prototype.SliderContIn = null;

/**
 * @access public
 * @var object slides
 */
                                   
jQuery.fn.ElectroSlider.Slider.prototype.Slides = null;

/* Properties containing document nodes ends here */

/* User defined properties starts here */

/**
 * @access public
 * @var object container element where slider resides
 */

jQuery.fn.ElectroSlider.Slider.prototype.Container = null;

/**
 * @access public
 * @var string property that indicates how slides will be displayed, possible values ('fitcontainer', 'fitslides', 'fitlargestslide', 'fitsmallestslide')
 */

jQuery.fn.ElectroSlider.Slider.prototype.ViewPortType = 'fitcontainer';

/**
 * @access public
 * @var string property that indicates slide vertical align
 */

jQuery.fn.ElectroSlider.Slider.prototype.SlideVAlign = 'top';

/**
 * @access public
 * @var string property that indicates slide horizontal align
 */

jQuery.fn.ElectroSlider.Slider.prototype.SlideHAlign = 'left';

/**
 * @access public
 * @var string type of the slider (horizontal, vertical, diagonal) 
 */

jQuery.fn.ElectroSlider.Slider.prototype.SliderType = 'horizontal'; 

/**
 * @access public
 * @var string folder where necessary images for slider are located
 */

jQuery.fn.ElectroSlider.Slider.prototype.ImagesFolder = 'images'; 

/**
 * @access public
 * @var int slider width
 */

jQuery.fn.ElectroSlider.Slider.prototype.Width = 0;

/**
 * @access public
 * @var int slider height
 */

jQuery.fn.ElectroSlider.Slider.prototype.Height = 0;

/**
 * @access public
 * @var int slider maximum width
 */
 
jQuery.fn.ElectroSlider.Slider.prototype.MaxWidth = 0;

/**
 * @access public
 * @var int slider maximum width
 */

jQuery.fn.ElectroSlider.Slider.prototype.MaxHeight = 0;

/**
 * @access public
 * @var bool property that indicates how slider will be scaled if its width and height is exceeded maximum values
 */

jQuery.fn.ElectroSlider.Slider.prototype.IsScaleProportional = false;

/**
 * @access public
 * @var bool property that indicates whether slider will be horizontally centered relative to the parent container
 */

jQuery.fn.ElectroSlider.Slider.prototype.IsHorCentered = true;

/**
 * @access public
 * @var bool property that indicates whether slider will be vertically centered relative to the parent container
 */

jQuery.fn.ElectroSlider.Slider.prototype.IsVertCentered = true;

/**
 * @access public
 * @var int delay between slide change
 */

jQuery.fn.ElectroSlider.Slider.prototype.Delay = 2000;  

/**
 * @access public
 * @var int slider opacity
 */

jQuery.fn.ElectroSlider.Slider.prototype.Opacity = 100; 

/**
 * @access public
 * @var string property that indicates source of the slides
 */

jQuery.fn.ElectroSlider.Slider.prototype.SlidesSource = 'container';

/* User defined properties ends here */

/* User defined event handlers starts here */

/**
 * @access public
 * @var function user defined function that will be called when the slider viewport is prepared
 */

jQuery.fn.ElectroSlider.Slider.prototype.onAfterViewportPreparedHandler = null;

/**
 * @access public
 * @var function user defined function that will be called when the slider is fully loaded
 */
 
 jQuery.fn.ElectroSlider.Slider.prototype.onLoadHandler = null;

/**
 * @access public
 * @var function user defined function that will be called when the 'back button' is clicked
 */

jQuery.fn.ElectroSlider.Slider.prototype.onBackButtonClickHandler = null;

/**
 * @access public
 * @var function user defined function that will be called when the 'forward button' is clicked
 */

jQuery.fn.ElectroSlider.Slider.prototype.onForwardButtonClickHandler = null;

/* User defined event handlers ends here */  

/* Core methods starts here */

/**
 * Method that converts RGB values to hex values.
 * 
 * Simple method that converts RGB values to hex values.
 * 
 * @access public   
 *
 * @param int usrRed value for red color
 * @param int usrGreen value for green color
 * @param int usrBlue value for blue color
 * 
 * @return string color hex value
 *                         
 */ 

jQuery.fn.ElectroSlider.Slider.prototype.HexFromRGB = function(usrRed, usrGreen, usrBlue) 
    {
    var tmpHex = 
		[
		usrRed.toString(16),
		usrGreen.toString(16),
		usrBlue.toString(16)
		];

    this.jQuery.each(tmpHex, function(tmpKey, tmpVal) 
      {
      if (tmpVal.length === 1) 
	{
	tmpHex[tmpKey] = "0" + tmpVal;
	}
      });
		
    return tmpHex.join( "" ).toUpperCase();
    }

/**
 * Method that generates random string for use in css classes names.
 * 
 * Simple method that generates random string for use in css classes names.
 * 
 * @access public   
 *
 * @param int usrLength length of the string
 * @param string usrCur current string for internal use only
 * 
 * @return string random string
 *                         
 */ 

jQuery.fn.ElectroSlider.Slider.prototype.GenRandString = function(usrLength, usrCur)
  {
  usrCur = usrCur ? usrCur : '';
  return usrLength ? this.GenRandString(--usrLength, "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".charAt(Math.floor(Math.random() * 60)) + usrCur) : usrCur;
  }

/**
 * Method that configures the slider.
 * 
 * Simple method that configures the slider.
 * 
 * @access public   
 *
 * @throws Exception  
 *
 * @param object usrConfig that contains configuration properties for the slider:
 * - Container, where are the slides resides (string - jQuery selector, object - jQuery element)
 * - SliderType, slider type (string - see SetSliderType() method)
 * - Delay, delay between slide change (int),
 * - ImagesFolder, folder where necessary images for slider work are located (string)
 * - Width, slider width (int)
 * - Height, slider height (int)
 * - IsWrap, indicates whether to wrap slides into special container or not (bool, defaults to true)
 * 
 * @return bool true if the slider configured successfully
 *
 * @see SetSliderType() 
 *                         
 */ 

jQuery.fn.ElectroSlider.Slider.prototype.ConfigureSlider = function(usrConfig)
  {
  var tmpSlider = this;

  var tmpContainer = null;
  var tmpChildren = null;

  /* Container check starts here */
  
  if (usrConfig.Container !== undefined && typeof usrConfig.Container == 'object')
    {
    this.Container = usrConfig.Container; 
    } 
  else
    {
    throw "Slider container is not set";
    }  

  /* Container check ends here */

  /* Slider various settings set starts here */

  this.SetViewPortType(usrConfig.ViewPortType);

  this.SetSlideVAlign(usrConfig.SlideVAlign);
  this.SetSlideHAlign(usrConfig.SlideHAlign);

  this.SetSliderDelay(usrConfig.Delay);
  this.SetImagesFolder(usrConfig.ImagesFolder);
  
  this.SetHorCentered(usrConfig.IsHorCentered);
  this.SetVertCentered(usrConfig.IsVertCentered);
  
  this.SetSlidesSource(usrConfig.SlidesSource);
   
  /* Slider various settings set starts here */

  // Container element children processing 
  this.CheckRawSlides(usrConfig.Slides);

  // Width height set
  this.SetWidth(usrConfig.Width);
  this.SetHeight(usrConfig.Height);
  
  this.SetMaxWidth(usrConfig.MaxWidth);
  this.SetMaxHeight(usrConfig.MaxHeight);  
  
  this.SetIsScaleProportional(usrConfig.IsScaleProportional); 

  // Event handlers set
  this.SetOnAfterViewportPreparedHandler(usrConfig.onAfterViewportPrepared);
  this.SetOnLoadHandler(usrConfig.onLoad);
  this.SetBackButtonClickHandler(usrConfig.onBackButtonClick);
  this.SetForwardButtonClickHandler(usrConfig.onForwardButtonClick);
    
  return true;
  }

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
  
jQuery.fn.ElectroSlider.Slider.prototype.CheckRawSlides = function(usrSlides)
  {  
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

jQuery.fn.ElectroSlider.Slider.prototype.PrepareHTML = function()
  {                 
  /* Slider viewport preparation starts here */
  
  this.Container.css('overflow', 'hidden');
  
  this.PreparePanelContainer();
  this.PreparePanelContainerPreloader();
  
  this.PrepareOuterContainer();
  this.PrepareOuterContainerPreloader();
  
  this.PrepareInnerContainer();
  this.PrepareSlides();

  // Handler function call
  if (typeof this.onAfterViewportPreparedHandler == 'function') {this.onAfterViewportPreparedHandler(this);}

  /* Slider viewport preparation ends here */
  
  /* Event bindings starts here */
  
  this.BindEvents();
  
  /* Event bindings starts here */
    
  /* Image preloading starts here */
  
  this.BeforeImagePreload();
  this.PreloadControls();
  this.PreloadPreloader();
  this.PreloadUserImages();
  
  /* Image preloading ends here */  
  }

/**
 * Method that binds handlers for all the necessary events of the slider.
 * 
 * Simple method that binds handlers for all the necessary events of the slider.
 * 
 * @access public   
 *                         
 */ 

jQuery.fn.ElectroSlider.Slider.prototype.BindEvents = function()
  {          
  var tmpSelf = this;
  var tmpAnimObjBack = {};
  var tmpAnimObjForward = {};
  var tmpClassPostfix = '';

  this.BackBtnCont.unbind();
  this.ForwardBtnCont.unbind();

  this.BackBtnCont.bind('click', function(usrEvent)
    {
    usrEvent.preventDefault(); 
                               
    if (tmpSelf.CurSlideIndex > 1) {tmpSelf.SelectItem(tmpSelf.CurSlideIndex, tmpSelf.CurSlideIndex - 1);}
    if (typeof tmpSelf.onBackButtonClickHandler == 'function') {tmpSelf.onBackButtonClickHandler(tmpSelf);}
    });

  this.ForwardBtnCont.bind('click', function(usrEvent)
    {
    usrEvent.preventDefault();      
                   
    if (tmpSelf.CurSlideIndex < tmpSelf.Slides.length) {tmpSelf.SelectItem(tmpSelf.CurSlideIndex, tmpSelf.CurSlideIndex + 1);}
    if (typeof tmpSelf.onForwardButtonClickHandler == 'function') {tmpSelf.onForwardButtonClickHandler(tmpSelf);}
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

jQuery.fn.ElectroSlider.Slider.prototype.SelectItemInstant = function(usrItem)
  {  
  var tmpSlider = this;  
          
  if (this.IsLoaded == false)
    {
    this.TaskStack.push(function(){tmpSlider.SelectItemInstant(usrItem);});
    return false;
    }

  if (typeof usrItem != 'number' || usrItem <= 0 ||  usrItem > this.Slides.length) {return false;}    
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

jQuery.fn.ElectroSlider.Slider.prototype.SelectItem = function(usrStartItem, usrEndItem)
  {
  var tmpSlider = this;  
    
  if (this.IsLoaded == false)
    {
    this.TaskStack.push(function(){tmpSlider.SelectItem(usrStartItem, usrEndItem);});
    return false;
    }

  if (typeof usrStartItem != 'number' || usrStartItem <= 0 ||  usrStartItem > this.Slides.length) {return false;}
  return true;
  } 

/**
 * Method that shows preloader for panel container.
 * 
 * Simple method that shows preloader for panel container.
 * 
 * @access public   
 * 	    
 */   
  
jQuery.fn.ElectroSlider.Slider.prototype.ShowPanelContainerPreloader = function()
  {
  this.SliderPanelPreloader.css('display', 'block');
  } 
  
/**
 * Method that hides preloader for panel container.
 * 
 * Simple method that hides preloader for panel container.
 * 
 * @access public   
 * 	    
 */    
  
jQuery.fn.ElectroSlider.Slider.prototype.HidePanelContainerPreloader = function()
  {
  this.SliderPanelPreloader.css('display', 'none');  
  }   
  
/**
 * Method that shows preloader for outer container.
 * 
 * Simple method that shows preloader for outer container.
 * 
 * @access public   
 * 	    
 */   
  
jQuery.fn.ElectroSlider.Slider.prototype.ShowOuterContainerPreloader = function()
  {
  this.SliderContOutPreloader.css('display', 'block');
  this.SliderContIn.css('visibility', 'hidden');
  } 
  
/**
 * Method that hides preloader for outer container.
 * 
 * Simple method that hides preloader for outer container.
 * 
 * @access public   
 * 	    
 */    
  
jQuery.fn.ElectroSlider.Slider.prototype.HideOuterContainerPreloader = function()
  {
  this.SliderContOutPreloader.css('display', 'none');  
  this.SliderContIn.css('visibility', 'visible');
  }   
  
/**
 * Method that prepares panel container of the slider.
 * 
 * Simple method that prepares necessary HTML code for the panel container of the slider.
 * 
 * @access public   
 *                        
 */   

jQuery.fn.ElectroSlider.Slider.prototype.PreparePanelContainer = function()
  {
  }
  
/**
 * Method that prepares panel container preloader.
 * 
 * Simple method that prepares necessary HTML code for the panel container preloader.
 * 
 * @access public   
 *                        
 */    
  
jQuery.fn.ElectroSlider.Slider.prototype.PreparePanelContainerPreloader = function()
  {
  } 
  
/**
 * Method that prepares outer container of the slider.
 * 
 * Simple method that prepares necessary HTML code for the outer container of the slider.
 * 
 * @access public   
 *                        
 */    
  
jQuery.fn.ElectroSlider.Slider.prototype.PrepareOuterContainer = function()
  {
  } 
  
/**
 * Method that prepares outer container preloader.
 * 
 * Simple method that prepares necessary HTML code for the outer container preloader.
 * 
 * @access public   
 *                        
 */   
 
jQuery.fn.ElectroSlider.Slider.prototype.PrepareOuterContainerPreloader = function()
  {	
  }
  
/**
 * Method that prepares inner container of the slider.
 * 
 * Simple method that prepares necessary HTML code for the inner container of the slider.
 * 
 * @access public   
 *                        
 */   
  
jQuery.fn.ElectroSlider.Slider.prototype.PrepareInnerContainer = function()
  {
  } 
  
/**
 * Method that prepares slides of the slider.
 * 
 * Simple method that prepares necessary HTML code for the slides of the slider.
 * 
 * @access public   
 *                        
 */    

jQuery.fn.ElectroSlider.Slider.prototype.PrepareSlides = function()
  {
  }
  
/**
 * Method that preload images.
 * 
 * Simple method that preload images.
 * 
 * @access public   
 * 
 * @param array usrImages array of images paths
 * @param function usrFunc function that will be executed when all the images all loaded  
 *	    
 */   
  
jQuery.fn.ElectroSlider.Slider.prototype.ImagePrelode = function(usrImages, usrFunc)
  {
  if (typeof usrImages != 'object')
    {
    // throw error
    throw('error');
    }
  
  var tmpSelf = this;
  
  var tmpImgArr = usrImages;
  var tmpImage = null;
  
  var tmpAllLoaded = false;
  var Counter1 = 0;
  
  var tmpFunc = function()
    {
    var tmpLoaded = 0;
    var Counter1 = 0;
        
    if (tmpAllLoaded == true) {return true;}
          
    for (Counter1 = 0; Counter1 < tmpImgArr.length; Counter1++)
      {
      if (typeof tmpImgArr[Counter1] != 'object') {break;}
      else
        {
        if (tmpImgArr[Counter1].complete == true || (tmpImgArr[Counter1].scomplete != undefined && tmpImgArr[Counter1].scomplete == true)) {tmpLoaded++;}
        }
      }
          
    if (tmpLoaded == tmpImgArr.length)  
      {
      tmpAllLoaded = true;   
      if (typeof usrFunc == 'function') {usrFunc();}
      }
      
    return true;
    }
                   
  for (Counter1 = 0; Counter1 < tmpImgArr.length; Counter1++)
    {
    tmpImage = new Image();
    tmpImage.src = tmpImgArr[Counter1];
                         
    tmpImgArr[Counter1] = tmpImage;
                 
    if (tmpImgArr[Counter1].complete == true) {tmpFunc();}
    tmpImgArr[Counter1].onload = function()
      {   
      this.scomplete = true;
      tmpFunc();
      } 
    }      
  }   
 
/**
 * Method that is executed before any image preloading methods.
 * 
 * Simple method that is executed before any image preloading methods.
 * 
 * @access public   
 *                        
 */  
 
jQuery.fn.ElectroSlider.Slider.prototype.BeforeImagePreload = function()
  {
  }

/**
 * The purpose of this method is to preload slider controls.
 * 
 * Simple method that preloads slider controls.
 * 
 * @access public   
 *                        
 */ 

jQuery.fn.ElectroSlider.Slider.prototype.PreloadControls = function()
  {  
  }
 
/**
 * The purpose of this method is to preload slider preloader resources.
 * 
 * Simple method that preloads slider preloader resources.
 * 
 * @access public   
 *                        
 */ 
  
jQuery.fn.ElectroSlider.Slider.prototype.PreloadPreloader = function()
  {
  } 
  
/**
 * The purpose of this method is to preload images that will be used in slides.
 * 
 * Simple method that preloads images that will be used in slides.
 * 
 * @access public   
 *                        
 */   
  
jQuery.fn.ElectroSlider.Slider.prototype.PreloadUserImages = function()
  {
  }   
    
/**
 * Method that is called when the slider needs to be resized.
 * 
 * Simple method that resizes slider.
 * 
 * @access public   
 *                        
 */     
  
jQuery.fn.ElectroSlider.Slider.prototype.ResizeSlider = function()
  {
  this.SliderContOut.css('width', this.Width);
  this.SliderContOut.css('height', this.Height);  
  }   
  
/**
 * Method that is called when the sliders viewport need to be resized.
 * 
 * Simple method that is called when the sliders viewport need to be resized.
 * 
 * @access public   
 *                        
 */    
  
jQuery.fn.ElectroSlider.Slider.prototype.ResizeViewPort = function()
  {       
  var tmpCurSlideWidth = this.jQuery(this.Slides[this.CurSlideIndex-1]).outerWidth(true);
  var tmpCurSlideHeight = this.jQuery(this.Slides[this.CurSlideIndex-1]).outerHeight(true);
  
  var tmpWidthScaleFactor = 1;
  var tmpHeightScaleFactor = 1;
  var tmpWidthToHeightRation = 1;
  
  this.SlideScaleFactor =  1;
  this.SlideWidthScaleFactor = 1;
  this.SlideHeightScaleFactor = 1;
  this.SlideWidthToHeightRation = 1;
         
  if (this.Slides !== null && this.Slides.length > 0)
    {
    if (this.ViewPortType == 'fitcontainer')
      {
      this.Width = this.Container.width();
      this.Height = this.Container.height();
      }      
    else if (this.ViewPortType == 'fitslides')
      {	  
      this.Width = tmpCurSlideWidth;
      this.Height = tmpCurSlideHeight;

      //this.SliderContIn.css('top', -(this.MaxSlideHeight - this.jQuery(this.Slides[usrEndItem-1]).outerHeight(true)));   
      }
    else if (this.ViewPortType == 'fitlargestslide')
      {
      this.Width = this.MaxSlideWidth;
      this.Height = this.MaxSlideHeight;
      }
    else if (this.ViewPortType == 'fitsmallestslide')
      {
      this.Width = this.MinSlideWidth;
      this.Height = this.MinSlideHeight;

      //this.SliderContIn.css('top', -(this.MaxSlideHeight - this.jQuery(this.Slides[usrEndItem-1]).outerHeight(true)));
      } 

    // Scaling    
    if (this.Width != 0 && this.Height != 0)
      {
      // Scale factor calculation  
      if (this.MaxWidth != 0) {tmpWidthScaleFactor = this.Width / this.MaxWidth;}      
      if (this.MaxHeight != 0) {tmpHeightScaleFactor = this.Height / this.MaxHeight;}
      tmpWidthToHeightRation = this.Width / this.Height;
                     
      // If maximum is exceeded
      if (tmpWidthScaleFactor > 1 || tmpHeightScaleFactor > 1)
        {
        if (this.IsScaleProportional == true)
          {
          if (tmpWidthScaleFactor > tmpHeightScaleFactor)
            {     
            this.Width = this.MaxWidth;     
            this.Height = parseInt(this.Width / tmpWidthToHeightRation); 
            }
          else if (tmpWidthScaleFactor < tmpHeightScaleFactor)
            {   
            this.Height = this.MaxHeight; 
            this.Width = parseInt(this.Height * tmpWidthToHeightRation);
            }  
          else
            {
            this.Width = this.MaxWidth;
            this.Height = this.MaxHeight;
          
            if (this.MaxWidth == 0) {this.Width = parseInt(this.Height / tmpWidthToHeightRation);}
            if (this.MaxHeight == 0) {this.Height = parseInt(this.Width / tmpWidthToHeightRation);}
            }     
          } // Scale proportionally 
        else
          {
          if (tmpWidthScaleFactor > 1) {this.Width = this.MaxWidth;}
          if (tmpHeightScaleFactor > 1) {this.Height = this.MaxHeight;}
          } // Scale normally      
        }      
      }
      
      
    // Slide scale factors calculation starts here
        
    this.SlideScaleFactor = (tmpCurSlideWidth * tmpCurSlideHeight) / (this.Width * this.Height);
    this.SlideWidthScaleFactor = tmpCurSlideWidth / this.Width;
    this.SlideHeightScaleFactor = tmpCurSlideHeight / this.Height;
    this.SlideWidthToHeightRation = tmpCurSlideWidth / tmpCurSlideHeight;                 
    }  
  }   
 
/**
 * Method that is called when the slider needs to be aligned.
 * 
 * Simple method that aligns slider.
 * 
 * @access public   
 *                        
 */ 

jQuery.fn.ElectroSlider.Slider.prototype.AlignSlider = function()
  {
  }   
  
/**
 * Method that is called when the slider needs align its slides.
 * 
 * Simple method that aligns slides.
 * 
 * @access public   
 *                        
 */ 

jQuery.fn.ElectroSlider.Slider.prototype.AlignSlides = function()
  {
  }
  
/**
 * Method that shows slider controls.
 * 
 * Simple method that shows slider controls.
 * 
 * @access public   
 *                        
 */     
  
jQuery.fn.ElectroSlider.Slider.prototype.ShowSliderControls = function()  
  { 
  this.BackBtnCont.css('display', 'block'); 
  this.ForwardBtnCont.css('display', 'block'); 
  
  this.onResize();    
  }
  
/**
 * Method that hides slider controls.
 * 
 * Simple method that hides slider controls.
 * 
 * @access public   
 *                        
 */     
  
jQuery.fn.ElectroSlider.Slider.prototype.HideSliderControls = function()  
  {
  this.BackBtnCont.css('display', 'none'); 
  this.ForwardBtnCont.css('display', 'none');  
  
  this.onResize(); 
  } 
  
jQuery.fn.ElectroSlider.Slider.prototype.RemoveLastSlide = function()  
  {             
  }
  
jQuery.fn.ElectroSlider.Slider.prototype.AddSlide = function(usrSlide)  
  {
  }      
  
/* Core methods ends here */  

/* Event methods starts here */

/**
 * Method that is called when the slides (or slide) state change.
 * 
 * Simple method that is called when slides (or slide) state change (for example: slides are loaded, slides number changes, new slides being add or remove).
 * 
 * @access public   
 *                         
 */ 
                     
jQuery.fn.ElectroSlider.Slider.prototype.onSlidesChange = function()
  {
  var tmpSelf = this;

  if (this.Slides.length >= 0)
    {  
    this.Slides.each(function()
	{
	var tmpChild = tmpSelf.jQuery(this);

	//var tmpChildDOM = tmpChild.children().get(0);
         
	// Width/height of the slider
	tmpSelf.Width = (tmpChild.outerWidth(true) > tmpSelf.Width) ? tmpChild.outerWidth(true) : tmpSelf.Width;
	tmpSelf.Height = (tmpChild.outerHeight(true) > tmpSelf.Height) ? tmpChild.outerHeight(true) : tmpSelf.Height;
          
	// Slides width/height sum
	tmpSelf.SumSlidesWidth += tmpChild.outerWidth(true);
	tmpSelf.SumSlidesHeight += tmpChild.outerHeight(true);

	// Largest slide width/height
	tmpSelf.MaxSlideWidth = tmpSelf.Width;
	tmpSelf.MaxSlideHeight = tmpSelf.Height;

	// Smallest slide width/height
	tmpSelf.MinSlideWidth = (tmpChild.outerWidth(true) < tmpSelf.MinSlideWidth || tmpSelf.MinSlideWidth == 0) ? tmpChild.outerWidth(true) : tmpSelf.MinSlideWidth;
	tmpSelf.MinSlideHeight = (tmpChild.outerHeight(true) < tmpSelf.MinSlideHeight || tmpSelf.MinSlideHeight == 0) ? tmpChild.outerHeight(true) : tmpSelf.MinSlideHeight;
/*
OriginalOffsetWidth
OriginalOffsetHeight

OriginalOffsetLeft
OriginalOffsetTop*/
	}); 
    }
  else
    {
    throw "Slider container contains no children elements";
    }
    
  this.onResize();
  }

/**
 * Event method that is called when the slider dimensions changes.
 * 
 * Simple method that is called when the slider dimensions changes.
 * 
 * @access public   
 *                         
 */ 

jQuery.fn.ElectroSlider.Slider.prototype.onResize = function()
  {     
  var tmpSelf = this;
  var tmpSlidesContOut = this.SliderPanelCont.find('.' + this.CSSPrefix + '_ElectroSlider_SlidContOut');
  var tmpVIndent = null;
  
  this.ResizeViewPort();
  this.ResizeSlider();
  
  // Slider centering and resizing 
  this.AlignSlider();

  // Slides centering and resizing
  this.AlignSlides();
  }

/**
 * Event method that is called when some element is loaded.
 * 
 * Simple method that is called when some element is loaded.
 * 
 * @access public   
 *
 * @param int usrElmNum number of elements that must be loaded
 * @param function usrFunc custom function to execute after all elements are loaded
 *                         
 */ 

jQuery.fn.ElectroSlider.Slider.prototype.onElementLoad  = function(usrElmNum, usrFunc)
  {
  this.ElementsLoaded += 1;

  if (this.ElementsLoaded >= usrElmNum) 
    {
    this.ElementsLoaded = 0;
    if (typeof usrFunc == 'function') {usrFunc();}
    }
  }

/**
 * Event method that is called when the slider is loaded.
 * 
 * Simple method that is called when the slider is loaded.
 * 
 * @access public   
 *                         
 */ 

jQuery.fn.ElectroSlider.Slider.prototype.onLoad  = function()
  {
  var tmpTask = null;

  /* Pending tasks execution starts here */

  if (this.TaskStack.length > 0)
    {
    while (this.TaskStack.length > 0)
      {
      tmpTask = this.TaskStack.shift();
      if (typeof tmpTask != 'function') {continue;}

      tmpTask(this);
      }
    }
    
  if (typeof this.onLoadHandler == 'function') {this.onLoadHandler(this);}  

  /* Pending tasks execution ends here */
  }

/* Event methods ends here */

/* Get methods starts here */

/**
 * Method that used to return current slider type.
 * 
 * Simple method that used to return current slider type.
 * 
 * @access public   
 * 
 * @return string slider type
 *                         
 */ 

jQuery.fn.ElectroSlider.Slider.prototype.GetSliderType = function()
  {
  return this.SliderType;
  }

/**
 * Method that used to return current slider CSS prefix.
 * 
 * Simple method that used to return current slider CSS prefix.
 * 
 * @access public   
 * 
 * @return string slider CSS prefix
 *                         
 */ 

jQuery.fn.ElectroSlider.Slider.prototype.GetSliderCSSPrefix = function()
  {
  return this.CSSPrefix;
  }

/**
 * Method that used to return current slide width.
 * 
 * Simple method that used to return current slide width.
 * 
 * @access public   
 * 
 * @return int slide width
 *                         
 */ 

jQuery.fn.ElectroSlider.Slider.prototype.GetCurSlideWidth = function()
  {
  return this.jQuery(this.Slides[this.CurSlideIndex - 1]).outerWidth(true);
  }

/**
 * Method that used to return current slide height.
 * 
 * Simple method that used to return current slide height.
 * 
 * @access public   
 * 
 * @return int slide height
 *                         
 */ 

jQuery.fn.ElectroSlider.Slider.prototype.GetCurSlideHeight = function()
  {
  return this.jQuery(this.Slides[this.CurSlideIndex - 1]).outerHeight(true);
  }
  
/**
 * Method that used to return current slide.
 * 
 * Simple method that used to return current slide.
 * 
 * @access public   
 * 
 * @return object slide
 *                         
 */  
  
jQuery.fn.ElectroSlider.Slider.prototype.GetCurSlide = function()
  {
  return this.jQuery(this.Slides[this.CurSlideIndex - 1]);
  }  

/* Get methods ends here */

/* Set methods starts here */

/**
 * Method that sets current view port type.
 * 
 * Simple method that sets current view port type.
 * 
 * @access public   
 * 
 * @param string usrViewPortType view port type ('fitcontainer', 'fitslides', 'fitlargestslide', 'fitsmallestslide')
 *
 * @return bool true if view port type set successfully and false if not
 *                            
 */ 

jQuery.fn.ElectroSlider.Slider.prototype.SetViewPortType = function(usrViewPortType)
  {
  if (typeof usrViewPortType != 'string') {return false;}
  usrViewPortType = usrViewPortType.toLowerCase();

  if (this.jQuery.inArray(usrViewPortType, this.AllowedViewPortTypes) != -1) 
    {
    this.ViewPortType = usrViewPortType;
    return true;
    }
  else {return false;}
  }

/**
 * Method that sets vertical align for the slides.
 * 
 * Simple method that sets vertical align for the slides.
 * 
 * @access public   
 * 
 * @param string usrAlign vertical align
 *
 * @return bool true if align was set successfully and false if not
 *                            
 */ 

jQuery.fn.ElectroSlider.Slider.prototype.SetSlideVAlign = function(usrAlign)
  {
  if (typeof usrAlign != 'string') {return false;}
  usrAlign = usrAlign.toLowerCase();

  if (this.jQuery.inArray(usrAlign, this.AllowedSlideVAlign) != -1) 
    {
    this.SlideVAlign = usrAlign;
    return true;
    }
  else {return false;}
  }

/**
 * Method that sets horizontal align for the slides.
 * 
 * Simple method that sets horizontal align for the slides.
 * 
 * @access public   
 * 
 * @param string usrAlign horizontal align
 *
 * @return bool true if align was set successfully and false if not
 *                            
 */ 

jQuery.fn.ElectroSlider.Slider.prototype.SetSlideHAlign = function(usrAlign)
  {
  if (typeof usrAlign != 'string') {return false;}
  usrAlign = usrAlign.toLowerCase();

  if (this.jQuery.inArray(usrAlign, this.AllowedSlideHAlign) != -1) 
    {
    this.SlideHAlign = usrAlign;
    return true;
    }
  else {return false;}
  }

/**
 * Method that sets delay between slide change.
 * 
 * Simple method that sets delay between slide change.
 * 
 * @access public   
 * 
 * @param int usrDelay delay
 *          
 * @return bool true if the delay was set successfully and false if not
 *	    
 */ 

jQuery.fn.ElectroSlider.Slider.prototype.SetSliderDelay = function(usrDelay)
  {
  if (typeof usrDelay != 'number' || usrDelay < 0) {return false;};
  this.Delay = usrDelay;
  }

/**
 * Method that sets images folder where necessary images for slider work are located.
 * 
 * Simple method that sets images folder where necessary images for slider work are located.
 * 
 * @access public   
 * 
 * @param string usrImagesFolder images folder
 *
 * @return bool true if images folder set successfully and false if not
 *                            
 */ 

jQuery.fn.ElectroSlider.Slider.prototype.SetImagesFolder = function(usrImagesFolder)
  {
  if (typeof usrImagesFolder != 'string') {return false;}
  this.ImagesFolder = usrImagesFolder;
  }

/**
 * Method that sets slider width.
 * 
 * Simple method that sets slider width.
 * 
 * @access public   
 * 
 * @param int usrWidth slider width
 *          
 * @return bool true if slider width was set successfully and false if not
 *	    
 */ 

jQuery.fn.ElectroSlider.Slider.prototype.SetWidth = function(usrWidth)
  {
  if (typeof usrWidth != 'number' || usrWidth <= 0) {return false;}
  this.Width = usrWidth;

  if (this.IsLoaded == true) {this.onResize();}
  return true;
  }

/**
 * Method that sets slider height.
 * 
 * Simple method that sets slider height.
 * 
 * @access public   
 * 
 * @param int usrHeight slider height
 *          
 * @return bool true if slider height was set successfully and false if not
 *	    
 */ 

jQuery.fn.ElectroSlider.Slider.prototype.SetHeight = function(usrHeight)
  {
  if (typeof usrHeight != 'number' || usrHeight <= 0) {return false;}
  this.Height = usrHeight;
 
  if (this.IsLoaded == true) {this.onResize();}
  return true;
  }
    
/**
 * Method that sets maximum width of the slider.
 * 
 * Simple method that sets maximum width of the slider.
 * 
 * @access public   
 * 
 * @param int usrWidth maximum slider width
 *          
 * @return bool true if slider maximum width was set successfully and false if not
 *	    
 */ 

jQuery.fn.ElectroSlider.Slider.prototype.SetMaxWidth = function(usrWidth)
  {
  if (typeof usrWidth != 'number' || usrWidth <= 0) {return false;}
  this.MaxWidth = usrWidth;

  if (this.IsLoaded == true) {this.onResize();}
  return true;
  }
  
/**
 * Method that sets maximum height of the slider.
 * 
 * Simple method that sets maximum height of the slider.
 * 
 * @access public   
 * 
 * @param int usrHeight maximum slider height
 *          
 * @return bool true if slider maximum height was set successfully and false if not
 *	    
 */ 

jQuery.fn.ElectroSlider.Slider.prototype.SetMaxHeight = function(usrHeight)
  {
  if (typeof usrHeight != 'number' || usrHeight <= 0) {return false;}
  this.MaxHeight = usrHeight;

  if (this.IsLoaded == true) {this.onResize();}
  return true;
  } 
        
/**
 * Method that sets property that indicates how slider will be scaled.
 * 
 * Simple method that sets property that indicates how slider will be scaled if its width and height is exceeded maximum values.
 * 
 * @access public   
 * 
 * @param bool usrIsScaleProp property that indicates how slider will be scaled
 *          
 * @return bool true if slider property set successfully and false if not
 *	    
 */   
  
jQuery.fn.ElectroSlider.Slider.prototype.SetIsScaleProportional = function(usrIsScaleProp)
  {
  if (typeof usrIsScaleProp != 'boolean') {return false;}
  this.IsScaleProportional = usrIsScaleProp;

  if (this.IsLoaded == true) {this.onResize();}
  return true;
  }   
  
/**
 * Method that sets opacity for selected element.
 * 
 * Simple method that sets opacity for selected element.
 * 
 * @access public   
 * 
 * @param object usrElement selected element
 * @param int usrOpacity opacity (range from 0 to 100)
 *          
 * @return bool true if opacity was set successfully and false if not
 *	    
 */ 

jQuery.fn.ElectroSlider.Slider.prototype.SetOpacity = function(usrElement, usrOpacity)
  {
  if (typeof usrElement != 'object') {return false;}
  if (typeof usrOpacity != 'number' || usrOpacity < 0) {return false;}

  if (usrOpacity >= 100) 
    {
    usrElement.css('opacity', '1');
    usrElement.css('filter', 'alpha(opacity=100)');
    }
  else if (usrOpacity == 0)
    {
    usrElement.css('opacity', '0');
    usrElement.css('filter', 'alpha(opacity=0)');
    }
  else
    {
    usrElement.css('opacity', '0.' + usrOpacity);
    usrElement.css('filter', 'alpha(opacity=' + usrOpacity + ')');
    }

  return true;
  }

/**
 * Method that sets slider opacity.
 * 
 * Simple method that sets slider opacity.
 * 
 * @access public   
 * 
 * @param int usrOpacity slider opacity (range from 0 to 100)
 *          
 * @return bool true if slider opacity was set successfully and false if not
 *	    
 */ 

jQuery.fn.ElectroSlider.Slider.prototype.SetSliderOpacity = function(usrOpacity)
  {
  if (this.SetOpacity(this.SliderContOut, usrOpacity) == false) {return false;}
  this.Opacity = usrOpacity;
  return true;
  }

/**
 * Method that sets background color of the slider.
 * 
 * Simple method that sets background color of the slider.
 * 
 * @access public   
 *
 * @param int usrRed value for red color
 * @param int usrGreen value for green color
 * @param int usrBlue value for blue color
 *                         
 */ 

jQuery.fn.ElectroSlider.Slider.prototype.SetBGColor = function(usrRed, usrGreen, usrBlue)
  {
  this.SliderContOut.css('background-color', '#' + this.HexFromRGB(usrRed, usrGreen, usrBlue));
  }

/**
 * Method that sets slide width.
 * 
 * Simple method that sets slide width.
 * 
 * @access public   
 * 
 * @param int usrWidth slide width
 *          
 * @return bool true if slide width was set successfully and false if not
 *	    
 */ 

jQuery.fn.ElectroSlider.Slider.prototype.SetSlideWidth = function(usrWidth)
  {
  var tmpSelf = this;
  if (typeof usrWidth != 'number' || usrWidth <= 0) {return false;}

  this.Slides.each(function(tmpIndex, tmpSlide) 
    { 
    tmpSelf.jQuery(tmpSlide).css('width', usrWidth);
    });

  tmpSelf.SetWidth(usrWidth);
  return true;
  }

/**
 * Method that sets slide height.
 * 
 * Simple method that sets slide height.
 * 
 * @access public   
 * 
 * @param int usrHeight slide height
 *          
 * @return bool true if slide height was set successfully and false if not
 *	    
 */ 

jQuery.fn.ElectroSlider.Slider.prototype.SetSlideHeight = function(usrHeight)
  {
  var tmpSelf = this;
  if (typeof usrHeight != 'number' || usrHeight <= 0) {return false;}

  this.Slides.each(function(tmpIndex, tmpSlide) 
    { 
    tmpSelf.jQuery(tmpSlide).css('height', usrHeight);
    });

  tmpSelf.SetHeight(usrHeight);
  return true;
  }
  
/**
 * Method that sets value for the property that indicates whether slider should be horizontally centered.
 * 
 * Simple method that sets value for the property that indicates whether slider should be horizontally centered.
 * 
 * @access public   
 * 
 * @param bool usrIsCentered value for the property
 *          
 * @return bool true if the property was set successfully and false if not
 *	    
 */   

jQuery.fn.ElectroSlider.Slider.prototype.SetHorCentered = function(usrIsCentered)
  {
  if (typeof usrIsCentered != 'boolean') {return false;}
  this.IsHorCentered = usrIsCentered;      
  }
  
/**
 * Method that sets value for the property that indicates whether slider should be vertically centered.
 * 
 * Simple method that sets value for the property that indicates whether slider should be vertically centered.
 * 
 * @access public   
 * 
 * @param bool usrIsCentered value for the property
 *          
 * @return bool true if the property was set successfully and false if not
 *	    
 */   

jQuery.fn.ElectroSlider.Slider.prototype.SetVertCentered = function(usrIsCentered)
  {
  if (typeof usrIsCentered != 'boolean') {return false;}
  this.IsVertCentered = usrIsCentered;      
  }  

/**
 * Method that sets source of the slides.
 * 
 * Simple method that sets source of the slides.
 * 
 * @access public   
 * 
 * @param string usrSource slides source
 *          
 * @return bool true if source was set successfully and false if not
 *	    
 */ 
  
jQuery.fn.ElectroSlider.Slider.prototype.SetSlidesSource = function(usrSource)
  {
  if (typeof usrSource != 'string') {return false;}
  usrSource = usrSource.toLowerCase();

  if (this.jQuery.inArray(usrSource, this.AllowedSlidesSources) != -1) 
    {
    this.SlidesSource = usrSource;
    return true;
    }
  else {return false;}
  }

/**
 * Method that sets event handler for the 'onAfterViewportPrepared' event.
 * 
 * Simple method that sets event handler for the 'onAfterViewportPrepared' event.
 * 
 * @access public   
 * 
 * @param function usrHandler event handler
 *          
 * @return bool true if handler was set successfully and false if not
 *	    
 */ 
    
jQuery.fn.ElectroSlider.Slider.prototype.SetOnAfterViewportPreparedHandler = function(usrHandler)
  {  
  if (typeof usrHandler != 'function') {return false;}
  this.onAfterViewportPreparedHandler = usrHandler;  
  return true;     
  }  
    
/**
 * Method that sets event handler for the 'onLoad' event.
 * 
 * Simple method that sets event handler for the 'onLoad' event.
 * 
 * @access public   
 * 
 * @param function usrHandler event handler
 *          
 * @return bool true if handler was set successfully and false if not
 *	    
 */ 

jQuery.fn.ElectroSlider.Slider.prototype.SetOnLoadHandler = function(usrHandler)
  {                                 
  if (typeof usrHandler != 'function') {return false;}
  this.onLoadHandler = usrHandler;  
  return true;    
  }    
  
/**
 * Method that sets event handler for the 'onBackButtonClick' event.
 * 
 * Simple method that sets event handler for the 'onBackButtonClick' event.
 * 
 * @access public   
 * 
 * @param function usrHandler event handler
 *          
 * @return bool true if handler was set successfully and false if not
 *	    
 */ 
                                                
jQuery.fn.ElectroSlider.Slider.prototype.SetBackButtonClickHandler = function(usrHandler)
  {
  if (typeof usrHandler != 'function') {return false;}
  this.onBackButtonClickHandler = usrHandler;  
  return true;    
  } 

/**
 * Method that sets event handler for the 'onForwardButtonClick' event.
 * 
 * Simple method that sets event handler for the 'onForwardButtonClick' event.
 * 
 * @access public   
 * 
 * @param function usrHandler event handler
 *          
 * @return bool true if handler was set successfully and false if not
 *	    
 */ 
                                        
jQuery.fn.ElectroSlider.Slider.prototype.SetForwardButtonClickHandler = function(usrHandler)
  {
  if (typeof usrHandler != 'function') {return false;}
  this.onForwardButtonClickHandler = usrHandler;  
  return true;
  }     

/* Set methods ends here */

// Invoke core plugin methods
jQuery.fn.ElectroSlider.onClassLoad('slider');