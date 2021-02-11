const app = {
    data() {
        return {
            cars: [ {id:1,img:'./images/car1.jpg',liked:false,hover:false},
                    {id:2,img:'./images/car2.jpg',liked:false,hover:false},
                    {id:3,img:'./images/car3.jpg',liked:false,hover:false}   
                 
                ] , 
                   
                   
        }
       
    },
     methods : {
            hovers : function (i) {
             
                this.cars[i].hover = true
             
              
            },
            
            click :  function(i){
               {
                  this.cars[i].liked = !this.cars[i].liked
                 console.log(this.cars[i].liked);
               
            }

        },
              hoversOff : function(i){
                if(this.cars[i].liked == false)
                    this.cars[i].hover = false
                  
                
              }
    
},
    computed : {
            checkLiked : function(){
             return  this.liked = this.cars.filter(x => x.liked).length
                 
                    
            }
        }
   
}  
Vue.createApp(app).mount('#app')