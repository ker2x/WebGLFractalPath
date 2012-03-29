// Some global var
var gl;
var error;
var canvas;

/////////////
// Utility //
/////////////

////////////////////
// Class Renderer //
////////////////////
function Renderer() {
};

//////////////
// Class UI //
//////////////
function UI() {
};

////////////////
// The "main" //
////////////////
window.onload = function() {
    // Initialize some variable
    gl = null;
    error = document.getElementById('error');
    canvas = document.getElementById('canvas');
    try { gl = canvas.getContext('experimental-webgl'); } catch(e) {}

    if(gl) {
        error.innerHTML = '';
        var start = new Date();
        error.style.zIndex = -1;
        setInterval(function(){ tick((new Date() - start) * 0.001); }, 1000 / 60);
        gl.clearColor(0.0, 0.0, 0.0, 1.0);                      // Set clear color to black, fully opaque  
        gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);      // Clear the color as well as the depth buffer.  
    } else {
        error.innerHTML = 'Your browser does not support WebGL.<br>Please see <a href="http://www.khronos.org/webgl/wiki/Getting_a_WebGL_Implementation">Getting a WebGL Implementation</a>.';
    }
};
