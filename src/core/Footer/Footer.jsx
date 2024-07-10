


export default function Footer () {
        const scrollToTop = () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              };
            
    return(
        <>
         <div class="frame9">



<div class="frame09">


        <div class="disclaimercontent">
                <h2>Find Us</h2>
                <div><img src="images/icons8-location-20.png"/>
                        <p>6890 Blvd, The Bronx, NY 1058<br/>
                                New York, USA</p>
                </div>
                <div><img src="images/icons8-mail-20.png"/>
                        <p>hello@eduon.com<br/>
                                public@eduon.com</p>
                </div>
                <div><img src="images/icons8-contact-20.png"/>
                        <p>+(514) 312-5678<br/>
                                +1(514) 312-6688</p>
                </div>

        </div>
        <div class="disclaimercontent1">
                <h2>Useful Links</h2>
                <p>All Courses</p>
                <p>About us</p>
                <p>Help (FAQ)</p>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
        </div>
        <div class="disclaimercontent1">
                <h2>Top Online Courses</h2>
                <p>AI for everyone</p>
                <p>Networks and deep learning</p>
                <p>Learning with python</p>
                <p>Financial markets</p>
                <p>Speak English Professionally</p>
        </div>
        <div class="disclaimercontent1">
                <h2>Popular Subjects</h2>
                <p>Data science</p>
                <p>Computer science</p>
                <p>Business and Management</p>
                <p>Business and Management</p>
                <p>Nature & Environment</p>
        </div>

</div>




<div class="dividerframe9"></div>


<div class="copyrights">
        <img src="images/icons8-copyrights-24.png"/>
        <p> Eduon is Proudly Owned by <span>HiBootstrap</span></p>
</div>




<a onClick={scrollToTop}>
        <div id="topup-button">
                <img src="images/icons8-chevron-24.png" alt="scroll up button"/>
        </div>
</a>





</div>
        </>
    )
}

