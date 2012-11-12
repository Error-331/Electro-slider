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
            
jQuery.fn.ElectroSlider.HorTransAsyncSlider = function(usrConfig)
  {                               
  jQuery.fn.ElectroSlider.HorTransAsyncSlider.SuperClass.constructor.call(this, usrConfig);    
  }
  
/* Utility properties starts here */ 
 
/**
 * @access public
 * @var array slides paths 
 */

jQuery.fn.ElectroSlider.HorTransAsyncSlider.prototype.SlidesPaths = null;

/**
 * @access public
 * @var array with slides copys 
 */

jQuery.fn.ElectroSlider.HorTransAsyncSlider.prototype.SlidesCopys = null;

/* Utility properties ends here */

/* User defined event handlers starts here */ 

/**
 * @access public
 * @var int slide to preload first
 */

jQuery.fn.ElectroSlider.HorTransAsyncSlider.prototype.PreloadFirst = 1;

/* User defined event handlers ends here */      
  
/* Core methods starts here */

/**
 * Method that configures the slider.
 * 
 * Simple method that configures the slider.
 * 
 * @access public   
 *
 * @throws Exception  
 *
 * @param object usrConfig that contains configuration properties for the slider.
 * 
 * @return bool true if the slider configured successfully
 *
 * @see SetSliderType() 
 *                         
 */ 

