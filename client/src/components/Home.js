import { UserContext } from "../context/User";
import React, { useContext } from "react";
import './Home.css'


function Home() {

  const { user } = useContext(UserContext)

    if (user) {
        return (
        <div>
            <h2>Welcome, {user.username}!</h2>
            <div className = 'links'>
            <h2>Read and be wise</h2>
            </div>
          <div className= 'articles' >
            <li className= 'space'><a href="https://newsinhealth.nih.gov/2021/04/good-sleep-good-health">Good Sleep for Good Health <br></br></a></li>
            <li className= 'space2'><a href="https://www.teamusa.org/USA-Weightlifting/Features/2022/October/10/What-Is-the-Difference-Between-Weightlifting-and-Powerlifting?gad=1&gclid=Cj0KCQjwmN2iBhCrARIsAG_G2i5uGK3pdCdLGUmWnVA_h-mg2DcTSOch5aLj6JxyFiS0RXwcfvbN_ZcaAkt6EALw_wcB">What is the difference between weightlifting and powerlifting<br></br></a></li>
            <li className= 'space3'><a href="https://www.menshealth.com/fitness/a38866422/best-rep-ranges-workouts/">Which Rep Range You Should Choose for Your Fitness Goals</a></li>
            <li className= 'space4'><a href="https://www.menshealth.com/uk/building-muscle/a759641/complete-guide-to-calisthenics-everything-you-need-to-know/">Build Mass Using Just Your Bodyweight with Our Complete Guide to Calisthenics</a></li>
            <li className= 'space5'><a href="https://www.stack.com/a/what-separates-a-woata-from-a-goata/">What Separates A WOATA From A GOATA?</a></li>
            <li className= 'space6'><a href="https://www.helpguide.org/articles/healthy-eating/healthy-eating.htm">Healthy Eating</a></li>
            <li className= 'space7'><a href="https://www.sbm.org/healthy-living/how-to-start-or-restart-exercising?gad=1&gclid=Cj0KCQjwmN2iBhCrARIsAG_G2i4POqER75xtw9A1Pg7DY5oziNENi95f0vcVbrYs6l1y043C_sL2tYEaAuoaEALw_wcB">How to Start (or Restart) Exercising</a></li>
            <li className= 'space8'><a href="https://renxueamericas.org/tai-chi-and-qigong/?gclid=Cj0KCQjwmN2iBhCrARIsAG_G2i7x5uO-XEShximT1MqOYXVaE4eqE38LfXi7b9oW5DZPILvxRE3-rWIaAkfNEALw_wcB">What is the difference between Tai Chi and Qigong</a></li>
            <li className= 'space9'><a href="https://www.cdc.gov/nccdphp/dnpao/features/physical-activity-brain-health/index.html#:~:text=Did%20you%20know%20it's%20good,of%20cognitive%20decline%2C%20including%20dementia.">Physical Activity Boosts Brain Health</a></li>
            <li className= 'space10'><a href="https://www.health.harvard.edu/blog/regular-exercise-changes-brain-improve-memory-thinking-skills-201404097110">Regular exercise changes the brain to improve memory, thinking skills</a></li>
            <li className= 'space11'><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9415189/#:~:text=Nootropics%20are%20used%20in%20acute,and%20qualitative%20changes%20in%20consciousness.">Nootropics as Cognitive Enhancers: Types, Dosage and Side Effects of Smart Drugs</a></li>
          </div>
          <div className='img'>
            <img src=''/>
          </div>
          <div className='gif'>
            <img src='https://i.pinimg.com/originals/c1/b9/ab/c1b9ab7396615778f2a0903d420cd10f.gif'/>
          </div>
          <div className='fitness'>
            <img src= 'https://media.istockphoto.com/id/679304972/photo/man-lifting-dumbbells.jpg?s=612x612&w=0&k=20&c=xph2mPInFl8wUAV32yMUnC6birEp43E-bjX-RW48vTc='/>
          </div>
        </div>)
        } else {
        return (
        <div>
          {/* <div className='img'> */}
            <img src='https://thumbs.dreamstime.com/b/time-fitness-equipment-dark-background-84164532.jpg'/>
          {/* </div> */}
        </div>

        )
          
      
        }
}


export default Home