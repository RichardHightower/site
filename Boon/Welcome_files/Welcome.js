// Created by iWeb 3.0.4 local-build-20131031

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({reflection_0:new IWReflection({opacity:0.50,offset:1.00})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Welcome_files/WelcomeMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');IMpreload('Welcome_files','shapeimage_2','0');IMpreload('Welcome_files','shapeimage_3','0');IMpreload('Welcome_files','shapeimage_4','0');IMpreload('Welcome_files','shapeimage_6','0');IMpreload('Welcome_files','shapeimage_6','1');applyEffects()}
function onPageUnload()
{Widget.onunload();}
