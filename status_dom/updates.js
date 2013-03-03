/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function getDateString()
{
    var date = new Date();
    return date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes();
}

window.onload = function()
{
    var msg = document.getElementById("msg");
    msg.onchange = function()
    {
        var text = msg.value;
        var div = document.createElement('div');
        var label = document.createElement('label');
        label.innerHTML = getDateString() + " - " + msg.value;
        var updates = document.getElementById('status');
        div.appendChild(label);
        updates.insertBefore(div, updates.firstChild);
        msg.value = "";
    };
};


