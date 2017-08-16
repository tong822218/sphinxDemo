window.onload = function() {
    var imgs =  document.getElementsByTagName('img')
    var href = location.href;
    var lacale = 'imgs_cn'
    if(href.indexOf('html-zh')!=-1){
        lacale = 'imgs_cn'
    }else if(href.indexOf('html-en')!=-1){
        lacale = 'imgs_en'
    }else {
        lacale = 'imgs_tw'
    }
    for(var i = 0; i<imgs.length; i++){
        var src = imgs[i].getAttribute('src');
        if(src.indexOf('../../_images')== 0){
            var newSrc = src.replace('_images','_static/'+lacale)
            imgs[i].setAttribute('src',newSrc)
        }
    }
}