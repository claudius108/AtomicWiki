/* only call galleria, if our target container exists */
if ($('.galleria').length !== 0) {
    
    Galleria.loadTheme('resources/scripts/galleria/themes/classic/galleria.classic.js');
    
    Galleria.configure({
        transition: 'fade',
        imageCrop: false,
        easing: 'galleriaOut',
        carousel: true,
        carouselSteps: 'auto',
        carouselSpeed: 1234,
        imagePosition: 'center center',
        trueFullscreen: true,
        keepSource: false,
        idleTime: 1234            
    });
            
            
    Galleria.ready(function() {
        var self = this; // galleria is ready and the gallery is assigned
        // creates a new element with the id 'mystuff':
        self.addElement('fscr');
        // appends the element to the container
        self.appendChild('stage','fscr');
        //self.$('galleria-fscr').css({position:'absolute',right:0,top:0,'z-index':4});
        self.$('fscr').click(function() {
            self.toggleFullscreen(); // toggles the fullscreen
        });
                
        self.addElement('splay');
        // appends the element to the container
        self.appendChild('stage','splay');
        /*
        self.addElement('meta-block');
        self.appendChild('container','meta-block');
        */
                
        self.$('splay').click(function() {
            self.setPlaytime(4000);
            self.playToggle();
        });
                
        self.addIdleState(self.get('thumbnails'), {
            opacity: 0
        });
                
        self.addIdleState(self.get('splay'), {
            opacity: 0
        });
                
        self.addIdleState(self.get('fscr'), {
            opacity: 0
        });
              
        self.addIdleState(self.get('info-link'), {
            opacity: 0
        });
             
        self.addIdleState(self.get('thumb-nav-left'), {
            opacity: 0
        });
                
        self.addIdleState(self.get('thumb-nav-right'), {
            opacity: 0
        });

                
        /* togle playbutton to indicate the current slideshow status */
        self.bind("play", function(e) {
            self.$("splay").css('background-image','url("resources/scripts/galleria/themes/classic/pause_b.png")');
        });
        self.bind("pause", function(e) {
            self.$("splay").css('background-image','url("resources/scripts/galleria/themes/classic/play_w.png")');
        });
        
        /*
        self.bind("idle_exit", function(e) {
            self.removeIdleState(self.get('info'));
        });
        */
        
        /*
        self.bind("idle_enter", function(e) {
            self.$("thumbnails-container").fadeOut(100);
            self.$("splay").fadeOut(100);
            self.$("fscr").fadeOut(100);
        });
        self.bind("idle_exit", function(e) {
            self.$("thumbnails-container").fadeIn(500);
            self.$("splay").fadeIn(500);
            self.$("fscr").fadeIn(500);
        });
        */
                
        var info = self.$('info-link,info-close,info-text');
        self.bind("fullscreen_enter", function(e) {
            //info.toggle(true);
            self.$('info-link').click(true);
            //self.removeIdleState(self.get('info'));
            var my_h = $(".galleria-stage").height();
            $(".galleria-info").height(my_h - 100);
            $(".galleria-info-link").height(my_h - 100);
            $(".galleria-info-text").height(my_h - 110);
            
        });
        
        self.bind("fullscreen_exit", function(e) {
            //info.toggle(false);
            //self.$('info-close').click();
            $('.galleria-stage').css({"padding-left":"0px"});
            //self.delay(100).resize();
            self.addIdleState(self.get('info-link'), {
                opacity: 0
            });
            var my_h = $(".galleria-stage").height();
            $(".galleria-info").height(my_h - 100);
            $(".galleria-info-link").height(my_h - 100);
            $(".galleria-info-text").height(my_h - 110);
        });
        

    }); /* end of: Galleria.ready() */
    
    /* here we go. fire up galliera */
    Galleria.run('.galleria', {
        dataConfig: function(img) {
        return {
                thumb: $(img).attr('src'),
                image: $(img).attr('src'),
                big: $(img).attr('src'),
                title: $(img).siblings('h1').html(),
                description: $(img).siblings(".description").html() // tell Galleria to grab the content from the .description div as caption
            };
        }
    });
            
} /* end of: ($('.galleria').length != 0) */

        
            