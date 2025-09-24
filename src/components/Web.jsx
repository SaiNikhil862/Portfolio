import {useRef,useEffect} from 'react'
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import reactt from '../assets/reactt.png'
import java from '../assets/java.png'
import database from '../assets/database.png'
import bootstrap from '../assets/bootstrap.png'
import tailwind from '../assets/tailwind.png'
import git from '../assets/git.png'
import gitHub from '../assets/github.png'
import vercel from '../assets/vercel.png'
import azure from '../assets/azure.png'
import npm from '../assets/npm.png'
import agile_methodology from '../assets/agile_methodology.png'
import powerbi from '../assets/powerbi.png'
import linkedIn from '../assets/linkedIn.png'
import gmail from '../assets/gmail.png'
import feane from '../assets/feane.png'
import mercedes from '../assets/mercedes.png'
import bootcamp from '../assets/bootcamp.png'
import ray from '../assets/ray.png'
import netflix from '../assets/netflix.png'
import koffee from '../assets/koffee.png'

//register the gsap plugin
gsap.registerPlugin(ScrollTrigger);

const Web = () => {

//i can use context api (global context) for the webpage and design other part but it will cause many unnecessary rerenders and complixity for a single components's needs.its better for themes, isloggedIn authentication language etc.
//so now iam using useEffect and useRef which is best for component specific logic,animations,direct DOM manipulation. 
//adding refs to target the elements

const canvasRef =useRef(null);
const mainRef = useRef(null);
const page1Ref = useRef(null);
const page2Ref = useRef(null);
const page3Ref = useRef(null);
const page4Ref = useRef(null);
const page5Ref = useRef(null);
const page7Ref = useRef(null);
const loopRef = useRef(null);

const frameCount = 300; //Total number of images

const currentFrame = (index)=>( `/male${(index + 1).toString().padStart(4,'0')}.png` ); //function to get the image path. padStart(4,0) adds leading zeros to make it 4 digits


//adding the useEffect hook to run the animations code
useEffect(()=> {
  // Add styles dynamically instead of using <style> tag
  const styleSheet = document.createElement('style');
  styleSheet.innerHTML = `
    @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@300;400;500;600;700&display=swap');
    
    @keyframes anim {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-100%); }
    }
    
    .pin-spacer { display: none !important; }
    
    .tooltip { position: relative; }
    
    .tooltip::after {
      content: attr(data-tooltip);
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(0, 0, 0, 0.8);
      color: white;
      padding: 5px 8px;
      border-radius: 4px;
      font-size: 12px;
      white-space: nowrap;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s;
      z-index: 10;
    }
    
    .tooltip:hover::after { opacity: 1; }
  `;
  document.head.appendChild(styleSheet);

  const canvas = canvasRef.current;
  const context = canvas.getContext('2d');

  canvas.width=1980;  
  canvas.height=1080;

  const images =[];
  const imageSequence= { frame: 0 };

  for(let i=0;i<frameCount;i++){
    const img= new Image();
    img.src= currentFrame(i);
    images.push(img);
  }

  images[0].onload=()=>context.drawImage(images[0],0,0);

  // Main canvas animation
  const tween = gsap.to(imageSequence, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger:{
      trigger: mainRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.5,
      // markers: true,  // Remove this line to hide the debug markers
    },
    onUpdate:()=>{
      context.clearRect(0,0,canvas.width, canvas.height);
      context.drawImage(images[imageSequence.frame], 0, 0);
    },
  });

  return()=>{
    tween.scrollTrigger.kill();
    ScrollTrigger.getAll().forEach(st => st.kill());
    // Clean up the added styles
    document.head.removeChild(styleSheet);
  };
}, []); 

