function progressView(container, model){
    function render(data){
     container.innerHTML='';
     let innerEle = document.createElement('div');
      container.appendChild(innerEle);
      innerEle.setAttribute('class','inner');
      innerEle.style.width = data+'%';
       };  
      model.subscribe(render);
      render();
}  
function model(){

    var _subscriber,
        _data = 0,
        _SPEED = 50,
  
        _interval;
        
    function _updateData(){
     
        _data += 1;
        
        _data = _data > 100 ? 100 : _data;
        _subscriber(_data);
      
        if(_data >= 100){
            clearInterval(_interval);
        }
    }
    
    _interval = setInterval(_updateData, _SPEED);
    
    return {
        subscribe: function(cb){
            if(!_subscriber) _subscriber = cb;
        }
    }
}

var progressBarContainer = document.querySelector('.progress-bar');
var progressView = progressView(progressBarContainer, model());
     
