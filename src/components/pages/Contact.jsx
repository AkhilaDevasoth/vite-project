import React from 'react'

const channels = [
  { label: 'Call', detail: '+1 234 567 890', hint: '09:00 - 20:00 EST' },
  { label: 'Visit', detail: '118 Mercer Street, SoHo', hint: 'By appointment' },
  { label: 'Mail', detail: 'concierge@luxeloom.com', hint: 'Replies in 2h' },
]

function Contact() {
  return (
    <section className="page-section contact-grid">
      <article className="inset-card">
        <p>Bespoke fittings & bridal parties</p>
        <h2>Plan your atelier visit.</h2>
        <p>
          Meet our stylists for personal fittings, fabric selection, and
          after-care planning. Complimentary champagne service included.
        </p>
        <div className="contact-actions">
          <button className="contact-btn" type="button">
            Schedule
          </button>
          <button className="contact-btn" type="button">
            Virtual consult
          </button>
        </div>
      </article>

      <article className="contact-card">
        <h3>Concierge</h3>
        <p>Reach out for sizing, alterations, or international delivery.</p>
        <div className="contact-details">
          {channels.map((channel) => (
            <div key={channel.label}>
              <strong>{channel.label}</strong>
              <p>{channel.detail}</p>
              <small>{channel.hint}</small>
            </div>
          ))}
        </div>
        <button className="btn-primary" type="button">
          Start chat
        </button>
      </article>
    </section>
  )
}

export default Contact