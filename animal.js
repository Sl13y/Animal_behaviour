// document.getElementById("img").style.display='none';
//  document.getElementById("audio").style.display='none';

function changeAnimal()
{
    var animal = document.getElementById('animals').value
    document.getElementById("img").src= `${animal}.jpg`;
    document.getElementById("img").style.display='block';
     
}

    

function changeSound()
{
    var animal = document.getElementById('animals').value;
    document.getElementById("audio").src= `${animal}.mp3`;
    document.getElementById("audio").style.display='block';

}