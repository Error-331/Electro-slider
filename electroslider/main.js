// Check panel preloder
// Remove add slide - delay
// desc make for add del slide
// preloader center good

/**
 * Main plugin function.
 * 
 * Function that creates slider.
 * 
 * @access public   
 *
 * @param string usrSliderType slider type
 * @param object usrSliderConfig object that contains configuration options for the slider
 * 
 * @return bool true if all goes well and false if not
 *                        
 */ 

jQuery.fn.ElectroSlider = function(usrSliderType, usrSliderConfig) 
  {
  return jQuery.fn.ElectroSlider.CreateSlider(this, usrSliderType, usrSliderConfig);
  };
  
/* Utility properties starts here */

/**
 * @access public
 * @var array enumeration of allowed slider classes
 */

jQuery.fn.ElectroSlider.AllowedSliderClasses = new Array('slider', 'hortransslider', 'vertransslider', 'horfadeslider', 'hortransasyncslider', 'horfadeasyncslider');

/**
 * @access public
 * @var array enumeration of the loaded classes names
 */

jQuery.fn.ElectroSlider.LoadedClasses = new Array();

/**
 * @access public
 * @var string path to JavaScript files directory
 */

jQuery.fn.ElectroSlider.PathToLib = '';

/* Utility properties ends here */  

/* Core methods starts here */

/**
 * Method that loads JavaScript file.
 * 
 * Simple method that loads JavaScript file.
 * 
 * @access public   
 *
 * @param string usrFileName file name
 * 
 * @return bool true if all goes well and false if not
 *                        
 */   
  
jQuery.fn.ElectroSlider.LoadFile = function(usrFileName)
  {
  if (typeof usrFileName != 'string') {return false;}  
      
  var tmpScriptElm = document.createElement('script');
                  
  tmpScriptElm.setAttribute('type', 'text/javascript');
  tmpScriptElm.setAttribute('src', this.PathToLib + 'js/' + 'electroslider/' + usrFileName);
    
  document.getElementsByTagName('head')[0].appendChild(tmpScriptElm);
    
  return true;    
  };
  
/**
 * Method that extends class.
 * 
 * Simple method that extends class.
 * 
 * @access public   
 *
 * @param object usrSubClass class that must be extended
 * @param object usrSuperClass parent class
 *                        
 */     
  
jQuery.fn.ElectroSlider.ExtendClass = function(usrSubClass, usrSuperClass) 
  {
  var tmpDummyClass = function() {};

  tmpDummyClass.prototype = usrSuperClass.prototype;

  usrSubClass.prototype = new tmpDummyClass();
  usrSubClass.prototype.constructor = usrSubClass;
  usrSubClass.SuperClass = usrSuperClass.prototype;
  
  if(usrSuperClass.prototype.constructor == Object.prototype.constructor)
    {
    usrSuperClass.prototype.constructor = usrSuperClass;
    }
  };
  
/**
 * Method that extends class after its definition has been already written.
 * 
 * Simple method that extends class after its definition has been already written.
 * 
 * @access public   
 *
 * @param object usrSubClass class that must be extended
 * @param object usrSuperClass parent class
 *                        
 */    
  
jQuery.fn.ElectroSlider.ExtendClassAfter = function(usrSubClass, usrSuperClass) 
  {
  var tmpDummyClass = function() {};
  tmpDummyClass.prototype = usrSubClass.prototype;
  
  jQuery.fn.ElectroSlider.ExtendClass(usrSubClass, usrSuperClass);
  
  for (variable in tmpDummyClass.prototype)
    {
    usrSubClass.prototype[variable] = tmpDummyClass.prototype[variable]
    }
  };  
  
/**
 * Method that checks objects in jQuery set and adds all the necessary properties to them.
 * 
 * Simple method that checks objects in jQuery set and adds all the necessary properties to them.
 * 
 * @access public   
 *
 * @param object usrJObject jQuery object that represents elements set
 * 
 * @return bool true if all goes well and false if not
 *                        
 */   
  
jQuery.fn.ElectroSlider.CheckObject = function(usrJObject)
  {
  if (typeof usrJObject != 'object') {return false;}
  
  usrJObject.each(function(tmpIndex, tmpElement) 
    { 
    if (tmpElement.ElectroSlider == undefined) {tmpElement.ElectroSlider = null;}
    });
  
  return true;
  };
  
/**
 * Method that checks whether requested class is loaded and if not tries to load it.
 * 
 * Simple method that checks whether requested class is loaded and if not tries to load it.
 * 
 * @access public   
 *
 * @param string usrClassName name of the class
 * @param function usrFunction function that must be called after the class is loaded
 * 
 * @return bool true if class was loaded already and false if not
 *                        
 */     
  
