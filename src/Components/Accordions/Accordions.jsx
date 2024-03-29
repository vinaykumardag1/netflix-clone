import React, { useState } from 'react'
import './Accordions.css'
import {Container} from '@mui/material'
import {Accordion} from '@mui/material'
import {AccordionSummary} from '@mui/material'
import {AccordionDetails} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

const Accordions = () => {
  return (
    <>
    <Container>
      <p className='faq'>Frequently Asked Questions</p>
     <Accordion className='Accordion-box'>
        <AccordionSummary
          expandIcon={<AddIcon fontSize='large' />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          What is Netflix
        </AccordionSummary>
        <AccordionDetails>
        <p className='para'>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.</p>
           <p className='para'>You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
        </AccordionDetails>
      </Accordion>
      {/*  */}
      <Accordion className='Accordion-box'>
        <AccordionSummary
          expandIcon={<AddIcon fontSize='large' />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
        <p>How much does Netflix Cost</p> 
        </AccordionSummary>
         <AccordionDetails>
         <p className='para'>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹649 to ₹149 a month. No extra costs, no contracts.</p>
        </AccordionDetails>
      </Accordion>
      
      <Accordion className='Accordion-box'>
        <AccordionSummary
          expandIcon={<AddIcon fontSize='large'  />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
           <p>Where Can I Watch</p>
        </AccordionSummary>
        <AccordionDetails>
        <p className='para'>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</p>
          <p className='para'>You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
        </AccordionDetails>
      </Accordion>

      <Accordion className='Accordion-box'>
        <AccordionSummary
          expandIcon={<AddIcon fontSize='large'  />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
         <p>How do I Cancel</p>
        </AccordionSummary>
        <AccordionDetails>
        <p className='para'>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime. </p>
        </AccordionDetails>
      </Accordion>

      <Accordion className='Accordion-box'>
        <AccordionSummary
          expandIcon={<AddIcon fontSize='large'  />}
          aria-controls="panel1-content"
          id="panel1-header"
        > 
        <p>What can I watch on Netflix</p>

        </AccordionSummary>
        <AccordionDetails>
          <p className='para'>
           Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion className='Accordion-box'>
        <AccordionSummary
          expandIcon={<AddIcon fontSize='large' />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
           <p>Is Netflix good for kids</p>
        </AccordionSummary>
        <AccordionDetails>
        <p className='para'>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.</p>
          <p className='para'>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>
        </AccordionDetails>
      </Accordion>

    </Container>
    </>
  )
}

export default Accordions
