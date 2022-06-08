import React from 'react'
import { Link } from "react-router-dom";


function Products() {
  return (
  <div>
    <div> 
    <h3><img src='./images/collection/black-and-white.webp' alt=''/>Black and White Marbled Moon Phase Arches</h3>
      <h3><img src='./images/collection/bouqet1_1080x.webp' alt=''/>Flower Bouquet Dangles</h3>
      <h3><img src='./images/collection/checkered.webp' alt=''/>Checkered Statement Studs, Orange and Silver</h3>
      <h3><img src='./images/collection/pink-abstract-circles.webp' alt=''/>Pink Abstract Circles</h3>
      <h3><img src='./images/collection/tan-arch-daiseys.webp' alt=''/>Tan Arches w/ Daisies</h3>
      <h3><img src='./images/collection/tulip-dangle.webp' alt=''/>Tulip Dangles</h3>
      <h3><img src='./images/collection/tandaisydangle1_1080x.webp' alt=''/>Tan Circle Dangle w/ Single Daisy</h3>
    </div>
     <Link className='Policy' to="/productsId">
        <div>Show Page</div>
      </Link>
    <p className="Policy">Collection's Page
    <h3>POLICIES:</h3>
    <h2>* US Shipping Only</h2>
    <h2>* Refund and Return Policy</h2>
    Earring returns will be handled on a case by case basis.
Please email blushandjosie@gmail.com for any order inquiries or refund/return requests for your earrings!
    <h2>* Shipping policy</h2>
    Please allow up to 4-7 business days for your item to be shipped. 

    <p>Business days are Monday-Friday excluding federal holidays.</p>

    Once your product has left my possession and entered the possession of the US Postal Service or other shipping providers, I am no longer responsible for the item. You should contact USPS at +1 (800) 275-8777 for any questions or updates concerning your package. You will need the tracking number provided by me, via e-mail when you purchased your item. If you do not enter an e-mail when purchasing your items, I have no way to send you this information. If you do not enter an e-mail and you need your tracking number, you can e-mail us at blushandjosie@gmail.com and we will see if we can fix your issue. There are no guarantees that we can give you a tracking number once it has left our production facility.
    </p>
  </div>
  )
}

export default Products