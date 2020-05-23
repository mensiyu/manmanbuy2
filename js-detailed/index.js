
$(function(){
var mmb = new MMB();
 mmb.getinlanddiscount();
});

//创建构造函数
var MMB = function(){

}

//给构造函数的原型添加方法
MMB.prototype = {
  
  getinlanddiscount:function(){
   
   // console.log(this)
   $.ajax({
   url:'http://localhost:9090/api/getinlanddiscount',
 
   success: function(data){
        // console.log(data);
 
        // console.log(data.result[0].productFrom);
         
        var html = template('tpl',data);
        // console.log(html);
        $('.product-list ul').html(html);
   }

   })

  }
}