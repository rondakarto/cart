var GameLayer = cc.Layer.extend({
    init : function(){
        this._super();
        var backgroundLayer = new cc.LayerGradient ( cc.color(0,0,0,255), cc.color(0x46,0x82,0xB4,255));
        this.addChild( backgroundLayer );
        g_itemLayer = new cc.Layer ();
        this.addChild( g_itemLayer );
        g_topLayer = new cc.Layer();
        this.addChild( g_topLayer );
        g_cart = new cc.Sprite(res.cart);
        g_topLayer.addChild( g_cart, 0 );
        g_cart.setPosition( 240, 24);

        //g_left = new cc.Sprite( res.leftbutton);
        //g_topLayer.addChild ( g_left, 0 );
        //g_left.setPosition( 40, 160 );
        //g_left.setOpacity((128));
        //g_right = new cc.Sprite(res.rightbutton);
        //g_topLayer.addChild(g_right);
        //g_right.setPosition( 440, 160 );
        //g_right.setOpacity( 128);
        this.schedule( this.addItem, 1 );
        cc.eventManager.addListener ( touchListener,this );
        this.scheduleUpdate();
    },
    addItem:function(){
        var item = new Item();
        g_itemLayer.addChild( item );
    },
    removeItem:function(item){
        g_itemLayer.removeChild(item);
    },
    update : function(){
        //if(g_xSpeed>0){
        //    g_cart.setFlippedX(true);
        //}
        //if(g_xSpeed<0){
        //    g_cart.setFlippedX(false);
        //}
        //g_cart.setPosition(g_cart.getPosition().x+g_xSpeed,g_cart.getPosition().y);
        //if( g_touching ){
        //    g_xSpeed = (g_touchEnd.getPosition().x-g_touchOrigin.getPosition().x)/50;
        //    if( g_xSpeed > 0 ){
        //        g_cart.setFlippedX(true);
        //    }
        //    if(g_xSpeed>0){
        //        g_cart.setFlippedX(false);
        //    }
        //    g_cart.setPosition( g_cart.getPosition().x+g_xSpeed,g_cart.getPosition().y);
        //}
        if( g_touching ){
            var deltaX = g_savedX - g_detectedX;

            if( deltaX > 0 ){
                g_xSpeed = -2;
            }
            if( deltaX < 0 ) {
                g_xSpeed = 2;
            }
            if( g_xSpeed > 0 ){
                g_cart.setFlippedX(true);
            }
            if(g_xSpeed < 0){
                g_cart.setFlippedX(false);
            }
            g_cart.setPosition( g_cart.getPosition().x+g_xSpeed,g_cart.getPosition().y);
        }
    }


});

var touchListener = cc.EventListener.create({
    event: cc.EventListener.TOUCH_ONE_BY_ONE,
    swallowTouches:true,
    onTouchBegan:function(touch,event){
        //if(touch.getLocation().x < 240){
        //    g_xSpeed = -2;
        //    g_left.setOpacity( 255 );
        //    g_right.setOpacity(128);
        //}
        //else {
        //    g_xSpeed = 2;
        //    g_right.setOpacity(255);
        //    g_left.setOpacity( 128);
        //}
        //return true;
        //g_touchOrigin = new cc.Sprite( res.touchorigin);
        //g_topLayer.addChild( g_touchOrigin );
        //g_touchOrigin.setPosition( touch.getLocation().x,touch.getLocation().y);
        //
        //g_touchEnd = new cc.Sprite( res.touchend );
        //g_topLayer.addChild( g_touchEnd );
        //g_touchEnd.setPosition( touch.getLocation().x,touch.getLocation().y);
        //
        g_touching = true;
        g_detectedX = touch.getLocation().x;
        g_savedX = g_detectedX;
        return true;
    },
    onTouchMoved:function(touch,event){
      //g_touchEnd.setPosition(touch.getLocation().x,g_touchEnd.getPosition().y);
        g_detectedX = touch.getLocation().x;
    },
    onTouchEnded:function(touch,event){
        //g_xSpeed = 0;
        //g_left.setOpacity(128);
        //g_right.setOpacity(128);
        g_touching = false;
        //g_topLayer.removeChild(g_touchOrigin);
        //g_topLayer.removeChild(g_touchEnd);
    }
});