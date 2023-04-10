import type { NextPage } from 'next'

const GoogleMap: NextPage = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.866847174794!2d135.78691861517314!3d34.50625980111479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600133b7a7fbba9d%3A0x2d0232757deb8f94!2zI-ODh-OCo-ODvOODl-OCu-ODqeODlOODvCAj44Ko44K544OG44K144Ot44Oz44Gh44GC44G144KL!5e0!3m2!1sja!2sjp!4v1681134906115!5m2!1sja!2sjp"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}

export default GoogleMap
