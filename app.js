
function FindSquares() {
    var Width = document.getElementById('WidthValue').value;
    var Length = document.getElementById('LengthValue').value;
    return Width * Length;
}
function FindCircles(){
    var  radius = document.getElementById('RadiusValue').value;
    return 3.14 * radius ** 2;
}
function FindCuboids(){
    var Width = document.getElementById('WidthValue').value;
    var Length = document.getElementById('LengthValue').value;
    var Height = document.getElementById('HeightValue').value;
    return Width * Length * Height;
}
function FindSpheres() {
    var radius = document.getElementById('RadiusValue').value;
    var num = 4/3 * 3.14 * radius ** 3;
    var n = num.toFixed(3);
    return n;
}
