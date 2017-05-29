//This is the Celebration Wheel

            // Create new wheel object specifying the parameters at creation time.
            var theWheel = new Winwheel({
                'numSegments'   : 6,   // Specify number of segments.
                'outerRadius'   : 212,  // Set radius to so wheel fits the background.
                'innerRadius'   : 0,  // Set inner radius to make wheel hollow.
                'textFontSize'  : 16,   // Set font size accordingly.
                'textMargin'    : 0,    // Take out default margin.
                'segments'      :       // Define segments including colour and text.
                [
                   {'fillStyle' : '#eae56f', 'text' : '1'},
                   {'fillStyle' : '#89f26e', 'text' : '2'},
                   {'fillStyle' : '#7de6ef', 'text' : '3'},
                   {'fillStyle' : '#e7706f', 'text' : '4'},
                   {'fillStyle' : '#eae56f', 'text' : '5'},
                   {'fillStyle' : '#89f26e', 'text' : '6'}
                ],
                'animation' :           // Define spin to stop animation.
                {
                    'type'     : 'spinToStop',
                    'duration' : 5,
                    'spins'    : 8,
                    'callbackFinished' : 'alertPrize()'
                }
            });
            
            var wheelSpinning = false;
            
            // -------------------------------------------------------
            // Click handler for spin button.
            // -------------------------------------------------------
            function startSpin()
            {
                // Ensure that spinning can't be clicked again while already running.
                if (wheelSpinning == false)
                {

                    // Disable the spin button so can't click again while wheel is spinning.
                    document.getElementById('spin_button').src       = "https://github.com/ExTee/taj/edit/master/spin_off.png";
                    document.getElementById('spin_button').className = "";
                    
                    // Begin the spin animation by calling startAnimation on the wheel object.
                    theWheel.startAnimation();
                    
                    // Set to spinning to true so can't spin again
                    wheelSpinning = true;
                }
            }
            
            // -------------------------------------------------------
            // Function for reset button.
            // -------------------------------------------------------
            function resetWheel()
            {
                theWheel.stopAnimation(false);  // Stop the animation, false as param so does not call callback function.
                theWheel.rotationAngle = 0;     // Re-set the wheel angle to 0 degrees.
                theWheel.draw();                // Call draw to render changes to the wheel.
                
                wheelSpinning = false;          // Reset to false to power buttons and spin can be clicked again.
            }
            
            // -------------------------------------------------------
            // Called when the spin animation is done 
            // -------------------------------------------------------
            function alertPrize()
            {
                // Get the segment indicated by the pointer on the wheel background which is at 0 degrees.
                var winningSegment = theWheel.getIndicatedSegment();
                
                // Alert what was won, work needed
                alert("Congratulations! You won " + winningSegment.text + "!");
            }
