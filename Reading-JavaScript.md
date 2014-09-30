##JavaScript Code Breakdown Xx-Nova-Xx

1. If/Else Statement (Conditional Statement)

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
