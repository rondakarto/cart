var Item = cc.Sprite.extend({
    ctor:function(){
        this._super();
        if(Math.random()<0.5){
            this.initWithFile(res.bomb);
            this.isBomb = true;
        }
        else {
            this.initWithFile(res.strawberry);
            this.isBomb = false;
        }
    },
    onEnter:function(){
        this._super();
        this.setPosition(Math.random()*400+40,350);
        var moveAction = new cc.MoveTo ( 8, new cc.Point(Math.random()*400+40, -50));
        this.runAction( moveAction );
        this.scheduleUpdate();
    },
    update:function(){
        if( this.getPosition().y < 35 &&
            this.getPosition().y < 30 &&
            Math.abs(this.getPosition().x-g_cart.getPosition().x)<10  &&
            !this.isBomb ) {
            g_gameLayer.removeItem( this );
            console.log("FRUIT");
        }
        if( this.getPosition().y < 35 &&
            this.getPosition().y < 30 &&
            Math.abs(this.getPosition().x-g_cart.getPosition().x)<10  &&
            this.isBomb ) {
            g_gameLayer.removeItem( this );
            console.log("BOMB");
        }
        if(this.getPosition().y < -30 ){
            g_gameLayer.removeItem(this);
        }
    }

});