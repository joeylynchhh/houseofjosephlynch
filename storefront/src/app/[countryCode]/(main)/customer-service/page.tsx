import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/DeliveryReturns.module.css';

const DropdownItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className={styles.dropdownItem}>
      <div 
        className={styles.dropdownHeader} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={styles.dropdownTitle}>{title}</span>
        <span 
          className={styles.dropdownIcon}
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          ▼
        </span>
      </div>
      <div 
        className={`${styles.dropdownContent} ${isOpen ? styles.active : ''}`}
      >
        {children}
      </div>
    </div>
  );
};

export default function DeliveryReturns() {
  return (
    <div>
      <Head>
        <title>Delivery & Returns | MANIÈRE DE VOIR</title>
        <meta name="description" content="Shipping and return information" />
      </Head>

      <main className={styles.container}>
        {/* Delivery Section */}
        <section className={styles.section}>
          <h1>Delivery</h1>
          
          <DropdownItem title="Deliver To: UK">
            <p>Standard Delivery: £4.95 (3-5 working days)</p>
            <p>Express Delivery: £7.95 (1-2 working days when ordered before 2pm)</p>
            <p>Free standard delivery on all orders over £150.</p>
          </DropdownItem>
          
          <DropdownItem title="Deliver To: Monaco">
            <p>Standard Delivery: €15.00 (5-7 working days)</p>
            <p>Express Delivery: €25.00 (2-3 working days)</p>
            <p>All import duties and taxes are included in the price.</p>
          </DropdownItem>
          
          <DropdownItem title="Deliver To: United Arab Emirates & Saudi Arabia">
            <p>Standard Delivery: $20.00 (7-10 working days)</p>
            <p>Express Delivery: $35.00 (3-5 working days)</p>
            <p>Additional customs charges may apply.</p>
          </DropdownItem>
          
          <DropdownItem title="Deliver To: Switzerland">
            <p>Standard Delivery: CHF 15.00 (5-7 working days)</p>
            <p>Express Delivery: CHF 25.00 (2-3 working days)</p>
            <p>Import duties and taxes are paid at checkout.</p>
          </DropdownItem>
          
          <DropdownItem title="Deliver To: Norway">
            <p>Standard Delivery: NOK 150 (5-7 working days)</p>
            <p>Express Delivery: NOK 250 (2-3 working days)</p>
            <p>Import duties and taxes are paid at checkout.</p>
          </DropdownItem>
          
          <DropdownItem title="Deliver To: Guernsey & Jersey">
            <p>Standard Delivery: £8.95 (3-5 working days)</p>
            <p>No express delivery available for these locations.</p>
          </DropdownItem>
          
          <DropdownItem title="Deliver To: Rest of the World">
            <p>Standard Delivery: From $25.00 (7-14 working days)</p>
            <p>Express Delivery: From $40.00 (3-7 working days)</p>
            <p>Delivery times and charges may vary depending on the destination.</p>
            <p>Import duties and taxes may be charged when your order reaches its destination.</p>
          </DropdownItem>
          
          <DropdownItem title="Deliver To: US/EU/CA/AU">
            <p>US Standard Delivery: $15.00 (5-7 working days)</p>
            <p>US Express Delivery: $25.00 (2-3 working days)</p>
            <p>EU Standard Delivery: €10.00 (3-5 working days)</p>
            <p>EU Express Delivery: €20.00 (1-2 working days)</p>
            <p>CA Standard Delivery: CAD 20.00 (5-7 working days)</p>
            <p>AU Standard Delivery: AUD 20.00 (7-10 working days)</p>
          </DropdownItem>
          
          <DropdownItem title="Order Tracking">
            <p>You will receive a tracking number via email once your order has been dispatched.</p>
            <p>To track your order, please enter your order number and email address in our order tracking section.</p>
          </DropdownItem>
        </section>
        
        {/* Returns Section */}
        <section className={styles.section}>
          <h1>Returns</h1>
          
          <DropdownItem title="Returns Policy">
            <p>We offer a 30-day return policy for all unworn items in original condition with tags attached.</p>
            <p>Sale items can only be returned within 14 days of receipt.</p>
            <p>Please note that certain items, such as personalized products, are not eligible for return unless they are faulty.</p>
          </DropdownItem>
          
          <DropdownItem title="Free In-store Returns">
            <p>You can return your item to any of our stores for free. Simply bring your item, along with your order confirmation or receipt.</p>
            <p>Our store staff will be happy to assist you with your return.</p>
            <p>Find your nearest store using our store locator.</p>
          </DropdownItem>
          
          <DropdownItem title="UK £2.99 Fixed Fee Postal Returns">
            <p>To return your item by post, please follow these steps:</p>
            <p>1. Log into your account and select the order you wish to return.</p>
            <p>2. Select the items you wish to return and the reason for return.</p>
            <p>3. Print your return label.</p>
            <p>4. Package your items securely with all original tags attached.</p>
            <p>5. Attach the return label to your package.</p>
            <p>6. Drop off your package at any Post Office.</p>
            <p>A fixed fee of £2.99 will be deducted from your refund amount.</p>
          </DropdownItem>
          
          <DropdownItem title="International Returns">
            <p>For international returns, please follow these steps:</p>
            <p>1. Contact our customer service team at returns@example.com to notify us of your return.</p>
            <p>2. Include your order number and the items you wish to return in your email.</p>
            <p>3. Our team will provide you with a return authorization and instructions.</p>
            <p>4. Package your items securely with all original tags attached.</p>
            <p>5. Return your package using a tracked delivery service.</p>
            <p>International returns are at the customer's expense unless the item is faulty.</p>
            <p>Refunds will be processed within 14 days of receiving your return.</p>
          </DropdownItem>
        </section>
      </main>

      {/* Footer Benefits Section */}
      <div className={styles.footerBenefits}>
        <div className={styles.benefitItem}>
          <p>Free Delivery Over £150*</p>
        </div>
        <div className={styles.benefitItem}>
          <p>UK Next Day Delivery</p>
        </div>
        <div className={styles.benefitItem}>
          <p>Free In-Store Returns</p>
        </div>
        <div className={styles.benefitItem}>
          <p>£2.99 Fixed Fee<br />UK Postal Returns</p>
        </div>
      </div>
    </div>
  );
}