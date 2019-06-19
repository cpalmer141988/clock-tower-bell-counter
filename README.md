# Clock Tower Bell Counter App

## How To Use
```
git clone https://github.com/cpalmer141988/clock-tower-bell-counter.git
cd clock-tower-bell-counter
npm install
npm test
npm start
'''

## About The App

I wanted to demonstrate an ability to quickly pick up on something new. So for this code assignment I decided to start learning React and Jest/Enzyme to implement the solution.

I also had a few ideas I though were pretty neat, little things that added some flavor to what otherwise could've just been a simple 2 input fields and 1 output field solution. So I added an animated clock tower (Big Ben) that would update itself in real time when the simulation was run. I needed to add timing to pull off the animation, but I didn't want it to take to long and be a drag, so I set the framerate to a nice 60fps, a.k.a. 1 hr per second which felt like a good pacing. As I was working on getting the clock to animate I thought it'd be cool if the background color changed to fit the time of day in the simulation, so I added that as an extra little touch.

I also wanted to add a few unit tests that covered the core requirements of the assignment, so you'll find 5 addition test cases in addition to the standard App smoke test.

I hope you enjoy and thanks for checking out my little app!
