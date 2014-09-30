##JavaScript Code Breakdown Xx-Nova-Xx

       toggleSounds : function(){
            if(this.playSounds==true){
                this.playSounds = false;
                this.soundButton.frameName = 'soff';
            }
            else{
                this.playSounds = true;
                this.soundButton.frameName = 'so';
            }
        },
