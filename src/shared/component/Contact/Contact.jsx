import React from 'react'
import '../Contact/Contact.css'




export default Contact



function Contact() {
  return (
    <>
    
    
        
  <div class="container" id='contact-top-id-to-call'>
    <div class="content">
      <div class="left-side">
        <div class="address details">
          <i class="fas fa-map-marker-alt"></i>
          <div class="topic">Address</div>
          <div class="text-one">6890 Blvd, The Bronx, NY 1058</div>
          <div class="text-two">New York, USA</div>
        </div>
        <div class="phone details">
          <i class="fas fa-phone-alt"></i>
          <div class="topic">Phone</div>
          <div class="text-one">+(514) 312-5678</div>
          <div class="text-two">+1(514) 312-6688</div>
        </div>
        <div class="email details">
          <i class="fas fa-envelope"></i>
          <div class="topic">Email</div>
          <div class="text-one">hello@eduon.com</div>
          <div class="text-two">public@eduon.com</div>
        </div>
      </div>
      <div class="right-side">
        <div class="topic-text">Send us a message</div>
        <p>If you have any types of quries related to our tutorial, you can send us message from here. It's our pleasure
          to help you.</p>



          {/* <form action="#"> 
        <div class="input-box">
          <input type="text" placeholder="Enter your name">
        </div>
        <div class="input-box">
          <input type="text" placeholder="Enter your email">
        </div>
        <div class="input-box message-box">
          
        </div>
        <div class="button">
          <input type="button" value="Send Now" >  */}




        <form action="https://api.web3forms.com/submit" method="POST" >

          <input type="hidden" name="access_key" value="227ce705-483d-42e4-afeb-540686c7645f"/>


          <div class="input-box">
            <input type="text" name="Name" placeholder="Enter your name" required/>
          </div>
          <div class="input-box">
            <input type="email" name="email" placeholder="Enter your email" required/>
          </div>
          <div class="input-box message-box">
            <input type="textarea" name="message" placeholder="Send Message" required/>
          </div>
          <div class="button">
            <input type="submit" value="Send Now"/>



          </div>
        </form>
      </div>
    </div>
  </div>

     
    
    
    
    
    </>
  )
}
