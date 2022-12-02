import type { NextPage } from 'next'

export const GallerySection: NextPage = () => {
  return (
    <section className="gallery" id="gallery">
      <div className="heading">
        <img src="facility_main.jpg" alt="" />
        <h3>our gallery</h3>
      </div>

      <div className="box-container">
        <img src="gallery_1.jpg" alt="" />
        <img src="gallery_7.jpg" alt="" />
        <img src="gallery_3.jpg" alt="" />
        <img src="gallery_4.jpg" alt="" />
        <img src="gallery_5.jpg" alt="" />
        <img src="gallery_6.jpg" alt="" />
      </div>
    </section>
  )
}
