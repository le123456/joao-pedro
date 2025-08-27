console.log("main.js loaded");

import { consultantData } from './data.js';

// Smooth scrolling for anchor links on the same page
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      // Adjust for fixed header height, considering responsive changes
      const header = document.querySelector('.header');
      const headerOffset = header ? header.offsetHeight : 70;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  });
});

// Function to update text content based on data
function updateTextContent(selector, text) {
  const elements = document.querySelectorAll(selector);
  elements.forEach(element => {
    element.textContent = text;
  });
}

// Function to update innerHTML content based on data (for cases with strong tags)
function updateInnerHTMLContent(selector, html) {
  const elements = document.querySelectorAll(selector);
  elements.forEach(element => {
    element.innerHTML = html;
  });
}

// Populate consultant data and set title on page load
document.addEventListener('DOMContentLoaded', () => {
  console.log("DOMContentLoaded fired, updating content...");

  // Update logo and footer info
  updateTextContent('.logo', `${consultantData.name} | Synergy`);
  updateTextContent('.logo-footer h3', `${consultantData.name} | Synergy`);
  updateTextContent('#footer-phone', `Telefone: ${consultantData.phone}`);
  updateTextContent('#footer-email', `E-mail: ${consultantData.email}`);
  updateTextContent('#footer-address', `Endereço: ${consultantData.address}`);
  updateTextContent('#footer-cep', `CEP: ${consultantData.cep}`);
  updateTextContent('#footer-cnpj', `CNPJ: ${consultantData.cnpj}`);

  // Set document title dynamically
  const pageTitleSuffix = document.body.getAttribute('data-page-title');
  if (pageTitleSuffix) {
    document.title = `${pageTitleSuffix} - ${consultantData.name} | Synergy`;
  } else {
    document.title = `${consultantData.name} | Synergy - Consultor Parceiro Santander`;
  }

  console.log("Consultant data updated:", consultantData);
});
