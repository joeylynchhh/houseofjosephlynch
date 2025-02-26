import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/DeliveryReturns.module.css';
import { Metadata } from "next"

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

export const metadata: Metadata = {
  title: "Customer Service",
  description: "Customer service and support information",
}

export default function CustomerService() {
  return (
    <div className="content-container">
      <div className="max-w-4xl mx-auto py-12">
        <h1 className="text-2xl-semi mb-8">Customer Service</h1>
        {/* Add your customer service content here */}
      </div>
    </div>
  )
}