jQuery.fn.ElectroSlider.HorTransAsyncSlider.prototype.ConfigureSlider = function(usrConfig)
  {                  
  jQuery.fn.ElectroSlider.HorTransAsyncSlider.SuperClass.ConfigureSlider.call(this, usrConfig);
  this.SetPreloadFirst(usrConfig.PreloadFirst); 
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
  
jQuery.fn.ElectroSlider.HorTransAsyncSlider.prototype.CheckRawSlides = function(usrSlides)
  {  
  var Counter1 = 0;
  
  if (this.SlidesSource != 'array')
    {             
    throw "Unknown slides source";
    }

  if (usrSlides.length <= 0)
    { 
    throw "Slider container contains no children elements";
    }   
    
  this.SlidesCopys = new Array();
  
  for (Counter1 = 0; Counter1 < usrSlides.length; Counter1++)
    { 
    this.SlidesCopys.push(usrSlides[Counter1]);
    } 
    
  this.SlidesCopys = this.jQuery(this.SlidesCopys);     
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

jQuery.fn.ElectroSlider.HorTransAsyncSlider.prototype.PrepareHTML = function()
  {  
  var tmpSelf = this; 
  var tmpImgArr = new Array(this.ImagesFolder + '/preloader.png', this.ImagesFolder + '/back.png', this.ImagesFolder + '/forward.png'); 
  var tmpFunc = function() 
    {
    jQuery.fn.ElectroSlider.HorTransAsyncSlider.SuperClass.PrepareHTML.call(tmpSelf); 
    }
         
  this.ImagePrelode(tmpImgArr, tmpFunc);   
  }

jQuery.fn.ElectroSlider.HorTransAsyncSlider.prototype.InsertRealSlideContents = function(usrSlideIndex)
  {
  if (this.SlidesCopys[usrSlideIndex] == undefined) {return false;}
                         
  var tmpSlide = this.SlidesCopys[usrSlideIndex];
  var tmpSlidIn = this.jQuery(this.Slides[usrSlideIndex]).find('.' + this.CSSPrefix + '_ElectroSlider_SlidContIn');
      
  if (typeof tmpSlide == 'object') {tmpSlide = tmpSlide[0];}
  else {tmpSlide = tmpSlide;}  
                  
  tmpSlidIn.children().remove();
  tmpSlidIn.append(tmpSlide);
  //this.Slides[usrSlideIndex] = tmpSlide;
    
  // "slide resources onload after append" user function                           
  if (this.SlidesCopys[usrSlideIndex][3] != undefined && typeof this.SlidesCopys[usrSlideIndex][3] == 'function')
    {
    this.SlidesCopys[usrSlideIndex][3](this, tmpSlidIn, usrSlideIndex);
    }    

  this.onSlidesChange(); 
    
  //this.SelectItemInstant(this.CurSlideIndex);   
  }   
  
jQuery.fn.ElectroSlider.HorTransAsyncSlider.prototype.PreloadSlide = function(usrIndex, usrSlide, usrIsPrelodeFirst)
  {          
  if (usrIsPrelodeFirst == undefined && usrIndex == (this.PreloadFirst - 1)) {return true;}
    
  var tmpSelf = this;  
  var tmpSlide = null;
  var tmpImagesPaths = null; 
  var tmpImages = null;
                                     
  if (typeof usrSlide == 'object') {tmpSlide = this.jQuery(usrSlide[0]);}
  else {tmpSlide = this.jQuery(usrSlide);}
        
  tmpSlide = this.jQuery('<div>').append(tmpSlide.clone()); 
         
  tmpImages = tmpSlide.find('img');
  tmpImagesPaths = new Array();
  tmpImages.each(function(usrImgIndex, usrImg) 
    {  
    tmpImagesPaths.push(usrImg.src);
    tmpSelf.SlidesPaths.push(usrImg.src);
    });
                                     
  this.ImagePrelode(tmpImagesPaths, function(){tmpSelf.InsertRealSlideContents(usrIndex);});                
  }  
  
jQuery.fn.ElectroSlider.HorTransAsyncSlider.prototype.RawSlidesProcessing = function(usrSlides)
  {   
  var tmpSelf = this; 
  
  usrSlides.each(function(usrIndex, usrSlide) 
    {
    var tmpSlide = null;
    var tmpWidth = tmpSelf.MaxWidth;
    var tmpHeight = tmpSelf.MaxHeight;  
                            
    if (typeof usrSlide == 'object')
      {                     
      if (usrSlide[1] != undefined && usrSlide[1] != null) {tmpWidth = usrSlide[1];}
      if (usrSlide[2] != undefined && usrSlide[2] != null) {tmpHeight = usrSlide[2];}      
      }
           
    tmpSlide = tmpSelf.jQuery('<div class="' + tmpSelf.CSSPrefix + '_ElectroSlider_SlidePreloader" style="width: ' + tmpWidth + 'px; height: ' + tmpHeight + 'px;" ><img src="' + tmpSelf.ImagesFolder + '/preloader.png"/></div>'); 
                 
    tmpSlideContOut = tmpSelf.jQuery('<div class="' + tmpSelf.CSSPrefix + '_ElectroSlider_SlidContOut"></div>');
    tmpSlideContIn = tmpSelf.jQuery('<div class="' + tmpSelf.CSSPrefix + '_ElectroSlider_SlidContIn"></div>');
      
    tmpSlideContIn.append(tmpSlide);
    tmpSlideContOut.append(tmpSlideContIn);
    tmpSelf.SliderContIn.append(tmpSlideContOut);  
    
    // Slide general values set
    tmpSlideContOut.css('overflow', 'auto');
    tmpSlideContOut.css('float', 'left');
    
    // Preloader image centring
    tmpSelf.PreloadPreloaderUtilFunc(tmpSlideContIn);
                           
    // Slide save
    if (tmpSelf.Slides == null) {tmpSelf.Slides = tmpSelf.jQuery(tmpSlideContOut);}
    else {tmpSelf.Slides = tmpSelf.Slides.add(tmpSlideContOut);}
    }); 
               
  this.onSlidesChange(); 
  this.SelectItemInstant(this.CurSlideIndex);  
  }   
        
/**
 * Method that prepares slides of the slider.
 * 
 * Simple method that prepares necessary HTML code for the slides of the slider.
 * 
 * @access public   
 *                        
 */ 
 
jQuery.fn.ElectroSlider.HorTransAsyncSlider.prototype.PrepareSlides = function()
  {  
  var tmpSelf = this;         
  this.SlidesPaths = new Array();
                            
  this.RawSlidesProcessing(this.SlidesCopys);
  this.PreloadSlide(this.PreloadFirst - 1, this.SlidesCopys[this.PreloadFirst - 1], true);                        
  this.SlidesCopys.each(function(usrIndex, usrSlide) {tmpSelf.PreloadSlide(usrIndex, usrSlide);});                                                                      
  }
  
/**
 * Method that is executed before any image preloading methods.
 * 
 * Simple method that is executed before any image preloading methods.
 * 
 * @access public   
 *                        
 */  
 
jQuery.fn.ElectroSlider.HorTransAsyncSlider.prototype.BeforeImagePreload = function()
  {
  }  
  
jQuery.fn.ElectroSlider.HorTransAsyncSlider.prototype.PreloadPreloaderUtilFunc = function(usrCont)
  {
  var tmpSelect = null;
  
  if (typeof usrCont == 'object') {tmpSelect = usrCont.find('div.' + this.CSSPrefix + '_ElectroSlider_SlidePreloader img');}
  else {tmpSelect = this.Container.find('div.' + this.CSSPrefix + '_ElectroSlider_SlidePreloader img');}
      
  tmpSelect.css('margin-top', ((this.Height / 2) - (this.jQuery(tmpSelect[0]).height() / 2)) + 'px');
  tmpSelect.css('margin-left', ((this.Width / 2)  - (this.jQuery(tmpSelect[0]).width() / 2)) + 'px'); 
    
  this.IsLoaded = true;  
  }  
  
/**
 * The purpose of this method is to preload slider preloader resources.
 * 
 * Simple method that preloads slider preloader resources.
 * 
 * @access public   
 *                        
 */ 
  
jQuery.fn.ElectroSlider.HorTransAsyncSlider.prototype.PreloadPreloader = function()
  {    
  jQuery.fn.ElectroSlider.HorTransAsyncSlider.SuperClass.PreloadPreloader.call(this);  
  
  var tmpSelf = this;
  var tmpImgArr = new Array(this.ImagesFolder + '/preloader.png');
 
  var tmpFunc = function() 
    {
    tmpSelf.PreloadPreloaderUtilFunc();
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
  
jQuery.fn.ElectroSlider.HorTransAsyncSlider.prototype.PreloadUserImages = function()
  {
  var tmpSelf = this;
  var tmpFunc = function() {tmpSelf.onLoad();}
    
  this.ImagePrelode(tmpSelf.SlidesPaths, tmpFunc)   
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

jQuery.fn.ElectroSlider.HorTransAsyncSlider.prototype.SelectItemInstant = function(usrItem)
  { 
  return jQuery.fn.ElectroSlider.HorTransAsyncSlider.SuperClass.SelectItemInstant.call(this, usrItem);  
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

jQuery.fn.ElectroSlider.HorTransAsyncSlider.prototype.SelectItem = function(usrStartItem, usrEndItem)
  {
  return jQuery.fn.ElectroSlider.HorTransAsyncSlider.SuperClass.SelectItem.call(this, usrStartItem, usrEndItem);  
  }     
  
jQuery.fn.ElectroSlider.HorTransAsyncSlider.prototype.RemoveLastSlide = function()  
  {
  var tmpSlider = this;  
  var tmpSlide = null;
             
  var tmpFunc = function()
    {
    if (tmpSlider.Slides.length <= 1) {return false;}  
    if (tmpSlider.CurSlideIndex == tmpSlider.Slides.length) {tmpSlider.SelectItemInstant(tmpSlider.CurSlideIndex - 1);}
           
    tmpSlider.jQuery(tmpSlider.Slides[tmpSlider.Slides.length - 1]).remove();
    tmpSlider.Slides = tmpSlider.Slides.slice(0, tmpSlider.Slides.length - 1);
    
    tmpSlider.SlidesCopys = tmpSlider.SlidesCopys.slice(0, tmpSlider.SlidesCopys.length - 1);     
    tmpSlider.onSlidesChange();                  
    }
      
  if (this.IsLoaded == false) {this.TaskStack.push(tmpFunc);}
  else {tmpFunc();}
  } 
                                     
jQuery.fn.ElectroSlider.HorTransAsyncSlider.prototype.AddSlide = function(usrSlide)  
  {
  var tmpSelf = this;  
  var tmpSlice = null;
       
  this.SlidesCopys = this.SlidesCopys.add(this.jQuery(usrSlide)); 
  
  tmpSlice = this.SlidesCopys.slice(this.SlidesCopys.length - 1);  
         
  this.RawSlidesProcessing(tmpSlice);   
  this.SelectItemInstant(this.SlidesCopys.length);    
  
  tmpSlice.each(function(usrIndex, usrSlide) {tmpSelf.PreloadSlide(tmpSelf.SlidesCopys.length - 1, usrSlide);});                  
  }              
        
/* Core methods ends here */

/* Set methods starts here */

/**
 * Method that which slide must be preloaded first and then selected.
 * 
 * Simple method that sets which slide must be preloaded first and then selected.
 * 
 * @access public   
 * 
 * @param int usrPreloadFirst slide that must be preloaded first
 *          
 * @return bool true if slide was set successfully and false if not
 *	    
 */ 

jQuery.fn.ElectroSlider.HorTransAsyncSlider.prototype.SetPreloadFirst = function(usrPreloadFirst)
  {
  var tmpSelf = this;
  if (typeof usrPreloadFirst != 'number' || usrPreloadFirst <= 0 || usrPreloadFirst > this.SlidesCopys.length) {return false;}

  this.PreloadFirst = usrPreloadFirst;
  this.CurSlideIndex = this.PreloadFirst;
  
  return true;  
  }      

/* Set methods ends here */

/* Class extension and other actions starts here */

if (jQuery.fn.ElectroSlider.CheckIsClassLoaded('hortransslider', function()
      {
      jQuery.fn.ElectroSlider.ExtendClassAfter(jQuery.fn.ElectroSlider.HorTransAsyncSlider, jQuery.fn.ElectroSlider.HorTransSlider);
      jQuery.fn.ElectroSlider.onClassLoad('hortransasyncslider');  
      }) == true)
    {
    jQuery.fn.ElectroSlider.ExtendClassAfter(jQuery.fn.ElectroSlider.HorTransAsyncSlider, jQuery.fn.ElectroSlider.HorTransSlider);
    jQuery.fn.ElectroSlider.onClassLoad('hortransasyncslider');
  }

/* Class extension and other actions ends here */