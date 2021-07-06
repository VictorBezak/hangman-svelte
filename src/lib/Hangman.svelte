
<script>
	import { onMount } from 'svelte';
	export let guessesRemaining;

	let body = null;  // Container
	let head = null;
	let leftEye = null;
	let rightEye = null;
	let torso = null;
	let leftArm = null;
	let rightArm = null;
	let leftLeg = null;
	let rightLeg = null;

  let dead = false;
  let firstGame = true;
	
	onMount(() => {
    console.log(`GUESSES REMAINING: ${guessesRemaining}`)
		body = document.getElementById('body-container');
		
		if (body) {
			head = body.querySelector('.head');
			leftEye = body.querySelector('.eye.left');
			rightEye = body.querySelector('.eye.right');
			torso = body.querySelector('.torso');
			leftArm = body.querySelector('.arm.left');
			rightArm = body.querySelector('.arm.right');
			leftLeg = body.querySelector('.leg.left');
			rightLeg = body.querySelector('.leg.right');
		}
	})

	function showPart(part) {
		if (part) {
			part.classList.add('block'); // display: block
		} else {
			console.log(`part "${part}" does not exist`);
		}
	}
	
	function reset() {
		dead = false;
    guessesRemaining = 9;
		let visibleBodyParts = body.querySelectorAll(".block");

		for(let i = 0; i < visibleBodyParts.length; i++) {
			visibleBodyParts[i].classList.remove("block");
		}
	}

  function badGuess(remaining) {
    console.log(remaining)
    switch (remaining) {
      case 9:
        if (!firstGame) {
          reset();
        }
        break;
      case 8:
       showPart(head);
        break;
      case 7:
       showPart(leftEye);
        break;
      case 6:
       showPart(rightEye);
        break;
      case 5:
       showPart(torso);
        break;
      case 4:
       showPart(leftArm);
        break;
      case 3:
       showPart(rightArm);
        break;
      case 2:
       showPart(leftLeg);
        break;
      case 1:
       showPart(rightLeg);
        break;
      case 0:
        dead = true;
        firstGame = false;
    }
  }
	
	$: badGuess(guessesRemaining);
</script>


<section id="body-container" class="{dead ? 'dead ' : ''}h-40 w-40 border-dashed border-black border-4">
	<div class="body-part head">
		<div class="eyes">
			<div class="body-part eye left"></div>
			<div class="body-part eye right"></div>
		</div>
	</div>
	<div class="body-part torso"></div>
	<div class="body-part arm left"></div>
	<div class="body-part arm right"></div>
	<div class="body-part leg left"></div>
	<div class="body-part leg right"></div>
</section>
<span class="text-center">{guessesRemaining ? `Guesses remaining ${guessesRemaining}` : "You lose"}</span>


<style lang="scss">
  @use "sass:math";

  $BODY_WIDTH: 200px;
  $BODY_HEIGHT: $BODY_WIDTH * 2;
  $HEAD_DIAMETER: math.div($BODY_WIDTH, 3);
  $LIMB_LENGTH: math.div($BODY_HEIGHT, 2.8);
  $TORSO_LENGTH: $BODY_HEIGHT - $HEAD_DIAMETER - $LIMB_LENGTH * 1.2;

  #body-container {
    width: $BODY_WIDTH;
    height: $BODY_HEIGHT;
    position: relative;
    align-self: end;
  }

  .body-part {
    border: solid 1px black;
    position: absolute;
    left: 50%;
    transform: translatex(-50%);
    &:not(.block) {
      display: none;
    }
  }

  .head {
    border-radius: 50%;
    width: $HEAD_DIAMETER;
    height: $HEAD_DIAMETER;
    background-color: white;
    z-index: 1;
    
    .eyes {
      position: relative;
    }
    .eye {
      position: absolute;
      top: math.div($HEAD_DIAMETER, 5);
      border: none;
      transform: unset;
      &.left {
          left: math.div($HEAD_DIAMETER, 4);
      }
      &.right {
          left: unset;
          right: math.div($HEAD_DIAMETER, 5);
      }
      &::before {
        content: '0';
        width: 100%;
        height: 100%;
        font-size: math.div($HEAD_DIAMETER, 3);
      }
    }
  }

  .torso {
    height: $TORSO_LENGTH;
    top: $HEAD_DIAMETER;
  }

  .arm, .leg {
    height: $LIMB_LENGTH;
    &.left {
      transform-origin: top left;
      transform: rotate(45deg);
    }
    &.right {
      transform-origin: top right;
      transform: rotate(-45deg);
    }
  }

  .arm {
    top: $HEAD_DIAMETER * 1.4;
    height: $LIMB_LENGTH * 0.9;
  }

  .leg {
    top: $HEAD_DIAMETER + $TORSO_LENGTH;
  }

  #body-container.dead {
    .eye.left, .eye.right {
      &::before {
        content: 'X';
        font-size: math.div($HEAD_DIAMETER, 4);
      }
    }
    
    .head {
      top: 10px;
      left: 45%;
      transform: rotate(50deg);
    }
    
    .arm, .leg {
      &.left {
        transform: rotate(10deg);
      }
      &.right {
        transform: rotate(-10deg);
      }
    }
  }
</style>