return (
  <>
  {/* Fixed canvas that stays on screen */}
  <div className='fixed top-0 left-0 w-screen h-screen z-20 pointer-events-none flex items-center justify-center'>
    <canvas ref={canvasRef} className='max-w-screen max-h-screen object-contain'></canvas>
  </div>
  
  <div ref={mainRef} className='relative'>
      <div ref={page1Ref} className='w-screen h-screen bg-[#f1f1f1] relative flex flex-col justify-between'>   
          <div ref={loopRef} className='h-1/2 w-full absolute top-30 whitespace-nowrap overflow-hidden flex items-center z-10' style={{fontFamily: 'Urbanist, sans-serif'}}>
             <h1 className='text-[11rem] font-[200] animate-[anim_25s_linear_infinite]'>
                 <b>WELCOME</b> TO <span className=" text-transparent" style={{WebkitTextStroke:'1.2px #000'}}>MY</span> <b>PORTFOLIO*</b> <span className=" text-transparent" style={{WebkitTextStroke:'1.2px #000'}}><i>WEBSITE.</i></span>
                 &nbsp;  {/* adding space between the 2 text sentences */}
                 <b>WELCOME</b> TO <span className=" text-transparent" style={{WebkitTextStroke:'1.2px #000'}}>MY</span> <b>PORTFOLIO*</b> <span className=" text-transparent" style={{WebkitTextStroke:'1.2px #000'}}><i>WEBSITE.</i></span>
             </h1>
          </div>

          <div className='pl-23 pt-101.5 z-30' style={{fontFamily: 'Urbanist, sans-serif'}}>
             <h3 className='text-[1rem] text-[#4C4C4C] leading-[1.6rem] mb-4'>HI MY NAME IS SAI NIKHIL, AND I AM ON A JOURNEY <br /> TO BECOME A JAVA FULL STACK DEVELOPER.<br /> THIS WEBSITE IS MADE USING REACT.JS</h3>
             <h3 className='text-[1.2rem] font-bold leading-[1.6rem] mt-[-1rem] ml-50'>...SCROLL TO KNOW ABOUT ME</h3>
          </div>
      </div>  
      <div ref={page2Ref} className='h-screen w-screen bg-[#f1f1f1] flex items-center justify-center relative '>
         <div className='pl-23 pt-101.5 z-10' style={{fontFamily: 'Urbanist, sans-serif'}}>
             <h3 className='text-[4rem] font-bold font-[500] leading-[1.6rem] ml-[50rem] mt-[-25rem]'>SKILLS</h3>
             <h3 className='text-[1.2rem] font-bold leading-[1.6rem] mt-6 ml-200'>HERE ARE THE PROGRAMMING LANGUAGES, FRAMEWORKS, <br />LIBRARIES, TOOLS, AND METHODOLOGIES <br />I'M FAMILIAR WITH:</h3>
             
             <div className='mt-10 ml-200'>
               {/* First row */}
               <div className='flex space-x-2 mb-4'>
                 <div className='h-[60px] w-[60px] hover:scale-110 transition-transform duration-200 tooltip' data-tooltip="HTML-5"><img src={html} alt="html" /></div>
                 <div className='h-[60px] w-[60px] hover:scale-110 transition-transform duration-200 tooltip' data-tooltip="CSS-3"><img src={css} alt="css" /></div>
                 <div className='h-[60px] w-[60px] hover:scale-110 transition-transform duration-200 tooltip' data-tooltip="JavaScript"><img src={js} alt="javascript" /></div>
                 <div className='h-[60px] w-[60px] hover:scale-110 transition-transform duration-200 tooltip' data-tooltip="React.js"><img src={reactt} alt="react" /></div>
                 <div className='h-[60px] w-[60px] hover:scale-110 transition-transform duration-200 tooltip' data-tooltip="Java"><img src={java} alt="java" /></div>
                 <div className='h-[60px] w-[60px] hover:scale-110 transition-transform duration-200 tooltip' data-tooltip="Database"><img src={database} alt="database" /></div>
                 <div className='h-[60px] w-[60px] hover:scale-110 transition-transform duration-200 tooltip' data-tooltip="Git"><img src={git} alt="git" /></div>
                 <div className='h-[60px] w-[60px] hover:scale-110 transition-transform duration-200 tooltip' data-tooltip="GitHub"><img src={gitHub} alt="github" /></div> 
               </div>
               
               {/* Second row */}
               <div className='flex space-x-3 mt-14'>
                 <div className='h-[60px] w-[60px] hover:scale-110 transition-transform duration-200 tooltip' data-tooltip="Bootstrap"><img src={bootstrap} alt="bootstrap" /></div>
                 <div className='h-[60px] w-[60px] hover:scale-110 transition-transform duration-200 tooltip' data-tooltip="Tailwind CSS"><img src={tailwind} alt="tailwind" /></div>
                 <div className='h-[60px] w-[60px] hover:scale-110 transition-transform duration-200 tooltip' data-tooltip="Vercel"><img src={vercel} alt="vercel" /></div>
                 <div className='h-[60px] w-[60px] hover:scale-110 transition-transform duration-200 tooltip' data-tooltip="Azure"><img src={azure} alt="azure" /></div>
                 <div className='h-[60px] w-[60px] hover:scale-110 transition-transform duration-200 tooltip' data-tooltip="Power BI"><img src={powerbi} alt="powerbi" /></div>
                 <div className='h-[60px] w-[60px] hover:scale-110 transition-transform duration-200 tooltip' data-tooltip="npm"><img src={npm} alt="npm" /></div>
                 <div className='h-[60px] w-[60px] hover:scale-110 transition-transform duration-200 tooltip' data-tooltip="Agile_methodology"><img src={agile_methodology} alt="agile methodology" /></div>
               </div>
             </div>
          </div>
      </div>
      <div ref={page3Ref} className='h-screen w-screen bg-[#f1f1f1] flex items-center justify-center relative'>
        <div className='ml-[rem] pt-101.5 z-10' style={{fontFamily: 'Urbanist, sans-serif'}}>
             <h3 className='text-[4rem] font-bold font-[500] leading-[1.6rem] mt-[-32rem]'>EXPERIENCE</h3>
             <h3 className='text-[1.2rem] font-bold leading-[1.6rem] mt-8'>EMBRIZON TECHNOLOGIES :</h3>
             <h3 className='text-[1.2rem] font-bold leading-[1.6rem] '>MICROSOFT AZURE CLOUD COMPUTING</h3>
             <h3 className='text-[1.2rem] font-bold leading-[1.6rem]'>Internship</h3>
             <h3 className='text-[1.2rem] font-bold ml-60 mt-[-1.5rem]'>Jun 2024 - Aug 2024</h3>
             <h3 className='text-[1rem] leading-[1.6rem] text-[#4C4C4C] mt-3' >- Deployed and managed web applications on Azure Virtual Machines, <br />
                                                   configured secure data storage using Blob Storage, hosted static <br />
                                                   webpage, and generated database reports with sample using PowerBi.</h3>       
             <a className='text-blue-500 underline hover:text-blue-700' href="https://docs.google.com/presentation/d/1W6Iwzcra_Or0xBX45NFRTnjymXnsSpSt/edit?usp=drivesdk&ouid=102855801509391321027&rtpof=true&sd=true">View Project presentation</a>                               
        </div>  

        <div className='ml-[22rem] z-10' style={{fontFamily: 'Urbanist, sans-serif'}}>
             <h3 className='text-[1.2rem] font-bold font-[500] leading-[1.6rem]'>EDUNET FOUNDATION :</h3>
             <h3 className='text-[1.2rem] font-bold font-[500] leading-[1.6rem]'>CLOUD COMPUTING AND AI</h3>
              <h3 className='text-[1.2rem] font-bold font-[500] leading-[1.6rem]'>Internship</h3>
              <h3 className='text-[1.2rem] font-bold ml-50 mt-[-1.5rem]'>Jun 2024 - Jul 2024</h3>
             <h3 className='text-[1rem] text-[#4C4C4C] leading-[1.6rem] mt-4'>- Enhanced my skills in AI and Cloud during my 4-week internship with <br />
                                                    Edunet Foundation in partnership with AICTE using Skills Build & <br /> IBM Cloud Platform.</h3> 
             <h3 className='text-[1rem] text-[#4C4C4C] leading-[1.6rem] mt-4'>- Identified a key student pain point "finding affordable accommodation" <br />
                                                                          and developed a user-centric chatbot to solve it. This project demonstrates <br />
                                                                          my ability to understand a target audience's needs and build a <br />
                                                                          technology-based solution. <b>PROJECT LINK:-</b> <a href="https://web-chat.global.assistant.watson.appdomain.cloud/preview.html?backgroundImageURL=https%3A%2F%2Fau-syd.assistant.watson.cloud.ibm.com%2Fpublic%2Fimages%2Fupx-42127577-0d33-416c-b256-bb7904d815b5%3A%3A3fbbab37-cda6-41a6-9ac4-28f4d5432535&integrationID=2925c6a6-96aa-45b5-abbc-9bfa809ae482&region=au-syd&serviceInstanceID=42127577-0d33-416c-b256-bb7904d815b5" target="_blank" rel="noopener noreferrer" className='text-blue-500 underline hover:text-blue-700'>StayFinder Chatbot</a>. Deployed  <br />
                                                                          the chatbot on whatsapp using Twilio!</h3>
        </div>  
      </div>

      <div ref={page4Ref} className='h-screen w-screen pt-20 bg-[#f1f1f1] flex items-center justify-center relative'>
       <div className='ml-[1rem] pt-101.5 z-10' style={{fontFamily: 'Urbanist, sans-serif'}}>
             <h3 className='text-[4rem] font-bold font-[500] leading-[1.6rem] mt-[-32rem]'>EDUCATION</h3>
             <h3 className='text-[1.2rem] font-bold leading-[1.6rem] mt-8'>BACHELOR OF TECHNOLOGY: </h3>
             <h3 className='text-[1.2rem] font-bold ml-68 mt-[-1.7rem]'> 2022 – 2025</h3>
             <h3 className='text-[1.2rem] text-[#4C4C4C] font-bold leading-[1.6rem] '>JOGINPALLY B. R. ENGINEERING COLLEGE</h3>
             <h3 className='text-[1rem] font-bold leading-[1.6rem]'>ELECTRONICS AND COMMUNICATION ENGINEERING</h3>
       </div>  

        <div className='z-10 mt-[-13rem] ml-[-24rem]' style={{fontFamily: 'Urbanist, sans-serif'}}>
             <h3 className='text-[1.2rem] font-bold leading-[1.6rem]'>DIPLOMA:</h3>
             <h3 className='text-[1.2rem] font-bold ml-25 mt-[-1.7rem]'>2019 - 2022</h3>
             <h3 className='text-[1.2rem] text-[#4C4C4C] font-bold leading-[1.6rem] '>MAHAVEER INSTITUTION OF SCIENCE AND TECHNOLOGY</h3>
             <h3 className='text-[1rem] font-bold leading-[1.6rem]'>ELECTRONICS AND COMMUNICATION ENGINEERING</h3>
       </div>  

        <div className='z-10 mt-[-5rem] ml-[25rem]' style={{fontFamily: 'Urbanist, sans-serif'}}>
             <h3 className='text-[1.2rem] font-bold mt-40'>EXTRA-CURRICULAR ACTIVITIES :</h3>
             <h3 className='text-[1rem] font-bold leading-[1.6rem]'>NCC “C” Certificate Holder</h3>
             <h3 className='text-[1rem] text-[#4C4C4C] leading-[1.6rem] mt-2'>Vigorously trained in discipline, teamwork, and leadership. <br />
                                                                              Actively participated in drills and public events, developing <br />
                                                                              strong public speaking and coordination skills.</h3>
        </div>
      </div>

      <div ref={page5Ref} className='h-screen w-screen pt-20 bg-[#f1f1f1] flex items-center justify-center relative'>
          <h1 className='text-[4rem] font-bold h-[6rem] w-[30rem] border-black ml-[2rem] mt-[-35rem] font-[500] leading-[1.6rem]'>PROJECTS</h1>
        <div className='flex space-x-10  h-[50vh] w-[70vw] ml-[-20rem] mt-21 '>
            <a href="https://ray-romano-contracting-clone.vercel.app/" target="_blank" rel="noopener noreferrer" className='h-[250px] mt-[-6rem] w-[350px] hover:scale-110 transition-transform duration-200 tooltip' data-tooltip="Ray Romano Clone"><img className="rounded-md" src={ray} alt="ray romano" /></a>
            <a href="https://netflix-clone-gamma-black.vercel.app/" target="_blank" rel="noopener noreferrer" className='h-[250px] mt-[5rem] ml-[-9rem] w-[350px] hover:scale-110 transition-transform duration-200 tooltip' data-tooltip="Netflix Clone"><img className="rounded-md" src={netflix} alt="netflix clone" /></a>
            <a href="https://mercedes-benz-clone.vercel.app/" target="_blank" rel="noopener noreferrer" className=' mt-[37vh] ml-[-40vw] h-[250px] w-[350px] hover:scale-110 transition-transform duration-200 tooltip' data-tooltip="Mercedes-Benz Clone"><img className="rounded-md" src={mercedes} alt="mercedes benz clone" /></a>
          </div>
          <div className='flex flex-wrap ml-[2rem] mt-20 '>
            <a href="https://feane-clone-jynhh8of4-sai-nikhils-projects-adb845a3.vercel.app/" target="_blank" rel="noopener noreferrer" className='ml-[26vw] rounded-lg h-[160px] w-[350px] hover:scale-110 transition-transform duration-200 tooltip' data-tooltip="Feane Clone"><img className="rounded-md" src={feane} alt="feane ecommerce website" /></a>
            <a href="https://crud-operations-green.vercel.app/" target="_blank" rel="noopener noreferrer" className=' mt-[-50vh] ml-[40vw] h-[160px] w-[350px] hover:scale-110 transition-transform duration-200 tooltip' data-tooltip="Bootcamp Website"><img className="rounded-md" src={bootcamp} alt="bootcamp website" /></a>
            <a href="https://routingclone-7nuz20xq4-sai-nikhils-projects-adb845a3.vercel.app/" target="_blank" rel="noopener noreferrer" className='mt-[6vh] ml-[37vw] h-[160px] w-[350px] hover:scale-110 transition-transform duration-200 tooltip' data-tooltip="Yay! Koffee Clone (Routing)"><img className="rounded-md" src={koffee} alt="koffee clone" /></a>
          </div>
          
          {/* More Projects Button - Positioned clearly visible */}
          <div className='absolute bottom-16 left-1/2 transform -translate-x-[-60%]'>
            <a href="https://github.com/SaiNikhil862" target="_blank" rel="noopener noreferrer" className='hover:scale-110 transition-transform duration-200'>
              <button className='h-12 w-40 bg-black border-2 text-white font-semibold rounded-[50px] hover:bg-gray-800 transition-colors'>MORE PROJECTS</button>
            </a>
          </div>
      </div>

     <div ref={page7Ref} className='h-screen w-screen bg-[#f1f1f1] flex items-center justify-center relative'> 
      <h1 className='text-[4rem] font-bold ml-[-75rem] font-[500] leading-[1.6rem]'>REACH OUT TO ME!</h1>
      <div className='flex space-x-12 ml-[-35rem] pt-[10rem] mb-4'>
                 <a href="https://github.com/SaiNikhil862" target="_blank" rel="noopener noreferrer" className='h-[60px] w-[60px] hover:scale-110 transition-transform duration-200 tooltip' data-tooltip="Github"><img src={gitHub} alt="github" /></a>
                 <a href="https://www.linkedin.com/in/sai-nikhil-goud" target="_blank" rel="noopener noreferrer" className='h-[60px] w-[60px] hover:scale-110 transition-transform duration-200 tooltip' data-tooltip="LinkedIn"><img src={linkedIn} alt="linkedin" /></a>
                 <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sainikhilgoud103@gmail.com" target="_blank" rel="noopener noreferrer" className='h-[60px] w-[60px] hover:scale-110 transition-transform duration-200 tooltip' data-tooltip="Gmail"><img src={gmail} alt="Email me" /></a>
      </div>
      </div>

  </div> 
  </>
)
}

export default Web;