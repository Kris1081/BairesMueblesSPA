import { useState } from 'react';

const faqs = [
  {
    question: '¿Cuál es el tiempo de entrega de los muebles?',
    answer:
      'El tiempo de entrega varía según el producto y la personalización. Para muebles estándar, el tiempo promedio es de 2-3 semanas. Los muebles personalizados pueden tardar entre 4-6 semanas.',
  },
  {
    question: '¿Ofrecen garantía en sus productos?',
    answer:
      'Sí, todos nuestros muebles tienen una garantía de 2 años contra defectos de fabricación. Para tapicería, ofrecemos 1 año de garantía.',
  },
  {
    question: '¿Puedo personalizar los materiales de mi mueble?',
    answer:
      'Absolutamente. Trabajamos con una amplia variedad de maderas, telas y acabados. Nuestros diseñadores pueden ayudarte a seleccionar los materiales perfectos para tu pieza.',
  },
  {
    question: '¿Realizan envíos a otras ciudades?',
    answer:
      'Sí, realizamos envíos a nivel nacional. Los costos y tiempos varían según la ubicación. Contáctanos para un cotización exacta.',
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="faq mt-0">
      <h2>Preguntas Frecuentes: </h2>
      {faqs.map((faq, index) => (
        <div className="faq-item" key={index}>
          <button
            className="faq-question"
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
          </button>
          {activeIndex === index && (
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}