jQuery.fn.ElectroSlider.CheckIsClassLoaded = function(usrClassName, usrFunction)
  {
  if (typeof usrClassName != 'string') {return false;}
  usrClassName = usrClassName.toLowerCase();
    
  if (jQuery.fn.ElectroSlider.LoadedClasses[usrClassName] == undefined)
    {      
    jQuery.fn.ElectroSlider.LoadedClasses[usrClassName] = {IsLoaded: false, TaskStack: new Array()};
    jQuery.fn.ElectroSlider.LoadedClasses[usrClassName].TaskStack.push(usrFunction);
  
    jQuery.fn.ElectroSlider.LoadFile(usrClassName + '.js');
    return false;
    }
  else
    {
    if (jQuery.fn.ElectroSlider.LoadedClasses[usrClassName].IsLoaded == false)
      {			
      jQuery.fn.ElectroSlider.LoadedClasses[usrClassName].TaskStack.push(usrFunction);
      return false;
      }
    }    
    
  return true;  
  };
  
/**
 * Method that creates slider object.
 * 
 * Simple method that creates slider object.
 * 
 * @access public   
 *
 * @param object usrObjSet jQuery elements set
 * @param string usrSliderType slider type
 * @param object usrSliderConfig object that contains configuration options for the slider
 * 
 * @return bool true if all goes well and false if not
 *                        
 */ 

jQuery.fn.ElectroSlider.CreateSlider = function(usrObjSet, usrSliderType, usrSliderConfig)
  {
  var tmpFunc = function()
		{
		jQuery.fn.ElectroSlider.CreateSlider(usrObjSet, usrSliderType, usrSliderConfig);
		};  
       
  // Necessary check
  if (typeof usrObjSet != 'object') {return false;}  
  if (typeof usrSliderType != 'string') {return false;}
  jQuery.fn.ElectroSlider.CheckObject(usrObjSet);
  
  // Check for class availability
  if (jQuery.inArray(usrSliderType.toLowerCase(), jQuery.fn.ElectroSlider.AllowedSliderClasses) == -1) {return false;}
  
  // Check core slider class   
  if (jQuery.fn.ElectroSlider.CheckIsClassLoaded('slider', tmpFunc) == false) {return true;}
 
  // Check slider class 
  if (jQuery.fn.ElectroSlider.CheckIsClassLoaded(usrSliderType, tmpFunc) == false) {return true;}
  
  // Traverse all elements
  usrObjSet.each(function(tmpIndex, tmpElement) 
    {      
    var tmpElement = jQuery(tmpElement);
    var tmpSlider = null;

    tmpSlider = new jQuery.fn.ElectroSlider[usrSliderType](usrSliderConfig);
    });
  };    

/* Core methods ends here */

/* Event methods starts here */

/**
 * Event method that is invoked whenever slider class is loaded.
 * 
 * Simple method that is invoked whenever slider class is loaded.
 * 
 * @access public   
 *
 * @param string usrClassName name of the class
 * 
 * @return bool true if all goes well and false if not
 *                        
 */ 

jQuery.fn.ElectroSlider.onClassLoad = function(usrClassName)
  {    
  var tmpTask = null;
    
  if (typeof usrClassName != 'string') {return false;}  
  usrClassName = usrClassName.toLowerCase();
  
  if (jQuery.fn.ElectroSlider.LoadedClasses[usrClassName] == undefined)
    {
    jQuery.fn.ElectroSlider.LoadedClasses[usrClassName] = {IsLoaded: true, TaskStack: new Array()}
    } 
  else
    {    
    jQuery.fn.ElectroSlider.LoadedClasses[usrClassName].IsLoaded = true;  
      
    while (jQuery.fn.ElectroSlider.LoadedClasses[usrClassName].TaskStack.length > 0)
      {
      tmpTask = jQuery.fn.ElectroSlider.LoadedClasses[usrClassName].TaskStack.shift();
      if (typeof tmpTask != 'function') {continue;}

      tmpTask();
      } 
    }
    
  return true;
  };

/* Event methods ends here */

/* Get methods starts here */
/* Get methods ends here */

/* Set methods starts here */

/**
 * Method that sets path to JavaScript files directory.
 * 
 * Simple method that sets path to JavaScript files directory.
 * 
 * @access public   
 *
 * @param string usrPath path to JavaScript files directory.
 *                        
 */ 

jQuery.fn.ElectroSlider.SetPathToLib = function(usrPath)
  {
  if (typeof usrPath == 'string') {jQuery.fn.ElectroSlider.PathToLib = usrPath;}
  };

/* Set methods ends here */
